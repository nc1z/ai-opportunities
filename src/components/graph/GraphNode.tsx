import { useState, useCallback } from 'react'
import { Handle, Position, useReactFlow, type Node } from '@xyflow/react'
import { childrenOf } from '@/data'
import type { TaxonomyNode } from '@/data'
import { layoutFan, GRAPH_CENTER } from './graphUtils'

export type GraphNodeData = {
  node: TaxonomyNode
  isExpanded: boolean
  hasChildren: boolean
}

// Background fill per depth (darkest at root, fades toward leaves)
const DEPTH_BG: Record<number, string> = {
  0: '#18181b', // zinc-900
  1: '#3f3f46', // zinc-700
  2: '#52525b', // zinc-600
  3: '#71717a', // zinc-500
  4: '#a1a1aa', // zinc-400
}

const DEPTH_STYLES = [
  { fontSize: 12, fontWeight: 600, paddingX: 16, paddingY: 9,  borderWidth: 2   }, // layer
  { fontSize: 11, fontWeight: 500, paddingX: 13, paddingY: 7,  borderWidth: 2   }, // group
  { fontSize: 11, fontWeight: 500, paddingX: 11, paddingY: 6,  borderWidth: 1.5 }, // domain
  { fontSize: 10, fontWeight: 400, paddingX: 10, paddingY: 5,  borderWidth: 1   }, // niche
  { fontSize: 10, fontWeight: 400, paddingX: 9,  paddingY: 4,  borderWidth: 1   }, // focus
]

export function GraphNodeComponent({ data }: { data: GraphNodeData }) {
  const [hovered, setHovered] = useState(false)
  const { node, isExpanded, hasChildren } = data
  const { getNode, setNodes, setEdges } = useReactFlow()

  const depth = Math.min(node.depth, 4)
  const style = DEPTH_STYLES[depth]
  const bgColor = DEPTH_BG[depth] ?? '#a1a1aa'

  const handleExpandToggle = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      const nodeId = node.id
      const children = childrenOf[nodeId] ?? []
      if (children.length === 0) return

      if (isExpanded) {
        // Collapse — remove all visible descendants
        setNodes((prev) => {
          const existingIds = new Set(prev.map((n) => n.id))
          const toRemove = new Set<string>()
          const queue = [...children.map((c) => c.id)]
          while (queue.length > 0) {
            const id = queue.shift()!
            if (existingIds.has(id)) {
              toRemove.add(id)
              ;(childrenOf[id] ?? []).forEach((c) => queue.push(c.id))
            }
          }
          setEdges((prevEdges) =>
            prevEdges.filter((e) => !toRemove.has(e.source) && !toRemove.has(e.target)),
          )
          return prev
            .filter((n) => !toRemove.has(n.id))
            .map((n) =>
              n.id === nodeId ? { ...n, data: { ...n.data, isExpanded: false } } : n,
            )
        })
      } else {
        // Expand — add child nodes in a fan
        const rfNode = getNode(nodeId)
        const parentPos = rfNode?.position ?? { x: GRAPH_CENTER.x, y: GRAPH_CENTER.y }
        const positions = layoutFan(parentPos, node.depth, children.length)

        const newNodes: Node[] = children.map((child, i) => ({
          id: child.id,
          type: 'taxonomyNode',
          position: positions[i],
          data: {
            node: child,
            isExpanded: false,
            hasChildren: (childrenOf[child.id] ?? []).length > 0,
          } satisfies GraphNodeData,
        }))

        setNodes((prev) => [
          ...prev.map((n) =>
            n.id === nodeId ? { ...n, data: { ...n.data, isExpanded: true } } : n,
          ),
          ...newNodes,
        ])
        setEdges((prev) => [
          ...prev,
          ...children.map((child) => ({
            id: `edge-${nodeId}-${child.id}`,
            source: nodeId,
            target: child.id,
            type: 'straight',
            style: { stroke: '#e4e4e7', strokeWidth: 1 },
          })),
        ])
      }
    },
    [node, isExpanded, getNode, setNodes, setEdges],
  )

  return (
    <>
      {/*
        Outer wrapper is inline-flex so the pill and the expand button sit in the
        same hover zone. Moving from pill → button never leaves the element, so
        the button stays visible long enough to click.
      */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          overflow: 'visible',
          position: 'relative',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* ── Node pill ───────────────────────────────────────────────── */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            paddingLeft: style.paddingX,
            paddingRight: style.paddingX,
            paddingTop: style.paddingY,
            paddingBottom: style.paddingY,
            borderRadius: 9999,
            border: 'none',
            backgroundColor: bgColor,
            fontSize: style.fontSize,
            fontWeight: style.fontWeight,
            color: '#ffffff',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            userSelect: 'none',
            boxShadow: node.depth === 0 ? '0 2px 8px rgba(0,0,0,0.25)' : '0 1px 3px rgba(0,0,0,0.15)',
            fontFamily: 'Inter, system-ui, sans-serif',
            maxWidth: 220,
          }}
        >
          {/* Order badge — depth 0 only */}
          {node.depth === 0 && (
            <span
              style={{
                fontSize: 9,
                fontWeight: 600,
                color: 'rgba(255,255,255,0.5)',
                fontFamily: 'JetBrains Mono, Menlo, monospace',
                letterSpacing: '0.04em',
                flexShrink: 0,
              }}
            >
              {String(node.order).padStart(2, '0')}
            </span>
          )}

          <span
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: node.depth === 0 ? 180 : 200,
            }}
          >
            {node.name}
          </span>
        </div>

        {/* ── Expand / collapse button ─────────────────────────────────
            Always rendered (not conditional on hovered) so it stays in
            the DOM while the cursor travels toward it.
            Shown/hidden via opacity + pointer-events.
        ──────────────────────────────────────────────────────────────── */}
        {hasChildren && (
          <button
            onClick={handleExpandToggle}
            title={isExpanded ? 'Collapse' : 'Expand'}
            style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              border: '1.5px solid rgba(255,255,255,0.5)',
              backgroundColor: bgColor,
              color: '#ffffff',
              fontSize: 14,
              fontWeight: 400,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 1px 3px rgba(0,0,0,0.10)',
              flexShrink: 0,
              padding: 0,
              lineHeight: 1,
              // Show/hide without unmounting
              opacity: hovered ? 1 : 0,
              pointerEvents: hovered ? 'auto' : 'none',
              transition: 'opacity 0.12s',
              // Vertically offset the glyph by 1px to optically centre it
              paddingBottom: 1,
            }}
          >
            {isExpanded ? '−' : '+'}
          </button>
        )}
      </div>

      {/* Hidden handles */}
      <Handle
        type="target"
        position={Position.Top}
        style={{ opacity: 0, width: 0, height: 0, minWidth: 0, minHeight: 0, border: 'none' }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ opacity: 0, width: 0, height: 0, minWidth: 0, minHeight: 0, border: 'none' }}
      />
    </>
  )
}

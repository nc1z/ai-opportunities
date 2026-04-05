import { useState, useCallback, memo } from 'react'
import { Handle, Position, useReactFlow, type Node, type Edge } from '@xyflow/react'
import { childrenOf } from '@/data'
import type { TaxonomyNode } from '@/data'
import { layoutFan, GRAPH_CENTER } from './graphUtils'

export type GraphNodeData = {
  node: TaxonomyNode
  isExpanded: boolean
  hasChildren: boolean
  isHighlighted?: boolean
}

// Accent colors for the order badge on the 5 root layer nodes
const ORDER_BADGE_COLOR: Record<number, string> = {
  1: '#f97316', // orange  — Application
  2: '#06b6d4', // cyan    — Agent/Workflow
  3: '#a78bfa', // violet  — Harness/Runtime
  4: '#34d399', // emerald — Developer Tooling
  5: '#fb7185', // rose    — Model Consumption
}

// Same colors keyed by layerId (for highlight glow)
const LAYER_ACCENT: Record<string, string> = {
  'application':       '#f97316',
  'agent-workflow':    '#06b6d4',
  'harness-runtime':   '#a78bfa',
  'developer-tooling': '#34d399',
  'model-consumption': '#fb7185',
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
  { fontSize: 12, fontWeight: 600, paddingX: 16, paddingY: 9  }, // layer
  { fontSize: 11, fontWeight: 500, paddingX: 13, paddingY: 7  }, // group
  { fontSize: 11, fontWeight: 500, paddingX: 11, paddingY: 6  }, // domain
  { fontSize: 10, fontWeight: 400, paddingX: 10, paddingY: 5  }, // niche
  { fontSize: 10, fontWeight: 400, paddingX: 9,  paddingY: 4  }, // focus
]

const HOVER_BTN: React.CSSProperties = {
  width: 20,
  height: 20,
  borderRadius: '50%',
  border: '1.5px solid rgba(255,255,255,0.5)',
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
  transition: 'opacity 0.12s',
}

function GraphNodeComponentInner({ data }: { data: GraphNodeData }) {
  const [hovered, setHovered] = useState(false)
  const [subtreeExpanded, setSubtreeExpanded] = useState(false)
  const { node, isExpanded, hasChildren, isHighlighted } = data
  const { getNode, getNodes, setNodes, setEdges } = useReactFlow()

  const depth = Math.min(node.depth, 4)
  const style = DEPTH_STYLES[depth]
  const bgColor = DEPTH_BG[depth] ?? '#a1a1aa'
  const accentColor = LAYER_ACCENT[node.layerId]

  // ── Expand / collapse one level ─────────────────────────────────────────────
  const handleExpandToggle = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      const nodeId = node.id
      const children = childrenOf[nodeId] ?? []
      if (children.length === 0) return

      if (isExpanded) {
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
            .map((n) => n.id === nodeId ? { ...n, data: { ...n.data, isExpanded: false } } : n)
        })
      } else {
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
          ...prev.map((n) => n.id === nodeId ? { ...n, data: { ...n.data, isExpanded: true } } : n),
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

  // ── Expand all / collapse all descendants (toggle) ───────────────────────────
  const handleExpandAll = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()

      const currentNodes = getNodes()
      const currentIds = new Set(currentNodes.map((n) => n.id))

      // Collect every descendant id from the data tree
      const allDescendantIds = new Set<string>()
      const scanQueue = [node.id]
      while (scanQueue.length > 0) {
        const id = scanQueue.shift()!
        for (const child of childrenOf[id] ?? []) {
          allDescendantIds.add(child.id)
          scanQueue.push(child.id)
        }
      }

      const allPresent = allDescendantIds.size > 0 && [...allDescendantIds].every((id) => currentIds.has(id))

      setSubtreeExpanded(!allPresent)

      if (allPresent) {
        // Collapse — remove all descendants
        const toRemove = new Set<string>()
        const collapseQueue = [...(childrenOf[node.id] ?? []).map((c) => c.id)]
        while (collapseQueue.length > 0) {
          const id = collapseQueue.shift()!
          if (currentIds.has(id)) {
            toRemove.add(id)
            ;(childrenOf[id] ?? []).forEach((c) => collapseQueue.push(c.id))
          }
        }
        setEdges((prevEdges) =>
          prevEdges.filter((e) => !toRemove.has(e.source) && !toRemove.has(e.target)),
        )
        setNodes((prev) =>
          prev
            .filter((n) => !toRemove.has(n.id))
            .map((n) => n.id === node.id ? { ...n, data: { ...n.data, isExpanded: false } } : n),
        )
      } else {
        // Expand — recursively add all missing descendants
        const rfNode = getNode(node.id)
        const rootPos = rfNode?.position ?? { x: GRAPH_CENTER.x, y: GRAPH_CENTER.y }
        const addedIds = new Set(currentIds)
        const newNodes: Node[] = []
        const newEdges: Edge[] = []

        const recurse = (parentId: string, parentPos: { x: number; y: number }, parentDepth: number) => {
          const children = childrenOf[parentId] ?? []
          if (children.length === 0) return
          const positions = layoutFan(parentPos, parentDepth, children.length)
          children.forEach((child, i) => {
            const pos = positions[i]
            if (!addedIds.has(child.id)) {
              addedIds.add(child.id)
              newNodes.push({
                id: child.id,
                type: 'taxonomyNode',
                position: pos,
                data: {
                  node: child,
                  isExpanded: (childrenOf[child.id] ?? []).length > 0,
                  hasChildren: (childrenOf[child.id] ?? []).length > 0,
                } satisfies GraphNodeData,
              })
              newEdges.push({
                id: `edge-${parentId}-${child.id}`,
                source: parentId,
                target: child.id,
                type: 'straight',
                style: { stroke: '#e4e4e7', strokeWidth: 1 },
              })
            }
            recurse(child.id, pos, parentDepth + 1)
          })
        }

        recurse(node.id, rootPos, node.depth)
        setNodes((prev) => [
          ...prev.map((n) => n.id === node.id ? { ...n, data: { ...n.data, isExpanded: true } } : n),
          ...newNodes,
        ])
        setEdges((prev) => [...prev, ...newEdges])
      }
    },
    [node, getNode, getNodes, setNodes, setEdges],
  )

  // ── Highlight node + all visible descendants ─────────────────────────────────
  const handleHighlight = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      const nodeId = node.id
      const color = LAYER_ACCENT[node.layerId]

      setNodes((prev) => {
        const existingIds = new Set(prev.map((n) => n.id))
        const subtreeIds = new Set<string>([nodeId])
        const queue = [nodeId]
        while (queue.length > 0) {
          const id = queue.shift()!
          for (const child of childrenOf[id] ?? []) {
            if (existingIds.has(child.id)) {
              subtreeIds.add(child.id)
              queue.push(child.id)
            }
          }
        }
        const thisNode = prev.find((n) => n.id === nodeId)
        const nextHighlight = !thisNode?.data?.isHighlighted

        setEdges((prevEdges) =>
          prevEdges.map((edge) =>
            subtreeIds.has(edge.source) && subtreeIds.has(edge.target)
              ? {
                  ...edge,
                  style: nextHighlight
                    ? { stroke: color, strokeWidth: 1.5, strokeOpacity: 0.4 }
                    : { stroke: '#e4e4e7', strokeWidth: 1 },
                }
              : edge,
          ),
        )

        return prev.map((n) =>
          subtreeIds.has(n.id)
            ? { ...n, data: { ...n.data, isHighlighted: nextHighlight } }
            : n,
        )
      })
    },
    [node, setNodes, setEdges],
  )

  return (
    <>
      <div
        className="graph-node-enter"
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
            backgroundColor: bgColor,
            fontSize: style.fontSize,
            fontWeight: style.fontWeight,
            color: '#ffffff',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            userSelect: 'none',
            fontFamily: 'Inter, system-ui, sans-serif',
            maxWidth: 220,
            // Glow when highlighted
            outline: isHighlighted && accentColor ? `2px solid ${accentColor}` : '2px solid transparent',
            outlineOffset: 2,
            boxShadow: isHighlighted && accentColor
              ? `0 0 14px ${accentColor}90`
              : node.depth === 0 ? '0 2px 8px rgba(0,0,0,0.25)' : '0 1px 3px rgba(0,0,0,0.15)',
            transition: 'outline 0.15s, box-shadow 0.15s',
          }}
        >
          {/* Order badge — depth 0 only */}
          {node.depth === 0 && (
            <span
              style={{
                fontSize: 9,
                fontWeight: 600,
                color: ORDER_BADGE_COLOR[node.order] ?? 'rgba(255,255,255,0.5)',
                fontFamily: 'JetBrains Mono, Menlo, monospace',
                letterSpacing: '0.04em',
                flexShrink: 0,
              }}
            >
              {String(node.order).padStart(2, '0')}
            </span>
          )}

          {/* Accent dot — child nodes only */}
          {node.depth > 0 && accentColor && (
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: '50%',
                backgroundColor: accentColor,
                flexShrink: 0,
                opacity: 0.85,
              }}
            />
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

        {/* ── Hover buttons (always rendered, toggled via opacity) ─────── */}

        {/* Expand / collapse one level */}
        {hasChildren && (
          <button
            onClick={handleExpandToggle}
            title={isExpanded ? 'Collapse' : 'Expand'}
            style={{
              ...HOVER_BTN,
              backgroundColor: bgColor,
              opacity: hovered ? 1 : 0,
              pointerEvents: hovered ? 'auto' : 'none',
              paddingBottom: 1,
            }}
          >
            {isExpanded ? '−' : '+'}
          </button>
        )}

        {/* Expand all / collapse all descendants toggle */}
        {hasChildren && (
          <button
            onClick={handleExpandAll}
            title={subtreeExpanded ? 'Collapse all' : 'Expand all'}
            style={{
              ...HOVER_BTN,
              backgroundColor: bgColor,
              opacity: hovered ? 1 : 0,
              pointerEvents: hovered ? 'auto' : 'none',
            }}
          >
            {subtreeExpanded ? (
              <svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 1v3H1M4 4L0.5 0.5" />
                <path d="M8 1v3h3M8 4l3.5-3.5" />
                <path d="M4 11V8H1M4 8L0.5 11.5" />
                <path d="M8 11V8h3M8 8l3.5 3.5" />
              </svg>
            ) : (
              <svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 4V1h3M1 1l3.5 3.5" />
                <path d="M11 4V1H8M11 1L7.5 4.5" />
                <path d="M1 8v3h3M1 11l3.5-3.5" />
                <path d="M11 8v3H8M11 11L7.5 7.5" />
              </svg>
            )}
          </button>
        )}

        {/* Highlight subtree */}
        <button
          onClick={handleHighlight}
          title={isHighlighted ? 'Remove highlight' : 'Highlight subtree'}
          style={{
            ...HOVER_BTN,
            backgroundColor: isHighlighted && accentColor ? accentColor : bgColor,
            border: isHighlighted && accentColor ? `1.5px solid ${accentColor}` : '1.5px solid rgba(255,255,255,0.5)',
            opacity: hovered ? 1 : 0,
            pointerEvents: hovered ? 'auto' : 'none',
          }}
        >
          <svg viewBox="0 0 12 12" width="10" height="10" fill="currentColor" stroke="none">
            <path d="M6 1l1.2 2.4 2.8.4-2 2 .5 2.8L6 7.4l-2.5 1.2.5-2.8-2-2 2.8-.4z" />
          </svg>
        </button>
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

export const GraphNodeComponent = memo(GraphNodeComponentInner)

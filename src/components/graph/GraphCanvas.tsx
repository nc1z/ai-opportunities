import { useCallback, useMemo, useRef, useState } from 'react'
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  useReactFlow,
  Background,
  Panel,
  BackgroundVariant,
  type Node,
  type Edge,
  type NodeTypes,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { layerRoots, childrenOf, nodeMap } from '@/data'
import { GraphNodeComponent, type GraphNodeData } from './GraphNode'
import { GRAPH_CENTER, layoutFan } from './graphUtils'

// ─── Constants ────────────────────────────────────────────────────────────────

const ROOT_RADIUS = 210

const nodeTypes: NodeTypes = { taxonomyNode: GraphNodeComponent }

// ─── Layout ───────────────────────────────────────────────────────────────────

function layoutPolygon(cx: number, cy: number, radius: number, count: number) {
  return Array.from({ length: count }, (_, i) => {
    const angle = -Math.PI / 2 + (2 * Math.PI * i) / count
    return { x: cx + radius * Math.cos(angle), y: cy + radius * Math.sin(angle) }
  })
}

function buildInitialNodes(): Node[] {
  const positions = layoutPolygon(GRAPH_CENTER.x, GRAPH_CENTER.y, ROOT_RADIUS, layerRoots.length)
  return layerRoots.map((layer, i) => {
    const pos = { ...positions[i] }
    if (layer.order === 3 || layer.order === 4) pos.y -= 80
    return {
      id: layer.id,
      type: 'taxonomyNode',
      position: pos,
      data: {
        node: layer,
        isExpanded: false,
        hasChildren: (childrenOf[layer.id] ?? []).length > 0,
      } satisfies GraphNodeData,
    }
  })
}

// ─── Info Panel ───────────────────────────────────────────────────────────────

const DEPTH_LABEL_DISPLAY: Record<string, string> = {
  layer: 'Layer',
  group: 'Group',
  domain: 'Domain',
  niche: 'Niche',
  focus: 'Focus',
}

function InfoPanel({
  nodeId,
  onClose,
}: {
  nodeId: string
  onClose: () => void
}) {
  const node = nodeMap[nodeId]
  if (!node) return null

  const depthLabel = DEPTH_LABEL_DISPLAY[node.depthLabel] ?? node.depthLabel
  const childCount = (childrenOf[node.id] ?? []).length

  return (
    <div
      style={{
        position: 'absolute',
        left: 16,
        top: 16,
        width: 320,
        zIndex: 20,
        pointerEvents: 'auto',
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: 12,
          boxShadow: '0 4px 24px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)',
          border: '1px solid #e4e4e7',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        {/* Header */}
        <div
          style={{
            borderBottom: '1px solid #f4f4f5',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 8,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: '#52525b',
                backgroundColor: '#f4f4f5',
                border: '1px solid #e4e4e7',
                borderRadius: 4,
                padding: '2px 7px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                fontFamily: 'Inter, system-ui, sans-serif',
              }}
            >
              {depthLabel}
            </span>
            {node.depth === 0 && (
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: '#a1a1aa',
                  fontFamily: 'JetBrains Mono, Menlo, monospace',
                  letterSpacing: '0.04em',
                }}
              >
                {String(node.order).padStart(2, '0')}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              border: '1px solid #e4e4e7',
              backgroundColor: 'transparent',
              color: '#a1a1aa',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 14,
              lineHeight: 1,
              flexShrink: 0,
              padding: 0,
              paddingBottom: 1,
            }}
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '14px 16px 16px' }}>
          <p
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: '#18181b',
              lineHeight: 1.4,
              marginBottom: 10,
            }}
          >
            {node.name}
          </p>
          <p
            style={{
              fontSize: 13,
              color: '#71717a',
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            {node.description}
          </p>

          {childCount > 0 && (
            <p
              style={{
                fontSize: 12,
                color: '#a1a1aa',
                marginTop: 14,
                marginBottom: 0,
                fontFamily: 'JetBrains Mono, Menlo, monospace',
              }}
            >
              {childCount} {node.depthLabel === 'layer' ? 'groups' : node.depthLabel === 'group' ? 'domains' : node.depthLabel === 'domain' ? 'niches' : node.depthLabel === 'niche' ? 'focus areas' : 'items'}
            </p>
          )}

          {node.sources && node.sources.length > 0 && (
            <div style={{ marginTop: 14, borderTop: '1px solid #f4f4f5', paddingTop: 12 }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: '#a1a1aa', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 6 }}>
                Sources
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {node.sources.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 12, color: '#52525b', textDecoration: 'underline', textUnderlineOffset: 2, textDecorationColor: '#d4d4d8' }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Expand / Collapse Controls ───────────────────────────────────────────────

const BTN_STYLE: React.CSSProperties = {
  width: 34,
  height: 34,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
  border: '1px solid #d4d4d8',
  borderRadius: 6,
  cursor: 'pointer',
  color: '#52525b',
  padding: 0,
  transition: 'background-color 0.1s, color 0.1s',
}

const DEPTH_OPTIONS: { depth: number; label: string; warn?: boolean }[] = [
  { depth: 1, label: 'Group' },
  { depth: 2, label: 'Domain' },
  { depth: 3, label: 'Niche' },
  { depth: 4, label: 'Focus', warn: true },
]

/** Must be rendered inside <ReactFlow> so useReactFlow() has context. */
function GraphControls() {
  const { getNodes, setNodes, setEdges, zoomIn, zoomOut, fitView } = useReactFlow()
  const animRef = useRef(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [expandDepth, setExpandDepth] = useState(3)
  const [showPicker, setShowPicker] = useState(false)
  const hidePickerTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openPicker = () => {
    if (hidePickerTimeout.current) clearTimeout(hidePickerTimeout.current)
    setShowPicker(true)
  }
  const closePicker = () => {
    hidePickerTimeout.current = setTimeout(() => setShowPicker(false), 120)
  }

  const toggleExpandAll = useCallback(() => {
    if (isExpanded) {
      // Collapse all
      animRef.current = false
      setNodes(buildInitialNodes())
      setEdges([])
      setIsExpanded(false)
    } else {
      // Expand all via BFS animation up to expandDepth
      if (animRef.current) return
      animRef.current = true

      const LEVEL_DELAY = 380

      const expandLevel = (parentIds: string[], depth: number) => {
        if (!animRef.current) return
        if (depth >= expandDepth) return

        const current = getNodes()
        const existingIds = new Set(current.map((n) => n.id))
        const newNodes: Node[] = []
        const newEdges: Edge[] = []
        const nextIds: string[] = []

        for (const parentId of parentIds) {
          const parentNode = current.find((n) => n.id === parentId)
          if (!parentNode) continue
          const children = childrenOf[parentId] ?? []
          if (children.length === 0) continue

          const positions = layoutFan(parentNode.position, depth, children.length)
          children.forEach((child, i) => {
            if (existingIds.has(child.id)) {
              nextIds.push(child.id)
              return
            }
            newNodes.push({
              id: child.id,
              type: 'taxonomyNode',
              position: positions[i],
              data: {
                node: child,
                isExpanded: false,
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
            nextIds.push(child.id)
          })
        }

        setNodes((prev) => [
          ...prev.map((n) =>
            parentIds.includes(n.id) && (childrenOf[n.id] ?? []).length > 0
              ? { ...n, data: { ...n.data, isExpanded: true } }
              : n,
          ),
          ...newNodes,
        ])
        if (newEdges.length > 0) setEdges((prev) => [...prev, ...newEdges])

        if (nextIds.length > 0) {
          setTimeout(() => expandLevel(nextIds, depth + 1), LEVEL_DELAY)
        } else {
          animRef.current = false
        }
      }

      setIsExpanded(true)
      expandLevel(layerRoots.map((r) => r.id), 0)
    }
  }, [isExpanded, expandDepth, getNodes, setNodes, setEdges])

  return (
    <Panel position="bottom-left" style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {/* Zoom in */}
      <button
        style={BTN_STYLE}
        title="Zoom in"
        onClick={() => zoomIn()}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#f4f4f5' }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#fff' }}
      >
        <svg viewBox="0 0 16 16" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <circle cx="7" cy="7" r="5" />
          <line x1="7" y1="4.5" x2="7" y2="9.5" />
          <line x1="4.5" y1="7" x2="9.5" y2="7" />
          <line x1="11" y1="11" x2="14" y2="14" />
        </svg>
      </button>

      {/* Zoom out */}
      <button
        style={BTN_STYLE}
        title="Zoom out"
        onClick={() => zoomOut()}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#f4f4f5' }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#fff' }}
      >
        <svg viewBox="0 0 16 16" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <circle cx="7" cy="7" r="5" />
          <line x1="4.5" y1="7" x2="9.5" y2="7" />
          <line x1="11" y1="11" x2="14" y2="14" />
        </svg>
      </button>

      {/* Fit view */}
      <button
        style={BTN_STYLE}
        title="Fit view"
        onClick={() => fitView({ padding: 0.35 })}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#f4f4f5' }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#fff' }}
      >
        <svg viewBox="0 0 16 16" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 5V2h3M1 11v3h3M15 5V2h-3M15 11v3h-3" />
        </svg>
      </button>

      {/* Divider */}
      <div style={{ height: 1, backgroundColor: '#e4e4e7', margin: '2px 0' }} />

      {/* Expand all / Collapse all toggle with depth picker */}
      <div
        style={{ position: 'relative' }}
        onMouseEnter={openPicker}
        onMouseLeave={closePicker}
      >
        <button
          style={BTN_STYLE}
          title={isExpanded ? 'Collapse all' : `Expand to ${DEPTH_OPTIONS.find(o => o.depth === expandDepth)?.label ?? 'Niche'} level`}
          onClick={toggleExpandAll}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#f4f4f5' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#fff' }}
        >
          {isExpanded ? (
            <svg viewBox="0 0 16 16" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2v4H2M6 6l-4.5-4.5"/>
              <path d="M10 2v4h4M10 6l4.5-4.5"/>
              <path d="M6 14v-4H2M6 10l-4.5 4.5"/>
              <path d="M10 14v-4h4M10 10l4.5 4.5"/>
            </svg>
          ) : (
            <svg viewBox="0 0 16 16" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 6V2h4M2 2l4.5 4.5"/>
              <path d="M14 6V2h-4M14 2l-4.5 4.5"/>
              <path d="M2 10v4h4M2 14l4.5-4.5"/>
              <path d="M14 10v4h-4M14 14l-4.5-4.5"/>
            </svg>
          )}
        </button>

        {/* Depth picker — shown on hover when collapsed */}
        {showPicker && !isExpanded && (
          <div
            onMouseEnter={openPicker}
            onMouseLeave={closePicker}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 'calc(100% + 8px)',
              backgroundColor: '#fff',
              border: '1px solid #e4e4e7',
              borderRadius: 8,
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              padding: '8px 10px',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              whiteSpace: 'nowrap',
              zIndex: 10,
            }}
          >
            <span style={{ fontSize: 10, fontWeight: 600, color: '#a1a1aa', letterSpacing: '0.06em', textTransform: 'uppercase', paddingLeft: 2, marginBottom: 2 }}>
              Expand to
            </span>
            {DEPTH_OPTIONS.map((opt) => {
              const isActive = expandDepth === opt.depth
              return (
                <button
                  key={opt.depth}
                  onClick={(e) => { e.stopPropagation(); setExpandDepth(opt.depth) }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 20,
                    padding: '4px 8px',
                    borderRadius: 5,
                    border: 'none',
                    cursor: 'pointer',
                    backgroundColor: isActive ? '#18181b' : 'transparent',
                    color: isActive ? '#fff' : '#52525b',
                    fontSize: 12,
                    fontWeight: isActive ? 600 : 400,
                    fontFamily: 'Inter, system-ui, sans-serif',
                    textAlign: 'left',
                  }}
                >
                  {opt.label}
                  {opt.warn && (
                    <span style={{ fontSize: 10, color: isActive ? '#fbbf24' : '#d97706', fontWeight: 600 }}>slow</span>
                  )}
                </button>
              )
            })}
          </div>
        )}
      </div>
    </Panel>
  )
}

// ─── Canvas ───────────────────────────────────────────────────────────────────

export function GraphCanvas() {
  const [nodes, , onNodesChange] = useNodesState(useMemo(buildInitialNodes, []))
  const [edges, , onEdgesChange] = useEdgesState<Edge>([])
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null)

  // Clicking the node body selects it (the "+" button stops propagation)
  const handleNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    setSelectedNodeId((prev) => (prev === node.id ? null : node.id))
  }, [])

  // Clicking the canvas background deselects
  const handlePaneClick = useCallback(() => {
    setSelectedNodeId(null)
  }, [])

  return (
    <div className="flex-1 overflow-hidden" style={{ position: 'relative' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={handleNodeClick}
        onPaneClick={handlePaneClick}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.35 }}
        minZoom={0.05}
        maxZoom={3}
        panOnScroll
        zoomOnScroll
        defaultEdgeOptions={{
          type: 'straight',
          style: { stroke: '#d4d4d8', strokeWidth: 1 },
        }}
      >
        <Background variant={BackgroundVariant.Lines} color="#f7f7f7" gap={40} />
        <GraphControls />
      </ReactFlow>

      {selectedNodeId && (
        <InfoPanel nodeId={selectedNodeId} onClose={() => setSelectedNodeId(null)} />
      )}
    </div>
  )
}

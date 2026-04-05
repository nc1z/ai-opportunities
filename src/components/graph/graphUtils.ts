/** All radial layout math lives here so both GraphCanvas and GraphNode can share it. */

export const GRAPH_CENTER = { x: 0, y: 0 }

/** Radius from parent → children, indexed by parent depth (0–3).
 *  Grows exponentially — tight near root, much wider at deeper levels. */
export const CHILD_RADII = [280, 560, 560, 560]

/**
 * Place `count` nodes in a fan arc around (px, py), pointing away from
 * GRAPH_CENTER. Spread widens with more children.
 */
export function layoutFan(
  parentPos: { x: number; y: number },
  parentDepth: number,
  count: number,
): Array<{ x: number; y: number }> {
  const radius = CHILD_RADII[Math.min(parentDepth, CHILD_RADII.length - 1)]
  const dx = parentPos.x - GRAPH_CENTER.x
  const dy = parentPos.y - GRAPH_CENTER.y
  const dir = Math.atan2(dy, dx)

  if (count === 1) {
    return [{ x: parentPos.x + radius * Math.cos(dir), y: parentPos.y + radius * Math.sin(dir) }]
  }

  const spread = Math.min(Math.PI * 2 / 3, count * 0.45)
  const start = dir - spread / 2

  return Array.from({ length: count }, (_, i) => {
    const angle = start + (spread * i) / (count - 1)
    return { x: parentPos.x + radius * Math.cos(angle), y: parentPos.y + radius * Math.sin(angle) }
  })
}

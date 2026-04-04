import type { TagValue } from '@/data/types'
import { Tag } from './Tag'

interface Props {
  tags: TagValue[]
}

export function TagList({ tags }: Props) {
  return (
    <div className="flex flex-wrap gap-1">
      {tags.map((t) => (
        <Tag key={t} value={t} />
      ))}
    </div>
  )
}

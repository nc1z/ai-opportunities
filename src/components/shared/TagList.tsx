import { Tag } from './Tag'

interface Props {
  tags: string[]
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

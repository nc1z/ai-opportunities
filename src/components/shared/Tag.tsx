import type { TagValue } from '@/data/types'

interface Props {
  value: TagValue
}

export function Tag({ value }: Props) {
  return (
    <span className="inline-flex items-center border border-zinc-300 text-zinc-500 text-xs px-1.5 py-0.5 rounded">
      {value}
    </span>
  )
}

import type { Opportunity } from '@/data/types'

const TYPE_LABEL: Record<Opportunity['type'], string> = {
  contribute: 'Contribute',
  build: 'Build',
  public_good: 'Public Good',
}

const TYPE_STYLE: Record<Opportunity['type'], string> = {
  contribute: 'border border-zinc-400 text-zinc-600',
  build: 'bg-zinc-800 text-white',
  public_good: 'bg-zinc-100 text-zinc-700 border border-zinc-300',
}

interface Props {
  opportunity: Opportunity
}

export function OpportunityItem({ opportunity }: Props) {
  return (
    <div className="flex gap-3 items-start py-2">
      <span
        className={`shrink-0 text-xs px-1.5 py-0.5 rounded font-medium mt-0.5 ${TYPE_STYLE[opportunity.type]}`}
      >
        {TYPE_LABEL[opportunity.type]}
      </span>
      <div>
        <p className="text-sm font-medium text-zinc-800">{opportunity.title}</p>
        <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">{opportunity.description}</p>
      </div>
    </div>
  )
}

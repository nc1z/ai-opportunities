import { layers } from '@/data/layers'
import { LayerRow } from './LayerRow'
import { SectionTitle } from '@/components/shared/SectionTitle'

export function LayerStack() {
  return (
    <section>
      <SectionTitle>Layer Stack</SectionTitle>
      <div className="space-y-2">
        {layers
          .slice()
          .sort((a, b) => a.order - b.order)
          .map((layer) => (
            <LayerRow key={layer.id} layer={layer} />
          ))}
      </div>
    </section>
  )
}

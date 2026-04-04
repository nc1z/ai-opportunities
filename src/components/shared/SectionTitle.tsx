interface Props {
  children: React.ReactNode
}

export function SectionTitle({ children }: Props) {
  return (
    <h2 className="text-xs tracking-widest uppercase text-zinc-400 font-medium mb-4">
      {children}
    </h2>
  )
}

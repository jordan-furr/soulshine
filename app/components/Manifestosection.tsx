import Link from 'next/link'

type ManifestoBlock = {
  type: string
  lines: string[]
}

type ManifestoSectionProps = {
  label: string
  blocks: readonly ManifestoBlock[]
  cta?: { label: string; href: string }
}

export default function ManifestoSection({ label, blocks, cta }: ManifestoSectionProps) {
  return (
    <section className="manifesto">
      <div className="manifesto__inner">
        <p className="manifesto__label">{label}</p>
        {blocks.map((block, i) => (
          <div key={i} className={`manifesto__block manifesto__block--${block.type}`}>
            {block.lines.map((line, j) => (
              <p key={j}>{line}</p>
            ))}
          </div>
        ))}
        {cta && (
          <Link href={cta.href} className="manifesto__cta">{cta.label}</Link>
        )}
      </div>
    </section>
  )
}

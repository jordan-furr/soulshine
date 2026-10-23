import Link from 'next/link'

type QuoteSectionProps = {
  quote: string
  linkLabel: string
}

export default function QuoteSection({ quote, linkLabel }: QuoteSectionProps) {
  return (
    <section className="quote-section">
      <blockquote className="quote-section__text reveal">&ldquo;{quote}&rdquo;</blockquote>
      <Link href="/testimonials" className="quote-section__link reveal">
        {linkLabel} &rarr;
      </Link>
    </section>
  )
}

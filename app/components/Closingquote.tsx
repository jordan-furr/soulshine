import Link from 'next/link'

type ClosingQuoteProps = {
  quote: string
  sign: string
  cta: string
}

export default function ClosingQuote({ quote, sign, cta }: ClosingQuoteProps) {
  return (
    <section className="closing-quote">
      <blockquote className="closing-quote__quote reveal">
        <p>{quote}</p>
        <footer className="closing-quote__sign">{sign}</footer>
      </blockquote>
      <Link href="/contact" className="closing-quote__cta reveal">{cta}</Link>
    </section>
  )
}

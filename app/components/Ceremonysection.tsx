import Image from 'next/image'
import Link from 'next/link'

type CeremonySectionProps = {
  label: string
  headline: string
  body: string
  cta: string
}

export default function CeremonySection({ label, headline, body, cta }: CeremonySectionProps) {
  return (
    <section className="ceremony-section">
      <div className="ceremony-section__image-wrapper">
        <Image
          src="/images/soulwayo.jpeg"
          alt="Sarah and her partner during a shamanic healing ceremony"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="ceremony-section__image"
        />
      </div>
      <div className="ceremony-section__content reveal-group">
        <p className="ceremony-section__label reveal">{label}</p>
        <h2 className="ceremony-section__headline reveal">{headline}</h2>
        <p className="ceremony-section__body reveal">{body}</p>
        <Link href="/services/retreats" className="ceremony-section__cta reveal">
          {cta}
        </Link>
      </div>
    </section>
  )
}
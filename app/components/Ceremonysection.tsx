import Image from 'next/image'
import Link from 'next/link'

type CeremonySectionProps = {
  label: string
  headline: string
  cta: string
}

export default function CeremonySection({ label, headline, cta }: CeremonySectionProps) {
  return (
    <section className="ceremony-section">
      <div className="ceremony-section__image-wrapper">
        <Image
          src="/images/ceremony.jpg"
          alt="Sarah and her partner during a shamanic healing ceremony"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="ceremony-section__image"
        />
      </div>
      <div className="ceremony-section__content">
        <p className="ceremony-section__label">{label}</p>
        <h2 className="ceremony-section__headline">{headline}</h2>
        <Link href="/services/shamanic-healing" className="ceremony-section__cta">
          {cta}
        </Link>
      </div>
    </section>
  )
}
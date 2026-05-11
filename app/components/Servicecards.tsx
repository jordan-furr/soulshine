import Image from 'next/image'
import Link from 'next/link'

type Service = {
  label: string
  slug: string
  description: string
  dot: string
  cta: string
}

type ServiceCardsProps = {
  eyebrow: string
  services: Service[]
}

export default function ServiceCards({ eyebrow, services }: ServiceCardsProps) {
  return (
    <section className="services-section">
      <div className="services-section__header">
        <p className="services-section__eyebrow">{eyebrow}</p>
      </div>
      <div className="services-section__grid">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="service-card"
          >
            <div className="service-card__image-wrapper">
              <Image
                src={`/images/services/${service.slug}.jpg`}
                alt={service.label}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="service-card__image"
              />
              <span
                className="service-card__dot"
                style={{ backgroundColor: service.dot }}
                aria-hidden="true"
              />
            </div>
            <div className="service-card__body">
              <p className="service-card__name">{service.label}</p>
              <p className="service-card__desc">{service.description}</p>
              <span className="service-card__cta">{service.cta} →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
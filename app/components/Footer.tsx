import Image from 'next/image'
import Link from 'next/link'

type FooterProps = {
  locale: string
  rights: string
  servicesHeading: string
  soulshinHeading: string
  contactHeading: string
  services: { label: string; slug: string }[]
  bookLabel: string
  testimonialsLabel: string
  publicationsLabel: string
  soulscribeLabel: string
  aboutLabel: string
}

export default function Footer({
  rights,
  servicesHeading,
  soulshinHeading,
  contactHeading,
  services,
  bookLabel,
  testimonialsLabel,
  publicationsLabel,
  soulscribeLabel,
  aboutLabel,
}: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Link href="/" className="footer__logo-link">
            <Image
              src="/images/soulshine-three.png"
              alt="Soulshine"
              width={40}
              height={40}
              className="footer__logo-image"
            />
            <span className="footer__logo-text">SOULSHINE</span>
          </Link>
          <p className="footer__tagline">sArAh from eArth to heArt</p>
        </div>

        <div className="footer__col">
          <p className="footer__col-heading">{servicesHeading}</p>
          <ul className="footer__col-list">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="footer__col-link">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <p className="footer__col-heading">{soulshinHeading}</p>
          <ul className="footer__col-list">
            <li><Link href="/contact" className="footer__col-link">{bookLabel}</Link></li>
            <li><Link href="/testimonials" className="footer__col-link">{testimonialsLabel}</Link></li>
            <li><Link href="/publications" className="footer__col-link">{publicationsLabel}</Link></li>
            <li><Link href="/about" className="footer__col-link">{aboutLabel}</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <p className="footer__col-heading">{contactHeading}</p>
          <ul className="footer__col-list">
            <li>
              <a href="mailto:soulshinsarah@gmail.com" className="footer__col-link">
                soulshinsarah@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+4534567755" className="footer__col-link">
                +45 34 56 77 55
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">
          © {new Date().getFullYear()} Soulshine. {rights}
        </p>
      </div>
    </footer>
  )
}
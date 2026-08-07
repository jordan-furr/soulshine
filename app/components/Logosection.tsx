import Image from 'next/image'
import Link from 'next/link'

type LogoSectionProps = {
  tagline: string
  headline: string
  text: string
  cta: string
}

export default function LogoSection({ tagline, headline, text, cta }: LogoSectionProps) {
  return (
    <section className="logo-section">
      <div className="logo-section__symbol">
        <Image
          src="/images/soulshine.png"
          alt="Soulshine symbol"
          width={133}
          height={133}
        />
      </div>
      <p className="logo-section__tagline">{tagline}</p>
      <h2 className="logo-section__headline">{headline}</h2>
      <p className="logo-section__text">{text}</p>
      <Link href="/services" className="logo-section__cta">{cta}</Link>
    </section>
  )
}
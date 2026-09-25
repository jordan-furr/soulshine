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
    <section className="logo-section reveal-group">
      <div className="logo-section__symbol reveal">
        <Image
          src="/images/soulshine.png"
          alt="Soulshine symbol"
          width={133}
          height={133}
        />
      </div>
      <p className="logo-section__tagline reveal">{tagline}</p>
      <h2 className="logo-section__headline reveal">{headline}</h2>
      <p className="logo-section__text reveal">{text}</p>
      <Link href="/services" className="logo-section__cta reveal">{cta}</Link>
    </section>
  )
}
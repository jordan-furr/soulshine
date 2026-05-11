import Image from 'next/image'
import Link from 'next/link'

type LogoSectionProps = {
  tagline: string
  headline: string
  cta: string
}

export default function LogoSection({ tagline, headline, cta }: LogoSectionProps) {
  return (
    <section className="logo-section">
      <div className="logo-section__symbol">
        <Image
          src="/images/soulshine.png"
          alt="Soulshine symbol"
          width={80}
          height={80}
        />
      </div>
      <p className="logo-section__tagline">{tagline}</p>
      <h2 className="logo-section__headline">{headline}</h2>
      <Link href="/services" className="logo-section__cta">{cta}</Link>
    </section>
  )
}
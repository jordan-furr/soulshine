import Image from 'next/image';
import Link from 'next/link';

type TriptychHeroProps = {
  eyebrow?: string;
  headline?: string;
  cta?: string;
};

export default function TriptychHero({
  eyebrow = 'Psycho-Spiritual Guidance and Healing',
  headline = 'Come home to your soul, your truth, your light',
  cta = 'Book a Consultation',
}: TriptychHeroProps) {
  return (
    <section className="triptych" aria-label="Hero">
      <div className="triptych__panel-left">
        <Image
          src="/images/drum.jpg"
          alt="Sarah playing the drum"
          fill
          priority
          sizes="33vw"
          className="triptych__image"
        />
      </div>

      <div className="triptych__panel-center">
        <p className="triptych__eyebrow">{eyebrow}</p>
        <h1 className="triptych__headline">{headline}</h1>
        <Link href="/contact" className="triptych__cta">
          {cta}
        </Link>
      </div>

      <div className="triptych__panel-right">
        <Image
          src="/images/wolf.png"
          alt="Spirit art"
          fill
          priority
          sizes="33vw"
          className="triptych__image"
        />
      </div>
    </section>
  );
}
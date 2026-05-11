import Image from 'next/image'

export default function PrayerSection() {
  return (
    <>
      <div className="prayer-strip">
        <Image
          src="/images/strip.png"
          alt=""
          fill
          sizes="100vw"
          className="prayer-strip__image"
          aria-hidden="true"
        />
      </div>
      <section className="prayer-section">
        <p className="prayer-section__label">A Medicine Woman&apos;s Prayer</p>
        <blockquote className="prayer-section__text">
          <p>I will not rescue you,</p>
          <p>for you are not powerless.</p>
          <p>I will not fix you,</p>
          <p>for you are not broken.</p>
          <p>I will not heal you,</p>
          <p>for I see you, in your wholeness.</p>
          <p>I will walk with you through the darkness,</p>
          <p>as you remember your light.</p>
        </blockquote>
      </section>
    </>
  )
}
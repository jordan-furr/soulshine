import Image from 'next/image'

export default function PrayerSection() {
  return (
    <>
      <section className="prayer-section reveal-group">
         <Image src="/images/soulshine-three.png" alt="" width={100} height={100} priority className="reveal" />
        <p className="prayer-section__label reveal">A Medicine Woman&apos;s Prayer</p>
        <blockquote className="prayer-section__text reveal">
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
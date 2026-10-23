import Image from 'next/image'

const PRAYER_LINES = [
  'I will not rescue you,',
  'for you are not powerless.',
  'I will not fix you,',
  'for you are not broken.',
  'I will not heal you,',
  'for I see you, in your wholeness.',
  'I will walk with you through the darkness,',
  'as you remember your light.',
]

export default function PrayerSection() {
  return (
    <>
      <section className="prayer-section reveal-group">
         <Image src="/images/soulshine-three.png" alt="" width={100} height={100} priority className="reveal" />
        <p className="prayer-section__label reveal">A Medicine Woman&apos;s Prayer</p>
        <blockquote className="prayer-section__text">
          {PRAYER_LINES.map((line, i) => (
            <p key={i} className="reveal" style={{ animationDelay: `${0.1 + i * 0.12}s` }}>
              {line}
            </p>
          ))}
        </blockquote>
        
      </section>
    </>
  )
}
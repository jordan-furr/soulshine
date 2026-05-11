type IntroSectionProps = {
  text: string
}

export default function IntroSection({ text }: IntroSectionProps) {
  return (
    <section className="intro-section">
      <p className="intro-section__text">{text}</p>
    </section>
  )
}
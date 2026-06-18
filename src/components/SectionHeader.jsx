export default function SectionHeader({ eyebrow, title, text, centered = true }) {
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl`} data-aos="fade-up">
      {eyebrow && (
        <span className="text-sm font-bold uppercase tracking-[0.22em] text-leaf">{eyebrow}</span>
      )}
      <h2 className={`${eyebrow ? 'mt-3' : ''} text-3xl font-extrabold leading-tight text-ocean md:text-4xl`}>
        {title}
      </h2>
      <div className={`${centered ? 'flex justify-center' : ''} mt-5`}>
        <span className="title-accent" aria-hidden="true" />
      </div>
      {text && <p className="mt-5 text-base leading-8 text-graphite/70 md:text-lg">{text}</p>}
    </div>
  );
}

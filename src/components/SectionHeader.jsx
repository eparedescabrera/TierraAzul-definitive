export default function SectionHeader({ eyebrow, title, text, centered = true }) {
  return (
    <div
      className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl px-1 sm:px-2`}
      data-aos="fade-up"
    >
      {eyebrow && (
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-leaf sm:text-sm sm:tracking-[0.22em]">
          {eyebrow}
        </span>
      )}
      <h2
        className={`${eyebrow ? 'mt-3' : ''} text-2xl font-extrabold leading-tight break-words text-ocean sm:text-3xl md:text-4xl`}
      >
        {title}
      </h2>
      <div className={`${centered ? 'flex justify-center' : ''} mt-4 sm:mt-5`}>
        <span className="title-accent" aria-hidden="true" />
      </div>
      {text && (
        <p className="mt-4 text-sm leading-7 text-graphite/70 sm:mt-5 sm:text-base sm:leading-8 md:text-lg">
          {text}
        </p>
      )}
    </div>
  );
}

export default function PageHero({ title, backgroundImage }) {
  return (
    <section
      className={`page-hero${backgroundImage ? ' page-hero--image' : ''}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      <div className="container-site relative z-10 py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-3xl px-1 text-center sm:px-2" data-aos="fade-up">
          <h1 className="text-3xl font-extrabold leading-tight break-words sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <div className="mt-4 flex justify-center sm:mt-5">
            <span className="title-accent" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

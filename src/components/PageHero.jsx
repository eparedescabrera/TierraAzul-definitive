export default function PageHero({ title, backgroundImage }) {
  return (
    <section
      className={`page-hero${backgroundImage ? ' page-hero--image' : ''}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      <div className="container-site relative z-10 py-16">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">{title}</h1>
          <div className="mt-5 flex justify-center">
            <span className="title-accent" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PageHero({ title, subtitle }) {
  return (
    <section className="page-hero">
      <div className="container-site relative z-10 py-16">
        <div className="max-w-3xl" data-aos="fade-up">
          <span className="text-sm font-bold uppercase tracking-[0.24em] text-limeSoft">Tierra Azul 1981</span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-white/80">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}

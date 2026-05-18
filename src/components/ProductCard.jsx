import { useTranslation } from 'react-i18next';
import { FiArrowRight, FiAward } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function ProductCard({ name, text, image, to = '/productos' }) {
  const { t } = useTranslation();

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-white px-6 pb-8 pt-8 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-nav"
      data-aos="fade-up"
    >
      <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-graphite/45">{name}</p>

      <div className="relative mx-auto mt-8 flex w-full max-w-[300px] justify-center">
        <div className="relative aspect-square w-full max-w-[280px]">
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-[#d4f7e6] via-[#c8f5dc] to-[#b8e8cc] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] ring-1 ring-forest/10"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-[10%] rounded-full bg-limeSoft/15 blur-xl"
            aria-hidden
          />

          <div className="relative z-10 flex h-full w-full items-center justify-center p-[14%]">
            <img
              src={image}
              alt={name}
              loading="lazy"
              className="max-h-full max-w-full object-contain object-center drop-shadow-[0_10px_20px_rgba(18,61,99,0.12)] transition duration-500 group-hover:scale-[1.03]"
            />
          </div>

          <div
            className="pointer-events-none absolute bottom-0 right-0 z-20 h-[3.75rem] w-[3.75rem] sm:h-[4.25rem] sm:w-[4.25rem]"
            aria-hidden
          >
            <div
              className="absolute inset-0 bg-[#d32f2f] shadow-[0_4px_12px_rgba(211,47,47,0.45)]"
              style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
            />
            <FiAward
              className="absolute bottom-[0.55rem] right-[0.55rem] z-30 h-6 w-6 text-white drop-shadow sm:bottom-3 sm:right-3 sm:h-7 sm:w-7"
              strokeWidth={1.75}
            />
          </div>
        </div>
      </div>

      <h3 className="mt-6 text-center text-2xl font-extrabold tracking-tight text-black">{name}</h3>

      {text ? <p className="mx-auto mt-3 max-w-sm text-center text-sm leading-relaxed text-graphite/60">{text}</p> : null}

      <Link
        to={to}
        className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border-2 border-forest px-6 py-2.5 text-sm font-bold uppercase tracking-[0.14em] text-forest transition hover:bg-forest hover:text-white"
      >
        {t('common.readMore')}
        <FiArrowRight className="text-lg" />
      </Link>
    </article>
  );
}

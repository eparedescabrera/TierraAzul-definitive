import { useTranslation } from 'react-i18next';
import { FiArrowRight, FiAward } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function ProductCard({ name, text, image, to = '/productos' }) {
  const { t } = useTranslation();

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-[1.5rem] bg-white px-4 pb-6 pt-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-nav sm:rounded-[2rem] sm:px-6 sm:pb-8 sm:pt-8"
      data-aos="fade-up"
    >
      <Link to={to} className="group/link relative mx-auto flex w-full max-w-[280px] justify-center sm:max-w-[300px]">
        <div className="product-showcase">
          <div
            className="product-showcase__bg absolute inset-0 bg-gradient-to-br from-[#d4f7e6] via-[#c8f5dc] to-[#b8e8cc] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] ring-1 ring-forest/10 transition duration-300 group-hover:ring-forest/30"
            aria-hidden
          />
          <div
            className="product-showcase__glow pointer-events-none absolute inset-[10%] bg-limeSoft/15 blur-xl"
            aria-hidden
          />

          <div className="product-showcase__image-shell">
            <img src={image} alt={name} loading="lazy" className="product-showcase__image" />
          </div>

          <div className="product-showcase__overlay absolute inset-0 z-30 flex items-center justify-center bg-forest/80 opacity-0 backdrop-blur-[2px] transition duration-300 group-hover/link:opacity-100 group-active/link:opacity-100 group-focus-visible/link:opacity-100">
            <span className="px-3 text-center text-xl font-extrabold uppercase tracking-[0.12em] text-white drop-shadow sm:px-4 sm:text-2xl sm:tracking-[0.14em]">
              {name}
            </span>
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
      </Link>

      {text ? <p className="mx-auto mt-6 max-w-sm text-center text-sm leading-relaxed text-graphite/60">{text}</p> : null}

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

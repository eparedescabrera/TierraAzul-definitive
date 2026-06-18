import { useTranslation } from 'react-i18next';
import { FiArrowLeft, FiCheckCircle, FiHeart } from 'react-icons/fi';
import { Link, Navigate, useParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { pageHeroImages } from '../data/siteData';
import { productDetails } from '../data/productDetails';

const quickTitle = {
  es: 'Informacion rapida',
  en: 'Quick information',
  de: 'Kurzinformation',
  nl: 'Snelle informatie',
};

export default function ProductDetail() {
  const { slug } = useParams();
  const { i18n, t } = useTranslation();
  const product = productDetails[slug];

  if (!product) {
    return <Navigate to="/productos" replace />;
  }

  const content = product.content[i18n.language] || product.content.es;
  const mainSpecs = content.rows.slice(0, 6);
  const extraSpecs = content.rows.slice(6);

  return (
    <>
      <PageHero title={content.name} backgroundImage={pageHeroImages[slug]} />
      <section className="section-pad bg-white">
        <div className="container-site">
          <Link
            to="/productos"
            className="mb-8 inline-flex items-center gap-2 font-bold text-forest transition hover:text-leaf"
          >
            <FiArrowLeft /> {t('nav.products')}
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.45fr_0.75fr]">
            <article data-aos="fade-up">
              <h2 className="mb-5 text-3xl font-extrabold text-ocean">{content.title}</h2>
              <div className="rounded-[1.8rem] border border-forest/15 bg-white p-6 shadow-card md:p-8">
                <div className="grid gap-5 md:grid-cols-2">
                  {mainSpecs.map(([label, value]) => (
                    <article
                      key={label}
                      className="rounded-2xl border border-forest/10 bg-gradient-to-br from-mist to-white p-5 transition hover:-translate-y-0.5 hover:shadow-card"
                    >
                      <h3 className="text-sm font-extrabold uppercase tracking-[0.1em] text-forest">{label}</h3>
                      <p className="mt-3 leading-7 text-graphite/80">{value}</p>
                    </article>
                  ))}
                </div>

                {extraSpecs.length ? (
                  <div className="mt-6 grid gap-4">
                    {extraSpecs.map(([label, value]) => (
                      <article
                        key={label}
                        className="rounded-2xl border border-ocean/12 bg-[linear-gradient(135deg,rgba(18,61,99,0.06),rgba(11,107,42,0.06))] p-5"
                      >
                        <h3 className="text-base font-extrabold text-ocean">{label}</h3>
                        <p className="mt-2 leading-7 text-graphite/80">{value}</p>
                      </article>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>

            <aside className="grid content-start gap-6">
              <article className="leaf-card overflow-hidden p-0 text-center" data-aos="fade-left">
                <img src={product.image} alt={content.name} className="h-56 w-full object-cover" loading="lazy" />
                <div className="p-7">
                  <h3 className="text-2xl font-extrabold text-ocean">{content.name}</h3>
                  <p className="mt-4 leading-7 text-graphite/70">{content.summary}</p>
                </div>
              </article>

              <article className="leaf-card" data-aos="fade-left" data-aos-delay="100">
                <h3 className="text-2xl font-extrabold text-ocean">{quickTitle[i18n.language] || quickTitle.es}</h3>
                <ul className="mt-5 grid gap-3 text-graphite/75">
                  {content.quickInfo.map((item) => (
                    <li key={item} className="flex gap-3">
                      <FiCheckCircle className="mt-1 shrink-0 text-forest" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </aside>
          </div>

          {content.benefits?.length ? (
            <article
              className="mt-12 overflow-hidden rounded-[2rem] border border-forest/15 bg-[linear-gradient(120deg,rgba(11,107,42,0.08),rgba(18,61,99,0.1),rgba(184,207,41,0.12))] shadow-card"
              data-aos="fade-up"
            >
              <div className="border-b border-forest/15 px-7 py-6">
                <h3 className="flex items-center gap-3 text-3xl font-extrabold text-ocean">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-leaf-gradient text-white">
                    <FiHeart />
                  </span>
                  {content.benefitsTitle}
                </h3>
              </div>
              <ul className="grid gap-3 px-7 py-6 text-[17px] leading-8 text-graphite/85">
                {content.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 rounded-xl bg-white/70 px-4 py-3 backdrop-blur-sm">
                    <span className="mt-[11px] inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-forest" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </article>
          ) : null}
        </div>
      </section>
    </>
  );
}

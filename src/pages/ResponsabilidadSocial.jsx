import { useTranslation } from 'react-i18next';
import { FiDroplet, FiHeart, FiUsers } from 'react-icons/fi';
import PageHero from '../components/PageHero';
import { pageHeroImages } from '../data/siteData';
import WasteCollectionSection from '../components/WasteCollectionSection';

export default function ResponsabilidadSocial() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero title={t('pages.social.title')} backgroundImage={pageHeroImages.social} />
      <section className="section-pad bg-mist">
        <div className="container-site">
          <p className="mx-auto max-w-4xl text-center text-lg leading-9 text-graphite/75" data-aos="fade-up">
            {t('pages.social.body')}
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[FiUsers, FiDroplet, FiHeart].map((Icon, index) => (
              <article key={index} className="leaf-card text-center" data-aos="fade-up">
                <Icon className="mx-auto text-5xl text-forest" />
                <h3 className="mt-5 text-xl font-extrabold text-ocean">{t(`home.pillars.${index}`)}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <WasteCollectionSection />
    </>
  );
}

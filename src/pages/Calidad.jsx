import { useTranslation } from 'react-i18next';
import { FiCheckCircle, FiClipboard, FiShield } from 'react-icons/fi';
import PageHero from '../components/PageHero';
import { pageHeroImages } from '../data/siteData';

export default function Calidad() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero title={t('pages.calidad.title')} backgroundImage={pageHeroImages.calidad} />
      <section className="section-pad bg-white">
        <div className="container-site grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="leaf-card" data-aos="fade-right">
            <p className="text-lg leading-9 text-graphite/75">{t('pages.calidad.body')}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3" data-aos="fade-left">
            {[FiShield, FiClipboard, FiCheckCircle].map((Icon, index) => (
              <div key={index} className="rounded-[2rem] bg-mist p-6 text-center">
                <Icon className="mx-auto text-4xl text-forest" />
                <h3 className="mt-4 font-extrabold text-ocean">{t(`home.pillars.${Math.min(index, 2)}`)}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

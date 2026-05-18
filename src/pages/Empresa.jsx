import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero';

export default function Empresa() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero title={t('pages.empresa.title')} subtitle={t('pages.empresa.subtitle')} />
      <section className="section-pad bg-white">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <div className="leaf-card" data-aos="fade-right">
            <p className="text-lg leading-9 text-graphite/75">{t('pages.empresa.body')}</p>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-card" data-aos="fade-left">
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=80"
              alt={t('pages.empresa.title')}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean/65 to-transparent" />
          </div>
        </div>
      </section>
    </>
  );
}

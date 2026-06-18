import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero';
import { pageHeroImages } from '../data/siteData';

export default function Privacidad() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero title={t('pages.privacidad.title')} backgroundImage={pageHeroImages.privacidad} />
      <section className="section-pad bg-white">
        <div className="container-site">
          <article className="leaf-card mx-auto max-w-4xl" data-aos="fade-up">
            <p className="text-lg leading-9 text-graphite/75">{t('pages.privacidad.body')}</p>
          </article>
        </div>
      </section>
    </>
  );
}

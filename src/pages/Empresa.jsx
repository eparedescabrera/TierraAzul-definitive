import { useTranslation } from 'react-i18next';
import { FiEye, FiFlag, FiTarget } from 'react-icons/fi';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import { pageHeroImages } from '../data/siteData';

export default function Empresa() {
  const { t } = useTranslation();

  const blocks = [
    { icon: FiFlag, titleKey: 'pages.empresa.originTitle', textKey: 'pages.empresa.origin' },
    { icon: FiTarget, titleKey: 'pages.empresa.missionTitle', textKey: 'pages.empresa.mission' },
    { icon: FiEye, titleKey: 'pages.empresa.visionTitle', textKey: 'pages.empresa.vision' },
  ];

  return (
    <>
      <PageHero title={t('pages.empresa.title')} backgroundImage={pageHeroImages.empresa} />

      <section className="section-pad bg-white">
        <div className="container-site grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-8">
            {blocks.map(({ icon: Icon, titleKey, textKey }, index) => (
              <article key={titleKey} className="leaf-card" data-aos="fade-up" data-aos-delay={index * 80}>
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-leaf-gradient text-2xl text-white">
                    <Icon />
                  </span>
                  <div>
                    <h2 className="text-2xl font-extrabold text-ocean">{t(titleKey)}</h2>
                    <p className="mt-4 text-lg leading-9 text-graphite/75">{t(textKey)}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div
            className="relative max-h-[1000px] overflow-hidden rounded-[2rem] shadow-card lg:sticky lg:top-36"
            data-aos="fade-left"
          >
            <img
              src="/empresa-bg.png"
              alt={t('pages.empresa.title')}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean/70 to-transparent" />
          </div>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="container-site">
          <SectionHeader title={t('pages.empresa.commitmentTitle')} text={t('pages.empresa.commitment')} />
        </div>
      </section>
    </>
  );
}

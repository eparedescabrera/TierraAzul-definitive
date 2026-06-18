import { useTranslation } from 'react-i18next';
import { FiTrash2 } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import { wasteCollectionGallery, wasteCollectionTeam } from '../data/siteData';

export default function WasteCollectionSection() {
  const { t } = useTranslation();
  const content = t('pages.social.wasteCollection', { returnObjects: true });
  const team = t('pages.social.wasteCollection.team', { returnObjects: true });

  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-mist px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] text-forest">
            <FiTrash2 /> {content.badge}
          </span>
        </div>
        <div className="mt-5">
          <SectionHeader title={content.title} text={content.intro} />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {wasteCollectionGallery.map((image, index) => (
            <article
              key={image}
              className="group overflow-hidden rounded-[1.75rem] shadow-card"
              data-aos="zoom-in"
              data-aos-delay={index * 80}
            >
              <img
                src={image}
                alt={content.galleryAlt}
                loading="lazy"
                className="h-56 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-64"
              />
            </article>
          ))}
        </div>

        <div className="mt-14" data-aos="fade-up">
          <h3 className="text-center text-2xl font-extrabold text-ocean">{content.teamTitle}</h3>
          <p className="mx-auto mt-3 max-w-2xl text-center text-graphite/70">{content.teamSubtitle}</p>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {wasteCollectionTeam.map((member, index) => {
            const info = team[index];
            return (
              <article
                key={member.image}
                className="leaf-card overflow-hidden p-0 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-64 overflow-hidden bg-mist">
                  <img
                    src={member.image}
                    alt={info?.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-extrabold text-ocean">{info?.name}</h4>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-forest">{info?.role}</p>
                  <p className="mt-3 text-sm leading-7 text-graphite/70">{info?.bio}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

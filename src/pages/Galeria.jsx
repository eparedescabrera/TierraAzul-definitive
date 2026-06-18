import { useTranslation } from 'react-i18next';
import GalleryGrid from '../components/GalleryGrid';
import PageHero from '../components/PageHero';
import { pageHeroImages } from '../data/siteData';

export default function Galeria() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero title={t('gallery.title')} backgroundImage={pageHeroImages.galeria} />
      <section className="section-pad bg-white">
        <div className="container-site">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}

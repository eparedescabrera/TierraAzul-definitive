import { useTranslation } from 'react-i18next';
import GalleryGrid from '../components/GalleryGrid';
import PageHero from '../components/PageHero';

export default function Galeria() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero title={t('gallery.title')} subtitle={t('gallery.subtitle')} />
      <section className="section-pad bg-white">
        <div className="container-site">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import GalleryGrid from '../components/GalleryGrid';
import HeroSlider from '../components/HeroSlider';
import ProductCard from '../components/ProductCard';
import SectionHeader from '../components/SectionHeader';
import YouTubeSection from '../components/YouTubeSection';
import { productImages } from '../data/siteData';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <HeroSlider />

      <section className="section-pad bg-white">
        <div className="container-site">
          <SectionHeader eyebrow={t('nav.products')} title={t('products.subtitle')} />
          <div className="mt-10 grid max-w-4xl gap-8 sm:mx-auto sm:mt-14 sm:grid-cols-2 sm:gap-10 lg:max-w-none lg:gap-12">
            <ProductCard
              name={t('products.melon.name')}
              image={productImages.melon}
              to="/productos/melon"
            />
            <ProductCard
              name={t('products.watermelon.name')}
              image={productImages.watermelon}
              to="/productos/sandia"
            />
          </div>
        </div>
      </section>

      <YouTubeSection />

      <section className="section-pad bg-mist">
        <div className="container-site">
          <SectionHeader eyebrow={t('nav.gallery')} title={t('home.galleryTitle')} />
          <div className="mt-14">
            <GalleryGrid limit={3} />
          </div>
          <div className="mt-12 text-center">
            <Link to="/galeria" className="btn-primary">
              {t('common.readMore')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

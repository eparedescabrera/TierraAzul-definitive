import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import GalleryGrid from '../components/GalleryGrid';
import HeroSlider from '../components/HeroSlider';
import ProductCard from '../components/ProductCard';
import SectionHeader from '../components/SectionHeader';
import { featureCards, productImages } from '../data/siteData';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <HeroSlider />

      <section className="section-pad bg-mist">
        <div className="container-site">
          <SectionHeader title={t('home.introTitle')} text={t('home.introText')} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featureCards.map(({ icon: Icon, title }) => (
              <article key={title} className="leaf-card text-center" data-aos="fade-up">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-leaf-gradient text-2xl text-white">
                  <Icon />
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-ocean">{t(title)}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site">
          <SectionHeader eyebrow={t('nav.products')} title={t('products.subtitle')} />
          <div className="mt-14 grid max-w-4xl gap-10 sm:mx-auto sm:grid-cols-2 lg:max-w-none lg:gap-12">
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

import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero';
import ProductCard from '../components/ProductCard';
import { pageHeroImages, productImages } from '../data/siteData';

export default function Productos() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero title={t('products.title')} backgroundImage={pageHeroImages.productos} />
      <section className="section-pad bg-mist">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <ProductCard
            name={t('products.melon.name')}
            text={t('products.melon.text')}
            image={productImages.melon}
            to="/productos/melon"
          />
          <ProductCard
            name={t('products.watermelon.name')}
            text={t('products.watermelon.text')}
            image={productImages.watermelon}
            to="/productos/sandia"
          />
        </div>
      </section>
    </>
  );
}

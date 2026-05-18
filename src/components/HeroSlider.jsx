import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { heroImages } from '../data/siteData';

export default function HeroSlider() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen overflow-hidden bg-ocean">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop
        speed={1200}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        grabCursor
        className="h-screen"
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={image}>
            <div className="relative h-screen">
              <img
                src={image}
                alt={index === 0 ? 'Sandia Tierra Azul' : 'Melon Tierra Azul'}
                className="absolute inset-0 h-full w-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ocean/90 via-forest/65 to-ocean/20" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="container-site relative z-10 flex h-full items-center justify-center pt-28">
                <Link to="/productos" className="btn-primary px-10 py-4 text-base" data-aos="zoom-in">
                  {t('common.viewProducts')}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

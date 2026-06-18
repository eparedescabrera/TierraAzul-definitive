import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { heroImages } from '../data/siteData';

export default function HeroSlider() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-ocean">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop
        speed={1200}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        grabCursor
        className="h-[100dvh] min-h-[100dvh]"
      >
        {heroImages.map((image, index) => {
          const altLabels = ['Instalaciones Tierra Azul', 'Plantacion Tierra Azul', 'Vivero Tierra Azul'];
          return (
            <SwiperSlide key={image}>
              <div className="relative h-[100dvh] min-h-[100dvh]">
                <img
                  src={image}
                  alt={altLabels[index] || 'Tierra Azul 1981'}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-ocean/90 via-forest/65 to-ocean/20" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="container-site relative z-10 flex h-full items-center justify-center px-4 pt-20 sm:pt-24 md:pt-28">
                  <Link to="/productos" className="btn-primary px-6 py-3 sm:px-10 sm:py-4" data-aos="zoom-in">
                    {t('common.viewProducts')}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

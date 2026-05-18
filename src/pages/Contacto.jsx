import { useTranslation } from 'react-i18next';
import { FiClock, FiMail, FiPhone } from 'react-icons/fi';
import ContactForm from '../components/ContactForm';
import PageHero from '../components/PageHero';

export default function Contacto() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero title={t('contactPage.title')} subtitle={t('contactPage.subtitle')} />
      <section className="section-pad bg-mist">
        <div className="container-site grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <ContactForm />
          <div className="grid gap-6">
            <article className="leaf-card" data-aos="fade-up">
              <h2 className="text-2xl font-extrabold text-ocean">{t('contactPage.hoursTitle')}</h2>
              <div className="mt-6 grid gap-4 text-graphite/75">
                <span className="flex items-center gap-3">
                  <FiClock className="text-forest" /> {t('topbar.schedule')}
                </span>
                <span className="flex items-center gap-3">
                  <FiMail className="text-forest" /> {t('topbar.email')}
                </span>
                <span className="flex items-center gap-3">
                  <FiPhone className="text-forest" /> {t('topbar.phone')}
                </span>
              </div>
            </article>
            <article className="overflow-hidden rounded-[2rem] bg-white shadow-card" data-aos="fade-up">
              <div className="p-7">
                <h2 className="text-2xl font-extrabold text-ocean">{t('contactPage.mapTitle')}</h2>
              </div>
              <iframe
                title={t('contactPage.mapTitle')}
                src="https://www.google.com/maps?q=Spain&output=embed"
                className="h-80 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

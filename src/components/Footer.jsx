import { useTranslation } from 'react-i18next';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { footerLinks, youtubeVideos } from '../data/siteData';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ocean text-white">
      <div className="container-site grid gap-10 py-12 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_0.6fr]">
        <div className="text-center md:text-left">
          <div className="inline-flex rounded-2xl border border-white/20 bg-white/12 px-5 py-4 backdrop-blur-md">
            <img
              src="/logo-tierra-azul-transparent.png"
              alt={t('common.company')}
              className="mx-auto h-20 w-auto max-w-[200px] object-contain opacity-95 brightness-110 contrast-105 drop-shadow-[0_2px_16px_rgba(255,255,255,0.28)] sm:h-24 sm:max-w-[220px] md:mx-0"
            />
          </div>
          <p className="mx-auto mt-6 max-w-sm text-sm leading-7 text-white/85 md:mx-0">{t('footer.description')}</p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold">{t('footer.links')}</h3>
          <div className="mt-5 grid gap-3">
            {footerLinks.map((link) => (
              <Link key={link.path} to={link.path} className="text-sm text-white/75 transition hover:text-limeSoft">
                {t(link.labelKey)}
              </Link>
            ))}
          </div>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold">{t('footer.contact')}</h3>
          <div className="mt-5 grid gap-4 text-sm text-white/75">
            <span className="flex items-start justify-center gap-3 break-all md:justify-start">
              <FiMail className="mt-0.5 shrink-0 text-limeSoft" /> {t('topbar.email')}
            </span>
            <span className="flex items-center justify-center gap-3 md:justify-start">
              <FiPhone className="shrink-0 text-limeSoft" /> {t('topbar.phone')}
            </span>
            <span className="flex items-start justify-center gap-3 text-balance md:justify-start">
              <FiMapPin className="mt-0.5 shrink-0 text-limeSoft" /> {t('topbar.location')}
            </span>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-youtube">{t('footer.youtube')}</h3>
          <a
            href={youtubeVideos.channelUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-youtube/40 text-youtube transition duration-300 hover:-translate-y-1 hover:border-youtube hover:bg-youtube hover:text-white"
            aria-label="YouTube"
          >
            <FaYoutube size={23} />
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-site flex flex-col gap-2 text-sm text-white/65 md:flex-row md:items-center md:justify-between">
          <span>
            © {year} {t('common.company')}. {t('footer.rights')}
          </span>
          <Link to="/privacidad" className="transition hover:text-limeSoft">
            {t('nav.privacy')}
          </Link>
        </div>
      </div>
    </footer>
  );
}

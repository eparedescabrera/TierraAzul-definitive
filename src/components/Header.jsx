import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiChevronDown, FiMail, FiMapPin, FiMenu, FiPhone, FiX } from 'react-icons/fi';
import { FaYoutube } from 'react-icons/fa';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navItems, youtubeVideos } from '../data/siteData';
import LanguageSelector from './LanguageSelector';
import BrandText from './BrandText';

export default function Header() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 90);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileDropdown(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="hidden bg-[#2f2f2d] text-white lg:block">
        <div className="container-site flex h-8 items-center justify-between text-[12px]">
          <span className="inline-flex items-center gap-2 text-white/90">
            <FiMapPin className="text-[#2f52d4]" /> {t('topbar.location')}
          </span>
          <div className="flex items-center gap-7 text-white/90">
            <span className="inline-flex items-center gap-2">
              <FiMail className="text-[#2f52d4]" /> {t('topbar.email')}
            </span>
            <span className="inline-flex items-center gap-2">
              <FiPhone className="text-[#2f52d4]" /> {t('topbar.phone')}
            </span>
          </div>
        </div>
      </div>

      <div
        className={`isolate transition-all duration-500 ${
          isSticky ? 'bg-white/95 shadow-nav backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <div className="relative z-[60] hidden bg-[#92e8be] lg:block">
          <div className="container-site flex min-h-[88px] items-center justify-between py-3">
            <Link to="/" aria-label={t('common.company')} className="relative z-[70] ml-4 shrink-0 xl:ml-8">
              <BrandText />
            </Link>
            <div className="mr-8 flex items-center gap-5">
              <a
                href={youtubeVideos.url}
                target="_blank"
                rel="noreferrer"
                className="text-[#e1222f] transition hover:-translate-y-0.5 hover:text-ocean"
                aria-label="YouTube"
              >
                <FaYoutube size={17} />
              </a>
              <LanguageSelector />
            </div>
          </div>
        </div>

        <div className="relative z-[55] bg-white/95 lg:pb-4">
          <div className="container-site">
            <nav
              className={`mx-auto flex min-h-[56px] max-w-6xl items-center justify-between gap-2 bg-[#32bd67] px-3 shadow-nav transition-all duration-500 sm:min-h-[58px] sm:px-4 lg:min-h-[64px] lg:-mt-5 lg:gap-4 lg:px-10 ${
                isSticky ? 'lg:shadow-nav' : ''
              }`}
              aria-label="Main navigation"
            >
            <Link to="/" className="flex min-w-0 max-w-[calc(100%-3.5rem)] items-center lg:hidden" aria-label={t('common.company')}>
              <BrandText compact />
            </Link>

            <div className="hidden w-full items-center justify-center gap-9 lg:flex">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.labelKey} className="group relative">
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => `nav-link gap-1 ${isActive ? 'active text-white' : ''}`}
                    >
                      {t(item.labelKey)} <FiChevronDown className="transition group-hover:rotate-180" />
                    </NavLink>
                    <div className="pointer-events-none absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-4 border-t-4 border-limeSoft bg-white p-2 opacity-0 shadow-nav transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.path}
                          to={child.path}
                          className="block px-5 py-3 text-sm font-extrabold text-black transition hover:bg-[#32bd67] hover:text-white"
                        >
                          {t(child.labelKey)}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => `nav-link ${isActive ? 'active text-white' : ''}`}
                  >
                    {t(item.labelKey)}
                  </NavLink>
                ),
              )}
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-forest sm:h-12 sm:w-12 lg:hidden"
              aria-label="Open menu"
            >
              <FiMenu size={24} />
            </button>
          </nav>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[55] bg-ocean/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMobileOpen(false)}
      />
      <aside
        className={`mobile-panel fixed right-0 top-0 z-[70] h-full w-[86%] max-w-sm bg-white transition-transform duration-500 lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-forest/10 p-5">
          <BrandText compact />
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-mist text-forest"
            aria-label="Close menu"
          >
            <FiX size={22} />
          </button>
        </div>
        <div className="space-y-2 overflow-y-auto p-5 pb-36">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.labelKey}>
                <button
                  type="button"
                  onClick={() => setMobileDropdown((value) => !value)}
                  className="flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left font-bold uppercase tracking-[0.1em] text-graphite"
                >
                  {t(item.labelKey)}
                  <FiChevronDown className={`transition ${mobileDropdown ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    mobileDropdown ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="min-h-0">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        className="ml-4 block rounded-xl px-4 py-3 text-sm font-semibold text-forest"
                      >
                        {t(child.labelKey)}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                className="block rounded-2xl px-4 py-4 font-bold uppercase tracking-[0.1em] text-graphite"
              >
                {t(item.labelKey)}
              </NavLink>
            ),
          )}
        </div>
        <div className="absolute bottom-0 left-0 w-full border-t border-forest/10 bg-ocean p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-white">
          <LanguageSelector compact />
          <p className="mt-4 text-sm text-white/80">{t('common.tagline')}</p>
        </div>
      </aside>
    </header>
  );
}

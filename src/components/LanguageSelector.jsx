import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiChevronDown } from 'react-icons/fi';
import { languages } from '../data/siteData';

const languageFlags = {
  es: 'https://flagcdn.com/w40/es.png',
  en: 'https://flagcdn.com/w40/gb.png',
  de: 'https://flagcdn.com/w40/de.png',
  nl: 'https://flagcdn.com/w40/nl.png',
};

export default function LanguageSelector({ compact = false }) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const onClickOutside = (event) => {
      if (!wrapperRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, []);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem('tierraAzulLanguage', code);
    document.documentElement.lang = code;
    setOpen(false);
  };

  const currentLanguage = languages.find((language) => language.code === i18n.language) || languages[0];

  return (
    <div className="relative" aria-label="Language selector" ref={wrapperRef}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={`inline-flex items-center gap-2 rounded-full border font-bold transition duration-300 ${
          compact
            ? 'min-h-10 px-3 py-2 text-xs border-white/30 bg-white/10 text-white hover:border-limeSoft'
            : 'border-white/25 bg-white/10 text-white hover:border-limeSoft'
        }`}
      >
        <img
          src={languageFlags[currentLanguage.code]}
          alt={currentLanguage.label}
          className="h-3.5 w-5 rounded-[2px] object-cover"
          loading="lazy"
        />
        <span>{currentLanguage.label}</span>
        <FiChevronDown className={`transition ${open ? 'rotate-180' : ''}`} />
      </button>

      <div
        className={`absolute z-[120] mt-2 overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-nav transition-all duration-200 ${
          compact ? 'bottom-full left-0 mb-2 w-44' : 'right-0 top-full w-36'
        } ${
          open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1 opacity-0'
        }`}
      >
        {languages.map((language) => (
        <button
          key={language.code}
          type="button"
          onClick={() => changeLanguage(language.code)}
            className={`flex min-h-10 w-full items-center gap-3 px-4 py-2.5 text-left text-[12px] font-bold transition ${
            i18n.language === language.code
                ? 'bg-mist text-forest'
                : 'text-graphite hover:bg-mist hover:text-forest'
          }`}
        >
            <img
              src={languageFlags[language.code]}
              alt={language.label}
              className="h-3.5 w-5 rounded-[2px] object-cover"
              loading="lazy"
            />
            <span>{language.label}</span>
        </button>
      ))}
      </div>
    </div>
  );
}

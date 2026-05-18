import { FiAward, FiGlobe, FiShield, FiTruck } from 'react-icons/fi';

export const languages = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'nl', label: 'NL' },
];

export const navItems = [
  { labelKey: 'nav.home', path: '/' },
  {
    labelKey: 'nav.about',
    path: '/empresa',
    children: [
      { labelKey: 'nav.company', path: '/empresa' },
      { labelKey: 'nav.strategy', path: '/estrategia' },
      { labelKey: 'nav.quality', path: '/calidad' },
      { labelKey: 'nav.social', path: '/responsabilidad-social' },
    ],
  },
  { labelKey: 'nav.social', path: '/responsabilidad-social' },
  { labelKey: 'nav.products', path: '/productos' },
  { labelKey: 'nav.gallery', path: '/galeria' },
  { labelKey: 'nav.contact', path: '/contacto' },
];

export const footerLinks = [
  { labelKey: 'nav.company', path: '/empresa' },
  { labelKey: 'nav.strategy', path: '/estrategia' },
  { labelKey: 'nav.products', path: '/productos' },
  { labelKey: 'nav.gallery', path: '/galeria' },
  { labelKey: 'nav.privacy', path: '/privacidad' },
];

export const heroImages = [
  '/hero-sandia.png',
  '/hero-melon.png',
];

export const productImages = {
  melon: '/hero-melon.png',
  watermelon: '/hero-sandia.png',
};

export const galleryItems = [
  {
    category: 'field',
    image: 'https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=900&q=80',
  },
  {
    category: 'product',
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=900&q=80',
  },
  {
    category: 'process',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=900&q=80',
  },
  {
    category: 'field',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80',
  },
  {
    category: 'product',
    image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=900&q=80',
  },
  {
    category: 'process',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=900&q=80',
  },
];

export const featureCards = [
  { icon: FiAward, title: 'home.pillars.0' },
  { icon: FiShield, title: 'home.pillars.1' },
  { icon: FiTruck, title: 'home.pillars.2' },
  { icon: FiGlobe, title: 'common.tagline' },
];

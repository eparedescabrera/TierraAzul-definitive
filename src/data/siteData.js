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

export const youtubeVideos = {
  url: import.meta.env.VITE_YOUTUBE_URL || 'https://youtu.be/94Bw5Hm29xM?si=D6BRmqe4wyIT4H8r',
  videoId: import.meta.env.VITE_YOUTUBE_VIDEO_ID || '94Bw5Hm29xM',
};

export const pageHeroImages = {
  empresa: '/empresa-bg.png',
  estrategia: '/plantacion.JPG',
  productos: '/DJI_0025.JPG',
  galeria: '/DJI_0019.JPG',
  calidad: '/DJI_0013.JPG',
  social: '/DJI_0005.JPG',
  contacto: '/vivero.png',
  privacidad: '/DJI_0004.JPG',
  melon: '/plantacion.JPG',
  sandia: '/vivero.png',
};

export const heroImages = [
  '/DJI_0025.JPG',
  '/plantacion.JPG',
  '/vivero.png',
];

export const productImages = {
  melon: '/hero-melon.png',
  watermelon: '/hero-sandia.png',
};

export const galleryItems = [
  { category: 'field', image: '/DJI_0019.JPG' },
  { category: 'field', image: '/DJI_0013.JPG' },
  { category: 'field', image: '/DJI_0005.JPG' },
  { category: 'field', image: '/DJI_0004.JPG' },
  { category: 'process', image: '/vivero.png' },
  { category: 'field', image: '/plantacion.JPG' },
  { category: 'product', image: '/DJI_0025.JPG' },
];

export const wasteCollectionGallery = [
  'https://images.unsplash.com/photo-1532996122724-e3c354a0d15e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1618477388954-7857f7efbe23?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
];

export const wasteCollectionTeam = [
  {
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
  },
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  },
  {
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
  },
];

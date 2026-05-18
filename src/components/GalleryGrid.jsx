import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiSearch, FiX } from 'react-icons/fi';
import { galleryItems } from '../data/siteData';

const filters = ['all', 'field', 'product', 'process'];

export default function GalleryGrid({ limit }) {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  const visibleItems = useMemo(() => {
    const items = activeFilter === 'all' ? galleryItems : galleryItems.filter((item) => item.category === activeFilter);
    return limit ? items.slice(0, limit) : items;
  }, [activeFilter, limit]);

  const filterLabel = (filter) => {
    if (filter === 'all') return t('common.all');
    return t(`gallery.filters.${filter}`);
  };

  return (
    <>
      {!limit && (
        <div className="mb-10 flex flex-wrap justify-center gap-3" data-aos="fade-up">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 text-sm font-bold uppercase tracking-[0.12em] transition ${
                activeFilter === filter ? 'bg-forest text-white' : 'bg-mist text-forest hover:bg-limeSoft hover:text-ocean'
              }`}
            >
              {filterLabel(filter)}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item, index) => (
          <button
            key={`${item.image}-${index}`}
            type="button"
            onClick={() => setSelected(item)}
            className="group relative h-72 overflow-hidden rounded-[2rem] text-left shadow-card"
            data-aos="zoom-in"
          >
            <img
              src={item.image}
              alt={filterLabel(item.category)}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-ocean/80 via-ocean/10 to-transparent opacity-80" />
            <span className="absolute inset-0 flex items-center justify-center bg-forest/70 opacity-0 transition duration-300 group-hover:opacity-100">
              <FiSearch className="text-4xl text-white" />
            </span>
            <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-forest">
              {filterLabel(item.category)}
            </span>
          </button>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-ocean/90 p-5" onClick={() => setSelected(null)}>
          <button
            type="button"
            className="absolute right-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-forest"
            aria-label={t('common.close')}
          >
            <FiX size={24} />
          </button>
          <img
            src={selected.image}
            alt={filterLabel(selected.category)}
            className="max-h-[82vh] max-w-5xl rounded-[2rem] object-contain shadow-nav"
          />
        </div>
      )}
    </>
  );
}

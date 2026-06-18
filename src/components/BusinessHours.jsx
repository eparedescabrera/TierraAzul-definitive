import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiClock } from 'react-icons/fi';
import { getBusinessStatus } from '../utils/businessHours';

export default function BusinessHours() {
  const { t, i18n } = useTranslation();
  const [status, setStatus] = useState(() =>
    getBusinessStatus(i18n.language, t('contactPage.scheduleDays')),
  );

  useEffect(() => {
    const update = () => setStatus(getBusinessStatus(i18n.language, t('contactPage.scheduleDays')));

    update();
    const intervalId = window.setInterval(update, 60_000);
    return () => window.clearInterval(intervalId);
  }, [i18n.language, t]);

  return (
    <div className="grid gap-4">
      <span
        className={`inline-flex w-fit items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] ${
          status.isOpen ? 'bg-forest/10 text-forest' : 'bg-graphite/10 text-graphite/70'
        }`}
      >
        <span
          className={`mr-2 inline-block h-2 w-2 rounded-full ${
            status.isOpen ? 'bg-forest animate-pulse' : 'bg-graphite/40'
          }`}
          aria-hidden="true"
        />
        {status.isOpen ? t('contactPage.hoursOpen') : t('contactPage.hoursClosed')}
      </span>
      <span className="flex items-center gap-3 text-graphite/75">
        <FiClock className="shrink-0 text-forest" />
        {status.scheduleLabel}
      </span>
    </div>
  );
}

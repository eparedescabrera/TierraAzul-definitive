const TIMEZONE = 'America/Costa_Rica';
const OPEN_HOUR = 8;
const OPEN_MINUTE = 0;
const CLOSE_HOUR = 16;
const CLOSE_MINUTE = 0;

const localeMap = {
  es: 'es-CR',
  en: 'en-US',
  de: 'de-DE',
  nl: 'nl-NL',
};

const weekdayIndex = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

function getCostaRicaNow() {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: TIMEZONE,
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).formatToParts(new Date());

  const value = (type) => parts.find((part) => part.type === type)?.value ?? '0';

  return {
    day: weekdayIndex[value('weekday')] ?? 0,
    hour: Number.parseInt(value('hour'), 10),
    minute: Number.parseInt(value('minute'), 10),
  };
}

function formatTime12(hour, minute, language) {
  const locale = localeMap[language] || localeMap.es;
  const date = new Date(2000, 0, 1, hour, minute);

  return new Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(date);
}

export function getBusinessStatus(language, daysLabel) {
  const { day, hour, minute } = getCostaRicaNow();
  const nowMinutes = hour * 60 + minute;
  const openMinutes = OPEN_HOUR * 60 + OPEN_MINUTE;
  const closeMinutes = CLOSE_HOUR * 60 + CLOSE_MINUTE;
  const isWeekday = day >= 1 && day <= 5;
  const isOpen = isWeekday && nowMinutes >= openMinutes && nowMinutes < closeMinutes;

  const openTime = formatTime12(OPEN_HOUR, OPEN_MINUTE, language);
  const closeTime = formatTime12(CLOSE_HOUR, CLOSE_MINUTE, language);
  const scheduleLabel = `${daysLabel} ${openTime} - ${closeTime}`;

  return { isOpen, scheduleLabel };
}

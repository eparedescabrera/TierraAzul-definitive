import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';

const endpoint = `https://formsubmit.co/ajax/${import.meta.env.VITE_FORMSUBMIT_EMAIL || 'info@tierraazul1981.com'}`;

export default function ContactForm() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (!response.ok) throw new Error('Form submit failed');
      event.currentTarget.reset();
      Swal.fire({
        icon: 'success',
        title: t('contactPage.success'),
        confirmButtonColor: '#0b6b2a',
      });
    } catch {
      Swal.fire({
        icon: 'error',
        title: t('contactPage.error'),
        text: t('topbar.email'),
        confirmButtonColor: '#0b6b2a',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="leaf-card" data-aos="fade-up">
      <h2 className="text-2xl font-extrabold text-ocean">{t('contactPage.formTitle')}</h2>
      <div className="mt-7 grid gap-5">
        <label className="grid gap-2 text-sm font-bold text-graphite">
          {t('contactPage.name')}
          <input
            name="name"
            required
            className="rounded-2xl border border-forest/15 bg-mist px-4 py-3 outline-none transition focus:border-forest focus:bg-white"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-graphite">
          {t('contactPage.email')}
          <input
            type="email"
            name="email"
            required
            className="rounded-2xl border border-forest/15 bg-mist px-4 py-3 outline-none transition focus:border-forest focus:bg-white"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-graphite">
          {t('contactPage.message')}
          <textarea
            name="message"
            required
            rows="5"
            className="resize-none rounded-2xl border border-forest/15 bg-mist px-4 py-3 outline-none transition focus:border-forest focus:bg-white"
          />
        </label>
        <input type="hidden" name="_subject" value="Nuevo contacto desde Tierra Azul 1981" />
        <button type="submit" disabled={loading} className="btn-primary disabled:cursor-not-allowed disabled:opacity-60">
          {loading ? '...' : t('contactPage.send')}
        </button>
      </div>
    </form>
  );
}

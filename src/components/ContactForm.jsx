import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import { validateContactForm } from '../utils/contactFormValidation';

const endpoint = `https://formsubmit.co/ajax/${import.meta.env.VITE_FORMSUBMIT_EMAIL || 'waju@grupenca.com'}`;

const inputClassName =
  'rounded-2xl border bg-mist px-4 py-3 outline-none transition focus:bg-white';
const inputValidClassName = 'border-forest/15 focus:border-forest';
const inputInvalidClassName = 'border-red-400 focus:border-red-500';

export default function ContactForm() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [selectedFileName, setSelectedFileName] = useState('');

  const getInputClassName = (field) =>
    `${inputClassName} ${errors[field] ? inputInvalidClassName : inputValidClassName}`;

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name')?.toString() || '';
    const lastName = formData.get('lastName')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const document = formData.get('attachment');

    const validationErrors = validateContactForm({
      name,
      lastName,
      email,
      document: document instanceof File && document.size > 0 ? document : null,
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (!response.ok) throw new Error('Form submit failed');

      form.reset();
      setSelectedFileName('');
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

  const clearFieldError = (field) => {
    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      encType="multipart/form-data"
      className="leaf-card"
      data-aos="fade-up"
      noValidate
    >
      <h2 className="text-2xl font-extrabold text-ocean">{t('contactPage.formTitle')}</h2>
      <div className="mt-7 grid gap-5">
        <label className="grid gap-2 text-sm font-bold text-graphite">
          {t('contactPage.name')}
          <input
            name="name"
            autoComplete="given-name"
            className={getInputClassName('name')}
            onChange={() => clearFieldError('name')}
          />
          {errors.name && (
            <span className="text-xs font-semibold text-red-600">{t(`contactPage.validation.${errors.name}`)}</span>
          )}
        </label>

        <label className="grid gap-2 text-sm font-bold text-graphite">
          {t('contactPage.lastName')}
          <input
            name="lastName"
            autoComplete="family-name"
            className={getInputClassName('lastName')}
            onChange={() => clearFieldError('lastName')}
          />
          {errors.lastName && (
            <span className="text-xs font-semibold text-red-600">
              {t(`contactPage.validation.${errors.lastName}`)}
            </span>
          )}
        </label>

        <label className="grid gap-2 text-sm font-bold text-graphite">
          {t('contactPage.email')}
          <input
            type="email"
            name="email"
            autoComplete="email"
            className={getInputClassName('email')}
            onChange={() => clearFieldError('email')}
          />
          {errors.email && (
            <span className="text-xs font-semibold text-red-600">{t(`contactPage.validation.${errors.email}`)}</span>
          )}
        </label>

        <label className="grid gap-2 text-sm font-bold text-graphite">
          {t('contactPage.message')}
          <textarea
            name="message"
            required
            rows="5"
            className={`${getInputClassName('message')} resize-none`}
          />
        </label>

        <div className="grid gap-2 text-sm font-bold text-graphite">
          <span>{t('contactPage.document')}</span>
          <label
            className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border border-dashed px-4 py-6 transition hover:bg-mist/70 ${
              errors.document ? 'border-red-400 bg-red-50/40' : 'border-forest/20 bg-mist/40'
            }`}
          >
            <span className="text-sm font-semibold text-ocean">{t('contactPage.documentAction')}</span>
            <span className="text-xs font-normal text-graphite/70">{t('contactPage.documentHint')}</span>
            {selectedFileName && (
              <span className="text-xs font-semibold text-forest">{selectedFileName}</span>
            )}
            <input
              type="file"
              name="attachment"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              className="sr-only"
              onChange={(event) => {
                const file = event.target.files?.[0];
                setSelectedFileName(file?.name || '');
                clearFieldError('document');
              }}
            />
          </label>
          {errors.document && (
            <span className="text-xs font-semibold text-red-600">
              {t(`contactPage.validation.${errors.document}`)}
            </span>
          )}
        </div>

        <input type="hidden" name="_subject" value="Nuevo contacto desde Tierra Azul 1981" />
        <button type="submit" disabled={loading} className="btn-primary disabled:cursor-not-allowed disabled:opacity-60">
          {loading ? '...' : t('contactPage.send')}
        </button>
      </div>
    </form>
  );
}

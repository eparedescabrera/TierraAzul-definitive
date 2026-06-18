import { useTranslation } from 'react-i18next';
import { FiMail, FiUser } from 'react-icons/fi';
import SectionHeader from './SectionHeader';

const departmentKeys = [
  'humanResources',
  'logistics',
  'environmental',
  'generalManagement',
  'adminAccounting',
];

export default function DepartmentContacts() {
  const { t } = useTranslation();
  const departments = t('contactPage.departments', { returnObjects: true });

  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <SectionHeader
          title={t('contactPage.departmentsTitle')}
          text={t('contactPage.departmentsSubtitle')}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departmentKeys.map((key, index) => {
            const dept = departments[key];
            return (
              <article
                key={key}
                className="leaf-card flex flex-col border-t-4 border-t-forest"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <h3 className="text-lg font-extrabold uppercase tracking-[0.08em] text-ocean">{dept.name}</h3>
                <div className="mt-5 grid flex-1 gap-4 text-sm text-graphite/80">
                  <div className="flex items-start gap-3">
                    <FiUser className="mt-0.5 shrink-0 text-forest" size={18} />
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-[0.1em] text-graphite/50">
                        {t('contactPage.personLabel')}
                      </span>
                      <span className="mt-1 block font-semibold text-graphite">{dept.person}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiMail className="mt-0.5 shrink-0 text-forest" size={18} />
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-[0.1em] text-graphite/50">
                        {t('contactPage.emailLabel')}
                      </span>
                      <a
                        href={`mailto:${dept.email}`}
                        className="mt-1 block break-all font-semibold text-forest transition hover:text-leaf"
                      >
                        {dept.email}
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

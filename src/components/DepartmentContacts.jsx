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
                className="dept-card group"
                data-aos="fade-up"
                data-aos-delay={index * 80}
                tabIndex={0}
              >
                <div className="dept-card__inner">
                  <div className="dept-card__face dept-card__front">
                    <h3 className="text-lg font-extrabold uppercase tracking-[0.08em] text-ocean sm:text-xl">
                      {dept.name}
                    </h3>
                    <div className="mt-auto flex flex-col gap-4 pt-8">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-forest/10 text-forest">
                        <FiMail size={22} />
                      </span>
                      <p className="dept-card__hint text-sm font-semibold text-graphite/55">
                        {t('contactPage.viewContact')}
                      </p>
                    </div>
                  </div>

                  <div className="dept-card__face dept-card__back">
                    <h3 className="text-base font-extrabold uppercase tracking-[0.08em] text-ocean">
                      {dept.name}
                    </h3>
                    <div className="mt-5 grid flex-1 gap-4 text-sm text-graphite/80">
                      {dept.person && (
                        <div className="flex items-start gap-3">
                          <FiUser className="mt-0.5 shrink-0 text-forest" size={18} />
                          <div>
                            <span className="block text-xs font-bold uppercase tracking-[0.1em] text-graphite/50">
                              {t('contactPage.personLabel')}
                            </span>
                            <span className="mt-1 block font-semibold text-graphite">{dept.person}</span>
                          </div>
                        </div>
                      )}
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

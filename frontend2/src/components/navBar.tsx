import React from "react";
import { useTranslation } from "react-i18next";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type NavItem = {
  label: string;
  items: string[];
};

const NavigationBar: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const { t, i18n } = useTranslation();
const NAV_ITEMS: NavItem[] = [
  {
    label: t('digital_services'),
    items: [t('application_portal'), t('students_portal'), t('teachers_portal'), t('admins_portal'), t('e_library')],
  },
  {
    label: t('deanships'),
    items: [t('dean_students'), t('dean_admission'), t('dean_research')],
  },
  {
    label: t('secretariats'),
    items: [t('secret_science'), t('secret_lib')],
  },
  {
    label: t('faculties'),
    items: ["Help Center", "Contact Support", "System Status", "Report a Bug"],
  },
  {
    label: t('research_centers'),
    items: [t('center_1'), t('center_2'), t('center_3')],
  },
];

  return (
    <nav
      className="sticky top-0 z-20 w-full bg-slate-950 border-b border-slate-800"
      onMouseLeave={() => setOpenIndex(null)}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <span className="text-lg font-semibold tracking-tight text-white">
          Acme<span className="text-indigo-400">.</span>
        </span>

        <ul className="flex items-center gap-1">
	  <li className="rounded-md px-3 py-2 text-sm font-medium transition-colors">
	    <button 
	      className="text-white"
	      onClick={() => {
    		const newLang = i18n.language === 'en' ? 'ar' : 'en';
    		i18n.changeLanguage(newLang);
	      }}	
	      >
	        {t('language')}
	    </button>
	  </li>
	  <li className="rounded-md px-3 py-2 text-sm text-white font-medium transition-colors">{t('main')}</li>
	  <li className="rounded-md px-3 py-2 text-sm text-white font-medium transition-colors">{t('about_us')}</li>
          {NAV_ITEMS.map((item, index) => (
            <li
              key={item.label}
              onMouseEnter={() => setOpenIndex(index)}
              className="relative"
            >
              <button
                type="button"
                className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  openIndex === index
                    ? "text-white"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Full-width dropdown panel, spans the entire nav bar */}
      <div
        className={`absolute z-10 left-0 top-full w-full overflow-hidden border-b border-slate-800 bg-slate-900 shadow-xl transition-all duration-200 ease-out ${
          openIndex !== null
            ? "max-h-96 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        {openIndex !== null && (
          <div className="mx-auto max-w-7xl px-6 py-6">
            <ul className="flex flex-wrap gap-x-10 gap-y-3">
              {NAV_ITEMS[openIndex].items.map((subItem) => (
                <li key={subItem}>
                  <a
                    href="#"
                    className="text-sm text-slate-300 transition-colors hover:text-indigo-400"
                  >
                    {subItem}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;

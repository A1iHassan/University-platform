import React from "react";
import { useTranslation } from "react-i18next";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router";

type NavSubItem = {
  name: string;
  path: string;
};

type NavItem = {
  label: string;
  items: NavSubItem[];
};

const NavigationBar: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const { t, i18n } = useTranslation();

  const NAV_ITEMS: NavItem[] = [
    {
      label: t("digital_services"),
      items: [
        { name: t("application_portal"), path: "/applications" },
        { name: t("students_portal"), path: "/login/student" },
        { name: t("teachers_portal"), path: "/login/teacher" },
        { name: t("admins_portal"), path: "/login/admin" },
        { name: t("e_library"), path: "/library" },
      ],
    },
    {
      label: t("deanships"),
      items: [
        { name: t("dean_students"), path: "/deanship/students" },
        { name: t("dean_admission"), path: "/deanship/applications" },
        { name: t("dean_research"), path: "/deanship/research" },
      ],
    },
    {
      label: t("secretariats"),
      items: [
        { name: t("secret_science"), path: "/secretariat/science" },
        { name: t("secret_lib"), path: "/secretariat/lib" },
      ],
    },
    {
      label: t("faculties"),
      items: [
        { name: "Help Center", path: "" },
        { name: "Contact Support", path: "" },
        { name: "System Status", path: "" },
        { name: "Report a Bug", path: "" },
      ],
    },
    {
      label: t("research_centers"),
      items: [
        { name: t("center_1"), path: "" },
        { name: t("center_2"), path: "" },
        { name: t("center_3"), path: "" },
      ],
    },
  ];

  return (
    <nav
      className="sticky top-0 z-20 w-full bg-slate-950 border-b border-slate-800"
      onMouseLeave={() => setOpenIndex(null)}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <span className="text-lg font-semibold tracking-tight text-white flex gap-1 items-center self-end">
   	<img src="/logo.svg" alt="logo" width={30} height={30}/>
	{t('uni_name')}
        </span>
        <ul className="flex items-center gap-1">
          <li className="rounded-md px-3 py-2 text-sm font-medium transition-colors">
            <button
              className="text-white"
              onClick={() => {
                const newLang = i18n.language === "en" ? "ar" : "en";
                i18n.changeLanguage(newLang);
              }}
            >
              {t("language")}
            </button>
          </li>
          <Link
            to={{ pathname: "/" }}
            className="rounded-md px-3 py-2 text-sm text-white font-medium transition-colors"
          >
            {t("main")}
          </Link>
          <Link
            to={{ pathname: "/aboutus" }}
            className="rounded-md px-3 py-2 text-sm text-white font-medium transition-colors"
          >
            {t("about_us")}
          </Link>
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
	  <li className=""><Link to={{pathname: "/login"}} className="text-white">{t('log_in')}</Link></li>
        </ul>
      </div>

      {/* Full-width dropdown panel, spans the entire nav bar */}
      <div
        className={`flex justify-center absolute z-10 left-0 top-full w-full overflow-hidden border-b border-slate-800 bg-slate-900 shadow-xl transition-all duration-200 ease-out ${
          openIndex !== null
            ? "max-h-96 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        {openIndex !== null && (
          <div className="h-40 px-6 py-6">
            <ul className="flex h-full flex-wrap items-center gap-y-3 w-full">
              {NAV_ITEMS[openIndex].items.map((subItem, index) => (
                <li key={subItem.name}>
                  <Link
                    to={{ pathname: subItem.path }}
                    className={`text-sm  h-90 text-slate-300 border-l px-15 py-8 ${index === 0 ? "border-r" : ""} border-white/40  transition-colors hover:text-indigo-400 hover:bg-white/5`}
                  >
                    {subItem.name}
                  </Link>
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

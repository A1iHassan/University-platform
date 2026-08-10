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
  const [isLangOpen, setIsLangOpen] = React.useState(false);
  const { t, i18n } = useTranslation();

  const NAV_ITEMS: NavItem[] = [
    {
      label: t("about_us"),
      items: [
        { name: t("معلومات التواصل"), path: "/" },
        { name: t("معرض الصور و الفيديوهات"), path: "" },
        { name: t("إحصائيات الجامعة"), path: "" },
        { name: t("الشراكات و الاتفاقيات"), path: "" },
        { name: t("مجالس و لجان الجامعة"), path: "" },
        { name: t("القوانين و اللوائح"), path: "" },
      ],
    },
    {
      label: t("digital_services"),
      items: [
        { name: t("application_portal"), path: "/applications" },
        { name: t("students_portal"), path: "/applications/student-apply" },
        { name: t("teachers_portal"), path: "/applications/apply" },
        { name: t("admins_portal"), path: "/applications/admins-apply" },
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
        { name: t("center_1"), path: "https://csfs-strategy-future-sciences-231892899012.us-west1.run.app/" },
        { name: t("center_2"), path: "" },
        { name: t("center_3"), path: "" },
      ],
    },
  ];

  return (
    <nav
      className="sticky top-0 z-20 w-full bg-[#d67528ff] shadow-xl/10"
      onMouseLeave={() => setOpenIndex(null)}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <span className="text-lg font-semibold tracking-tight my-auto text-white flex gap-1 items-center self-end">
   	<img src="/logo.svg" alt="logo" width={30} height={30}/>
	{t('uni_name')}
        </span>
        <ul className="flex items-center gap-1">
         <li
            className="relative"
            onMouseEnter={() => setIsLangOpen(true)}
            onMouseLeave={() => setIsLangOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white transition-colors"
            >
              {t("language")}
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform duration-200  ${
                  isLangOpen ? "rotate-180" : ""
                }`}
              />
            </button>
 
            <ul
              className={`absolute right-0 top-full z-10 w-32 overflow-hidden rounded border border-[#d67528] bg-[#d67528ff]/80 shadow-xl/20 transition-all duration-200 ease-out ${
                isLangOpen
                  ? "max-h-40 opacity-100"
                  : "pointer-events-none max-h-0 opacity-0"
              }`}
            >
              <li>
                <button
                  type="button"
                  onClick={() => i18n.changeLanguage("ar")}
                  className="block w-full px-3 py-2 text-left text-sm text-slate-50 transition-colors hover:bg-slate-50 hover:text-[#d67528]"
                >
                  العربية
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => i18n.changeLanguage("en")}
                  className="block w-full px-3 py-2 text-left text-sm text-slate-50 transition-colors hover:bg-slate-50 hover:text-[#d67528]"
                >
                  English
                </button>
              </li>
            </ul>
          </li> 
          <Link
            to={{ pathname: "/" }}
            className="rounded-md px-3 py-2 text-sm text-white font-medium transition-colors"
          >
            {t("main")}
          </Link>
          {NAV_ITEMS.map((item, index) => (
            <li
              key={item.label}
              onMouseEnter={() => setOpenIndex(index)}
              className="relative"
            >
              <button
                type="button"
                className={`flex items-center h-15 gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-[#d67528ff] hover:bg-slate-50 ${
                  openIndex === index
                    ? "text-white"
                    : "text-slate-300 hover:text-[#d67528ff] hover:bg-slate-50"
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
        className={`flex justify-center absolute z-10 left-0 top-full w-full overflow-hidden bg-slate-50 shadow-xl transition-all duration-200 ease-out ${
          openIndex !== null
            ? "max-h-96 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        {openIndex !== null && (
          <div className="h-20 px-6">
            <ul className="flex h-full flex-wrap items-center gap-y-3 w-full">
              {NAV_ITEMS[openIndex].items.map((subItem, index) => (
                <li key={subItem.name}>
                  <Link
                    to={{ pathname: subItem.path }}
                    className={`text-sm  h-90 text-[#d67528ff] border-l px-15 py-8 ${index === 0 ? "border-r" : ""} border-[#d67528ff]  transition-colors hover:text-slate-50 hover:bg-[#d67528ff]`}
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

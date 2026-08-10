import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import {
  BuildingLibraryIcon,
  AcademicCapIcon,
  BeakerIcon,
  BookOpenIcon,
  ComputerDesktopIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const Faculties = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("faculties_details"),
      to: "/faculties",
      icon: BuildingLibraryIcon,
    },
    {
      title: t("post_grads_programs"),
      to: "/postgraduate",
      icon: AcademicCapIcon,
    },
    {
      title: "Research",
      to: "/research",
      icon: BeakerIcon,
    },
    {
      title: "Scientific Journals",
      to: "/journals",
      icon: BookOpenIcon,
    },
    {
      title: "E-Learning",
      to: "/elearning",
      icon: ComputerDesktopIcon,
    },
    {
      title: "Student Affairs",
      to: "/students",
      icon: UserGroupIcon,
    },
    {
      title: "Admissions",
      to: "/admissions",
      icon: ClipboardDocumentListIcon,
    },
    {
      title: "International Relations",
      to: "/international",
      icon: GlobeAltIcon,
    },
  ];

  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-md mb-12">
          <div className="mb-6">
            <h2 className="text-4xl font-bold text-slate-900">
              {t("faculties_title")}
            </h2>

            <div className="mt-3 h-1 w-24 rounded-full bg-[#d67528]" />
          </div>

          <p className="max-w-4xl text-lg leading-8 text-slate-600">
            {t("faculties_section")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                to={service.to}
                className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Top Section */}
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-[#d67528] via-[#e68b44] to-[#f4c28d]">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-12 w-12 text-[#d67528]" />
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="flex h-28 items-center justify-center px-6">
                  <h3 className="text-center text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faculties;

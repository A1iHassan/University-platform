import {
  BuildingLibraryIcon,
  ClipboardDocumentListIcon,
  UsersIcon,
  AcademicCapIcon,
  MegaphoneIcon,
  ClockIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

const stats = [
  {
    icon: BuildingLibraryIcon,
    value: "4",
    label: "مجالس اإلدارة العليا",
  },
  {
    icon: UsersIcon,
    value: "20",
    label: "منصباً قيادياً بإدارة الجامعة",
  },
  {
    icon: ClipboardDocumentListIcon,
    value: "5",
    label: "لجان دائمة لمجلس األساتذة",
  },
  {
    icon: BookOpenIcon,
    value: "8",
    label: "فصول بالنظام األساسي",
  },
  {
    icon: AcademicCapIcon,
    value: "6",
    label: "إدارات وأقسام بأمانة الشؤون العلمية",
  },
  {
    icon: MegaphoneIcon,
    value: "4",
    label: "أقسام بإدارة العالقات العامة واإلعالم",
  },
  {
    icon: ClockIcon,
    value: "4",
    label: "سنوات مدة والية أمين الشؤون العلمية",
  },
];

const StatuteByNumbersSection = () => {
  return (
    <section dir="rtl" className="bg-slate-50 py-14 sm:py-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap');
        .sbn-font { font-family: 'Tajawal', 'Segoe UI', sans-serif; }
      `}</style>

      <div className="sbn-font mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">

          <div className="text-right">
            <h2 className="text-2xl font-bold text-slate-700 sm:text-4xl">
              الإحصائيات
            </h2>
            <span className="mt-2 block h-1 w-14 rounded-full bg-[#d67528] sm:mr-0 sm:ml-auto" />
            <p className="mt-3 max-w-md text-sm leading-7 text-slate-700/70">
              لمحة سريعة عن أبرز مكونات النظام األساسي إلدارة الجامعة
              التكنولوجية لعام 2024م.
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-3 rounded border border-slate-200 bg-white px-6 py-8 text-center shadow-sm transition-colors hover:border-[#d67528]/40"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d67528]/10">
                <Icon className="h-6 w-6 text-[#d67528]" strokeWidth={1.75} />
              </span>
              <span className="text-3xl font-extrabold text-slate-700">
                {value}
              </span>
              <span className="text-sm text-slate-700/70">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatuteByNumbersSection;

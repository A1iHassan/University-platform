
const goals = [
  "تأهيل أطر تدريسية وفكرية مدربة قادرة على قيادة وتطوير العملية التعليمية.",
  "تحقيق التميز في البرامج الأكاديمية واإلرتقاء بها وفق معايير وزارة التعليم العالي والبحث العلمي والمعايير الدولية.",
  "تحفيز الطالب على استخدام مكتسباتهم األكاديمية ومهاراتهم المعرفية في حياتهم المهنية.",
  "رفع مستوى األداء األكاديمي وتطوير تقييمه لضمان كفاءات علمية مؤهلة.",
  "إعداد قادة مزودين بالمعرفة والمهارات ليكونوا منتجين في المجتمع.",
  "توفير فرص التعليم المستمر للعاملين بسوق العمل ورفع مستوى األداء واالنتاجية.",
  "توثيق العلوم والبحوث وضمان الجودة والتميز العلمي.",
  "ربط الجامعة بالمؤسسات العلمية والثقافية والمهنية محلياً وإقليمياً ودولياً، وفتح آفاق توظيف الخريجين.",
];

const values = [
  "تعزيز روح المواطنة ومالئمتها مع األطر المنهجية",
  "األمانة والمصداقية والشفافية",
  "المسؤولية وإحترام الحريات واإلعتراف بالتنوع",
  "اإللتزام باألخالق الحميدة والسلوك القويم",
  "العمل وفق معايير الجودة الشاملة",
  "إتباع وسائل المحافظة على البيئة وتعزيز التوعية بها",
];

const duties = [
  { id: "29-7", text: "تنظيم أعمال مجلس األساتذة وأي لجان منبثقة عنه، ومتابعة تنفيذ قراراته وتوصياته." },
  { id: "30-7", text: "اإلشراف على أعمال لجنة ترقيات أعضاء هيئة التدريس." },
  { id: "31-7", text: "اإلشراف على تعيين أعضاء هيئة التدريس ومساعدي التدريس وتأهيلهم وتدريبهم." },
  { id: "32-7", text: "اإلشراف على وضع المناهج العلمية لكل البرامج بالكليات، ومراجعتها دورياً وتقييمها بالتعاون مع األساتذة المختصين." },
  { id: "33-7", text: "اإلشراف على قبول الطالب وتسجيلهم بالتنسيق مع اإلدارة العامة للقبول بوزارة التعليم العالي والبحث العلمي." },
  { id: "34-7", text: "النظر في طلبات تحويل الطالب إلى الجامعة، ومن كلية إلى أخرى، أو من قسم إلى آخر بالجامعة وفقاً للوائح." },
  { id: "35-7", text: "اإلشراف على وضع التقويم الدراسي بالجامعة." },
  { id: "36-7", text: "اإلشراف على االمتحانات وتحديد متطلباتها على مستوى الجامعة." },
  { id: "37-7", text: "حفظ وثائق االمتحانات واستخراج الشهادات الجامعية." },
  { id: "38-7", text: "تفعيل وضبط وترقية اللوائح األكاديمية، والتأكد من تطبيقها ونشرها ومتابعة تنفيذها." },
  { id: "39-7", text: "رصد العبء األكاديمي لألقسام المختلفة وتحديده." },
  { id: "40-7", text: "توفير المعلومات االحصائية الخاصة بالجوانب األكاديمية بالجامعة." },
  { id: "41-7", text: "إعداد ونشر دليل الجامعة دورياً." },
  { id: "42-7", text: "اإلشراف على إعداد إحتفاالت توزيع الدرجات العلمية والفخرية." },
];

const structureUnits = [
  "إدارة القبول والتسجيل",
  "إدارة االمتحانات والشهادات",
  "قسم التدريب وشؤون األساتذة",
  "قسم شؤون مجلس األساتذة",
  "قسم اإلحصاء والمعلومات",
  "قسم اإلشراف اإلداري",
];

const orgChain = [
  "أمين الشؤون العلمية",
  "نائب أمين الشؤون العلمية",
  "مديرو اإلدارات",
  "رؤساء األقسام",
];

const councils = [
  "مجلس األساتذة",
  "لجنة تعيينات أعضاء هيئة التدريس ومساعدي التدريس والتقنيين",
  "لجنة الترقيات ألعضاء هيئة التدريس ومساعدي التدريس والتقنيين",
  "اللجنة العليا للقبول والتسجيل والرسوم الدراسية",
  "اللجنة العليا لإلمتحانات",
  "اللجنة المركزية للمناهج",
  "اللجنة المركزية للنتائج",
];

const ScienceSecretariatPage = () => {
  return (
    <section dir="rtl" className="min-h-screen bg-slate-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap');
        .ssp-font { font-family: 'Tajawal', 'Segoe UI', sans-serif; }
      `}</style>

      <div className="ssp-font mx-auto max-w-4xl px-6 py-14 sm:py-20">

        {/* Title */}
        <h1 className="text-3xl font-extrabold leading-tight text-slate-700 sm:text-4xl">
          أمانة الشؤون العلمية
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-700/70">
          تعتبر أمانة الشؤون العلمية بالجامعة التكنولوجية المسؤول الرئيس عن
          إدارة كافة العملية األكاديمية بالجامعة، وفقاً للنظم األساسية
          إلدارة الجامعة لعام 2024م.
        </p>

        {/* Vision & Mission */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="mb-3 inline-block rounded-md bg-[#d67528]/10 px-2 py-0.5 text-[11px] font-bold text-[#d67528]">
              الرؤية
            </span>
            <p className="text-[15px] leading-8 text-slate-700">
              تتطلع األمانة بأن تكون الجامعة مؤسسة أكاديمية معرفية بحثية
              تقنية رائدة ومتميزة في التعليم العالي محلياً وإقليمياً
              وعالمياً، تنشط في خدمة المجتمع وفقاً لمعايير الجودة وضمانها
              وتأكيدها.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="mb-3 inline-block rounded-md bg-[#d67528]/10 px-2 py-0.5 text-[11px] font-bold text-[#d67528]">
              الرسالة
            </span>
            <p className="text-[15px] leading-8 text-slate-700">
              تسعى أمانة الشؤون العلمية بالجامعة إلى تقديم تعليم متميز عبر
              برامج أكاديمية وبحثية وتقنية متطورة ومبتكرة تواكب متغيرات
              العصر وقضايا المجتمع وتلبي حاجاتها.
            </p>
          </div>
        </div>

        {/* Goals */}
        <div className="mt-10">
          <h2 className="mb-4 text-lg font-bold text-slate-700">األهداف</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {goals.map((goal, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-[#d67528]" />
                <p className="text-sm leading-7 text-slate-700">{goal}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mt-10">
          <h2 className="mb-4 text-lg font-bold text-slate-700">القيم</h2>
          <div className="flex flex-wrap gap-2">
            {values.map((value, idx) => (
              <span
                key={idx}
                className="rounded-full border border-[#d67528]/30 bg-white px-4 py-1.5 text-xs font-medium text-slate-700"
              >
                {value}
              </span>
            ))}
          </div>
        </div>

        {/* Duties */}
        <div className="mt-12">
          <h2 className="mb-1 text-lg font-bold text-slate-700">
            مهام أمانة الشؤون العلمية
          </h2>
          <p className="mb-5 text-xs text-slate-700/60">
            باإلضافة للسلطات واإلختصاصات الواردة في قانون الجامعة التكنولوجية
            المؤقت لسنة 2022م والنظم واللوائح الصادرة بموجبه.
          </p>

          <div className="relative pr-6">
            <span className="absolute right-[11px] top-2 bottom-2 w-px bg-slate-200" />
            <ol className="space-y-4">
              {duties.map((item) => (
                <li key={item.id} className="relative flex gap-4">
                  <span className="relative z-10 mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full border-2 border-[#d67528] bg-white">
                    <span className="h-2 w-2 rounded-full bg-[#d67528]" />
                  </span>
                  <div className="flex-1 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-colors hover:border-[#d67528]/40">
                    <div className="mb-1.5">
                      <span className="rounded-md bg-[#d67528]/10 px-2 py-0.5 text-[11px] font-bold text-[#d67528]">
                        مادة {item.id}
                      </span>
                    </div>
                    <p className="text-[15px] leading-8 text-slate-700">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Councils where the Amin is rapporteur */}
        <div className="mt-12">
          <h2 className="mb-4 text-lg font-bold text-slate-700">
            المجالس واللجان التي يتولى أمين الشؤون العلمية مهام مقررها
          </h2>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <ul className="grid gap-3 sm:grid-cols-2">
              {councils.map((c, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 flex-none rounded-full bg-[#d67528]" />
                  <span className="text-sm text-slate-700">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Administrative structure */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div>
            <h2 className="mb-4 text-lg font-bold text-slate-700">
              الهياكل اإلدارية
            </h2>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <ul className="space-y-3">
                {structureUnits.map((unit, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-md bg-[#d67528]/10 text-[11px] font-bold text-[#d67528]">
                      {idx + 1}
                    </span>
                    <span className="text-sm text-slate-700">{unit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-bold text-slate-700">
              التنظيم اإلداري لألمانة
            </h2>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <ol className="space-y-3">
                {orgChain.map((role, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[#d67528]">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-slate-700">{role}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Footer / source */}
        <div className="mt-12 flex items-center gap-3 border-t border-slate-200 pt-6">
          <span className="h-px w-8 bg-[#d67528]" />
          <p className="text-xs text-slate-700/60">
            المصدر: النظم األساسية إلدارة الجامعة التكنولوجية لعام 2024م —
            الفصل السابع، أمانة الشؤون العلمية، ص 29–35.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScienceSecretariatPage;

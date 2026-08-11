
const responsibilities = [
  {
    id: "34-3",
    text: "مساعدة الطالب على الإستفادة القصوى تربوياً وعلمياً وإجتماعياً من إنتمائهم للجامعة، ومراعاة التقيد بالنظام فيما بينهم.",
  },
  {
    id: "35-3",
    text: "التأكد من حسن الأداء وترقيته بجميع أقسام إدارات شؤون الطلاب.",
  },
  {
    id: "36-3",
    text: "تنفيذ السياسة العامة الخاصة بالطلاب، وذلك بالتنسيق مع مجلس شؤون الطلاب وعمداء الكليات ومدراء المدارس والمعاهد والمراكز والأساتذة المشرفين، ومتابعة تنفيذ قرارات المجلس واللجان المنبثقة منه.",
  },
  {
    id: "37-3",
    text: "الإشراف على أوجه الأنشطة المختلفة للطلاب من العمل الأكاديمي التربوي، ووضع النظم للنشاطات اللاصفية وتقويمها.",
  },
  {
    id: "38-3",
    text: "الإحتفاظ والعناية بسجلات الطلاب، وخصوصاً الحالات المخالفة للائحة السلوك، ومحاسبة الطلاب بالتنسيق مع الكليات والشؤون العلمية.",
  },
  {
    id: "39-3",
    text: "الإشراف على أداء مشرفي شؤون الطلاب بالكليات، والتأكد من حسن الأداء بوحدات العمادة المختلفة وتطوير أدائها.",
  },
  {
    id: "40-3",
    text: "الإرشاد والرعاية الصحية والنفسية والتربوية للطلاب، ودراسة الظواهر السالبة لتقويمها وفقاً لما يقرره مجلس شؤون الطلاب.",
  },
  {
    id: "41-3",
    text: "الإشراف على أداء اتحاد الطلاب ومراقبة انتخابات الطلاب، للتأكد من حسن سيرها وفقاً لدستور الإتحاد.",
  },
  {
    id: "42-3",
    text: "الوقوف على تنفيذ لائحة سلوك الطلاب.",
  },
  {
    id: "43-3",
    text: "وضع الدراسات المساعدة للإلمام بموجهات سلوك الطلاب بالجامعة، وعلى الوضع الإقتصادي الحقيقي للطالب، لتتمكن الجامعة من وضع سياسات تساعد الطلاب الفقراء والمحتاجين.",
  },
  {
    id: "44-3",
    text: "رفع تقرير سنوي لمجلس شؤون الطلاب عن أداء العمادة، يشمل تقويم أدائها وضبط جودة الأداء بها.",
  },
];

const DeanStudentPage = () => {
  return (
    <section dir="rtl" className="min-h-screen bg-slate-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap');
        .dsp-font { font-family: 'Tajawal', 'Segoe UI', sans-serif; }
      `}</style>

      <div className="dsp-font mx-auto max-w-4xl px-6 py-14 sm:py-20">
        {/* Title */}
        <h1 className="text-3xl font-extrabold leading-tight text-slate-700 sm:text-4xl">
          عميد عمادة شؤون الطلاب
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-700/70">
          الإختصاصات والسلطات المنوطة بعميد عمادة شؤون الطلاب بموجب النظم
          الأساسية لإدارة الجامعة التكنولوجية لعام 2024م.
        </p>

        {/* Authority clause */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
          <p className="text-[15px] leading-8 text-slate-700">
            باإلضافة للسلطات والتخصصات الواردة في قانون الجامعة التكنولوجية
            المؤقت لسنة 2022م والنظم واللوائح الصادرة بموجبه، يكون لعميد
            عمادة شؤون الطلاب اإلختصاصات والسلطات التالية:
          </p>
        </div>

        {/* Responsibilities timeline */}
        <div className="relative mt-10 pr-6">
          <span className="absolute right-[11px] top-2 bottom-2 w-px bg-slate-200" />

          <ol className="space-y-5">
            {responsibilities.map((item) => (
              <li key={item.id} className="relative flex gap-4">
                <span className="relative z-10 mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full border-2 border-[#d67528] bg-white">
                  <span className="h-2 w-2 rounded-full bg-[#d67528]" />
                </span>

                <div className="flex-1 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-colors hover:border-[#d67528]/40">
                  <div className="mb-1.5 flex items-center gap-2">
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

        {/* Footer / source */}
        <div className="mt-12 flex items-center gap-3 border-t border-slate-200 pt-6">
          <span className="h-px w-8 bg-[#d67528]" />
          <p className="text-xs text-slate-700/60">
            المصدر: النظم األساسية إلدارة الجامعة التكنولوجية لعام 2024م —
            الفصل الثالث، إدارة الجامعة، ص 10–11.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DeanStudentPage;

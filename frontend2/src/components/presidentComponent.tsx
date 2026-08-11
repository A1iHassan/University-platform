import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const PresidentSection = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.dir = i18n.dir();
    document.documentElement.lang = i18n.language;
  }, [i18n, i18n.language]);

  return (
    <section className="bg-[#111111] bg-opacity-95 py-24 px-6 border-t-[3px] border-[#d67528]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Text Content Block */}
        <div className="flex-1 text-white">
          <h1 className="text-3xl font-bold mb-6">
            كلمة مدير الجامعة
          </h1>
          <p className="text-gray-300 leading-[2.2] text-sm md:text-base mb-8">
            الحمدلله رب العالمين الحمدلله الذي بنعمته تتم الصالحات ، وقد كلفنا الله في هذه الظروف المعلومة بإدارة هذه المؤسسة العريقة جامعة النيلين أكبر جامعة في السودان حيث يبلغ عدد طلابها حوالي مائة ألف طالب ، والعاملين بالجامعة أكثر من (3500) عامل ، توجد بالجامعة كل التخصصات العلمية (التطبيقية) والانسانية (الاجتماعية) . عند تسلمنا إدارة هذه الجامعة حرصنا في البداية على معالجة بعض القضايا المعلقة لذلك تم عقد العديد من الاجتماعات من : مجلس الأساتذة والعمداء والمجالس واللجان الاستشارية . الآن وقد فتحت الجام...
          </p>
          <div className="flex justify-start">
            <button className="bg-[#d67528] text-white px-8 py-2.5 rounded-sm hover:bg-[#b55d1c] transition-colors text-sm font-medium">
              قراءة المزيد
            </button>
          </div>
        </div>

        {/* Profile Image Card */}
        <div className="bg-[#e2e1e1] rounded-2xl p-4 shadow-2xl shrink-0 w-full md:w-[320px]">
          <img
            src="/president.png"
            alt="مدير الجامعة"
            className="w-full h-auto  object-cover mb-5"
          />
          <div className="text-center text-gray-900 pb-3">
            <h2 className="text-lg font-bold mb-2">مدير الجامعة</h2>
            <p className="text-sm font-medium text-gray-600">
              بروفيسور/ الهادي آدم محمد إبراهيم
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PresidentSection;

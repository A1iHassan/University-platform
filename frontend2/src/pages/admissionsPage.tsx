const Admission = () => {
  return (
    <main className="w-full flex flex-col justify-between" dir="rtl">
      <h1 className="mt-40 mr-15 text-4xl">بوابة التسجيل لعام 2026</h1>
      <span className="text-sm font-light text-slate-400 mr-15 mt-3 mb-15">
        تأكد من اكتمال جميع الملفات المرفقة مع التقديم ، و من ضحتها. سيصلك بريد إلكتروني لمتابعة مراحل التقديم
      </span>

      {/* Added flex container to align form and tips section side-by-side */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 w-full px-15 mb-20">
        
        <form className="shadow-xl/20 border border-slate-50 p-10 w-full lg:w-1/2 flex flex-col gap-3 bg-white rounded">
          <label htmlFor="fullName">الاسم الرباعي الكامل</label>
          <input id="fullName" type="text" className="outline-none border border-slate-200 rounded px-5 py-2 focus:border-slate-400 mb-5" />
          
          <label htmlFor="percentage">النسبة المؤوية</label>
          <input id="percentage" type="text" className="outline-none border border-slate-200 rounded px-5 py-2 focus:border-slate-400 mb-5" />
          
          <label htmlFor="track">المساق في الشهادة الثانوية</label>
          <input id="track" type="text" className="outline-none border border-slate-200 rounded px-5 py-2 focus:border-slate-400 mb-5" />
          
          <label htmlFor="college">الكلية المقدم إليها</label>
          <input id="college" type="text" className="outline-none border border-slate-200 rounded px-5 py-2 focus:border-slate-400 mb-5" />
          
          <label htmlFor="major">التخصص</label>
          <input id="major" type="text" className="outline-none border border-slate-200 rounded px-5 py-2 focus:border-slate-400 mb-5" />
          
          <label htmlFor="documents">أرفق الملفات المطلوبة</label>
          <input id="documents" type="file" className="outline-none border border-slate-200 rounded px-5 py-2 focus:border-slate-400 mb-5" />
          
          <button type="button" className="self-center py-4 px-8 shadow-lg/10 border border-slate-200 text-slate-600 hover:bg-slate-700 hover:text-slate-50 transition-colors duration-200 cursor-pointer rounded mt-5">
            حفظ و إرسال
          </button>
        </form>

        {/* New Tips Section */}
        <aside className="w-full lg:w-1/3 bg-slate-50 border border-slate-200 p-8 rounded shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            إرشادات التقديم والوثائق المطلوبة
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            يرجى تجهيز البيانات والملفات التالية قبل إرسال نموذج التسجيل:
          </p>

          <ul className="list-disc list-inside space-y-5 text-slate-800 font-medium">
            <li>
              قبول عام
              <ul className="list-[circle] list-inside pr-6 mt-3 space-y-2 text-sm text-slate-600 font-normal">
                <li>صورة مصدقة من الشهادة الثانوية.</li>
                <li>صورة من الهوية الوطنية أو جواز السفر.</li>
                <li>شهادة الميلاد الأصلية.</li>
                <li>4 صور شخصية حديثة.</li>
              </ul>
            </li>
            <li>
              قبول خاص
              <ul className="list-[circle] list-inside pr-6 mt-3 space-y-2 text-sm text-slate-600 font-normal">
                <li>جميع الوثائق المطلوبة في القبول العام.</li>
                <li>إيصال سداد الرسوم الخاصة بالاستمارة.</li>
                <li>شهادة إثبات حالة (في حال التقديم كأبناء عاملين أو فئات خاصة).</li>
                <li>خطاب ترشيح أو موافقة من الجهة المختصة (إن وجد).</li>
              </ul>
            </li>
          </ul>
        </aside>

      </div>
    </main>
  );
};

export default Admission;

import { Form } from "react-router";
import Footer from "../components/footer";
import NavBar from "../components/navBar";

const Admission = () => {
	return <main className="h-svh w-full flex flex-col justify-between">
	  <NavBar />
	  <h1 className="mt-40 mr-15 text-4xl">بوابة التسجيل اخريف عام 2026</h1>
	  <span className="text-sm font-light text-slate-400 mr-15 mt-3 mb-15">تأكد من اكتمال جميع الملفات المرفقة مع التقديم ، و من ضحتها. سيصلك بريد إلكتروني لمتابعة مراحل التقديم</span>
	  <Form method="post" className="self-center shadow-xl/20 border-slate-50 p-10 w-1/2 flex flex-col gap-3 mt-5 mb-20">
	    <label htmlFor="name">الاسم الرباعي الكامل</label>
	    <input type="text" className="ring-none outline-none border border-slate-200 rounded px-5 py-2 focus:border-slate-400 mb-5"/>
	    <label htmlFor="name">النسبة المؤوية</label>
	    <input type="text" className="ring-none outline-none border border-slate-200 rounded px-5 py-2 focus:border-slate-400 mb-5"/>
	    <label htmlFor="name">المساق في الشهادة الثانوية</label>
	    <input type="text" className="ring-none outline-none border border-slate-200 rounded px-5 py-2 focus:border-slate-400 mb-5"/>
	    <label htmlFor="name">الكلية المقدم إليها</label>
	    <input type="text" className="ring-none outline-none border border-slate-200 rounded px-5 py-2 focus:border-slate-400 mb-5"/>
	    <label htmlFor="name">التخصص</label>
	    <input type="text" className="ring-none outline-none border border-slate-200 rounded px-5 py-2 focus:border-slate-400 mb-5"/>
	    <label htmlFor="name">أرفق الملفات المطلوبة</label>
	    <input type="file" className="ring-none outline-none border border-slate-200 rounded px-5 py-2 focus:border-slate-400 mb-5"/>
	    <button className="self-center py-5 px-2 shadow-lg/10 border border-slate-50 text-slate-600  hover:bg-slate-700 hover:text-slate-50 transition-color duration-200 cursor-pointer rounded mt-10">حفظ و إرسال</button>
	  </Form>
	  <Footer />
	</main>
}

export default Admission;

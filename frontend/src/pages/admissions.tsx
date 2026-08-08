import { Form } from "react-router";
import Footer from "../components/footer";
import NavBar from "../components/navBar";

const Admission = () => {
	return <main className="h-svh w-full flex flex-col justify-between">
	  <NavBar />
	  <Form method="post" className="self-center my-auto shadow-xl/20 border-slate-50 p-10 w-1/2 flex flex-col gap-3 mt-40 mb-20">
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
	  </Form>
	  <Footer />
	</main>
}

export default Admission;

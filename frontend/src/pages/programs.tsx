import { Link } from "react-router";
import Footer from "../components/footer";
import NavBar from "../components/navBar";

const Pages = () => {
	return <main className="h-svh w-full flex flex-col justify-between">
	  <NavBar />
	  <div className="mx-auto mt-40 flex justify-center gap-10 h-[35svh]">
	    <Link to={{pathname: "/admissions"}} className="cursor-pointer flex flex-col items-start p-10 w-2/5 h-f shadow-xl/30 bg-[#d67528ff] text-slate-50 hover:bg-slate-50 hover:text-[#d67528ff] transition-color duration-200">
	      <h1 className="text-3xl font-semibold mb-10">بوابة التسجيل للطلاب الجدد</h1>
	      <span className="text-xl">سجل معنا في عن طريق البوابة الرقمية الخاصة بالجامعة و تابع مراحل التقديم أولا بأول</span>
	    </Link>
	    <Link to={{pathname: "/admittion-requirements"}} className="cursor-pointer flex flex-col items-start p-10 w-2/5 h-f shadow-xl/30 bg-[#d67528ff] text-slate-50 hover:bg-slate-50 hover:text-[#d67528ff] transition-color duration-200">
	      <h1 className="text-3xl font-semibold mb-10">تعرف على متطلبات التقديم</h1>
	      <span className="text-xl">ما هي متطلبات التقديم؟ معدلات قبول الكليات ، و المستندات المطلوبة أثناء التقديم تابع جميع التفاصيل اللازمة للتسجيل من هنا</span>
	    </Link>
	  </div>
	  <Footer />
	</main>
}

export default Pages;

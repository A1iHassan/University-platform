
// import { Form } from "react-router"
import { useNavigate } from "react-router";

const AdminsLoginPage = () => {
	const navigate = useNavigate()

	return (
		<div className="flex flex-col justify-center items-center h-[80svh]">
		<h1 className="text-4xl mb-8">
		  تسجيل الدخول
		</h1>
		<div
		  className="flex flex-col justify-center items-center gap-4 border border-slate-50 shadow-lg p-16 rounded-2xl min-w-1/4">
		  <label className="text-2xl font-light font-almarai self-start" htmlFor="name">اسم الموظف</label>
		  <span className="text-sm font-light text-slate-600 self-start">أدخل الاسم أو الرقم الجامعي</span>
		  <input className="outline-none w-full rounded-lg border-2 border-solid border-slate-200 focus:border-slate-400 p-2" type="text" name="name" id="name" />
		  <label className="text-2xl font-light self-start" htmlFor="password">كلمة المرور</label>
		  <span className="text-sm font-light text-slate-600 self-start">أدخل كلمة المرور (أو الرقم الجامعي في حال عدم تغيير كلمة المرور)</span>
		  <input className="outline-none w-full rounded-lg border-2 border-solid border-slate-200 focus:border-slate-400 p-2" type="password" name="password" id="password" />
		  <button 
		  onClick={() => navigate("/dashboard/admins")}
		  className="px-5 py-2 rounded border border-slate-200 hover:border-slate-600 hover:bg-slate-600 hover:text-white
			     transition-color duration-200 cursor-pointer mt-10">تسجيل دخول</button>
		</div>
		</div>
	)
}

export default AdminsLoginPage;

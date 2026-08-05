import { Form } from "react-router"

const LoginPage = () => {
	return (
		<div className="flex justify-center items-center h-svh">
		<Form method="post"
		  className="flex flex-col justify-center items-center gap-4 border border-slate-50 shadow-lg p-16 rounded-2xl min-w-1/4">
		  <label className="text-2xl font-light font-almarai self-start" htmlFor="name">الاسم</label>
		  <span className="text-sm font-light text-slate-600 self-start">أدخل الاسم أو الرقم الجامعي</span>
		  <input className="outline-none w-full rounded-lg border-2 border-solid border-slate-200 focus:border-slate-400 p-2" type="text" name="name" id="name" />
		  <label className="text-2xl font-light self-start" htmlFor="password">كلمة المرور</label>
		  <span className="text-sm font-light text-slate-600 self-start">أدخل كلمة المرور (أو الرقم الجامعي في حال عدم تغيير كلمة المرور)</span>
		  <input className="outline-none w-full rounded-lg border-2 border-solid border-slate-200 focus:border-slate-400 p-2" type="password" name="password" id="password" />
		  <button 
		  type="submit"
		  className="px-5 py-2 rounded-lg border border-slate-200 hover:border-slate-600 hover:bg-slate-600 hover:text-white
			     transition-color duration-200 cursor-pointer mt-10">تسجيل دخول</button>
		</Form>
		</div>
	)
}

export default LoginPage;

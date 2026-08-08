import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router";

const NavBar = () => {
     return <div className="fixed top-0 z-50 flex flex-col w-full">
     <nav className={`px-3 flex justify-center transition-all duration-500 bg-[#d67528ff]`}>
        <ul className=" flex max-w-6xl items-center gap-1 ">
	  <li className='fixed right-0 flex gap-4 mr-3'>
          <Link to={{pathname: "/admissions"}} className={`cursor-pointer inline-block px-5 py-4 text-sm font-semibold text-slate-50 transition-all duration-200  border-b-2 border-transparent hover:border-slate-50 hover:font-bold border-b-2`}>سجل الآن</Link>
          <div className={`flex items-center gap-2 px-5 py-4 text-sm cursor-pointer font-semibold text-slate-50 transition-colors duration-200  border-b-2 border-transparent hover:border-slate-50 hover:font-bold border-b-2`}>
            <GlobeAltIcon className="h-4 w-4" />
            اللغة
          </div>
	  </li>
          <li className={`transition-all duration-500 opacity-100 translate-y-0`}><Link to={{pathname: "/about"}} className="inline-block px-5 py-4 text-sm font-semibold text-slate-50 transition-colors duration-200 hover:text-slate-900 border-b-2 border-transparent hover:border-slate-800">من نحن</Link></li>
          <li className={`transition-all duration-500 opacity-100 translate-y-0`}><a href="#admission" className="inline-block px-5 py-4 text-sm font-semibold text-slate-50 transition-colors duration-200 hover:text-slate-900 border-b-2 border-transparent hover:border-slate-800">القبول و التقديم</a></li>
          <li className={`transition-all duration-500 opacity-100 translate-y-0`}><a href="#academics" className="inline-block px-5 py-4 text-sm font-semibold text-slate-50 transition-colors duration-200 hover:text-slate-900 border-b-2 border-transparent hover:border-slate-800">البرامج</a></li>
          <li className={`transition-all duration-500 opacity-100 translate-y-0`}><a href="#publications" className="inline-block px-5 py-4 text-sm font-semibold text-slate-50 transition-colors duration-200 hover:text-slate-900 border-b-2 border-transparent hover:border-slate-800">المنشورات الأكاديمية</a></li>
          <li className={`transition-all duration-500 opacity-100 translate-y-0`}><a href="#media" className="inline-block px-5 py-4 text-sm font-semibold text-slate-50 transition-colors duration-200 hover:text-slate-900 border-b-2 border-transparent hover:border-slate-800">حساباتنا</a></li>
          <li className={`transition-all duration-500 opacity-100 translate-y-0`}><a href="#contact" className="inline-block px-5 py-4 text-sm font-semibold text-slate-50 transition-colors duration-200 hover:text-slate-900 border-b-2 border-transparent hover:border-slate-800">المراكز</a></li>
	  <li className='fixed left-0 top-0 flex items-center gap-3'>
	    <span className='font-bold text-slate-50 text-xl'>الجامعة التكنلوجية</span>
	    <img src='/logo.svg' width={36} height={36} className='ml-3 mt-1' />
	  </li>
        </ul>
      </nav>
       
      {/* Marquee Section */}
      <div className="w-full overflow-hidden whitespace-nowrap bg-slate-900 text-slate-50 py-2 flex items-center">
        <div className="marquee-content flex gap-1 items-center">
	  <img src='/logo.svg' width={24} height={24}/>
          <span className="mx-4">تم فتح باب التقديمات لفصل خريف 2026</span>
	  <img src='/logo.svg' width={24} height={24}/>
          <span className="mx-4">سجل معنا الآن عبر بوابة التسجيل</span>
	  <img src='/logo.svg' width={24} height={24}/>
        </div>
      </div>
      </div>
	
}

export default NavBar;

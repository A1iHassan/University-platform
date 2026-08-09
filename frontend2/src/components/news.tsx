import { ChevronLeftIcon, ArrowLongLeftIcon } from "@heroicons/react/24/outline";

const News = () => {

	return (
<>	
      {/* Latest News Section */}
      <h2 className='text-4xl text-center mt-20'>آخر الأخبار</h2>
      <section className="mx-auto grid h-screen w-full gap-8 px-6 pb-32 pt-10 md:grid-cols-5">
        <article className="group relative col-span-3 overflow-hidden shadow-xl/40 bg-white mr-5 cursor-pointer">
          {/* Latest published news report */}
          <div className="overflow-hidden h-full relative z-10">
            <img src="/newest.png" alt="Latest News" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
            {/* Dark overlay on the video */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-slate-900/30 transition-opacity duration-500 group-hover:bg-slate-900/50 transition-color duration-200" />
          </div>
          <div className="p-6 z-20 absolute bottom-0 w-full flex justify-between items-end">
            <div className="text-right">
              <h2 className="mb-3 text-5xl font-bold text-slate-100">فتح باب السجيل لخريف 2026</h2>
              <p className="text-xl leading-relaxed text-slate-200">بعد الإطلاق الرسمي لوالبتنا الإلكترونية ، تم بحمد الله تعالى فتح ...</p>
            </div>
            <div className="overflow-hidden mb-2">
              <div className="flex items-center gap-2 text-slate-100 font-semibold text-lg translate-x-[100%] transition-transform duration-500 group-hover:translate-x-0">
                <ArrowLongLeftIcon className="h-6 w-6" />
                <span>اقرأ المزيد</span>
              </div>
            </div>
          </div>
        </article>
        
        <aside className="col-span-2 flex flex-col items-center gap-4">
          <article className="group relative flex-1 overflow-hidden bg-white p-5 shadow-xl/40 cursor-pointer max-h-1/3 w-5/6">
	    {/* Background Image & Overlay (Removed from document flow) */}
	    <img
		src="/website.jpeg" 
		alt="Article Background"
		className="absolute inset-0 h-full w-full object-cover z-0 transition-transform duration-500 group-hover:scale-105" />
  	    <div className="absolute inset-0 bg-slate-900/70 z-0 transition-opacity duration-500 group-hover:bg-slate-900/80" />
	    <div className='relative z-10 flex h-full flex-col justify-end'>
           <div className="w-full flex justify-between items-end">
             <div className="overflow-hidden mb-1">
               <div className="flex items-center gap-2 text-slate-100 font-semibold translate-x-[100%] transition-transform duration-500 group-hover:translate-x-0">
                 <ArrowLongLeftIcon className="h-5 w-5" />
                 <span>اقرأ المزيد</span>
               </div>
             </div>
             <div className="text-left">
               <h2 className="mb-2 text-3xl font-bold text-slate-100">إطلاق موقعنا الرسمي</h2>
               <p className="text-lg leading-relaxed text-slate-200 font-light">تم رسميا إطلاق الصفحة الإلكترونية الرسمية الخاصة بالجامعة ...</p>
             </div>
           </div>
	    </div>
          </article>
          <article className="group relative flex-1 overflow-hidden bg-white p-5 shadow-xl/40 cursor-pointer max-h-1/3 w-5/6">
	    {/* Background Image & Overlay (Removed from document flow) */}
	    <img
		src="/Latest.jpeg" 
		alt="Article Background"
		className="absolute inset-0 h-full w-full object-cover z-0 transition-transform duration-500 group-hover:scale-105" />
  	    <div className="absolute inset-0 bg-slate-900/70 z-0 transition-opacity duration-500 group-hover:bg-slate-900/80"></div>
	    <div className='relative z-10 flex h-full flex-col justify-end'>
           <div className="w-full flex justify-between items-end">
             <div className="overflow-hidden mb-1">
               <div className="flex items-center gap-2 text-slate-100 font-semibold translate-x-[100%] transition-transform duration-500 group-hover:translate-x-0">
                 <ArrowLongLeftIcon className="h-5 w-5" />
                 <span>اقرأ المزيد</span>
               </div>
             </div>
             <div className="text-right">
               <h2 className="mb-2 text-3xl font-bold text-slate-100">مقال سابق</h2>
               <p className="text-lg leading-relaxed text-slate-200">نبذة سريعة عن المقال</p>
             </div>
           </div>
	    </div>
          </article>
          
          <button className="group relative self-start mr-35 mt-12 flex items-center text-lg font-semibold text-slate-700 cursor-pointer pb-1">
            <div className="flex items-center transition-all duration-300 w-0 overflow-hidden group-hover:w-6 opacity-0 group-hover:opacity-100 group-hover:mr-1">
              <ChevronLeftIcon className="h-5 w-5 text-slate-700 flex-shrink-0" />
            </div>
            <span>اطلع على مزيد من المقالات</span>
            <div className="absolute bottom-0 right-0 w-full flex flex-col gap-[2px]">
              <div className="h-[2px] w-full bg-slate-700 transition-all duration-300"></div>
              <div className="h-[2px] w-2/3 bg-slate-700 transition-all duration-300"></div>
            </div>
          </button>
        </aside>
	</section>
	       </>

	);
}

export default News;

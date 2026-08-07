import { useState } from 'react'
import { ChevronLeftIcon, PhoneIcon, EnvelopeIcon, MapPinIcon, ArrowLongLeftIcon } from '@heroicons/react/24/outline'
import NavBar from '../components/navBar';
import Footer from '../components/footer';

const MOCK_LOCATIONS = {
  main: 'https://www.openstreetmap.org/export/embed.html?bbox=-74.0152%2C40.7105%2C-74.0084%2C40.7145&layer=mapnik',
  campus1: 'https://www.openstreetmap.org/export/embed.html?bbox=-0.1337%2C51.5074%2C-0.1235%2C51.5126&layer=mapnik',
  campus2: 'https://www.openstreetmap.org/export/embed.html?bbox=2.3414%2C48.8533%2C2.3556%2C48.8614&layer=mapnik',
  campus3: 'https://www.openstreetmap.org/export/embed.html?bbox=139.7562%2C35.6796%2C139.7735%2C35.6881&layer=mapnik',
};

const HomePage = () => {
  const [activeMapUrl, setActiveMapUrl] = useState(MOCK_LOCATIONS.main)


	return (
    <main className="bg-slate-50 text-slate-800">
      <NavBar />
      {/* Hero Section */}
      <section className="relative h-screen w-full ">
        
        <div className="relative h-full w-full grid grid-cols-2 grid-rows-2">
          <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          
          {/* Dark overlay on the video */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-slate-900/30" />
          
          <div className="relative z-10 col-start-1 row-start-1 row-span-2 flex flex-col items-center justify-center gap-4 p-12 pt-20">
            <h1 className="flex gap-3 items-center font-extrabold leading-tight text-white drop-shadow-lg md:text-5xl lg:text-6xl">
	      <img src='/logo.png' />
	      <span className='text-8xl'>الجامعة التكنلوجية</span>
	    </h1>
            <p className="max-w-xl text-base text-slate-200 md:text-lg pt-5">الجامعة التكنولوجية مؤسسة أكاديمية معرفية تقنية وبحثية رائدة تنشط في خدمة المجتمع لتقديم نموذج متميز محلي وإقليمي وعالمي وفق لمعايير الجودة</p>
            
            {/* Scroll indicator */}
          </div>
          
          <div className="relative z-10 col-start-2 row-start-2 flex flex-wrap items-end justify-end gap-4 p-12">
            <button className="bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-slate-900 cursor-pointer">تعرف على كلياتنا</button>
            <button className="bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-slate-900 cursor-pointer">تعرف على متطلبات التقديم</button>
          </div>
        </div>
      </section>

      {/* cards */}
      <section className='w-full h-[60svh] flex items-center justify-center gap-10 px-5 cursor-pointer mt-20'>
        <article className='hover:bg-slate-50 hover:text-[#d67528ff] transition-all duration-200 flex flex-col items-center max-w-1/5 bg-[#d67528ff] text-slate-50 p-10 shadow-xl/20 justify-between p-3 h-1/2'>
	  <h3 className='text-2xl font-bold'>رسالتنا</h3>
	  <p className='text-xl'>
	    تسعى الجاعة إلى تقديم تعليم متميز و بحوث علمية تقنية مبتكرة لتلبية تغيرات العصر المعرفية و البحثية و المحتمعية
	  </p>
	</article>
        <article className='group hover:bg-slate-50 hover:text-[#d67528ff] transition-all duration-200 flex flex-col items-center max-w-1/5 bg-[#d67528ff] text-slate-50 p-10 shadow-xl/20 justify-between p-3 h-1/2'>
	  <h3 className='text-2xl font-bold'>الأهداف</h3>
	  <p className=''>
	    إضافه لما ورد في قانون الجامعة لسنة 2023م، تسعى هذه المؤسسة إلى تحقيق الأهداف التالية:
	      <ul className='list-disc list-inside space-y-2'>
	        <li>- تمكين الطلاب بمختلف مستوياتهم من بلوغ الأهداف المهنية عالية الجودة</li>
		<li>- تحفيز الطلاب على  ...</li>
	      </ul>
	    <span className='flex gap-2 items-center group-hover:gap-5 transition-all duration-300'>اقرأ المزيد
	      <ChevronLeftIcon width={16} height={16}/>
	    </span>
	  </p>
	</article>
        <article className='group hover:bg-slate-50 hover:text-[#d67528ff] transition-all duration-200 flex flex-col items-center max-w-1/5 bg-[#d67528ff] text-slate-50 p-7 shadow-xl/20 justify-between p-3 h-1/2'>
	  <h3 className='text-2xl font-bold'>كلمة رئيس الجامعة</h3>
	  <p className=''>
	    بسم الله الرحمن الرحيم و به نستعين الحمد لله الذي بنعمته تتم الصالحات وبفضله ومنه وكرمه تقضى الحاجات وتتنزل الرحمات ، إلي ابنائي الطلاب و
	    الطالبات وإلي كافة منسوبي الجامعة التكنولوجية بمختلف فئاتهم ومسمياتهم الجامعة التكنولوجية، لها تاريخ غني ...
	    <span className='flex gap-2 items-center group-hover:gap-5 transition-all duration-300'>اقرأ المزيد
	      <ChevronLeftIcon width={16} height={16}/>
	    </span>
	  </p>
	</article>
        <article className='group hover:bg-slate-50 hover:text-[#d67528ff] transition-all duration-200 flex flex-col items-center max-w-1/5 bg-[#d67528ff] text-slate-50 p-7 shadow-xl/20 justify-between p-3 h-1/2'>
	  <h3 className='text-2xl font-bold'>العلاقات العامة</h3>
	  <p className=''>
	    نشأت إدارة العلاقات العامة الاعلام عقب صدور قرار السيد مدير الجامعة في العام 2024م، وفق أهداف مرسومة لتكون المرآة التي تعكس المناشط المختلفة للجامعة ، ومنذ ذلك التاريخ مثلت حلقت وصل بين الجامعة والمؤسسات المختلفة علي ...
	    <span className='flex gap-2 items-center group-hover:gap-5 transition-all duration-300'>اقرأ المزيد
	      <ChevronLeftIcon width={16} height={16}/>
	    </span>
	  </p>
	</article>
      </section>

      {/* Latest News Section */}
      <h2 className='text-4xl text-center mt-20'>آخر الأخبار</h2>
      <section className="mx-auto grid h-screen w-full gap-8 px-6 pb-32 pt-10 md:grid-cols-5">
        <article className="group relative col-span-3 overflow-hidden shadow-xl/40 bg-white mr-5 cursor-pointer">
          {/* Latest published news report */}
          <div className="overflow-hidden h-full relative z-10">
            <img src="/Latest.jpeg" alt="Latest News" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
            {/* Dark overlay on the video */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-slate-900/30 transition-opacity duration-500 group-hover:bg-slate-900/50 transition-color duration-200" />
          </div>
          <div className="p-6 z-100 absolute bottom-0 w-full flex justify-between items-end">
            <div className="text-right">
              <h2 className="mb-3 text-5xl font-bold text-slate-100">آخر ما تم نشره</h2>
              <p className="text-xl leading-relaxed text-slate-200">نبذة عن آخر مقال تم نشره</p>
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

      {/* Staff Page / Section */}
      <section className="bg-slate-100 px-6 py-16 h-svh flex flex-wrap gap-10 justify-center items-center">
        <div className='h-1/2 w-1/5'>
	  <img src='/person.png' />
	  <p className='flex flex-col items-center mt-2'>
	    <span>اسم العضو</span>
	    <span>اللقب أو المنصب</span>
	  </p>
	</div>
        <div className='h-1/2 w-1/5'>
	  <img src='/person.png' />
	  <p className='block flex flex-col items-center mt-2'>
	    
	    <span>اسم العضو</span>
	    <span>اللقب أو المنصب</span>
	  </p>
	</div>
        <div className='h-1/2 w-1/5'>
	  <img src='/person.png' />
	  <p className='flex flex-col items-center mt-2'>
	    
	    <span>اسم العضو</span>
	    <span>اللقب أو المنصب</span>
	  </p>
	</div>
        <div className='h-1/2 w-1/5'>
	  <img src='/person.png' />
	  <p className='flex flex-col items-center mt-2'>
	    
	    <span>اسم العضو</span>
	    <span>اللقب أو المنصب</span>
	  </p>
	</div>
        <div className='h-1/2 w-1/5'>
	  <img src='/person.png' />
	  <p className='flex flex-col items-center mt-2'>
	    
	    <span>اسم العضو</span>
	    <span>اللقب أو المنصب</span>
	  </p>
	</div>
        <div className='h-1/2 w-1/5'>
	  <img src='/person.png' />
	  <p className='flex flex-col items-center mt-2'>
	    
	    <span>اسم العضو</span>
	    <span>اللقب أو المنصب</span>
	  </p>
	</div>
	<div className='group relative mr-35 mt-12 flex items-center text-lg font-semibold text-slate-700 cursor-pointer pb-1'>
            <div className="flex items-center transition-all duration-300 w-0 overflow-hidden group-hover:w-6 opacity-0 group-hover:opacity-100 group-hover:mr-1">
              <ChevronLeftIcon className="h-5 w-5 text-slate-700 flex-shrink-0" />
            </div>
	<span className=''>تعرف على كواردنا</span>
            <div className="absolute bottom-0 right-0 w-full flex flex-col gap-[2px]">
              <div className="h-[2px] w-full bg-slate-700 transition-all duration-300"></div>
              <div className="h-[2px] w-2/3 bg-slate-700 transition-all duration-300"></div>
            </div>
	</div>
      </section>

      {/* Location Section */}
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2 h-svh">
        <aside className="flex flex-col gap-6 justify-center">
          <div 
            onClick={() => setActiveMapUrl(MOCK_LOCATIONS.main)}
            className={`cursor-pointer rounded-2xl border bg-white p-8 shadow-sm transition-all duration-200 hover:border-slate-400 ${activeMapUrl === MOCK_LOCATIONS.main ? 'border-slate-800 ring-1 ring-slate-800' : 'border-slate-200'}`}
          >
            {/* University location information */}
            <address className="not-italic">
              <div className="mb-4 flex items-center gap-3">
                <MapPinIcon className="h-6 w-6 text-slate-500" />
                <h3 className="text-xl font-bold text-slate-900">العنوان الأساسي للجامعة</h3>
              </div>
              <p className="mb-1 text-sm text-slate-500">(وصف للعنوان)</p>
              <p className="mb-1 text-sm text-slate-500">(وصف للعنوان)</p>
              <p className="mb-1 text-sm text-slate-500">(وصف للعنوان)</p>
              <p className="text-sm text-slate-500">(وصف للعنوان)</p>
            </address>
          </div>
          
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            {/* Other campuses locations */}
            <h4 className="mb-4 text-lg font-bold text-slate-800">مراكز أخرى لنا</h4>
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => setActiveMapUrl(MOCK_LOCATIONS.campus1)}
                className={`rounded-xl border px-5 py-3 text-sm font-medium text-slate-700 text-start transition-all duration-200 hover:border-slate-400 hover:bg-slate-100 cursor-pointer ${activeMapUrl === MOCK_LOCATIONS.campus1 ? 'border-slate-800 bg-slate-100 ring-1 ring-slate-800' : 'border-slate-200 bg-slate-50'}`}
              >
                مركز 1
              </button>
              <button 
                onClick={() => setActiveMapUrl(MOCK_LOCATIONS.campus2)}
                className={`rounded-xl border px-5 py-3 text-sm font-medium text-slate-700 text-start transition-all duration-200 hover:border-slate-400 hover:bg-slate-100 cursor-pointer ${activeMapUrl === MOCK_LOCATIONS.campus2 ? 'border-slate-800 bg-slate-100 ring-1 ring-slate-800' : 'border-slate-200 bg-slate-50'}`}
              >
                مركز 2
              </button>
              <button 
                onClick={() => setActiveMapUrl(MOCK_LOCATIONS.campus3)}
                className={`rounded-xl border px-5 py-3 text-sm font-medium text-slate-700 text-start transition-all duration-200 hover:border-slate-400 hover:bg-slate-100 cursor-pointer ${activeMapUrl === MOCK_LOCATIONS.campus3 ? 'border-slate-800 bg-slate-100 ring-1 ring-slate-800' : 'border-slate-200 bg-slate-50'}`}
              >
                مركز 3
              </button>
            </div>
          </div>
        </aside>

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm h-full min-h-[400px]">
          {/* Map snippet for location */}
          <iframe title="University Map Location" src={activeMapUrl} className="h-full w-full border-0" />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default HomePage;

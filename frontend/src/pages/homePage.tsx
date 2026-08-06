import { useState, useEffect } from 'react'
import { ChevronDownIcon, ChevronLeftIcon, GlobeAltIcon, AcademicCapIcon, UserGroupIcon, BookOpenIcon, BeakerIcon, PhoneIcon, EnvelopeIcon, MapPinIcon, ArrowLongLeftIcon } from '@heroicons/react/24/outline'

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight / 2)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

	return (
    <main className="bg-slate-50 text-slate-800">
      {/* Sticky Navigation Bar */}
      <nav className={`px-3 flex justify-center fixed w-full top-0 z-50 border-b transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-lg border-slate-200 shadow-sm' : 'bg-transparent border-transparent shadow-none backdrop-blur-none'}`}>
        <ul className=" flex max-w-6xl items-center gap-1 ">
	  <li className='fixed right-0 flex gap-4 mr-3'>
          <div className={`inline-block px-5 py-4 text-sm font-semibold text-slate-600 transition-colors duration-200  border-b-2 border-transparent hover:border-slate-800 ${scrolled ? 'hover:text-slate-900 border-b-2 text-slate-600' : 'text-white backdrop-blur-md hover:bg-slate-800/60 hover:border-slate-400/60'}`}>Quick Apply</div>
          <div className={`flex items-center gap-2 px-5 py-4 text-sm font-semibold text-slate-600 transition-colors duration-200  border-b-2 border-transparent hover:border-slate-800 ${scrolled ? 'hover:text-slate-900 border-b-2 text-slate-600' : 'text-white backdrop-blur-md hover:bg-slate-800/60 hover:border-slate-400/60'}`}>
            <GlobeAltIcon className="h-4 w-4" />
            Language
          </div>
	  </li>
          <li className={`transition-all duration-500 ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}><a href="#about" className="inline-block px-5 py-4 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-slate-900 border-b-2 border-transparent hover:border-slate-800">About</a></li>
          <li className={`transition-all duration-500 ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}><a href="#admission" className="inline-block px-5 py-4 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-slate-900 border-b-2 border-transparent hover:border-slate-800">Admission</a></li>
          <li className={`transition-all duration-500 ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}><a href="#academics" className="inline-block px-5 py-4 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-slate-900 border-b-2 border-transparent hover:border-slate-800">Academics</a></li>
          <li className={`transition-all duration-500 ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}><a href="#publications" className="inline-block px-5 py-4 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-slate-900 border-b-2 border-transparent hover:border-slate-800">Publications</a></li>
          <li className={`transition-all duration-500 ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}><a href="#media" className="inline-block px-5 py-4 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-slate-900 border-b-2 border-transparent hover:border-slate-800">Media</a></li>
          <li className={`transition-all duration-500 ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}><a href="#contact" className="inline-block px-5 py-4 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-slate-900 border-b-2 border-transparent hover:border-slate-800">Contact</a></li>
        </ul>
      </nav>
      {/* Hero Section */}
      <section className="relative h-screen w-full ">
        
        <div className="relative h-full w-full grid grid-cols-2 grid-rows-2">
          <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          
          {/* Dark overlay on the video */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-slate-900/30" />
          
          <div className="relative z-10 col-start-1 row-start-1 flex flex-col justify-end items-start gap-4 p-12 pt-20">
            <h1 className="text-4xl font-extrabold leading-tight text-white drop-shadow-lg md:text-5xl lg:text-6xl">University's Full Official Name</h1>
            <p className="max-w-xl text-base font-light text-slate-200 md:text-lg">Catch phrase about the university</p>
            
            {/* Scroll indicator */}
            <ChevronDownIcon className="mt-2 h-7 w-7 animate-bounce text-slate-300" />
          </div>
          
          <div className="relative z-10 col-start-2 row-start-2 flex flex-wrap items-end justify-end gap-4 p-12">
            <button className="rounded-xl border-2 border-slate-300 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-slate-900 cursor-pointer">See admission requirements</button>
            <button className="rounded-xl border-2 border-slate-300 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-slate-900 cursor-pointer">See our faculties</button>
          </div>
        </div>
      </section>


      {/* Latest News Section */}
      <section className="mx-auto grid h-screen w-full gap-8 px-6 py-32 md:grid-cols-5">
        <article className="group relative col-span-3 overflow-hidden shadow-xl/40 bg-white mr-5 cursor-pointer">
          {/* Latest published news report */}
          <div className="overflow-hidden h-full relative z-10">
            <img src="/Latest.jpeg" alt="Latest News" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
            {/* Dark overlay on the video */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-slate-900/30 transition-opacity duration-500 group-hover:bg-slate-900/50 transition-color duration-200" />
          </div>
          <div className="p-6 z-100 absolute bottom-0 w-full flex justify-between items-end">
            <div className="text-right">
              <h2 className="mb-3 text-5xl font-bold text-slate-100">Latest News Report</h2>
              <p className="text-xl leading-relaxed text-slate-200">...News summary content</p>
            </div>
            <div className="overflow-hidden mb-2">
              <div className="flex items-center gap-2 text-slate-100 font-semibold text-lg translate-x-[100%] transition-transform duration-500 group-hover:translate-x-0">
                <ArrowLongLeftIcon className="h-6 w-6" />
                <span>Read More</span>
              </div>
            </div>
          </div>
        </article>
        
        <aside className="col-span-2 flex flex-col items-center gap-4">
          <article className="group relative flex-1 overflow-hidden bg-white p-5 shadow-xl/40 cursor-pointer max-h-1/3 w-5/6">
	    {/* Background Image & Overlay (Removed from document flow) */}
	    <img
		src="/Latest.jpeg" 
		alt="Article Background"
		className="absolute inset-0 h-full w-full object-cover z-0 transition-transform duration-500 group-hover:scale-105" />
  	    <div className="absolute inset-0 bg-slate-900/70 z-0 transition-opacity duration-500 group-hover:bg-slate-900/80" />
	    <div className='relative z-10 flex h-full flex-col justify-end'>
           <div className="w-full flex justify-between items-end">
             <div className="overflow-hidden mb-1">
               <div className="flex items-center gap-2 text-slate-100 font-semibold translate-x-[100%] transition-transform duration-500 group-hover:translate-x-0">
                 <ArrowLongLeftIcon className="h-5 w-5" />
                 <span>Read More</span>
               </div>
             </div>
             <div className="text-right">
               <h2 className="mb-2 text-3xl font-bold text-slate-100">Latest News Report</h2>
               <p className="text-lg leading-relaxed text-slate-200">...News summary content</p>
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
                 <span>Read More</span>
               </div>
             </div>
             <div className="text-right">
               <h2 className="mb-2 text-3xl font-bold text-slate-100">Latest News Report</h2>
               <p className="text-lg leading-relaxed text-slate-200">...News summary content</p>
             </div>
           </div>
	    </div>
          </article>
          
          <button className="group relative self-start mr-35 mt-12 flex items-center text-lg font-semibold text-slate-700 cursor-pointer pb-1">
            <div className="flex items-center transition-all duration-300 w-0 overflow-hidden group-hover:w-6 opacity-0 group-hover:opacity-100 group-hover:mr-1">
              <ChevronLeftIcon className="h-5 w-5 text-slate-700 flex-shrink-0" />
            </div>
            <span>See more of our news</span>
            <div className="absolute bottom-0 right-0 w-full flex flex-col gap-[2px] mt-5">
              <div className="h-[2px] w-full bg-slate-700 transition-all duration-300"></div>
              <div className="h-[2px] w-2/3 bg-slate-700 transition-all duration-300"></div>
            </div>
          </button>
        </aside>
      </section>

      {/* Staff Page / Section */}
      <section className="bg-slate-100 px-6 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
          {/* Top row cards */}
          <article className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <AcademicCapIcon className="h-10 w-10 text-slate-400 group-hover:text-slate-700 transition-colors" />
            <span className="text-sm font-semibold text-slate-700">Staff Card 1</span>
          </article>
          <article className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <UserGroupIcon className="h-10 w-10 text-slate-400 group-hover:text-slate-700 transition-colors" />
            <span className="text-sm font-semibold text-slate-700">Staff Card 2</span>
          </article>
          <article className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <BookOpenIcon className="h-10 w-10 text-slate-400 group-hover:text-slate-700 transition-colors" />
            <span className="text-sm font-semibold text-slate-700">Staff Card 3</span>
          </article>
          <article className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <BeakerIcon className="h-10 w-10 text-slate-400 group-hover:text-slate-700 transition-colors" />
            <span className="text-sm font-semibold text-slate-700">Staff Card 4</span>
          </article>
        </div>
        
        <div className="mx-auto mt-10 max-w-6xl grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            {/* Text lines */}
            <h3 className="mb-4 text-xl font-bold text-slate-900">Department Info</h3>
            <p className="mb-2 text-sm leading-relaxed text-slate-500">Text line 1</p>
            <p className="mb-2 text-sm leading-relaxed text-slate-500">Text line 2</p>
            <p className="text-sm leading-relaxed text-slate-500">Text line 3</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {/* Bottom row cards */}
            <article className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <span className="text-sm font-semibold text-slate-700">Staff Card 5</span>
            </article>
            <article className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <span className="text-sm font-semibold text-slate-700">Staff Card 6</span>
            </article>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          {/* Map snippet for location */}
          <iframe title="University Map Location" src="map-source-url" className="h-80 w-full border-0 md:h-full" />
        </div>
        
        <aside className="flex flex-col gap-6">
          <address className="not-italic rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            {/* University location information */}
            <div className="mb-4 flex items-center gap-3">
              <MapPinIcon className="h-6 w-6 text-slate-500" />
              <h3 className="text-xl font-bold text-slate-900">Main Campus Location</h3>
            </div>
            <p className="mb-1 text-sm text-slate-500">Address Line 1</p>
            <p className="mb-1 text-sm text-slate-500">Address Line 2</p>
            <p className="mb-1 text-sm text-slate-500">Address Line 3</p>
            <p className="text-sm text-slate-500">Address Line 4</p>
          </address>
          
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            {/* Other campuses locations */}
            <h4 className="mb-4 text-lg font-bold text-slate-800">Other Campuses</h4>
            <div className="flex flex-col gap-3">
              <button className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium text-slate-700 text-start transition-all duration-200 hover:border-slate-400 hover:bg-slate-100 cursor-pointer">Campus Location 1</button>
              <button className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium text-slate-700 text-start transition-all duration-200 hover:border-slate-400 hover:bg-slate-100 cursor-pointer">Campus Location 2</button>
              <button className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium text-slate-700 text-start transition-all duration-200 hover:border-slate-400 hover:bg-slate-100 cursor-pointer">Campus Location 3</button>
            </div>
          </div>
        </aside>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-900 px-6 py-14 text-slate-300">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">University's Name</h2>
            <p className="mt-2 text-sm text-slate-400">Subtext or motto</p>
          </div>
          
          <ul className="flex items-center gap-4">
            {/* Media accounts */}
            <li><a href="#social1" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all duration-200 hover:border-slate-500 hover:text-white hover:bg-slate-800">Icon 1</a></li>
            <li><a href="#social2" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all duration-200 hover:border-slate-500 hover:text-white hover:bg-slate-800">Icon 2</a></li>
            <li><a href="#social3" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all duration-200 hover:border-slate-500 hover:text-white hover:bg-slate-800">Icon 3</a></li>
            <li><a href="#social4" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all duration-200 hover:border-slate-500 hover:text-white hover:bg-slate-800">Icon 4</a></li>
          </ul>
        </div>
        
        <div className="mx-auto mt-10 grid max-w-6xl gap-8 border-t border-slate-800 pt-10 md:grid-cols-3">
          {/* Quick links - Column 1 */}
          <ul className="flex flex-col gap-3">
            <li><a href="#link1" className="text-sm text-slate-400 transition-colors duration-200 hover:text-white">Quick Link 1</a></li>
            <li><a href="#link2" className="text-sm text-slate-400 transition-colors duration-200 hover:text-white">Quick Link 2</a></li>
            <li><a href="#link3" className="text-sm text-slate-400 transition-colors duration-200 hover:text-white">Quick Link 3</a></li>
          </ul>
          
          {/* Quick links - Column 2 */}
          <ul className="flex flex-col gap-3">
            <li><a href="#link4" className="text-sm text-slate-400 transition-colors duration-200 hover:text-white">Quick Link 4</a></li>
            <li><a href="#link5" className="text-sm text-slate-400 transition-colors duration-200 hover:text-white">Quick Link 5</a></li>
            <li><a href="#link6" className="text-sm text-slate-400 transition-colors duration-200 hover:text-white">Quick Link 6</a></li>
          </ul>
        
          <div>
            {/* Contacts */}
            <h3 className="mb-4 text-lg font-semibold text-white">Contacts</h3>
            <address className="not-italic">
              <p className="mb-2 flex items-center gap-2 text-sm text-slate-400"><PhoneIcon className="h-4 w-4" />Phone: +1 123 456 7890</p>
              <p className="flex items-center gap-2 text-sm text-slate-400"><EnvelopeIcon className="h-4 w-4" />Email: contact@university.edu</p>
            </address>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default HomePage;

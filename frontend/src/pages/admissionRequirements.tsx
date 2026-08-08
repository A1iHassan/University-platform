import Footer from "../components/footer"
import NavBar from "../components/navBar"

const Requirements = () => {
	return <main className="flex flex-col h-svh w-full justify-between">
	  <NavBar />
	  <article className="flex justify-center items-center mt-50">
	    <span className="text-2xl font-light text-slate-400">
	      لستة بمتطلبات التقديم للجامعة للطلاب الجدد
	    </span>
	  </article>
	  <Footer />
	</main>
}

export default Requirements;

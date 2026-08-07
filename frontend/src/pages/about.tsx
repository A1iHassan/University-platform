import Footer from "../components/footer";
import NavBar from "../components/navBar";

const AboutUs = () => {
	return <main className="h-svh w-full flex flex-col justify-between">
	<NavBar />
	<div className="flex gap-3 justify-center items-center p-10">
	  <article className="overflow-hidden relative h-full z-0 mt-20 flex flex-col gap-10 items-center justify-center self-center">
	    <img src="/logo.png" className="absolute w-full h-full -z-10 object-cover opacity-30" />
	    <h1 className="text-4xl self-start mx-10">تعرف على الجامعة التكنلوجية</h1>
	    <p className="w-2/3 text-lg p-5 rounded-lg bg-white/70 shadow-xl border border-slate-50 leading-loose">
	    تأسست الجامعة التكنولوجية عام 2018 كجامعة حكومية بقرار من المجلس القومي للتعليم العالي بوزارة التعليم العالي والبحث العلمي على غرار كلية الخرطوم التقنية التي نشأت عام 1991 وكان تعرف في بداية تأسيسها باسم كلية الخرطوم للعلوم والتقانة وكانت كلية أهلية خيرية ترتكز على الدراسات التقنية التطبيقية في الهندسة والدراسات التجارية، ثم توسعت لاحقا بإضافة علوم الحاسوب وتقانة ونظم المعلومات. وتمت أضافة كليات القانون وعلوم التمريض والدراسات العليا لها يقع مقر الجامعة منذ تأسيسها في ولاية الخرطوم، بمدينة الخرطوم، امتداد الدرجة الثالثة شارع محمد نجيب جنوب جهاز المغتربين

وقد نشأت الجامعة في بيئة متميزة من بنية تحتية متمثلة في مباني وقاعات كلية الخرطوم التقنية وخبرات ممتازة علمية وعملية وإدارية
	    </p>
	  </article>
	  <img src="/uni.jpeg" className="w-4/5 mt-20 shadow-xl/30 border-0 outline-none ring-0"/>
	</div>
	<Footer />
	</main>
}

export default AboutUs;

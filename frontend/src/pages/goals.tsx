import Footer from "../components/footer"
import NavBar from "../components/navBar"

const Goals = () => {
	return <main className="h-svh w-full flex flex-col justify-between">
	  <NavBar />
	  <article className="mt-20">
	    <h1 className="">
	      أهداف الجامعة
	    </h1>
	    <p className="">
	      <span className="">
	        إضافه لما ورد في قانون الجامعة لسنة 2023م، تسعى هذه المؤسسة إلى تحقيق الأهداف التالية:
	      </span>
	      <ul className="">
		<li className="">تمكين الطلاب بمختلف مستوياتهم من بلوغ الأهداف المهنية عالية الجودة</li>
		<li className="">تحفيز الطلاب على استخدام معارفهم ومهاراتهم العلمية التطبيقية والأدبية في حياتهم الشخصية والمهنية</li>
		<li className="">توفير فرص التعليم النظامي وغير النظامي، الجامعي وفوق الجامعي للمنخرطين في سوق العمل وفقا لأهداف تهيئة البيئه المهنية للدارسين وتطوير الكفاءات بهدف رفع مستوى الأداء والإنتاج</li>
		<li className="">ربط الجامعة بالمؤسسات العلمية النظيره داخليا وخارجيا والمؤسسات الثقافية والاجتماعية. ووضع تشريع في ميدان عمل الخريجين بإنشاء الحاضنات التي تفجر طاقاتهم</li>
		<li className="">توثيق التعاون التعليمي والبحثي والثقافي مع الجامعات المتميزه داخل البلاد وخارجها</li>
	      </ul>
	    </p>
	  </article>
	  <Footer/>
	</main>
}

export default Goals

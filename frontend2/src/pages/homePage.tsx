import CardsSection from "../components/cardsSection";
import Contacts from "../components/contacts";
import Faculties from "../components/faculties";
import HeroSection from "../components/heroSection";
import News from "../components/news";

const HomePage = () => {

	return (
		<section className="">
		  <HeroSection />
		  <CardsSection />
		  <Faculties />
		  <News />
		  <Contacts />
		</section>
	);
}

export default HomePage;

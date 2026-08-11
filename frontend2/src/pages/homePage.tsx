import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import CardsSection from "../components/cardsSection";
import Contacts from "../components/contacts";
import Faculties from "../components/faculties";
import HeroSection from "../components/heroSection";
import News from "../components/news";
import StatuteByNumbersSection from "../components/statistics";
import PresidentSection from "../components/presidentComponent";

const HomePage = () => {
	const { i18n } = useTranslation();
  	// Handle LTR/RTL document direction and language attribute based on the active locale
	useEffect(() => {
		document.dir = i18n.dir();
		document.documentElement.lang = i18n.language;
	}, [i18n, i18n.language]);

	return (
		<section className="">
		  <HeroSection />
		  <PresidentSection />
		  <CardsSection />
		  <Faculties />
		  <StatuteByNumbersSection />
		  <News />
		  <Contacts />
		</section>
	);
}

export default HomePage;

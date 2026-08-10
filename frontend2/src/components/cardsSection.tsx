import { Link } from "react-router";
import { useTranslation } from "react-i18next";

type CardItem = {
  label: string;
  content: string;
  to: string;
};
const CardsSection = () => {
const { t } = useTranslation()
const CARDS: CardItem[] = [
  { label: t('our_message'), content: t('our_message_content'), to: "/message" },
  { label: t('president'), content: t('president_content'), to: "/president" },
  { label: t('relations'), content: t('relations_content'), to: "/relations" },
];

  return (
    <section className="h-[70svh] flex justify-center items-center">
      <div className="flex w-full items-center justify-center items-center gap-15 px-10 py-16">
        {CARDS.map((card) => (
          <Link
            key={card.to}
            to={card.to}
            className='hover:bg-slate-50 hover:text-[#d67528ff] transition-all duration-200 flex flex-col items-center max-w-1/5 bg-[#d67528ff] text-slate-50 p-10 shadow-xl/20 justify-between p-3 h-full'
          >
            <h2 className="text-3xl font-bold">{card.label}</h2>
	    <span className="text-lg">{card.content}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CardsSection;

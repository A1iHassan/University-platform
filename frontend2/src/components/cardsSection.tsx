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
    <section className="h-[90svh] flex justify-center items-center">
      <div className="flex w-full items-center justify-center gap-8 px-10 py-16">
        {CARDS.map((card) => (
          <Link
            key={card.to}
            to={card.to}
            className="flex flex-col w-1/4 h-[50svh] leading-loose rounded-none items-center justify-center bg-slate-900 text-lg text-white shadow-xl/30 transition-colors hover:bg-slate-800"
          >
            <h2 className="text-3xl">{card.label}</h2>
	    <span className="text-lg">{card.content}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CardsSection;

import { Link } from "react-router";
import { useTranslation } from "react-i18next";

type CardItem = {
  label: string;
  content: string;
  to: string;
};

const CardsSection = () => {
  const { t } = useTranslation();
  const CARDS: CardItem[] = [
    { label: t('our_message'), content: t('our_message_content'), to: "/aboutus" },
    { label: t('relations'), content: t('relations_content'), to: "/relations" },
  ];

  return (
    <section className="relative h-[70svh] flex justify-center items-center overflow-hidden">
      {/* Decorative background stripes, top-center to left-center, kept behind content */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute left-1/2 top-0 h-6 w-[85%] origin-top-left rotate-[135deg] -translate-x-90 bg-[#d67528]" />
        <div className="absolute left-1/2 top-0 h-6 w-[85%] origin-top-left rotate-[135deg] -translate-x-80 bg-[#d67528]" />
        <div className="absolute left-1/2 top-0 h-6 w-[85%] origin-top-left rotate-[135deg] translate-x-230 bg-[#d67528]" />
        <div className="absolute left-1/2 top-0 h-6 w-[85%] origin-top-left rotate-[135deg] translate-x-220 bg-[#d67528]" />
      </div>

      <div className="relative z-10 flex w-full items-center justify-center items-center gap-26 px-10 py-16">
        {CARDS.map((card) => (
          <Link
            key={card.to}
            to={card.to}
            className='hover:bg-slate-50 hover:text-[#d67528ff] h-90 transition-all duration-200 flex flex-col items-center max-w-1/4 bg-[#d67528ff] text-slate-50 p-10 shadow-xl/20 justify-around p-3'
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

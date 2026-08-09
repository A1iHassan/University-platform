import { Link } from "react-router";

type CardItem = {
  label: string;
  to: string;
};

const CARDS: CardItem[] = [
  { label: "Explore Products", to: "/products" },
  { label: "View Case Studies", to: "/case-studies" },
  { label: "Get in Touch", to: "/contact" },
];

const CardsSection = () => {
  return (
    <section className="h-[90svh] flex justify-center items-center">
      <div className="flex w-full items-center justify-center gap-8 px-10 py-16">
        {CARDS.map((card) => (
          <Link
            key={card.to}
            to={card.to}
            className="flex w-1/4 rounded-none items-center justify-center bg-slate-900 text-lg font-medium text-white shadow-xl/30 transition-colors hover:bg-slate-800"
          >
            {card.label}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CardsSection;

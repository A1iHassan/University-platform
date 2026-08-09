import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type NavItem = {
  label: string;
  items: string[];
};

const NAV_ITEMS: NavItem[] = [
  {
    label: "Products",
    items: ["Overview", "Studio", "Cloud Sync", "Pricing", "Integrations"],
  },
  {
    label: "Solutions",
    items: ["For Startups", "For Enterprise", "For Agencies", "For Education"],
  },
  {
    label: "Platform",
    items: ["API Reference", "SDKs", "Status Page", "Security", "Changelog"],
  },
  {
    label: "Resources",
    items: ["Documentation", "Guides", "Blog", "Community", "Webinars"],
  },
  {
    label: "Company",
    items: ["About Us", "Careers", "Press", "Contact"],
  },
  {
    label: "Support",
    items: ["Help Center", "Contact Support", "System Status", "Report a Bug"],
  },
  {
    label: "Pricing",
    items: ["Plans", "Compare Plans", "Enterprise Quote", "FAQ"],
  },
];

const NavigationBar: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <nav
      className="relative w-full bg-slate-950 border-b border-slate-800"
      onMouseLeave={() => setOpenIndex(null)}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <span className="text-lg font-semibold tracking-tight text-white">
          Acme<span className="text-indigo-400">.</span>
        </span>

        <ul className="flex items-center gap-1">
          {NAV_ITEMS.map((item, index) => (
            <li
              key={item.label}
              onMouseEnter={() => setOpenIndex(index)}
              className="relative"
            >
              <button
                type="button"
                className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  openIndex === index
                    ? "text-white"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Full-width dropdown panel, spans the entire nav bar */}
      <div
        className={`absolute left-0 top-full w-full overflow-hidden border-b border-slate-800 bg-slate-900 shadow-xl transition-all duration-200 ease-out ${
          openIndex !== null
            ? "max-h-96 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        {openIndex !== null && (
          <div className="mx-auto max-w-7xl px-6 py-6">
            <ul className="flex flex-wrap gap-x-10 gap-y-3">
              {NAV_ITEMS[openIndex].items.map((subItem) => (
                <li key={subItem}>
                  <a
                    href="#"
                    className="text-sm text-slate-300 transition-colors hover:text-indigo-400"
                  >
                    {subItem}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;

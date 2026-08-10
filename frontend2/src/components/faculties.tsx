import React from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const PARALLAX_STRENGTH = 0.3;

const Faculties = () => {
  const { t } = useTranslation();
  const sectionRef = React.useRef<HTMLElement>(null);
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      // Distance the section's top has scrolled past the viewport top,
      // used to nudge the background at a fraction of that speed.
      setOffset(rect.top * PARALLAX_STRENGTH);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[80svh] flex justify-center items-center px-10 py-16 md:px-20 overflow-hidden"
    >
      {/* Parallax background photo */}
      <img
        src="/faculty.jpeg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 -top-24 h-[calc(100%+12rem)] w-full object-cover will-change-transform"
        style={{ transform: `translateY(${offset/2.2}px)` }}
      />

      {/* Color overlay */}
      <div className="absolute inset-0 bg-[#99541c]/60" />

      <div className="relative z-10 flex flex-col items-center gap-12 md:flex-row md:items-center md:justify-between">
        <article className="max-w-md md:mr-8">
          <h2 className="text-3xl font-semibold  md:text-4xl">
            {t('faculties_title')}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            {t('faculties_section')}
          </p>
        </article>

        <div className="flex flex-col gap-6">
          <Link
            to="/faculties/science"
            className="flex h-32 w-72 items-center justify-center bg-slate-900 text-lg font-medium text-white shadow-xl/30 transition-colors hover:bg-slate-800"
          >
            {t('faculties_details')}
          </Link>
          <Link
            to="/faculties/arts"
            className="flex h-32 w-72 items-center justify-center bg-slate-900 text-lg font-medium text-white shadow-xl/30 transition-colors hover:bg-slate-800"
          >
            {t('post_grads_programs')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Faculties;

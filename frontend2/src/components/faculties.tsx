import { Link } from "react-router";

const Faculties = () => {
  return (
    <section className="w-full h-[90svh] flex justify-center items-center px-10 py-16 md:px-20">
      <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:justify-between">
        <article className="max-w-md md:mr-8">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Our Faculties
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Explore the departments shaping the next generation of thinkers,
            builders, and researchers. Each faculty brings its own focus,
            resources, and community to help students grow in their chosen
            field.
          </p>
        </article>

        <div className="flex flex-col gap-6">
          <Link
            to="/faculties/science"
            className="flex h-32 w-72 items-center justify-center bg-slate-900 text-lg font-medium text-white shadow-xl/30 transition-colors hover:bg-slate-800"
          >
            Faculty of Science
          </Link>
          <Link
            to="/faculties/arts"
            className="flex h-32 w-72 items-center justify-center bg-slate-900 text-lg font-medium text-white shadow-xl/30 transition-colors hover:bg-slate-800"
          >
            Faculty of Arts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Faculties;

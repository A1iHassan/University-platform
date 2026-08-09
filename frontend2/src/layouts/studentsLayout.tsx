import { Link, Outlet } from "react-router";

type NavTab = {
  label: string;
  to: string;
};

const NAV_TABS: NavTab[] = [
  { label: "Overview", to: "/students/overview" },
  { label: "Courses", to: "/students/courses" },
  { label: "Grades", to: "/students/grades" },
];

const StudentsLayout = () => {
  return (
    <main className="flex h-screen w-full">
      <nav className="flex w-64 shrink-0 flex-col gap-1 border-r border-slate-800 bg-slate-950 px-4 py-6">
        {NAV_TABS.map((tab) => (
          <Link
            key={tab.to}
            to={tab.to}
            className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
          >
            {tab.label}
          </Link>
        ))}
      </nav>

      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </main>
  );
};

export default StudentsLayout;

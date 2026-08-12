import { useEffect, useMemo, useState } from "react";

type Curriculum = {
  id: number;
  name: string;
  year: string;
  created_at: string;
  updated_at: string;
};

const years = [
  "الكل",
  "الأول",
  "الثاني",
  "الثالث",
  "الرابع",
  "الخامس",
];

const CurriculumsPage = () => {
  const [curriculums, setCurriculums] = useState<Curriculum[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedYear, setSelectedYear] = useState("الكل");

  useEffect(() => {
    const fetchCurriculums = async () => {
      try {
        const res = await fetch("https://demo.roarisolutions.com/api/curriculums");

        if (res.status !== 200) {
          throw new Error("Failed to fetch curriculums");
        }

        const data = await res.json();
	console.log(data)
        setCurriculums(data.data);
      } catch (err) {
	      console.log(err)
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchCurriculums();
  }, []);

  const filteredCurriculums = useMemo(() => {
    if (selectedYear === "الكل") return curriculums;

    return curriculums.filter((c) => c.year === selectedYear);
  }, [curriculums, selectedYear]);

  const formatDate = (date: string) =>
    new Date(date).toLocaleString();

  return (
    <section className="min-h-full w-full bg-gray-100 p-8 text-slate-700">
      <div className="mx-auto max-w-6xl rounded-xl bg-white p-6 shadow-lg">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">المناهج</h1>

          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {loading && (
          <div className="py-10 text-center ">
            Loading...
          </div>
        )}

        {error && (
          <div className="py-10 text-center ">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="overflow-x-auto">
            <table className="min-w-full overflow-hidden rounded-lg border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left">ID</th>
                  <th className="px-4 py-3 text-left">الاسم</th>
                  <th className="px-4 py-3 text-left">العام الدراسي</th>
                  <th className="px-4 py-3 text-left">تاريخ الإضافة</th>
                  <th className="px-4 py-3 text-left">تاريخ التعديل</th>
                </tr>
              </thead>

              <tbody>
                {filteredCurriculums.length > 0 ? (
                  filteredCurriculums.map((curriculum) => (
                    <tr
                      key={curriculum.id}
                      className="border-t hover:bg-gray-50"
                    >
                      <td className="px-4 py-3">{curriculum.id}</td>
                      <td className="px-4 py-3">{curriculum.name}</td>
                      <td className="px-4 py-3">{curriculum.year}</td>
                      <td className="px-4 py-3">
                        {formatDate(curriculum.created_at)}
                      </td>
                      <td className="px-4 py-3">
                        {formatDate(curriculum.updated_at)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      className="py-6 text-center "
                    >
                      No curriculums found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default CurriculumsPage;

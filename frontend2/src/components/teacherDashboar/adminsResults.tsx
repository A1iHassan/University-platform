import { useEffect, useMemo, useState } from "react";

type Result = {
  id: number;
  student_id: number;
  curriculum_id: number;
  grade: string;
  letter_grade?: string;
  created_at: string;
  updated_at: string;
};

type Student = {
  id: number;
  name: string;
  year?: string;
};

type Curriculum = {
  id: number;
  name: string;
  year: string;
};

const years = ["الكل", "الأول", "الثاني", "الثالث", "الرابع", "الخامس"];

const AdminsResults = () => {
  const [results, setResults] = useState<Result[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [curriculums, setCurriculums] = useState<Curriculum[]>([]);

  const [selectedYear, setSelectedYear] = useState("الكل");
  const [selectedCurriculum, setSelectedCurriculum] = useState("الكل");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        const [resultsResponse, studentsResponse, curriculumsResponse] =
          await Promise.all([
            fetch("https://demo.roarisolutions.com/api/results", {
              method: "GET",
              headers: {
                Accept: "application/json",
              },
            }),
            fetch("https://demo.roarisolutions.com/api/students", {
              method: "GET",
              headers: {
                Accept: "application/json",
              },
            }),
            fetch("https://demo.roarisolutions.com/api/curriculums", {
              method: "GET",
              headers: {
                Accept: "application/json",
              },
            }),
          ]);

        if (!resultsResponse.ok) {
          throw new Error("Failed to fetch results");
        }

        if (!studentsResponse.ok) {
          throw new Error("Failed to fetch students");
        }

        if (!curriculumsResponse.ok) {
          throw new Error("Failed to fetch curriculums");
        }

        const resultsData = await resultsResponse.json();
        const studentsData = await studentsResponse.json();
        const curriculumsData = await curriculumsResponse.json();

        setResults(resultsData.data);
        setStudents(studentsData.data);
        setCurriculums(curriculumsData.data);
      } catch (error) {
        console.error(error);
        setError("حدث خطأ أثناء جلب البيانات.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredResults = useMemo(() => {
    return results.filter((result) => {
      const student = students.find(
        (student) => student.id === result.student_id
      );

      const yearMatches =
        selectedYear === "الكل" || student?.year === selectedYear;

      const curriculumMatches =
        selectedCurriculum === "الكل" ||
        result.curriculum_id === Number(selectedCurriculum);

      return yearMatches && curriculumMatches;
    });
  }, [results, students, selectedYear, selectedCurriculum]);

  const getStudentName = (studentId: number) => {
    return (
      students.find((student) => student.id === studentId)?.name || "غير معروف"
    );
  };

  const getCurriculumName = (curriculumId: number) => {
    return (
      curriculums.find((curriculum) => curriculum.id === curriculumId)?.name ||
      "غير معروف"
    );
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleString("ar-SA", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <section
      dir="rtl"
      className="min-h-full w-full bg-gray-100 p-8 text-slate-700"
    >
      <div className="mx-auto max-w-7xl rounded-xl bg-white p-6 shadow-lg">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold text-gray-800">
            نتائج الطلاب
          </h1>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {/* Year */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year === "الكل" ? "جميع الأعوام" : year}
                </option>
              ))}
            </select>

            {/* Curriculum */}
            <select
              value={selectedCurriculum}
              onChange={(e) => setSelectedCurriculum(e.target.value)}
              className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            >
              <option value="الكل">جميع المواد</option>

              {curriculums.map((curriculum) => (
                <option key={curriculum.id} value={curriculum.id}>
                  {curriculum.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="py-10 text-center text-gray-500">
            جاري تحميل النتائج...
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="rounded-lg bg-red-50 p-4 text-center text-red-600">
            {error}
          </div>
        )}

        {/* Table */}
        {!loading && !error && (
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="px-5 py-4 text-right text-sm font-semibold text-gray-700">
                    ID
                  </th>

                  <th className="px-5 py-4 text-right text-sm font-semibold text-gray-700">
                    الطالب
                  </th>

                  <th className="px-5 py-4 text-right text-sm font-semibold text-gray-700">
                    المادة
                  </th>

                  <th className="px-5 py-4 text-right text-sm font-semibold text-gray-700">
                    الدرجة
                  </th>

                  <th className="px-5 py-4 text-right text-sm font-semibold text-gray-700">
                    التقدير
                  </th>

                  <th className="px-5 py-4 text-right text-sm font-semibold text-gray-700">
                    تاريخ الإنشاء
                  </th>

                  <th className="px-5 py-4 text-right text-sm font-semibold text-gray-700">
                    تاريخ التحديث
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredResults.length > 0 ? (
                  filteredResults.map((result) => (
                    <tr
                      key={result.id}
                      className="border-b transition hover:bg-gray-50"
                    >
                      {/* ID */}
                      <td
                        dir="ltr"
                        className="whitespace-nowrap px-5 py-4 text-left text-sm text-gray-600"
                      >
                        {result.id}
                      </td>

                      {/* Student */}
                      <td className="whitespace-nowrap px-5 py-4 text-sm font-medium text-gray-800">
                        {getStudentName(result.student_id)}
                      </td>

                      {/* Curriculum */}
                      <td className="whitespace-nowrap px-5 py-4 text-sm text-gray-600">
                        {getCurriculumName(result.curriculum_id)}
                      </td>

                      {/* Grade */}
                      <td
                        dir="ltr"
                        className="whitespace-nowrap px-5 py-4 text-left text-sm font-medium text-gray-700"
                      >
                        {result.grade}
                      </td>

                      {/* Letter Grade */}
                      <td
                        dir="ltr"
                        className="whitespace-nowrap px-5 py-4 text-left text-sm font-semibold text-gray-700"
                      >
                        {result.letter_grade || "-"}
                      </td>

                      {/* Created */}
                      <td className="whitespace-nowrap px-5 py-4 text-sm text-gray-500">
                        {formatDate(result.created_at)}
                      </td>

                      {/* Updated */}
                      <td className="whitespace-nowrap px-5 py-4 text-sm text-gray-500">
                        {formatDate(result.updated_at)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={7}
                      className="py-10 text-center text-gray-500"
                    >
                      لا توجد نتائج مطابقة للفلتر المحدد.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Result count */}
        {!loading && !error && (
          <div className="mt-4 text-sm text-gray-500">
            عدد النتائج: {filteredResults.length}
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminsResults;

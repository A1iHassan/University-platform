import { useEffect, useState } from "react";

type Student = {
  id: number;
  name: string;
  age: number;
  year?: string;
};

type Curriculum = {
  id: number;
  name: string;
  year: string;
};

const letterGrades = [
  "A+",
  "A",
  "A-",
  "B+",
  "B",
  "B-",
  "C+",
  "C",
  "C-",
  "D+",
  "D",
  "F",
];

const AdminsResultsEntery = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [curriculums, setCurriculums] = useState<Curriculum[]>([]);

  const [studentId, setStudentId] = useState("");
  const [curriculumId, setCurriculumId] = useState("");
  const [grade, setGrade] = useState("");
  const [letterGrade, setLetterGrade] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        const [studentsResponse, curriculumsResponse] = await Promise.all([
          fetch("http://localhost:3000/students", {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }),
          fetch("http://localhost:3000/curriculums", {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }),
        ]);

        if (!studentsResponse.ok) {
          throw new Error("Failed to fetch students");
        }

        if (!curriculumsResponse.ok) {
          throw new Error("Failed to fetch curriculums");
        }

        const studentsData = await studentsResponse.json();
        const curriculumsData = await curriculumsResponse.json();

        setStudents(studentsData.data);
        setCurriculums(curriculumsData.data);
      } catch (error) {
        console.error(error);
        setError("حدث خطأ أثناء جلب بيانات الطلاب والمواد.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!studentId || !curriculumId || !grade) {
      setError("يرجى تعبئة الطالب والمادة والدرجة.");
      return;
    }

    try {
      setSaving(true);

      const response = await fetch("http://localhost:3000/results", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          student_id: Number(studentId),
          curriculum_id: Number(curriculumId),
          grade,
          ...(letterGrade && {
            letter_grade: letterGrade,
          }),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save result");
      }

      setMessage("تم حفظ نتيجة الطالب بنجاح.");

      setStudentId("");
      setCurriculumId("");
      setGrade("");
      setLetterGrade("");
    } catch (error) {
      console.error(error);
      setError("حدث خطأ أثناء حفظ النتيجة.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <section
      dir="rtl"
      className="flex min-h-full w-full text-slate-700 items-center justify-center bg-gray-100 p-8"
    >
      <div className="w-full max-w-2xl rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-8 text-right text-2xl font-bold text-gray-800">
          إدخال نتيجة طالب
        </h1>

        {loading ? (
          <div className="py-10 text-center text-gray-500">
            جاري تحميل البيانات...
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Student */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="student"
                className="text-sm font-medium text-gray-700"
              >
                الطالب
              </label>

              <select
                id="student"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              >
                <option value="">اختر الطالب</option>

                {students.map((student) => (
                  <option key={student.id} value={student.id}>
                    {student.name}
                    {student.year ? ` - ${student.year}` : ""}
                  </option>
                ))}
              </select>
            </div>

            {/* Curriculum */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="curriculum"
                className="text-sm font-medium text-gray-700"
              >
                المادة
              </label>

              <select
                id="curriculum"
                value={curriculumId}
                onChange={(e) => setCurriculumId(e.target.value)}
                className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              >
                <option value="">اختر المادة</option>

                {curriculums.map((curriculum) => (
                  <option key={curriculum.id} value={curriculum.id}>
                    {curriculum.name} - {curriculum.year}
                  </option>
                ))}
              </select>
            </div>

            {/* Grade */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="grade"
                className="text-sm font-medium text-gray-700"
              >
                الدرجة
              </label>

              <input
                id="grade"
                type="number"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                placeholder="أدخل الدرجة"
                className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Letter Grade */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="letterGrade"
                className="text-sm font-medium text-gray-700"
              >
                التقدير بالحروف
              </label>

              <select
                id="letterGrade"
                value={letterGrade}
                onChange={(e) => setLetterGrade(e.target.value)}
                className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              >
                <option value="">اختر التقدير</option>

                {letterGrades.map((letter) => (
                  <option key={letter} value={letter}>
                    {letter}
                  </option>
                ))}
              </select>
            </div>

            {/* Messages */}
            {error && (
              <div className="rounded-lg bg-red-50 p-3 text-center text-sm text-red-600">
                {error}
              </div>
            )}

            {message && (
              <div className="rounded-lg bg-green-50 p-3 text-center text-sm text-green-600">
                {message}
              </div>
            )}

            {/* Submit */}
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                disabled={saving}
                className="rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
              >
                {saving ? "جاري الحفظ..." : "حفظ النتيجة"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default AdminsResultsEntery;

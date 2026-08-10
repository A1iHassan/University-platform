import { useEffect, useState } from "react";

type Student = {
  id: number;
  name: string;
  age: number;
  blood_type?: string;
  school_degree?: string;
  certificate?: string;
  national_id?: number;
  year?: string;
};

const AdminStudents = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://localhost:3000/students", {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch students");
        }

        const data = await response.json();
        setStudents(data.data);
      } catch (error) {
        console.error(error);
        setError("حدث خطأ أثناء جلب بيانات الطلاب.");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return (
    <section
      dir="rtl"
      className="min-h-full w-full bg-gray-100 p-8"
    >
      <div className="mx-auto max-w-7xl rounded-xl bg-white p-6 shadow-lg">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            الطلاب
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            قائمة جميع الطلاب المسجلين
          </p>
        </div>

        {loading && (
          <div className="py-10 text-center text-gray-500">
            جاري تحميل البيانات...
          </div>
        )}

        {error && (
          <div className="rounded-lg bg-red-50 p-4 text-center text-red-600">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="px-5 py-4 text-right text-sm font-semibold text-gray-700">
                    ID
                  </th>

                  <th className="px-5 py-4 text-right text-sm font-semibold text-gray-700">
                    الاسم
                  </th>

                  <th className="px-5 py-4 text-right text-sm font-semibold text-gray-700">
                    العمر
                  </th>

                  <th className="px-5 py-4 text-right text-sm font-semibold text-gray-700">
                    فصيلة الدم
                  </th>

                  <th className="px-5 py-4 text-right text-sm font-semibold text-gray-700">
                    الدرجة الدراسية
                  </th>

                  <th className="px-5 py-4 text-right text-sm font-semibold text-gray-700">
                    الشهادة
                  </th>

                  <th className="px-5 py-4 text-right text-sm font-semibold text-gray-700">
                    الرقم الوطني
                  </th>

                  <th className="px-5 py-4 text-right text-sm font-semibold text-gray-700">
                    العام الدراسي
                  </th>
                </tr>
              </thead>

              <tbody>
                {students.length > 0 ? (
                  students.map((student) => (
                    <tr
                      key={student.id}
                      className="border-b transition hover:bg-gray-50"
                    >
                      <td
                        dir="ltr"
                        className="whitespace-nowrap px-5 py-4 text-left text-sm text-gray-600"
                      >
                        {student.id}
                      </td>

                      <td className="whitespace-nowrap px-5 py-4 text-sm font-medium text-gray-800">
                        {student.name}
                      </td>

                      <td className="whitespace-nowrap px-5 py-4 text-sm text-gray-600">
                        {student.age}
                      </td>

                      <td
                        dir="ltr"
                        className="whitespace-nowrap px-5 py-4 text-left text-sm text-gray-600"
                      >
                        {student.blood_type || "-"}
                      </td>

                      <td className="whitespace-nowrap px-5 py-4 text-sm text-gray-600">
                        {student.school_degree || "-"}
                      </td>

                      <td className="whitespace-nowrap px-5 py-4 text-sm text-gray-600">
                        {student.certificate || "-"}
                      </td>

                      <td
                        dir="ltr"
                        className="whitespace-nowrap px-5 py-4 text-left text-sm text-gray-600"
                      >
                        {student.national_id || "-"}
                      </td>

                      <td className="whitespace-nowrap px-5 py-4 text-sm text-gray-600">
                        {student.year || "-"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={8}
                      className="py-10 text-center text-gray-500"
                    >
                      لا يوجد طلاب مسجلون.
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

export default AdminStudents;

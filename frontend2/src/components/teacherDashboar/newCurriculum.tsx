import { useState } from "react";

const years = ["الأول", "الثاني", "الثالث", "الرابع", "الخامس"];

const NewCurriculum = () => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessage("");

    if (!name.trim() || !year) {
      setMessage("يرجى تعبئة جميع الحقول.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("https://demo.roarisolutions.com/api/curriculums", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          year,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save curriculum.");
      }

      setMessage("تمت إضافة المادة بنجاح.");
      setName("");
      setYear("");
    } catch (error) {
      console.error(error);
      setMessage("حدث خطأ أثناء حفظ المادة.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex m-auto text-slate-700 min-h-full items-center justify-center bg-gray-100 p-8">
      <div className="w-full max-w-xl rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-8 text-left text-2xl font-bold text-gray-800">
          أضف المادة المطلوبة
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-gray-700"
            >
              اسم المادة
            </label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="أدخل اسم المادة"
              className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="year"
              className="text-sm font-medium text-gray-700"
            >
              العام الدراسي
            </label>

            <select
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            >
              <option value="">اختر العام الدراسي</option>

              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>

          {message && (
            <p className="text-sm text-center text-gray-700">{message}</p>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
            >
              {loading ? "جاري الحفظ..." : "إضافة"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewCurriculum;

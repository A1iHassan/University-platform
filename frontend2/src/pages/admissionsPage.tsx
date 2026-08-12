import { useState, type ChangeEvent, type FormEvent } from "react";

const BLOOD_TYPES = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"] as const;

interface FormState {
  name: string;
  age: string;
  blood_type: string;
  school_degree: string;
  certificate: string;
  national_id: string;
  year: string;
}

// Mirrors CreateApplicationDto on the backend
interface ApplicationPayload {
  name: string;
  age: number;
  status: string;
  blood_type?: string;
  school_degree?: string;
  certificate?: string;
  national_id?: number;
  year?: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

const initialFormState: FormState = {
  name: "",
  age: "",
  blood_type: "",
  school_degree: "",
  certificate: "",
  national_id: "",
  year: "",
};

const Admission = () => {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic client-side validation for the DTO's required fields
    if (!formData.name.trim()) {
      setStatus("error");
      setErrorMessage("الاسم الرباعي الكامل مطلوب");
      return;
    }
    if (!formData.age || isNaN(Number(formData.age))) {
      setStatus("error");
      setErrorMessage("العمر مطلوب ويجب أن يكون رقماً صحيحاً");
      return;
    }

    // Build the payload to match CreateApplicationDto.
    // Numeric fields are coerced to numbers, empty optional strings are omitted
    // so @IsOptional() fields aren't sent as empty strings.
    const payload: ApplicationPayload = {
      name: formData.name.trim(),
      age: parseInt(formData.age, 10),
      status: "pending", // required by DTO, defaulted for a new submission
    };

    if (formData.blood_type) payload.blood_type = formData.blood_type;
    if (formData.school_degree.trim()) payload.school_degree = formData.school_degree.trim();
    if (formData.certificate.trim()) payload.certificate = formData.certificate.trim();
    if (formData.national_id) payload.national_id = parseInt(formData.national_id, 10);
    if (formData.year.trim()) payload.year = formData.year.trim();

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://demo.roarisolutions.com/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        // Try to surface a useful message from the API's error response
        let message = `فشل الإرسال (رمز الحالة ${response.status})`;
        try {
          const errorBody = await response.json();
          if (errorBody?.message) {
            message = Array.isArray(errorBody.message)
              ? errorBody.message.join("، ")
              : errorBody.message;
          }
        } catch {
          // response had no JSON body; keep the default message
        }
        throw new Error(message);
      }

      setStatus("success");
      setFormData(initialFormState);
    } catch (err) {
      setStatus("error");
      const message = err instanceof Error ? err.message : "حدث خطأ أثناء إرسال الطلب، حاول مرة أخرى";
      setErrorMessage(message);
    }
  };

  return (
    <main className="w-full flex flex-col justify-between" dir="rtl">
      <h1 className="mt-20 mr-15 text-4xl">بوابة التسجيل لعام 2026</h1>
      <span className="text-sm font-light text-slate-400 mr-15 mt-3 mb-15">
        تأكد من اكتمال جميع الملفات المرفقة مع التقديم ، و من صحتها. سيصلك بريد إلكتروني لمتابعة مراحل التقديم
      </span>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 w-full px-15 mb-20">

        <form
          onSubmit={handleSubmit}
          className="shadow-xl/20 border border-slate-50 p-10 w-full lg:w-1/2 flex flex-col gap-3 bg-white rounded"
        >
          <label htmlFor="name">الاسم الرباعي الكامل</label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="outline-none border border-slate-200 rounded px-5 py-2 focus:border-slate-400 mb-5"
          />

          <label htmlFor="age">العمر</label>
          <input
            id="age"
            type="number"
            min="0"
            value={formData.age}
            onChange={handleChange}
            required
            className="outline-none border border-slate-200 rounded px-5 py-2 focus:border-slate-400 mb-5"
          />

          <label htmlFor="blood_type">فصيلة الدم (اختياري)</label>
          <select
            id="blood_type"
            value={formData.blood_type}
            onChange={handleChange}
            className="outline-none border border-slate-200 rounded px-5 py-2 focus:border-slate-400 mb-5 bg-white"
          >
            <option value="">-- اختر فصيلة الدم --</option>
            {BLOOD_TYPES.map((bt) => (
              <option key={bt} value={bt}>
                {bt}
              </option>
            ))}
          </select>

          <label htmlFor="school_degree">الشهادة الثانوية / المعدل (اختياري)</label>
          <input
            id="school_degree"
            type="text"
            value={formData.school_degree}
            onChange={handleChange}
            className="outline-none border border-slate-200 rounded px-5 py-2 focus:border-slate-400 mb-5"
          />

          <label htmlFor="certificate">الشهادة / المؤهل (اختياري)</label>
          <input
            id="certificate"
            type="text"
            value={formData.certificate}
            onChange={handleChange}
            className="outline-none border border-slate-200 rounded px-5 py-2 focus:border-slate-400 mb-5"
          />

          <label htmlFor="national_id">الرقم الوطني (اختياري)</label>
          <input
            id="national_id"
            type="number"
            value={formData.national_id}
            onChange={handleChange}
            className="outline-none border border-slate-200 rounded px-5 py-2 focus:border-slate-400 mb-5"
          />

          <label htmlFor="year">السنة (اختياري)</label>
          <input
            id="year"
            type="text"
            placeholder="مثال: 2026"
            value={formData.year}
            onChange={handleChange}
            className="outline-none border border-slate-200 rounded px-5 py-2 focus:border-slate-400 mb-5"
          />

          {status === "error" && (
            <p className="text-sm text-red-600 text-center">{errorMessage}</p>
          )}
          {status === "success" && (
            <p className="text-sm text-green-600 text-center">
              تم إرسال طلبك بنجاح!
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="self-center py-4 px-8 shadow-lg/10 border border-slate-200 text-slate-600 hover:bg-slate-700 hover:text-slate-50 transition-colors duration-200 cursor-pointer rounded mt-5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "جاري الإرسال..." : "حفظ و إرسال"}
          </button>
        </form>

        <aside className="w-full lg:w-1/3 bg-slate-50 border border-slate-200 p-8 rounded shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            إرشادات التقديم والوثائق المطلوبة
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            يرجى تجهيز البيانات والملفات التالية قبل إرسال نموذج التسجيل:
          </p>

          <ul className="list-disc list-inside space-y-5 text-slate-800 font-medium">
            <li>
              قبول عام
              <ul className="list-[circle] list-inside pr-6 mt-3 space-y-2 text-sm text-slate-600 font-normal">
                <li>صورة مصدقة من الشهادة الثانوية.</li>
                <li>صورة من الهوية الوطنية أو جواز السفر.</li>
                <li>شهادة الميلاد الأصلية.</li>
                <li>4 صور شخصية حديثة.</li>
              </ul>
            </li>
            <li>
              قبول خاص
              <ul className="list-[circle] list-inside pr-6 mt-3 space-y-2 text-sm text-slate-600 font-normal">
                <li>جميع الوثائق المطلوبة في القبول العام.</li>
                <li>إيصال سداد الرسوم الخاصة بالاستمارة.</li>
                <li>شهادة إثبات حالة (في حال التقديم كأبناء عاملين أو فئات خاصة).</li>
                <li>خطاب ترشيح أو موافقة من الجهة المختصة (إن وجد).</li>
              </ul>
            </li>
          </ul>
        </aside>

      </div>
    </main>
  );
};

export default Admission;

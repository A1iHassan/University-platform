import { Fragment, useEffect, useState } from "react";

// Mirrors the backend's application record (CreateApplicationDto + generated fields)
interface Application {
  id: number;
  name: string;
  age: number;
  blood_type?: string | null;
  school_degree?: string | null;
  certificate?: string | null;
  national_id?: number | null;
  year?: string | null;
  status: string;
  created_at?: string;
}

type FetchStatus = "idle" | "loading" | "success" | "error";

const STATUS_STYLES: Record<string, string> = {
  pending: "bg-amber-100 text-amber-700",
  accepted: "bg-emerald-100 text-emerald-700",
  rejected: "bg-red-100 text-red-700",
};

const statusStyle = (status: string) =>
  STATUS_STYLES[status] ?? "bg-slate-100 text-slate-700";

const formatValue = (value: string | number | null | undefined) =>
  value === null || value === undefined || value === "" ? "—" : String(value);

const AdminApplications = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const loadApplications = async () => {
    setFetchStatus("loading");
    setErrorMessage("");
    try {
      const response = await fetch("http://localhost:3000/applications");
      if (!response.ok) {
        throw new Error(`فشل تحميل الطلبات (رمز الحالة ${response.status})`);
      }
      const data: Application[] = await response.json();
      setApplications(data);
      setFetchStatus("success");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "حدث خطأ أثناء تحميل الطلبات";
      setErrorMessage(message);
      setFetchStatus("error");
    }
  };

  useEffect(() => {
    loadApplications();
  }, []);

  const toggleRow = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full flex flex-col px-15 py-15" dir="rtl">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl">لوحة الطلبات المرسلة</h1>
        <button
          type="button"
          onClick={loadApplications}
          disabled={fetchStatus === "loading"}
          className="py-2 px-5 border border-slate-200 text-slate-600 hover:bg-slate-700 hover:text-slate-50 transition-colors duration-200 cursor-pointer rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {fetchStatus === "loading" ? "جاري التحديث..." : "تحديث"}
        </button>
      </div>

      {fetchStatus === "loading" && (
        <p className="text-slate-500 text-center py-10">جاري تحميل الطلبات...</p>
      )}

      {fetchStatus === "error" && (
        <div className="text-center py-10">
          <p className="text-red-600 mb-3">{errorMessage}</p>
          <button
            type="button"
            onClick={loadApplications}
            className="py-2 px-5 border border-slate-200 text-slate-600 hover:bg-slate-700 hover:text-slate-50 transition-colors duration-200 cursor-pointer rounded"
          >
            إعادة المحاولة
          </button>
        </div>
      )}

      {fetchStatus === "success" && applications.length === 0 && (
        <p className="text-slate-500 text-center py-10">لا توجد طلبات حتى الآن</p>
      )}

      {fetchStatus === "success" && applications.length > 0 && (
        <div className="w-full overflow-x-auto border border-slate-200 rounded shadow-sm">
          <table className="w-full text-right border-collapse">
            <thead className="bg-slate-50 text-slate-600 text-sm">
              <tr>
                <th className="px-5 py-3 font-medium">الاسم</th>
                <th className="px-5 py-3 font-medium">العمر</th>
                <th className="px-5 py-3 font-medium">السنة</th>
                <th className="px-5 py-3 font-medium">الحالة</th>
                <th className="px-5 py-3 font-medium w-10"></th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => {
                const isExpanded = expandedId === app.id;
                return (
                  <Fragment key={app.id}>
                    <tr
                      onClick={() => toggleRow(app.id)}
                      className="border-t border-slate-100 cursor-pointer hover:bg-slate-50 transition-colors duration-150"
                    >
                      <td className="px-5 py-3 text-slate-800">{app.name}</td>
                      <td className="px-5 py-3 text-slate-600">{app.age}</td>
                      <td className="px-5 py-3 text-slate-600">{formatValue(app.year)}</td>
                      <td className="px-5 py-3">
                        <span
                          className={`text-xs font-medium px-3 py-1 rounded-full ${statusStyle(
                            app.status
                          )}`}
                        >
                          {app.status}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-slate-400">
                        <span
                          className={`inline-block transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        >
                          ▾
                        </span>
                      </td>
                    </tr>

                    {isExpanded && (
                      <tr className="border-t border-slate-100 bg-slate-50">
                        <td colSpan={5} className="px-5 py-5">
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 text-sm">
                            <div>
                              <p className="text-slate-400 mb-1">الاسم الرباعي الكامل</p>
                              <p className="text-slate-800 font-medium">{app.name}</p>
                            </div>
                            <div>
                              <p className="text-slate-400 mb-1">العمر</p>
                              <p className="text-slate-800 font-medium">{app.age}</p>
                            </div>
                            <div>
                              <p className="text-slate-400 mb-1">فصيلة الدم</p>
                              <p className="text-slate-800 font-medium">
                                {formatValue(app.blood_type)}
                              </p>
                            </div>
                            <div>
                              <p className="text-slate-400 mb-1">الشهادة الثانوية / المعدل</p>
                              <p className="text-slate-800 font-medium">
                                {formatValue(app.school_degree)}
                              </p>
                            </div>
                            <div>
                              <p className="text-slate-400 mb-1">الشهادة / المؤهل</p>
                              <p className="text-slate-800 font-medium">
                                {formatValue(app.certificate)}
                              </p>
                            </div>
                            <div>
                              <p className="text-slate-400 mb-1">الرقم الوطني</p>
                              <p className="text-slate-800 font-medium">
                                {formatValue(app.national_id)}
                              </p>
                            </div>
                            <div>
                              <p className="text-slate-400 mb-1">السنة</p>
                              <p className="text-slate-800 font-medium">{formatValue(app.year)}</p>
                            </div>
                            <div>
                              <p className="text-slate-400 mb-1">الحالة</p>
                              <p className="text-slate-800 font-medium">{app.status}</p>
                            </div>
                            {app.created_at && (
                              <div>
                                <p className="text-slate-400 mb-1">تاريخ التقديم</p>
                                <p className="text-slate-800 font-medium">
                                  {new Date(app.created_at).toLocaleString("ar")}
                                </p>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default AdminApplications;

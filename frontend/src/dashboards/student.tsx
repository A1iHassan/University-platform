import { useState } from 'react';
import { ClipboardDocumentCheckIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';

const Students = () => {
  const [activeTab, setActiveTab] = useState<'results' | 'schedule'>('results');

  const renderContent = () => {
    switch (activeTab) {
      case 'results':
        return <ResultsContent />;
      case 'schedule':
        return <ScheduleContent />;
      default:
        return null;
    }
  };

  return (
    <div dir="rtl" className="flex h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white shadow-lg border-l border-slate-200 flex flex-col">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-xl font-bold text-slate-800">بوابة الطالب</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => setActiveTab('results')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'results'
                ? 'bg-blue-50 text-blue-700 font-semibold'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <ClipboardDocumentCheckIcon className="w-6 h-6" />
            <span>نتائجي</span>
          </button>
          
          <button
            onClick={() => setActiveTab('schedule')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'schedule'
                ? 'bg-blue-50 text-blue-700 font-semibold'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <CalendarDaysIcon className="w-6 h-6" />
            <span>جداول المحاضرات</span>
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
};

// --- Tab Components ---

const ResultsContent = () => {
  const results = [
    { id: 1, subject: 'هندسة البرمجيات', score: 92, grade: 'A' },
    { id: 2, subject: 'قواعد البيانات', score: 85, grade: 'B+' },
    { id: 3, subject: 'شبكات الحاسوب', score: 78, grade: 'C+' },
    { id: 4, subject: 'الذكاء الاصطناعي', score: 95, grade: 'A+' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-2xl font-bold text-slate-800 mb-6">سجل الدرجات - الفصل الدراسي الأول</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-600">
              <th className="p-4 font-semibold">رقم المقرر</th>
              <th className="p-4 font-semibold">المادة</th>
              <th className="p-4 font-semibold">الدرجة</th>
              <th className="p-4 font-semibold">التقدير</th>
            </tr>
          </thead>
          <tbody>
            {results.map((item) => (
              <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="p-4 text-slate-500">CS-{100 + item.id}</td>
                <td className="p-4 font-medium">{item.subject}</td>
                <td className="p-4">{item.score}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-md text-sm font-bold ${
                    item.grade.includes('A') ? 'bg-green-100 text-green-700' :
                    item.grade.includes('B') ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {item.grade}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ScheduleContent = () => {
  const schedule = [
    { id: 1, day: 'الأحد', time: '08:00 - 10:00 ص', subject: 'هندسة البرمجيات', hall: 'قاعة 101' },
    { id: 2, day: 'الأحد', time: '10:30 - 12:30 م', subject: 'الذكاء الاصطناعي', hall: 'معمل الحاسبات 3' },
    { id: 3, day: 'الثلاثاء', time: '09:00 - 11:00 ص', subject: 'قواعد البيانات', hall: 'قاعة 205' },
    { id: 4, day: 'الأربعاء', time: '12:00 - 02:00 م', subject: 'شبكات الحاسوب', hall: 'مدرج أ' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-2xl font-bold text-slate-800 mb-6">الجدول الدراسي الأسبوعي</h3>
      <div className="grid gap-4">
        {schedule.map((session) => (
          <div key={session.id} className="flex items-center justify-between p-5 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all bg-slate-50">
            <div className="flex flex-col gap-1">
              <span className="text-lg font-bold text-slate-800">{session.subject}</span>
              <span className="text-sm text-slate-500">{session.hall}</span>
            </div>
            <div className="text-left">
              <span className="block font-medium text-slate-700">{session.day}</span>
              <span className="block text-sm text-blue-600 font-semibold mt-1 dir-ltr">{session.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;

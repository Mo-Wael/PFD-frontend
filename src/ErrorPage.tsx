import { AlertCircle } from 'lucide-react';

const ErrorPage = () => {
  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      <main className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="bg-white p-12 rounded-2xl shadow-sm border hover:shadow-2xl transition-all border-gray-100 flex flex-col items-center max-w-lg text-center">
            <div className="bg-red-50 p-4 rounded-full mb-6">
              <AlertCircle className="w-12 h-12 text-red-500" />
            </div>
            <h2 className="text-6xl font-black text-slate-800 mb-4">404</h2>
            <p className="text-xl font-semibold text-slate-700 mb-2">Oops! Something went wrong.</p>
            <p className="text-gray-500 mb-8 leading-relaxed">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <button
              onClick={() => window.location.href = '/'}
              className="px-8 py-3 bg-[#0f172a] text-white rounded-xl font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ErrorPage;
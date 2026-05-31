import Link from "next/link";
import { Home, SearchX } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#f8f9fa] flex items-center justify-center px-6 py-16">
      <div className="max-w-md text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-[#2d6a4f]/10 rounded-2xl flex items-center justify-center">
            <SearchX className="w-10 h-10 text-[#2d6a4f]" />
          </div>
        </div>
        <h1 className="text-8xl font-extrabold text-[#1a1f2e]">404</h1>
        <h2 className="mt-3 text-2xl font-bold text-gray-800">Page Not Found</h2>
        <p className="mt-3 text-gray-500 text-sm leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1f2e] text-white text-sm font-semibold rounded-lg hover:bg-[#2d6a4f] transition-colors">
            <Home className="w-4 h-4" /> Back To Home
          </Link>
          <Link href="/all-facilities" className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-50 transition-colors">
            Explore Facilities
          </Link>
        </div>
        <p className="mt-8 text-xs text-gray-300">SportNest · Play Better · Book Faster</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
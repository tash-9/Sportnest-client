const Loading = () => {
  return (
    <div className="bg-[#f8f9fa] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-8 w-48 bg-gray-200 animate-pulse rounded-lg mb-2" />
        <div className="h-4 w-64 bg-gray-100 animate-pulse rounded mb-8" />
        <div className="h-11 w-full bg-gray-200 animate-pulse rounded-xl mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="h-48 bg-gray-200 animate-pulse" />
              <div className="p-4 space-y-3">
                <div className="h-5 bg-gray-100 animate-pulse rounded w-3/4" />
                <div className="h-3 bg-gray-100 animate-pulse rounded w-1/2" />
                <div className="h-8 bg-gray-100 animate-pulse rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
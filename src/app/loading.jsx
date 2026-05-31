const Loader = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-[#d8f3dc] border-t-[#2d6a4f] rounded-full animate-spin" />
        <p className="text-sm text-gray-400 font-medium tracking-wide">Loading SportNest...</p>
      </div>
    </div>
  );
};

export default Loader;
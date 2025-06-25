
export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-purple-500 border-dashed rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-purple-300 rounded-full animate-ping"></div>
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-white/70 backdrop-blur-md">
      <div className="flex items-center justify-center">
        <div
          className="h-12 w-12 rounded-full border-4 border-orange-200 border-t-orange-500 animate-spin"
          style={{ animationDuration: "0.6s" }}
        />
      </div>
    </div>
  );
}

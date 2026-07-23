import Link from "next/link";

export default function LocationNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl font-bold text-gray-800">Location Not Found</h1>
      <p className="mt-4 text-gray-600">This location isn&apos;t available in our directory.</p>
      <Link href="/" className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600">
        Go Home
      </Link>
    </div>
  );
}

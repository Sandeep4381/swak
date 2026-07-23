import type { CityData } from "@/types/city";
import Link from "next/link";

export default function Breadcrumb({ city }: { city: CityData }) {
  return (
    <nav className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-500">
      <Link href="/" className="hover:text-orange-500">Home</Link>
      <span className="mx-2">/</span>
      <span className="text-[#29566A] font-medium">{city.name}</span>
    </nav>
  );
}

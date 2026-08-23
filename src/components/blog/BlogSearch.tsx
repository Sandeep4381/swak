import { Search } from "lucide-react";

interface BlogSearchProps {
  placeholder?: string;
}

export default function BlogSearch({
  placeholder = "Search travel guides, destinations and travel tips...",
}: BlogSearchProps) {
  return (
    <div className="mx-auto max-w-2xl">
      <label className="group relative block">
        <span className="sr-only">Search blogs</span>
        <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-teal-700" />
        <input
          type="search"
          placeholder={placeholder}
          className="w-full rounded-full border border-gray-200 bg-white py-4 pl-14 pr-6 text-base text-[#29566A] shadow-card outline-none transition-all placeholder:text-gray-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20"
        />
      </label>
    </div>
  );
}

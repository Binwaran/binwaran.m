// src/components/ArticleSection.jsx
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function ArticleSection() {
  return (
    <section className="bg-stone-200 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Latest articles</h2>

        {/* Tag filter */}
        <div className="flex gap-4 mb-6 text-sm">
          {["Highlight", "Cat", "Inspiration", "General"].map((tag, index) => (
            <button
              key={index}
              className={`px-4 py-1 rounded-full border ${
                index === 0
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Input
            type="text"
            placeholder="Search"
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
        </div>
      </div>
    </section>
  )
}

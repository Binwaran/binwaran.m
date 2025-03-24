// src/components/ArticleSection.jsx
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import BlogCard from "./BlogCard"
import blogPosts from "../data/blogPosts";

export default function ArticleSection() {
  return (
    <section className="bg-stone-200 py-12">
    <div className="max-w mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Latest articles</h2>

      {/* Tag filter + Search อยู่แถวเดียวกัน */}
      <div className="flex items-center justify-between gap-4 mb-6 text-sm flex-wrap sm:flex-nowrap">
        <div className="flex gap-4">
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

        <div className="relative w-full sm:w-64 mt-2 sm:mt-0">
          <Input
            type="text"
            placeholder="Search"
            className="pl-10 w-full"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
        </div>
      </div>
    </div>
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {blogPosts.map((post) => (
        <BlogCard
          key={post.id}
          image={post.image}
          category={post.category}
          title={post.title}
          description={post.description}
          author={post.author}
          date={post.date}
        />
      ))}
    </section>
</section>


  )
}

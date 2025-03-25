import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import BlogCard from "./BlogCard";
import blogPosts from "../data/blogPosts";

export default function ArticleSection() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  const [selectedCategory, setSelectedCategory] = useState("Highlight");

  const filteredPosts = blogPosts.filter(
    (post) => post.category === selectedCategory
  );

  return (
    <section className="bg-stone-200 py-12">
      <div className="max-w mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Latest articles</h2>

        {/* 🔍 Search & Filter */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 text-sm">
          {/* ✅ ปุ่ม Filter สำหรับ Desktop */}
          <div className="hidden md:flex space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                disabled={category === selectedCategory}
                className={`px-4 py-3 rounded-sm text-sm font-medium transition-colors
                  ${category === selectedCategory
                    ? "bg-[#DAD6D1] text-black"
                    : "bg-muted text-muted-foreground hover:bg-[#EDEAE6]"}`}
              >
                {category}
              </button>
            ))}

          </div>
          {/* 🔍 Search */}
          <div className="relative w-full md:w-64">
            <Input
              type="text"
              placeholder="Search"
              className="pl-10 w-full"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          </div>

          

          {/* ✅ Dropdown สำหรับ Mobile */}
          <div className="w-full md:hidden">
            <Select
              value={selectedCategory}
              onValueChange={(value) => setSelectedCategory(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

        </div>
      </div>

      {/* ✅ Blog Card List */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {filteredPosts.map((post) => (
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
  );
}

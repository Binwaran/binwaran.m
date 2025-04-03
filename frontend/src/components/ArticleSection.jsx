import { useEffect, useState, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import BlogCard from "./BlogCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";

export default function ArticleSection() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  const [selectedCategory, setSelectedCategory] = useState("Highlight");

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // 🔄 โหลดข้อมูลจาก API
  const fetchPosts = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://blog-post-project-api.vercel.app/posts",
        {
          params: {
            page,
            limit: 6,
            category: selectedCategory === "Highlight" ? "" : selectedCategory,
          },
        }
      );
  
      setPosts((prev) => [...prev, ...response.data.posts]);
  
      if (response.data.currentPage >= response.data.totalPages) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false);
    }
  }, [page, selectedCategory]); // <-- ใส่ dependencies ให้มันรู้
  

  // 🔁 โหลดเมื่อ page หรือ category เปลี่ยน
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]); // ✅ เปลี่ยนเป็นแบบนี้
  

  // รีเซตข้อมูลเมื่อเปลี่ยน category
  useEffect(() => {
    setPosts([]);
    setPage(1);
    setHasMore(true);
  }, [selectedCategory]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <section className="bg-stone-200 py-12">
      <div className="max-w mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Latest articles</h2>

        {/* 🔍 Filter & Search */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 text-sm">
          {/* Filter Desktop */}
          <div className="hidden md:flex space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                disabled={category === selectedCategory}
                className={`px-4 py-3 rounded-sm text-sm font-medium transition-colors
                  ${
                    category === selectedCategory
                      ? "bg-[#DAD6D1] text-black"
                      : "bg-muted text-muted-foreground hover:bg-[#EDEAE6]"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* 🔍 Search bar (ยังไม่ทำงานในเวอร์ชันนี้) */}
          <div className="relative w-full md:w-64">
            <Input
              type="text"
              placeholder="Search"
              className="pl-10 w-full"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          </div>

          {/* Mobile dropdown */}
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

        {/* 🧾 BlogCard Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              image={post.image}
              category={post.category}
              title={post.title}
              description={post.description}
              author={post.author}
              date={new Date(post.date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            />
          ))}
        </section>

        {/* 🔁 Loading */}
        {isLoading && (
          <div className="text-center mt-6 text-gray-500">Loading...</div>
        )}

        {/* ⬇️ View More */}
        {hasMore && !isLoading && (
          <div className="text-center mt-8">
            <button
              onClick={handleLoadMore}
              className="hover:text-muted-foreground font-medium underline"
            >
              View more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

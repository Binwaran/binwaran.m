import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { toast } from "sonner"; // npm i sonner

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const isLoggedIn = false; // mock login state

  useEffect(() => {
    axios
      .get(`https://blog-post-project-api.vercel.app/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch(() => navigate("/notfound")); // หรือโชว์ NotFound ในหน้านี้แทนก็ได้
  }, [navigate, id]);

  if (!post) return <div className="p-8">Loading...</div>;

  const handleLike = () => {
    if (!isLoggedIn) return toast.error("Please login to like this post.");
    toast.success("You liked this post! ❤️");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(post.content);
    toast.success("Copied to clipboard ✅");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src={post.image} className="w-full rounded mb-6" alt={post.title} />
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-muted-foreground mb-4">
        {post.author} | {new Date(post.date).toLocaleDateString("en-GB")}
      </p>
      <div className="prose">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

      <div className="flex gap-4 mt-6">
        <button onClick={handleLike} className="bg-pink-500 text-white px-4 py-2 rounded">
          ❤️ Like
        </button>
        <button onClick={handleCopy} className="bg-gray-300 px-4 py-2 rounded">
          📋 Copy
        </button>
        <a
          href={`https://twitter.com/intent/tweet?url=https://myblog.com/post/${id}`}
          target="_blank"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          🔗 Share
        </a>
      </div>
    </div>
  );
};

export default Article;
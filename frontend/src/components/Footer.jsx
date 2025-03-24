import { Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full h-[100px] bg-stone-400 px-6 py-4 text-2xl text-stone-800">
      <div className="max-w-7xl h-full mx-auto flex justify-between items-center ">
        {/* ซ้าย: ข้อความ + ไอคอน */}
        <div className="flex items-center gap-4">
          <span>Get in touch</span>
          <a
            href="https://www.linkedin.com/in/binwaran"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-500"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/Binwaran"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-500"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

        {/* ขวา: ลิงก์ Home */}
        <div>
          <Link to="/" className="underline hover:text-stone-500">
            Home page
          </Link>
        </div>
      </div>
    </footer>
  );
}



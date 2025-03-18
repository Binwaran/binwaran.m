import {FaLinkedin, FaGithub} from "react-icons/fa";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
function Footer() {
  return (
    <footer className="fixed bottom-5 left-0 w-full text-white py-4 flex flex-col md:flex-row justify-center items-center gap-4">
      {/* ซ้าย: Get in touch + โลโก้ LinkedIn & GitHub */}
        <div className="w-[calc(100%-40px)] max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left px-5 py-3 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-2">
                <p className="text-neon">Get in touch</p>
                <div className="flex gap-2">
                    <a href="https://www.linkedin.com/in/binwaran" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-2xl neon-icon hover:brightness-150 transition duration-300" />
                    </a>
                    <a href="https://github.com/Binwaran" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-2xl neon-icon hover:brightness-150 transition duration-300" />
                    </a>
                </div>
            </div>
        </div>

      {/* ขวา: Link กลับไปหน้า Home */}
        <div className="mt-3 md:mt-0">
            <Link to="/home" className="text-neon hover:brightness-150 transition duration-300">
            Home page
            </Link>
        </div>
    </footer>
  );
}

export default Footer;

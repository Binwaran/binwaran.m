import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // state เปิด/ปิดเมนู
    const toggleMenu = () => setIsOpen(!isOpen); // ฟังก์ชันสลับเมนู

    return (
        <nav className="relative top-10 left-1/2 transform -translate-x-1/2 w-full max-w-7xl p-4 z-50 transition-all duration-300">
            <div className="flex justify-between items-center px-6">
                {/* LOGO */}
                <h1 className="text-neon text-3xl">BINWARAN</h1>

                {/* BUTTON HAMBURGER (เฉพาะ Mobile) */}
                <button  className="lg:hidden text-4xl text-neon bg-transparent border-none p-0 focus:outline-none transition-all duration-300 hover:scale-125 hover:text-glow ml-30"
                    onClick={toggleMenu}>
                    {isOpen ? "✖" : "☰"}
                </button>

                {/* MENU สำหรับ Desktop */}
                <ul className="hidden lg:flex gap-8 text-lg uppercase tracking-wide shadow-neon px-6 py-3 rounded-lg">
                      {["Home", "About", "Blog", "Contact", "Projects", "Login", "Admin"].map(
                          (text, index) => (
                              <li key={index} className="hover:scale-125 transition-all duration-300">
                                  <Link
                                      to={text.toLowerCase()}
                                      className="text-neon hover:text-glow hover:scale-110 transition-all duration-300"
                                  >
                                      {text}
                                  </Link>
                              </li>
                          )
                      )}
                  </ul>
            </div>

            {/* MENU สำหรับ Mobile (Dropdown) */}
            {isOpen && (
                <ul className="absolute top-16 right-0 bg-black/90 px-10 py-6 rounded-lg flex flex-col items-center gap-6 text-lg transition-all duration-300 border border-neon shadow-neon">
                    {["Home", "About", "Blog", "Contact", "Projects", "TechStack", "Login", "Admin"].map(
                        (text, index) => (
                            <li key={index}>
                                <Link
                                    to={text.toLowerCase()}
                                    className="text-neon text-xl hover:text-glow transition-all duration-200"
                                    onClick={toggleMenu} // กดแล้วปิดเมนู
                                >
                                    {text}
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            )}
        </nav>
    );
}

export default Navbar;

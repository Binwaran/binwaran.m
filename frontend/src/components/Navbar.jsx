import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // state เปิด/ปิดเมนู
    const toggleMenu = () => setIsOpen(!isOpen); // ฟังก์ชันสลับเมนู

    return (
        <nav className="relative top-2 left-1/2 transform -translate-x-1/2 w-full p-4 z-50 transition-all duration-300 sm:top-8">
            <div className="flex justify-between items-center px-4">
                {/* LOGO */}
                <Link to="/">
                <img src=".\public\namelogo.png" alt="" className="w-[100px] drop-shadow-xl sm:w-[200px]" />
                </Link>

                {/* BUTTON HAMBURGER (เฉพาะ Mobile) */}
                <button  className="lg:hidden text-4xl text-gray-900 drop-shadow-lg bg-transparent border-none p-0 focus:outline-none transition-all duration-300 hover:scale-125 ml-30 z-100"
                    onClick={toggleMenu}>
                    {isOpen ? "✖" : "☰"}
                </button>

                {/* MENU สำหรับ Desktop */}
                <ul className="hidden lg:flex gap-8 text-lg uppercase tracking-wide px-6 py-3 rounded-lg text-gray-900 drop-shadow-lg">
                      {["Home", "About", "Blog", "Contact", "Projects","Sign-in", "Login"].map(
                          (text, index) => (
                              <li key={index} className="hover:scale-125 transition-all duration-300">
                                  <Link
                                      to={text.toLowerCase()}
                                      className="hover:scale-110 transition-all duration-300"
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
                <ul className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white px-10 py-6 rounded-lg flex flex-col items-center gap-6 text-lg drop-shadow-lg text-gray-900 z-100">
                    {["Home", "About", "Blog", "Contact", "Projects","Sign-in", "Login"].map(
                        (text, index) => (
                            <li key={index} className="transition-transform duration-300 hover:scale-110">
                                <Link
                                    to={text.toLowerCase()}
                                    className="text-gray-900 text-xl block text-center transition-colors duration-300"
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

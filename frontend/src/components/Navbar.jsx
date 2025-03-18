import { useState } from "react"; 
import { Link } from "react-router-dom";
function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // state เปิด/ปิดเมนู
    const toggleMenu = () => setIsOpen(!isOpen); // ฟังก์ชันสลับเมนู
  
    return (
      <nav className="fixed top-10 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl p-4 z-50">
        <div className="flex justify-between items-center px-6">
          {/* LOGO */}
          <h1 className="text-neon text-2xl">BINWARAN</h1>
  
          {/* BUTTON HAMBURGER (เฉพาะ Mobile) */}
          <button className="lg:hidden text-4xl text-neon bg-transparent border-none p-0 focus:outline-none transition-transform duration-300 hover:scale-110"style={{ backgroundColor: "transparent", boxShadow: "none", border: "none" }} onClick={toggleMenu}>
            {isOpen ? "✖" : "☰"}
          </button>
  
          {/* MENU สำหรับ Desktop */}
          <ul className="hidden lg:flex gap-8 text-lg font-bold uppercase tracking-wide">
            {["Home", "About", "Blog", "Contact", "Projects", "TechStack","Login","Admin"].map(
              (text, index) => (
                <li key={index}>
                  <Link to={text.toLowerCase()} className="text-neon">
                    {text}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
  
        {/* MENU สำหรับ Mobile (Dropdown) */}
        {isOpen && (
          <ul className="absolute top-16 right-0 bg-black/10 px-10 py-6 rounded-lg flex flex-col items-center gap-6 text-lg transition-all duration-300">
            {["Home", "About", "Blog", "Contact", "Projects", "TechStack","Login","Admin"].map(
              (text, index) => (
                <li key={index}>
                  <Link
                    to={text.toLowerCase()}
                    className="text-neon text-xl"
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
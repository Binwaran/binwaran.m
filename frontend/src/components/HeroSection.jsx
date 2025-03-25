import { Link } from "react-router-dom";

function HeroSection() {
    return (
      <section className="relative w-full h-[400px] sm:h-[500px] md:h-[700px] lg:h-[900px] flex items-end p-10">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-10 text-center text-gray-900">
        <h1 className="text-7xl sm:text-[80px] md:text-[150px] lg:text-[200px] font-bodoniSC font-bold drop-shadow-[0_5px_10px_rgba(0,0,0,0.3)] leading-none z-0">NOFFFIE</h1>
      </div>
      <div>
        <img src="/nofffiepic.png" alt="Nofffie picture" className="absolute top-8 sm:top-0 left-0 flex justify-center items-center w-[500px] drop-shadow-[0_5px_10px_rgba(0,0,0,0.3)] sm:w-[1500px] z-40"/>
      </div>
      <div className="w-full h-[200px] absolute top-42 sm:top-70 md:top-100 lg:top-130 left-1/2 transform -translate-x-1/2 mt-10 text-center text-gray-900 gap-0 z-40">
        <h2 className="text-stone-800 font-serif font-light drop-shadow-[0_5px_10px_rgba(0,0,0,0.3)] flex flex-col leading-none">
        <span className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[120px]">BINWARAN</span>
        <span className="text-[26px] sm:text-[40px] md:text-[50px] lg:text-[80px]">MILINTHAJINDA</span>
        <span className="text-[10px] sm:text-[15px] md:text-[20px] lg:text-[30px]">Full-Stack Developer | Coder | Creator | Trader</span>
          </h2>
      </div>
      <div className="relative flex-row w-full text-stone-900 z-41">
          <div className="absolute bottom-[200px] sm:bottom-[250px] left-5 md:bottom-[350px] md:left-50 lg:bottom-[450px] lg:left-65 transform -translate-x-1/2 text-center text-[10px] md:text-lg lg:text-xl drop-shadow-[0_5px_10px_rgba(0,0,0,0.3)] font-medium text-gray-500">
          <p className="">CODE IS MY LANGUAGE</p>
          <p>LIFE IS MY STACK.</p>
          </div>
          <div className="absolute bottom-[] sm:bottom-[190px] right-0 md:bottom-[330px] md:right-25 lg:bottom-[450px] lg:right-50 transform -translate-y-1/2 drop-shadow-[0_5px_10px_rgba(0,0,0,0.3)] text-right">
            <p className="text-xl md:text-[15px] lg:text-lg font-bold uppercase tracking-widest text-gray-500">Explore My</p>
            <h3 className="text-2xl md:text-[20px] lg:text-[30px] font-bold text-gray-500">Projects</h3>
            <Link to="/projects">
              <button type="button" className="mt-0 px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-900 hover:text-white transition">
              View Now →
              </button>
              </Link>
          </div>
      </div>
      </section>
    );
  }
  
  export default HeroSection;
  
function HeroSection() {
    return (
      <section className="flex items-center justify-center text-center">
        {/* กรอบสี่เหลี่ยมเรืองแสง */}
        <div className="border-2 border-neonBlue rounded-xl max-w-3xl w-full backdrop-blur-sm">
          
          {/* ข้อความหลัก */}
          <h1 className="!text-[50px] md:!text-[80px] lg:!text-[100px] font-bold text-neon tracking-wide">
            Welcome<br/> to <br/>Binwaran
          </h1>
  
          {/* คำอธิบาย */}
          <p className="text-xl md:text-2xl text-white mt-12 glow-text !pt-10 !pb-10">
                Step into the future of technology and creativity
        </p>
  
          {/* ปุ่ม CTA */}
          <button className="mt-6 px-20 py-3 text-xl font-bold text-black bg-neonPink rounded-lg shadow-lg hover:scale-105 transition transform duration-300">
            Explore My Work 🚀
          </button>
        </div>
      </section>
    );
  }
  
  export default HeroSection;
  
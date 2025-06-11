"use client";
import Image from "next/image";

interface HeroSectionProps {
  setIsPopupOpen: (isOpen: boolean) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setIsPopupOpen }) => {
  return (
    <section
      className="bg-[#105931] py-8 px-2 md:px-6 relative overflow-hidden min-h-screen flex items-start font-sans"
      style={{ height: "calc(85vh)", paddingTop: "12px" }}
    >
      <div className="container mx-auto grid md:grid-cols-7 gap-4 items-start">
        {/* Left side - Stats and Text (Desktop) */}
        <div
          className="md:col-span-3 relative z-10 hidden md:block"
          style={{ marginTop: "80px", marginLeft: "0px" }}
        >
          <div className="circle-outer w-[600px] h-[580px] -left-[310px] top-[-90px] border-[6px] border-opacity-30 border-[#eebe3a11] opacity-20 absolute"></div>
          <div className="circle-inner w-[520px] h-[500px] -left-[270px] top-[-50px] border-[6px] border-opacity-40 border-[#eebe3a11] absolute opacity-20"></div>

          <div className="mb-4 animate-fade-in">
            <div className="flex items-start">
              <div className="flex items-baseline mr-4">
                <span className="hero-stats relative text-3xl" style={{ color: "#FFAF03" }}>
                  1<span className="relative">0<span className="hero-plus absolute inset-0 flex items-center justify-center text-xl" style={{ color: "#FFAF03" }}>+</span></span>
                </span>
              </div>
              <div style={{ marginTop: "60px" }}>
                <h2 className="hero-subtitle text-xl" style={{ color: "#FFAF03" }}>
                  Years
                </h2>
                <p className="hero-tagline text-base" style={{ color: "#FFFFFF", fontWeight: "bold", lineHeight: "1.2", marginLeft: "13px", marginTop: "15px" }}>
                  Building future
                </p>
              </div>
            </div>
          </div>

          <div className="mb-4 animate-fade-in animate-delay-200">
            <div className="flex items-start">
              <div className="flex items-baseline">
                <span className="hero-stats relative text-3xl ml-[-21px]" style={{ color: "#FFAF03", marginRight: "-20px" }}>
                  4<span className="relative">0<span className="hero-plus absolute inset-0 flex items-center justify-center text-xl" style={{ color: "#FFAF03" }}>+</span></span>
                </span>
              </div>
              <div style={{ marginTop: "60px", marginLeft: "30px" }}>
                <h2 className="hero-subtitle text-xl" style={{ color: "#FFAF03" }}>
                  Groups
                </h2>
                <p className="hero-tagline text-base" style={{ color: "#FFFFFF", fontWeight: "bold", lineHeight: "1.2", marginLeft: "10px", marginTop: "15px", marginBottom: "15px" }}>
                  Stronger together
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginLeft: "-15px", marginTop: "20px" }}>
            <p className="hero-description mb-6 animate-fade-in animate-delay-300 text-base">
              Providing small loans to help people start <br /> their small
              businesses
            </p>
          </div>

          <button
            className="relative flex items-center justify-center text-center font-bold transition-all duration-300 ease-in-out
              hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#FFD700] 
              text-[#072515] overflow-hidden group"
            style={{ width: "250px", height: "64px", fontSize: "22px", backgroundColor: "#F0AD1C", borderRadius: "12px", cursor: "pointer" }}
            onClick={() => setIsPopupOpen(true)}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderRadius: "12px" }}></span>
            <span className="relative z-10">Apply Now</span>
            <span className="absolute w-0 h-0 bg-white opacity-25 rounded-full transform scale-0 transition-all duration-500 ease-out group-active:scale-150 group-active:opacity-0"></span>
          </button>
        </div>

        {/* Right side - Image (Desktop) */}
        <div className="md:col-span-4 relative animate-slide-in-right hidden md:block" style={{ right: "-100px", top: "40px" }}>
          <Image
            src="/hero.svg?height=638&width=750"
            width={850}
            height={520}
            alt="Grass Root Capital"
            className="rounded-lg relative z-10"
            style={{ width: "850px", height: "500px", objectFit: "cover", marginLeft: "-130px", borderRadius: "20px" }}
          />
        </div>
{/* Mobile View */}
<div className="md:hidden w-full px-4 mt-10 text-center">
  {/* Hero Stats */}
  <div className="flex flex-col items-center gap-5">
    {/* Years of Experience */}
    <div className="flex items-center gap-4">
      <span className="text-8xl font-extrabold text-[#FFAF03] relative">
        10
        <sup className="text-5xl absolute top-[-10px] right-[-18px]">+</sup>
      </span>
      <div className="text-left ml-4 mt-6">
        <h1 className="text-3xl font-bold text-[#FFAF03]">Years</h1>
        <p className="text-white text-base font-medium mt-[-1px] ml-1">Building future</p>
      </div>
    </div>

    {/* Groups - Moved Up */}
    <div className="flex items-center gap-4 mt-[-10px] ml-4">
      <span className="text-8xl font-extrabold text-[#FFAF03] relative">
        40
        <sup className="text-5xl absolute top-[-10px] right-[-18px]">+</sup>
      </span>
      <div className="text-left ml-4 mt-5">
        <h2 className="text-3xl font-bold text-[#FFAF03]">Groups</h2>
        <p className="text-white text-base font-medium mt-[-1px] ml-1">Stronger together</p>
      </div>
    </div>
  </div>

  {/* Hero Description */}
  <p className="mt-7 text-white text-base font-medium leading-snug">
    Providing small loans to help people start their small businesses.
  </p>

  {/* Apply Now Button */}
 <button
    className="relative flex items-center justify-center mt-6 text-center font-bold transition-all duration-300 ease-in-out
        hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#FFD700]
        text-[#072515] overflow-hidden group mx-auto"
    style={{ width: "180px", height: "45px", fontSize: "18px", backgroundColor: "#F0AD1C", borderRadius: "12px", cursor: "pointer" }}
    onClick={() => setIsPopupOpen(true)}
  >
    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderRadius: "12px" }}></span>
    <span className="relative z-10">Apply Now</span>
    <span className="absolute w-0 h-0 bg-white opacity-25 rounded-full transform scale-0 transition-all duration-500 ease-out group-active:scale-150 group-active:opacity-0"></span>
  </button>

  {/* Hero Image */}
  <div className="mt-8">
    <Image
      src="/hero.svg?height=300&width=360"
      width={360}
      height={300}
      alt="Grass Root Capital"
      className="mx-auto rounded-lg"
      style={{ width: "82%", height: "auto", objectFit: "cover", borderRadius: "20px" }}
    />
  </div>
</div>


      </div>
    </section>
  );
};

export default HeroSection;
 
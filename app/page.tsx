"use client"
import { useRouter } from "next/router"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { Check } from "lucide-react"
import PopupForm from "@/components/popup-form"
import FAQSection from "@/components/faq-section"
import ContactForm from "@/components/contact-form"
import AnimatedStatistics from "@/components/animated-statistics"
import { useScreenSize } from "@/hooks/use-screen-size"
import HeroSection from "@/components/herosection"
import Link from "next/link";


export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [showSecondImage, setShowSecondImage] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const statsRef = useRef<HTMLDivElement>(null)
  const [counters, setCounters] = useState({
    years: 0,
    groups: 0,
    investment: 0,
    customerGrowth: 0,
  })
  const [counted, setCounted] = useState(false)
  const { isMobile } = useScreenSize()

  const services = [
    {
      title: "Secured Loan",
      description: "Financial help for your small ventures,empowering you to create a better tomorrow",
      subtext: "Easy six-month loan terms.",
    },
    {
      title: "Unsecured Loan",
      description: "Access capital without assets, relying on your creditworthiness and group support.",
      subtext: "24-week easy EMIs.",
    },
  ]

  const loanTypes = [
    { id: 1, title: "Gold loan" },
    { id: 2, title: "Two-wheeler loan" },
    { id: 3, title: "Agriculture loan" },
  ]

  const unsecuredLoanTypes = [
    { id: 1, title: "Street-vendor loans", subtext: "24-week easy EMIs." },
    { id: 2, title: "Joint-reliability loans" },
  ]
  const empowermentCards = [
    {
      title: "Women Empowerment Scheme",
      tagline: "Loans specifically for women to start or grow their businesses.",
      bgColor: "#E6A5C0",
      image: "/serv1.svg",
    },
    {
      title: "Self-Help Group",
      tagline: "Small groups save, loan, and grow through microfinance network.",
      bgColor: "#E1BCAE",
      image: "/serv2.svg",
    },
    {
      title: "Joint Reliability Loans",
      tagline: "Group members jointly guarantee loans, enabling access to microfinance.",
      bgColor: "#D0FFDA",
      image: "/serv3.svg",
    },
    {
      title: "Co-operative Model",
      tagline: "The cooperative structure provides members with ownership and shared benefits.",
      bgColor: "#B7E3D9",
      image: "/serv4.svg",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !counted) {
          startCounting()
          setCounted(true)
        }
      },
      { threshold: 0.1 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [counted])

  const startCounting = () => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepTime = duration / steps

    let currentStep = 0

    const interval = setInterval(() => {
      currentStep++

      const progress = currentStep / steps

      setCounters({
        years: Math.floor(progress * 10),
        groups: Math.floor(progress * 40),
        investment: Math.floor(progress * 7900),
        customerGrowth: Math.floor(progress * 3900),
      })

      if (currentStep === steps) {
        clearInterval(interval)
      }
    }, stepTime)
  }

  return (
    <>
    
    <HeroSection setIsPopupOpen={setIsPopupOpen} />
    
      <section className="py-8 mt-5 md:py-16 bg-[#105931]" style={{ marginTop: isMobile ? "-50px" : "-200px" }}>
        <div className="w-full px-4 md:px-0">
          <div className="mx-auto" style={{ maxWidth: isMobile ? "100%" : "calc(100% - 60px)" }}>
            <div className="relative cursor-pointer" onMouseEnter={() => setShowSecondImage(true)}>
              {!showSecondImage && (
                <Image
                  src="third.svg?height=863&width=2360"
                  width={0}
                  height={863}
                  alt="Grass Root Services"
                  className="w-full animate-scale-in"
                  style={{ width: "100%", display: "block" }}
                />
              )}

              {showSecondImage && (
                <div className="animate-scale-in w-full mt-4">
                  <div style={{ height: isMobile ? "auto" : "600px", overflow: "hidden", width: "100%" }}>
                    <Image
                      src="/four.svg?height=600&width=1400"
                      width={0}
                      height={600}
                      alt="Grass Root Services Detail"
                      className="rounded-[15px] w-full"
                      style={{ objectFit: "cover", width: "100%", display: "block" }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>


{/*  OUR SERVICES SECTION */}


  <section className="py-8 md:py-16 px-4 md:px-12 bg-[#105931] font-sans">
      <div
        className="container mx-auto bg-[#072515] rounded-[16px] p-6 md:p-12"
        style={{ maxWidth: "1280px", minHeight: isMobile ? "auto" : "900px", overflowX: "hidden" }}
      >
        <h2
          className="service-heading text-center mb-8 md:mb-12 animate-fade-in"
          style={{ fontSize: isMobile ? "36px" : "56px" }}
        >
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
         {/* Left side - Loan Types */}
<div className="space-y-4">
  {loanTypes.map((loan, index) => (
    <Link href="/services" key={loan.id} passHref>
      <div
        className="flex justify-between items-center p-4 cursor-pointer animate-slide-in-left"
        style={{
          animationDelay: `${index * 0.1}s`,
          color: "#565656",
          transition: "color 0.3s ease-in-out",
        }}
        onMouseEnter={(e) => {
          const target = e.currentTarget as HTMLElement;
          target.style.color = "#FFFFFF";
          const lastSpan = target.querySelector("span:last-child") as HTMLElement | null;
          if (lastSpan) lastSpan.style.color = "#FFFFFF";
        }}
        onMouseLeave={(e) => {
          const target = e.currentTarget as HTMLElement;
          target.style.color = "#565656";
          const lastSpan = target.querySelector("span:last-child") as HTMLElement | null;
          if (lastSpan) lastSpan.style.color = "#565656";
        }}
      >
        <div className="flex items-center">
          <span className="font-bold mr-4" style={{ fontSize: isMobile ? "24px" : "40px" }}>
            {loan.id}
          </span>
          <h3 className="text-xl font-medium" style={{ fontSize: isMobile ? "24px" : "40px" }}>
            {loan.title}
          </h3>
        </div>
        <span style={{ fontSize: isMobile ? "24px" : "40px", color: "#565656" }}>&gt;</span>
      </div>
    </Link>
  ))}
</div>

          {/* Right side - Service Details */}
          <div className="space-y-6 animate-slide-in-right">
            <h3 className="font-bold mb-4 mt-6" style={{ fontSize: isMobile ? "28px" : "40px" }}>
              Secured Loan
            </h3>
            <p className="text-base md:text-lg" style={{ fontSize: isMobile ? "16px" : "18px" }}>
              {services[activeService].description}
            </p>
            <p className="text-xs md:text-sm" style={{ fontSize: isMobile ? "13px" : "15px" }}>
              {services[activeService].subtext}
            </p>
            <button
              className="relative flex items-center justify-center mt-6 text-center font-bold transition-all duration-300 ease-in-out
              hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#FFD700] 
              text-[#072515] overflow-hidden group"
              style={{
                width: isMobile ? "180px" : "250px",
                height: isMobile ? "45px" : "64px",
                fontSize: isMobile ? "18px" : "22px",
                backgroundColor: "#F0AD1C",
                borderRadius: "12px",
                cursor: "pointer",
              }}
              onClick={() => setIsPopupOpen(true)}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderRadius: "12px" }}></span>
              <span className="relative z-10">Apply Now</span>
              <span className="absolute w-0 h-0 bg-white opacity-25 rounded-full transform scale-0 transition-all duration-500 ease-out group-active:scale-150 group-active:opacity-0"></span>
            </button>
          </div>
        </div>

        <div className="border-t border-gray-700 my-6 md:my-10"></div>

      {/* Unsecured Loan Section */}
<div className="grid md:grid-cols-2 gap-6 md:gap-10">
  {/* Left side - Unsecured Loan Details */}
  <div className="animate-slide-in-left">
    <h3 className="font-bold mb-4" style={{ fontSize: isMobile ? "28px" : "40px" }}>
      Unsecured Loan
    </h3>
    <p className="text-base md:text-lg mb-4 md:mb-6" style={{ fontSize: isMobile ? "16px" : "18px" }}>
      Access capital without assets, relying on your creditworthiness and group support.
    </p>
    <p className="text-xs md:text-sm mb-4 md:mb-6" style={{ fontSize: isMobile ? "13px" : "15px" }}>
      4-week easy EMIs.
    </p>
    
    {/* Apply Now Button (Desktop & Mobile Size Handling) */}
    <button
      className="relative flex items-center justify-center mt-6 text-center font-bold transition-all duration-300 ease-in-out
          hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#FFD700]
          text-[#072515] overflow-hidden group"
      style={{
        width: isMobile ? "180px" : "250px",
        height: isMobile ? "45px" : "64px",
        fontSize: isMobile ? "18px" : "22px",
        backgroundColor: "#F0AD1C",
        borderRadius: "12px",
        cursor: "pointer",
      }}
      onClick={() => setIsPopupOpen(true)}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderRadius: "12px" }}></span>
      <span className="relative z-10">Apply Now</span>
      <span className="absolute w-0 h-0 bg-white opacity-25 rounded-full transform scale-0 transition-all duration-500 ease-out group-active:scale-150 group-active:opacity-0"></span>
    </button>
  </div>
  <div className="space-y-3 animate-slide-in-right">
  {unsecuredLoanTypes.map((loan) => (
    <Link href="/services" key={loan.id} passHref>
      {/* services?tab=unsecured */}
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        style={{ color: "#565656", transition: "color 0.3s ease-in-out" }}
        onMouseEnter={(e) => {
          const target = e.currentTarget as HTMLElement
          target.style.color = "#FFFFFF"
          const lastSpan = target.querySelector("span:last-child") as HTMLElement | null
          if (lastSpan) lastSpan.style.color = "#FFFFFF"
        }}
        onMouseLeave={(e) => {
          const target = e.currentTarget as HTMLElement
          target.style.color = "#565656"
          const lastSpan = target.querySelector("span:last-child") as HTMLElement | null
          if (lastSpan) lastSpan.style.color = "#565656"
        }}
      >
        <div className="flex items-center">
          <span className="font-bold mr-4" style={{ fontSize: isMobile ? "24px" : "40px" }}>
            {loan.id}
          </span>
          <div>
            <h4 className="font-medium" style={{ fontSize: isMobile ? "24px" : "40px" }}>
              {loan.title}
            </h4>
          </div>
        </div>
        <span style={{ fontSize: isMobile ? "24px" : "40px", color: "#565656" }}>&gt;</span>
      </div>
    </Link>
  ))}
</div></div>

        
      </div>
    </section>

{/*  EMPOWER MENT SECTION  */}

<section
  className="py-8 md:py-12 px-4 md:px-12 bg-white font-sans"
  style={{
    backgroundImage: "url(/weemp_bg.svg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="container mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-[#072515] text-center mb-8 md:mb-12 animate-fade-in">
      We Empower
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 justify-center">
      {empowermentCards.map((card, index) => (
        <div
          key={index}
          className="empowerment-card flex flex-col sm:flex-row items-center rounded-lg bg-white shadow-2xl p-4 md:p-8 animate-fade-in"
          style={{
            animationDelay: `${index * 0.1}s`,
            backgroundColor: card.bgColor,
            width: "100%",
            height: "auto",
          }}
        >
          <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
            <Image
              src={card.image || "/placeholder.svg"}
              width={isMobile ? 150 : 220}
              height={isMobile ? 150 : 220}
              alt={card.title}
              className="rounded"
            />
          </div>
          <div className="flex flex-col justify-center text-center sm:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#072515]">{card.title}</h3>
            <p className="tagline text-base md:text-lg text-[#072515]">
              {card.tagline}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <AnimatedStatistics />
      <section
  className="py-8 md:py-16 px-4 md:px-12 font-sans"
  style={{
    backgroundImage: "url(/emp_bg.svg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div
    className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8"
    style={{
      marginLeft: isMobile ? "auto" : "7%",
      marginRight: "auto",
    }}
  >
    {/* Left Side - Image */}
    <div
      className="animate-slide-in-left order-2 md:order-1 flex justify-center md:justify-start"
      style={{
        marginRight: isMobile ? "0" : "24px",
      }}
    >
      <Image
        src="/emp.svg?height=684&width=684"
        width={684}
        height={684}
        alt="Empowering Dreams"
        className="rounded-lg"
        style={{
          width: "100%",
          height: "auto",
          maxWidth: isMobile ? "500px" : "684px",
        }}
      />
    </div>

    {/* Right Side - Text & Button */}
    <div className="animate-slide-in-right order-1 md:order-2 flex flex-col items-center md:items-start text-center md:text-left">
      <h2
        className="text-[#105931] text-4xl md:text-[85px] font-bold mb-4"
        style={{ lineHeight: "1.2" }}
      >
        Empowering Dreams Together.
      </h2>
      <ul className="space-y-4 text-[#072515] mb-6 md:mb-8 mt-6 md:mt-10">
        <li className="flex items-center gap-2">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0F512D]">
            <Check className="text-white" size={16} />
          </span>
          <span className="text-[#0F512D] font-bold text-sm md:text-lg">
            Easy 6-month loan term on secured loans
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0F512D]">
            <Check className="text-white" size={16} />
          </span>
          <span className="text-[#0F512D] font-bold text-sm md:text-lg">
            24-week easy EMIs on unsecured loans
          </span>
        </li>
      </ul>

      {/* BUTTON - Different sizes for Mobile and Desktop */}
      <div className="flex justify-center md:justify-start w-full">
        {isMobile ? (
          <button
            className="relative flex items-center justify-center mt-6 text-center font-bold transition-all duration-300 ease-in-out
              hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#FFD700] 
              text-[#072515] overflow-hidden group mx-auto"
            style={{ width: "180px", height: "45px", fontSize: "18px", backgroundColor: "#F0AD1C", borderRadius: "12px", cursor: "pointer" }}
            onClick={() => setIsPopupOpen(true)}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderRadius: "12px" }}></span>
            <span className="relative z-10">Get a Callback</span>
            <span className="absolute w-0 h-0 bg-white opacity-25 rounded-full transform scale-0 transition-all duration-500 ease-out group-active:scale-150 group-active:opacity-0"></span>
          </button>
        ) : (
          <button
            className="relative flex items-center justify-center text-center font-bold transition-all duration-300 ease-in-out
              hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#FFD700] 
              text-[#072515] overflow-hidden group"
            style={{ width: "300px", height: "64px", fontSize: "22px", backgroundColor: "#F0AD1C", borderRadius: "12px", cursor: "pointer" }}
            onClick={() => setIsPopupOpen(true)}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderRadius: "12px" }}></span>
            <span className="relative z-10">Get a Callback</span>
            <span className="absolute w-0 h-0 bg-white opacity-25 rounded-full transform scale-0 transition-all duration-500 ease-out group-active:scale-150 group-active:opacity-0"></span>
          </button>
        )}
      </div>
    </div>
  </div>
</section>




      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Form Section */}
      <section className="py-8 md:py-16 px-4 md:px-12 bg-[#F5F5F5]">
        <div className="container mx-auto flex justify-center">
          <ContactForm />
        </div>
      </section>

      {/* Popup Form */}
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  )
}


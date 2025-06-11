"use client"
import { useState } from "react"
import Image from "next/image"
import { CreditCard, Bike, Tractor, ShoppingBag, Users } from "lucide-react"
import FAQSection from "@/components/faq-section"
import ContactForm from "@/components/contact-form"
import PopupForm from "@/components/popup-form"
import { useScreenSize } from "@/hooks/use-screen-size"

export default function ServicesPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"secured" | "unsecured">("secured")
  const { isMobile } = useScreenSize()

  const securedLoans = [
    {
      id: 1,
      title: "Gold loan",
      description: "Offering loans using your gold as security.",
      icon: <CreditCard className="text-[#EEBF3A]" size={34} />,
    },
    {
      id: 2,
      title: "Two-wheeler loan",
      description: "Get your bike loan: Fast, simple, and affordable.",
      icon: <Bike className="text-[#EEBF3A]" size={34} />,
    },
    {
      id: 3,
      title: "Agriculture loan",
      description: "Funds to support crop and livestock.",
      icon: <Tractor className="text-[#EEBF3A]" size={35} />,
    },
  ]

  const unsecuredLoans = [
    {
      id: 1,
      title: "Street-vendor loans",
      description: "24-week easy EMIs.",
      icon: <ShoppingBag className="text-[#EEBF3A]" size={34} />,
    },
    {
      id: 2,
      title: "Joint-reliability loans",
      description: "Group members jointly guarantee loans.",
      icon: <Users className="text-[#EEBF3A]" size={34} />,
    },
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
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-[#FFFFFF] py-12 md:py-24 px-4 md:px-6 mt-2 mb-[-20px] md:mb-[-50]">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in text-[#0F512D]">
            Empowering Your Future: Our Services
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fade-in animate-delay-200 text-black">
            Grow your business to new heights with our small loan services.
          </p>
        </div>
      </section>
      {/* Services Tabs */}
      <section className="py-6 md:py-8 px-4 md:px-6 mt-[-20px] md:mt-[-40] bg-[#FFFFFF]">
        <div className="container mx-auto">
          <div className="flex justify-center mb-4">
            <div className="inline-flex flex-wrap justify-center">
              <button
                className={`px-4 md:px-6 py-2 md:py-3 text-lg md:text-[24px] font-medium transition-all duration-300 relative ${
                  activeTab === "secured" ? "text-black font-bold" : "text-gray-500"
                }`}
                onClick={() => setActiveTab("secured")}
              >
                Secured Loans
                {activeTab === "secured" && (
                  <div
                    className="absolute bottom-[1px] h-[3px] bg-black"
                    style={{ width: "100%", left: "50%", transform: "translateX(-50%)" }}
                  ></div>
                )}
              </button>
              <button
                className={`px-4 md:px-6 py-2 md:py-3 text-lg md:text-[24px] font-medium transition-all duration-300 relative ${
                  activeTab === "unsecured" ? "text-black font-bold" : "text-gray-500"
                }`}
                onClick={() => setActiveTab("unsecured")}
              >
                Unsecured Loans
                {activeTab === "unsecured" && (
                  <div
                    className="absolute bottom-[1px] h-[3px] bg-black"
                    style={{ width: "100%", left: "50%", transform: "translateX(-50%)" }}
                  ></div>
                )}
              </button>
            </div>
          </div>

          {/* Loan Cards */}
          
<div className="flex justify-center">
  <div
    className={`grid grid-cols-1 mt-5 gap-6 md:gap-8 ${
      activeTab === "unsecured"
        ? "max-w-full md:max-w-[760px] mx-auto md:grid-cols-2"
        : "md:grid-cols-2 lg:grid-cols-3"
    }`}
  >
    {activeTab === "secured"
      ? securedLoans.map((loan, index) => (
          <div
            key={loan.id}
            className="service-card rounded-lg p-4 md:p-6 flex flex-col animate-fade-in relative group"
            style={{
              animationDelay: `${index * 0.1}s`,
              width: "100%",
              height: "auto",
              minHeight: "250px",
              backgroundColor: "#030303",
            }}
          >
            <div className="absolute top-4 md:top-6 left-4 md:left-6">{loan.icon}</div>
            <h3 className="text-2xl md:text-[32px] font-normal mb-3 md:mb-4 text-left mt-10 md:mt-12">
              {loan.title}
            </h3>
            <p className="text-left mb-8 md:mb-12">{loan.description}</p>

            {/* Mobile View - Always Visible */}
            <button
              className="relative flex items-center justify-center mt-6 text-center font-bold transition-all duration-300 ease-in-out
              hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#FFD700]
              text-[#072515] overflow-hidden group mx-auto md:hidden"
              style={{ width: "180px", height: "45px", fontSize: "18px", backgroundColor: "#F0AD1C", borderRadius: "12px", cursor: "pointer" }}
              onClick={() => setIsPopupOpen(true)}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderRadius: "12px" }}></span>
              <span className="relative z-10">Apply Now</span>
              <span className="absolute w-0 h-0 bg-white opacity-25 rounded-full transform scale-0 transition-all duration-500 ease-out group-active:scale-150 group-active:opacity-0"></span>
            </button>

            {/* Desktop View - Show on Hover */}
            <button
              className="relative flex items-center justify-center text-center font-bold transition-all duration-300 ease-in-out
              hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#FFD700] 
              text-[#072515] overflow-hidden group absolute inset-x-0 bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex"
              style={{ width: "180px", height: "45px", fontSize: "18px", backgroundColor: "#F0AD1C", borderRadius: "12px", cursor: "pointer" }}
              onClick={() => setIsPopupOpen(true)}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderRadius: "12px" }}></span>
              <span className="relative z-10">Apply Now</span>
              <span className="absolute w-0 h-0 bg-white opacity-25 rounded-full transform scale-0 transition-all duration-500 ease-out group-active:scale-150 group-active:opacity-0"></span>
            </button>
          </div>
        ))
      : unsecuredLoans.map((loan, index) => (
          <div
            key={loan.id}
            className="service-card rounded-lg p-4 md:p-6 flex flex-col animate-fade-in relative group"
            style={{
              animationDelay: `${index * 0.1}s`,
              width: "100%",
              height: "auto",
              minHeight: "250px",
              backgroundColor: "#030303",
            }}
          >
            <div className="absolute top-4 md:top-6 left-4 md:left-6">{loan.icon}</div>
            <h3 className="text-2xl md:text-[32px] font-normal mb-3 md:mb-4 text-left mt-10 md:mt-12">
              {loan.title}
            </h3>
            <p className="text-left mb-8 md:mb-12">{loan.description}</p>

            {/* Mobile View - Always Visible */}
            <button
              className="relative flex items-center justify-center mt-6 text-center font-bold transition-all duration-300 ease-in-out
              hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#FFD700]
              text-[#072515] overflow-hidden group mx-auto md:hidden"
              style={{ width: "180px", height: "45px", fontSize: "18px", backgroundColor: "#F0AD1C", borderRadius: "12px", cursor: "pointer" }}
              onClick={() => setIsPopupOpen(true)}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderRadius: "12px" }}></span>
              <span className="relative z-10">Apply Now</span>
              <span className="absolute w-0 h-0 bg-white opacity-25 rounded-full transform scale-0 transition-all duration-500 ease-out group-active:scale-150 group-active:opacity-0"></span>
            </button>

            {/* Desktop View - Show on Hover */}
            <button
              className="relative flex items-center justify-center text-center font-bold transition-all duration-300 ease-in-out
              hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#FFD700] 
              text-[#072515] overflow-hidden group absolute inset-x-0 bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex"
              style={{ width: "180px", height: "45px", fontSize: "18px", backgroundColor: "#F0AD1C", borderRadius: "12px", cursor: "pointer" }}
              onClick={() => setIsPopupOpen(true)}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderRadius: "12px" }}></span>
              <span className="relative z-10">Apply Now</span>
              <span className="absolute w-0 h-0 bg-white opacity-25 rounded-full transform scale-0 transition-all duration-500 ease-out group-active:scale-150 group-active:opacity-0"></span>
            </button>
          </div>
        ))}
  </div>
</div>
</div>
</section>

      {/* Empowerment Section */}
      <section
        className="py-8 md:py-16 px-4 md:px-6 bg-white"
        style={{
          backgroundImage: "url(/weemp_bg.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          fontFamily: "Product Sans, sans-serif",
        }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#072515] text-center mb-8 md:mb-12 animate-fade-in">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 justify-center">
            {empowermentCards.map((card, index) => (
              <div
                key={index}
                className="empowerment-card flex flex-col sm:flex-row items-center rounded-xl bg-white shadow-lg p-6 md:p-10 animate-fade-in transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  backgroundColor: card.bgColor,
                  width: "100%",
                  height: "auto",
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                  <Image
                    src={card.image || "/placeholder.svg"}
                    width={isMobile ? 150 : 220}
                    height={isMobile ? 150 : 220}
                    alt={card.title}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-center text-center sm:text-left">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#072515]">{card.title}</h3>
                  <p className="tagline text-base md:text-lg text-[#072515] block opacity-100 transition-all duration-300">
                    {card.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Documents Section */}
<section className="py-8 md:py-16 px-4 md:px-6 mt-[-15px] bg-[#F5F5F5]">
  <div className="container mx-auto flex items-center justify-center py-6 md:py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
      {/* Image on the Left */}
      <div className="flex justify-center animate-slide-in-left order-2 md:order-1 w-full">
        <Image
          src="/docs.svg"
          width={409}
          height={409}
          alt="Documents Required"
          className="rounded-lg w-full max-w-[90%] md:max-w-[409px] h-auto"
        />
      </div>

      {/* Content on the Right */}
      <div className="max-w-2xl animate-slide-in-right order-1 md:order-2 w-full px-2 md:px-0">
        <h2 className="text-2xl md:text-[40px] font-bold mb-6 md:mb-8 text-black text-center md:text-left">
          Documents Required
        </h2>

        <div className="space-y-4 md:space-y-6 flex flex-col items-center md:items-start w-full">
          {[
            "Aadhar card, ration card, voter ID*",
            "Electricity bill, Passport size photos",
            "Income <2,00,000 per year",
          ].map((text, index) => (
            <div key={index} className="document-field flex justify-center md:justify-start w-full">
              <div className="flex items-center w-full max-w-sm border border-[#B1B1B1] rounded-lg min-h-[56px] px-4">
                <img src="/Vector.svg" alt="Icon" className="mr-2 md:mr-4 w-6 md:w-10" />
                <p className="text-black text-[18px] md:text-[22px] font-medium text-center md:text-left w-full">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Contact Form Section */}
      <section className="py-8 md:py-16 px-4 md:px-6 bg-[#FFFFFF]">
        <div className="container mx-auto flex justify-center">
          <ContactForm />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Popup Form */}
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  )
}


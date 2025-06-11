"use client";

import { useState, useRef, useEffect } from "react";
import { useScreenSize } from "@/hooks/use-screen-size";
import FAQSection from "@/components/faq-section";
import ContactForm from "@/components/contact-form";
import PopupForm from "@/components/popup-form";
import { OurJourney } from "@/components/ourjourney";

export default function AboutPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeField, setActiveField] = useState(0);
  const statsRef = useRef(null);
  const { isMobile } = useScreenSize();

  const trackRecordFields = [
    { id: 0, label: "Track record", value: "10+", subtext: "Years" },
    { id: 1, label: "Supported", value: "40+", subtext: "Groups" },
    { id: 2, label: "Avg. investment per customer", value: "2x", subtext: "Doubled" },
    { id: 3, label: "Investment growth", value: "7900%", subtext: "" },
    { id: 4, label: "Customer growth", value: "3900%", subtext: "" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveField((prev) => (prev + 1) % trackRecordFields.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#FFFFFF] py-12 md:py-24 px-4 md:px-6 font-sans">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 animate-fade-in text-[#0F512D]">
            Grassroot Capital
          </h1>
          <p className="text-lg md:text-xl font-bold mb-2 animate-fade-in animate-delay-200 text-black">
            Finance solutions
          </p>
          <p className="text-base md:text-lg max-w-2xl mx-auto mt-4 animate-fade-in animate-delay-300 text-black">
            We provide small loans to help people start their small businesses.
          </p>
          <div className="flex justify-center mt-8"> {/* Moved button down */}
            <button
              className="random-btn-class relative flex items-center justify-center text-center font-bold transition-all duration-300 ease-in-out
                hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#FFD700] 
                text-[#072515] overflow-hidden group mx-auto md:mx-0"
              style={{
                width: "180px", // Mobile size
                height: "45px",
                fontSize: "18px",
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
      </section>

      <style>
        {`
          @media (min-width: 768px) {
            .random-btn-class {
              width: 250px !important;
              height: 64px !important;
              font-size: 22px !important;
            }
          }
        `}
      </style>
{/* Track Record Section */}
<section ref={statsRef} className="py-8 md:py-16 px-4 md:px-6 bg-white text-black font-sans">
  <div className="container mx-auto flex justify-center">
    <div className="track-record-card flex flex-col md:flex-row justify-center gap-6 md:gap-10 w-full">
      
      {/* Labels Column */}
      <div
        className="track-record-inner-card p-4 md:p-6"
        style={{
          width: "100%",
          minHeight: "320px",
          backgroundColor: "#f5f5f5",
          borderRadius: "12px",
        }}
      >
        <div className="space-y-5">
          {trackRecordFields.map((field) => (
            <div
              key={field.id}
              className={`track-record-field ${
                activeField === field.id ? "active bg-[#0F512D] text-white" : ""
              } p-3 rounded-md cursor-pointer transition-all duration-300`}
              onClick={() => setActiveField(field.id)}
            >
              <h3 className="text-lg md:text-2xl font-extrabold text-left"> {/* Aligned Left */}
                {field.label}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Numbers Column */}
      <div
        className="track-record-inner-card p-6 md:p-8 flex flex-col justify-center items-center"
        style={{
          width: "100%",
          minHeight: isMobile ? "250px" : "320px", // Increased height for mobile
          backgroundColor: "#f5f5f5",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <div className="animate-scale-in" key={activeField}>
          
          {/* Big Number */}
          <div
            className="track-record-number"
            style={{
              fontSize: isMobile ? "120px" : "170px", // Bigger font size for mobile
              fontFamily: "Product Sans, sans-serif",
              fontWeight: "bold",
              WebkitTextStroke: isMobile ? "5px #000" : "8px #000", // Adjusted stroke thickness
              color: "transparent",
              lineHeight: "1.1",
            }}
          >
            {trackRecordFields[activeField].value}
          </div>

          {/* Subtext (Years, Groups) */}
          {trackRecordFields[activeField].subtext && (
            <div
              className="track-record-label mt-[-5px]"
              style={{
                display: "flex",
                marginLeft : "25px", // Align slightly left
                width: "100%",
                paddingLeft: "15%", // Adjusted for perfect alignment
              }}
            >
              <span
                style={{
                  fontSize: isMobile ? "40px" : "44px", // Increased font size
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                {trackRecordFields[activeField].subtext}
              </span>
            </div>
          )}

        </div>
      </div>
    </div>
  </div>
</section>

      {/* Our Journey */}
      <OurJourney />

      {/* Contact Section */}
      <section className="py-8 md:py-16 px-4 md:px-6 bg-[#F5F5F5] font-sans mt-[-30px]">
        <div className="container mx-auto flex justify-center">
          <ContactForm />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Popup Form */}
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}

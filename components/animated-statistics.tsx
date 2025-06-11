"use client"

import { useRef, useEffect, useState } from "react"
import { useScreenSize } from "@/hooks/use-screen-size"

const AnimatedStatistics = () => {
  const statsRef = useRef<HTMLElement>(null)
  const [showYourTrust, setShowYourTrust] = useState(false);
  const [showAverageInvestment, setShowAverageInvestment] = useState(false);
  const [showInvestmentGrowth, setShowInvestmentGrowth] = useState(false);
  const [showCustomerGrowth, setShowCustomerGrowth] = useState(false);
  const { isMobile } = useScreenSize()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowYourTrust(true);
            setTimeout(() => setShowAverageInvestment(true), 400);
            setTimeout(() => setShowInvestmentGrowth(true), 800);
            setTimeout(() => setShowCustomerGrowth(true), 1200);
          }
        })
      },
      {
        rootMargin: isMobile ? "0px" : "-200px",
        threshold: 0.1,
      }
    )

    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [isMobile])

  return (
    <section
      ref={statsRef}
      className="relative py-6 px-4 md:px-12 bg-white min-h-[500px] md:h-[700px] bg-cover bg-center font-sans rounded-lg md:rounded-2xl"
      style={{ backgroundImage: 'url("/trust_bg.svg")', opacity: 0.9, marginTop: "-20px" }}
    >
      {/* === MOBILE VIEW STYLING === */}
      {isMobile ? (
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Your Trust By The Numbers - Moved Slightly Down & Decreased Size */}
          <div className={`transition-opacity duration-700 ${showYourTrust ? "opacity-100" : "opacity-0"}`}>
            <p className="text-2xl font-bold text-black mt-4" style={{ fontFamily: "Product Sans" }}>
              Your Trust<br />By The Numbers
            </p>
          </div>

          {/* 2x Average Investment Per Customer */}
          <div className={`transition-opacity duration-700 ${showAverageInvestment ? "opacity-100" : "opacity-0"}`}>
            <div className="text-[#EEBF3A] font-bold text-7xl" style={{ WebkitTextStroke: "1.5px #B38600", fontFamily: "Product Sans" }}>
              2<span className="inline-block ml-1">x</span>
            </div>
            <p className="text-base font-bold text-black mt-1" style={{ fontFamily: "Product Sans" }}>
              Average investment per customer
            </p>
          </div>

          {/* 7900% Investment Growth */}
          <div className={`transition-opacity duration-700 ${showInvestmentGrowth ? "opacity-100" : "opacity-0"}`}>
            <div className="text-black font-bold text-7xl" style={{ WebkitTextStroke: "1.5px #000", fontFamily: "Product Sans" }}>
              7900%
            </div>
            <p className="text-base font-bold text-black mt-1" style={{ fontFamily: "Product Sans" }}>
              Investment Growth
            </p>
          </div>

          {/* 3900% Customer Growth */}
          <div className={`transition-opacity duration-700 ${showCustomerGrowth ? "opacity-100" : "opacity-0"}`}>
            <div className="text-[#054A25] font-bold text-7xl" style={{ WebkitTextStroke: "1.5px #054A25", fontFamily: "Product Sans" }}>
              3900%
            </div>
            <p className="text-base font-bold text-black mt-1" style={{ fontFamily: "Product Sans" }}>
              Customer Growth
            </p>
          </div>
        </div>
      ) : (
        <>
          {/* === DESKTOP VIEW STYLING === */}

          {/* Your Trust By The Numbers - Moved Slightly Down */}
          <div className={`absolute top-[100px] right-0 transition-opacity duration-700 ${showYourTrust ? "opacity-100" : "opacity-0"}`}>
            <div className="mr-4 text-right">
              <p className="text-2xl md:text-5xl font-bold text-black" style={{ fontFamily: "Product Sans" }}>
                <span className="block">Your Trust</span>
                <span className="block">By The Numbers</span>
              </p>
            </div>
          </div>

          {/* 2x Average investment per customer - Moved Up & Aligned */}
          <div className={`absolute top-[40px] left-16 flex items-start transition-opacity duration-700 ${showAverageInvestment ? "opacity-100" : "opacity-0"}`}>
            <div className="text-[#EEBF3A] font-bold text-6xl md:text-[11rem]" style={{ letterSpacing: "-10px", fontFamily: "Product Sans" }}>
              2<span className="inline-block ml-1">x</span>
            </div>
            <div className="ml-4 md:ml-8 mt-2 md:mt-8 text-left">
              <p className="text-sm md:text-2xl font-bold text-black" style={{ fontFamily: "Product Sans" }}>
                <span className="block">Average</span>
                <span className="block">investment</span>
                <span className="block">per</span>
                <span className="block">customer</span>
              </p>
            </div>
          </div>

          {/* 7900% Investment Growth */}
          <div className={`absolute top-[48%] left-[50%] md:left-[44%] transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ${showInvestmentGrowth ? "opacity-100" : "opacity-0"}`}>
            <div className="text-black font-bold text-6xl md:text-[11rem]" style={{ letterSpacing: "-10px", fontFamily: "Product Sans" }}>
              7900%
            </div>
            <p className="text-sm md:text-2xl mt-[-10px] text-center font-bold text-black" style={{ fontFamily: "Product Sans" }}>
              Investment Growth
            </p>
          </div>

          {/* 3900% Customer Growth */}
          <div className={`absolute top-[72%] md:top-[65%] left-[50%] md:left-[60%] transform -translate-x-1/2 md:transform-none transition-opacity duration-700 ${showCustomerGrowth ? "opacity-100" : "opacity-0"}`}>
            <div className="text-[#054A25] font-bold text-6xl md:text-[11rem]" style={{ letterSpacing: "-10px", fontFamily: "Product Sans" }}>
              3900%
            </div>
            <p className="text-sm md:text-2xl mt-[-10px] text-center font-bold text-black" style={{ fontFamily: "Product Sans" }}>
              Customer Growth
            </p>
          </div>
        </>
      )}
    </section>
  )
}

export default AnimatedStatistics;

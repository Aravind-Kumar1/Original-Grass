"use client"

import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import type React from "react"
import { useState } from "react"
import PopupForm from "@/components/popup-form"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsPopupOpen(true)
  }

  return (
    <div className="font-sans">
      <footer className="bg-[#105931] text-white pt-8 md:pt-16 pb-6 md:pb-8 px-4 md:px-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <Link href="/" className="logo flex items-center">
                <Image src="/logo.svg" alt="Grass Root Logo" width={70} height={70} className="object-contain" />
                <div className="ml-2">
                  <div className="logoText">Grass Root</div>
                  <div className="logoText">Capital</div>
                  <div className="tagline">Finance solutions</div>
                </div>
              </Link>
              <p className="text-white/80 mt-4 max-w-xs">
                A Product of Saadhana Spoorthi <br></br> Auto Finance & Services.
              </p>
            </div>

            {/* Quick Links (moved further to the right) */}
            <div className="pl-0 md:pl-8 lg:pl-16">
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/services" className="text-white/80 hover:text-[#EEBF3A] transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white/80 hover:text-[#EEBF3A] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white/80 hover:text-[#EEBF3A] transition-colors"
                    onClick={handleContactClick}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Finance Solutions */}
            <div>
              <h4 className="text-lg font-bold mb-4">Finance Solutions</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/services" className="text-white/80 hover:text-[#EEBF3A] transition-colors">
                    Secured Loan
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-white/80 hover:text-[#EEBF3A] transition-colors">
                    Unsecured Loan
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <MapPin size={20} className="text-[#EEBF3A] mt-1 flex-shrink-0" />
                  <span className="text-white/80"> 16-124/1, Pargi Village, Parigi Mandal,  Vikarabad, Telangana, India</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone size={20} className="text-[#EEBF3A] flex-shrink-0" />
                  <span className="text-white/80">+91 8309636740</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail size={20} className="text-[#EEBF3A] flex-shrink-0 mt-1" />
                  <span className="text-white/80 break-all md:break-normal">
                  sadanaspoorthyfinance@gmail.com
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-6 md:my-8 bg-white/20" />

          <div className="flex flex-col md:flex-row justify-center items-center text-white/60 text-sm">
            <p>© {currentYear} Grassroot Capital. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">{/* Optional: Add links if needed */}</div>
          </div>
        </div>
        <style jsx>{`
          .logoText {
            color: #f4a600;
            font-size: 18px;
            font-family: "The Seasons", serif;
            line-height: 105%;
            letter-spacing: 0%;
            text-transform: uppercase;
            margin-top: 3px;
          }
          .tagline {
            color: #eeac1f;
            font-size: 13px;
            font-family: "Montserrat", sans-serif;
            margin-top: 2px;
          }
        `}</style>
      </footer>
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  )
}


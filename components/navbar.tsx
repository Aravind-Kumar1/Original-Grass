"use client"
import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"
import Head from "next/head"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { id: 1, href: "/", label: "Home" },
    { id: 2, href: "/services", label: "Services" },
    { id: 3, href: "/about", label: "About Us" },
  ];

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=The+Seasons:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Product+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <nav className="bg-[#105931] py-4 px-4 md:px-12 font-sans fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="logo flex items-center">
            <Image
              src="/logo.svg"
              alt="Grass Root Logo"
              width={60} height={60}
              className="object-contain md:w-[70px] md:h-[70px] w-[50px] h-[50px]"
            />
            <div className="ml-2">
              <div className="logoText text-[16px] md:text-[18px]">Grass Root</div>
              <div className="logoText text-[16px] md:text-[18px]">Capital</div>
              <div className="tagline text-[12px] md:text-[13px]">Finance solutions</div>
            </div>
          </Link>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(true)}>
            <Menu size={28} />
          </button>

          <div className="hidden md:flex items-center space-x-8 text-lg">
            {navItems.map((item) => (
              <NavLink key={item.id} href={item.href}>{item.label}</NavLink>
            ))}
            <a href="tel:+918309636740" className="flex items-center justify-center border border-white rounded-md px-4 py-1 text-white text-base font-medium">
              <Phone size={20} color="#FFFFFF" className="mr-2" />
              +91 8309636740
            </a>
          </div>
        </div>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#105931] bg-opacity-95 flex flex-col items-center justify-center text-center z-50 transition-all duration-500">
            <button className="absolute top-6 right-6 text-white text-3xl" onClick={() => setIsMenuOpen(false)}>
              <X size={32} />
            </button>

            <div className="flex flex-col space-y-8 text-2xl text-white">
              {navItems.map((item) => (
                <NavLink key={item.id} href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </NavLink>
              ))}
              <a href="tel:+918309636740" className="flex items-center justify-center border border-white rounded-md px-6 py-2 text-white text-lg font-medium">
                <Phone size={24} color="#FFFFFF" className="mr-3" />
                +91 8309636740
              </a>
            </div>
          </div>
        )}

        <style jsx>{`
          .logoText {
            color: #F4A600;
            font-family: 'The Seasons', serif;
            line-height: 105%;
            text-transform: uppercase;
            margin-top: 3px;
          }
          .tagline {
            color: #EEAC1F;
            font-family: 'Montserrat', sans-serif;
            margin-top: 2px;
          }
        `}</style>
      </nav>
    </>
  )
}

function NavLink({ href, children, onClick }) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-white transition-colors ${pathname === href ? "font-bold" : "hover:text-[#EEBF3A]"}`}
    >
      {children}
    </Link>
  )
}

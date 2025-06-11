"use client";

import { X } from "lucide-react";
import ContactForm from "./contact-form";
import { useScreenSize } from "@/hooks/use-screen-size";

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PopupForm({ isOpen, onClose }: PopupFormProps) {
  const { isMobile } = useScreenSize();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div
        className={`bg-white rounded-xl shadow-xl relative flex flex-col justify-center 
          ${isMobile ? "max-w-[90%] p-4" : "max-w-[600px] p-8"}`
        }
        style={{ minHeight: isMobile ? "auto" : "500px" }} // Increased height slightly for a better layout
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition"
        >
          <X size={22} />
        </button>

        {/* Title */}
        <h2 className="text-center text-lg font-semibold text-gray-800 mb-2 md:mb-3"
          style={{ color: "#072515", fontSize: "24px" }} // Increased font size for better readability
        >
          Get in Touch
        </h2>

        {/* Contact Form */}
        <ContactForm isPopup={true} onClose={onClose} />
      </div>
    </div>
  );
}

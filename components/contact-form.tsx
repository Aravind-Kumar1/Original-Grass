"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { sendForm, init } from "@emailjs/browser";
import { useScreenSize } from "@/hooks/use-screen-size";

// Initialize EmailJS
init("LWxOx45n2rjRR-kT6");

interface ContactFormProps {
  isPopup?: boolean;
  onClose?: () => void;
}

export default function ContactForm({ isPopup = false, onClose }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const { isMobile } = useScreenSize();

  useEffect(() => {
    if (submitStatus !== "idle") {
      const timer = setTimeout(() => setSubmitStatus("idle"), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      console.log("🚀 Sending Form Data:", formData);

      const response = await sendForm(
        "service_mm4d4zk",
        "template_fj88tmf",
        formRef.current,
        "LWxOx45n2rjRR-kT6"
      );

      console.log("✅ EmailJS Response:", response);
      if (response.status !== 200) throw new Error(`EmailJS returned status ${response.status}`);

      setSubmitStatus("success");
      setFormData({ fullName: "", phoneNumber: "", email: "" });
      setTimeout(() => onClose?.(), 2000);
    } catch (error: any) {
      console.error(" Submission failed:", error?.message || error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="rounded-xl shadow-lg p-6"
      style={{
        maxWidth: "480px",
        width: "100%",
        margin: "auto",
        backgroundColor: "#E8F0ED",
        borderRadius: "16px",
        border: "2px solid #91B3A0",
      }}
    >
      <h3 className="text-center text-xl font-semibold mb-4" style={{ color: "#072515", fontSize: "30px" }}>
        {isPopup ? "Fill the details" : "Get Enquired Today"}
      </h3>

      <form ref={formRef} onSubmit={handleSubmit}>
        {[
          { id: "fullName", label: "Full Name", type: "text" },
          { id: "phoneNumber", label: "Phone Number", type: "text" },
          { id: "email", label: "Email", type: "email" },
        ].map(({ id, label, type }) => (
          <div key={id} className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor={id}>
              {label}
            </label>
            <input
              type={type}
              id={id}
              name={id}
              value={formData[id as keyof typeof formData]}
              onChange={handleChange}
              required
              className="w-full rounded-lg p-3 border text-gray-900 bg-white border-gray-500 shadow-sm focus:ring-2 focus:ring-green-600"
              style={{
                height: "42px",
                borderRadius: "12px",
              }}
            />
          </div>
        ))}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg text-white font-medium flex items-center justify-center shadow-md"
          style={{
            height: "48px",
            backgroundColor: isSubmitting ? "#64748b" : "#105931",
            fontSize: "16px",
            cursor: isSubmitting ? "not-allowed" : "pointer",
            transition: "all 0.3s ease-in-out",
            borderRadius: "12px",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#0C4827";
            e.currentTarget.style.boxShadow = "0px 8px 16px rgba(16, 89, 49, 0.3)";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = isSubmitting ? "#64748b" : "#105931";
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          {isSubmitting ? "Submitting..." : "Get A Call Back"}
        </button>

        {submitStatus === "success" && (
          <p className="mt-4 text-green-600 text-center">Your message has been sent successfully.</p>
        )}
        {submitStatus === "error" && (
          <p className="mt-4 text-red-600 text-center">Failed to submit form. Please try again.</p>
        )}
      </form>
    </div>
  );
}

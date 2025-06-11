"use client"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "What is the typical loan tenure for a microfinance loan?",
    answer:
      "Our microfinance loans typically have a tenure of 6 months for secured loans and 24 weeks (approximately 6 months) for unsecured loans. These short-term loans are designed to help you start or grow your small business with manageable repayment schedules.",
  },
  {
    question: "How does group loan for women works?",
    answer:
      "Our women's group loans operate on a joint liability model. A group of 5-10 women form a self-help group, save together regularly, and can access loans as a group. Each member guarantees the others' loans, creating social collateral. This model empowers women entrepreneurs while ensuring high repayment rates through peer support and accountability.",
  },
  {
    question: "What is the minimum and maximum loan amounts in grassroots?",
    answer:
      "At Grassroot Capital, our loan amounts range from ₹10,000 to ₹1,00,000 depending on the loan type, your credit history, and business needs. First-time borrowers typically start with smaller amounts, with the opportunity to access larger loans after establishing a good repayment history.",
  },
  {
    question: "What is the minimum and maximum interest rates for the loans?",
    answer:
      "Our interest rates range from 12% to 24% per annum depending on the loan type, amount, and risk assessment. Secured loans like gold loans have lower interest rates (12-15%), while unsecured loans have slightly higher rates (18-24%). We maintain transparent pricing with no hidden fees.",
  },
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-8 md:py-16 px-4 md:px-12 font-sans" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#072515] mb-6 md:mb-10 text-center animate-fade-in">
          FAQ's
        </h2>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""} animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="faq-question flex justify-between items-center text-[#072515] cursor-pointer p-3 md:p-4"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-base md:text-lg font-medium">{item.question}</h3>
                {activeIndex === index ? (
                  <ChevronUp className="text-[#072515] flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-[#072515] flex-shrink-0" />
                )}
              </div>

              <div
                className="faq-answer overflow-hidden transition-all duration-300"
                style={{ maxHeight: activeIndex === index ? "500px" : "0" }}
              >
                <p className="py-4 text-[#072515] text-sm md:text-base px-3 md:px-4">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


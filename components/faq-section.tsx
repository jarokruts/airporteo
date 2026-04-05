"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const FAQS = [
  {
    id: 1,
    question: "What is a meet and greet service at Barcelona airport?",
    answer: "A personal assistant meets you at the aircraft door or terminal entrance, escorts you through immigration, customs, and security using priority lanes, and walks you to your vehicle or gate."
  },
  {
    id: 2,
    question: "How much does meet and greet cost at Barcelona El Prat?",
    answer: "Standard meet and greet starts from $45 per person. VIP Platinum with private lounge and tarmac limousine starts from $150. Get a quote using the form above."
  },
  {
    id: 3,
    question: "Which terminals do you cover at BCN?",
    answer: "Both Terminal 1 and Terminal 2. Our agents know every gate, desk, and lounge."
  },
  {
    id: 4,
    question: "Can I get fast track through security at Barcelona airport?",
    answer: "Yes, priority fast track lanes at security and immigration in T1 and T2. Especially useful during peak hours 6-9 AM and 6-10 PM."
  },
  {
    id: 5,
    question: "Is VIP tarmac service available at BCN?",
    answer: "Yes. A private limousine meets you on the tarmac at the aircraft steps and drives you to the VIP terminal. Available at T1."
  },
  {
    id: 6,
    question: "How do I get from Terminal 1 to Terminal 2?",
    answer: "Free shuttle every 6-7 minutes. Our connection agents handle the full inter-terminal transfer with fast track."
  },
  {
    id: 7,
    question: "Can I book meet and greet for someone else?",
    answer: "Yes. Many clients book for elderly parents, unaccompanied children, or business guests."
  },
  {
    id: 8,
    question: "What happens if my flight is delayed?",
    answer: "We monitor flights in real time. Your agent adjusts automatically. No extra charge."
  },
  {
    id: 9,
    question: "Do you provide wheelchair or special assistance at BCN?",
    answer: "Yes. Wheelchair, mobility support, and special requirements coordinated in advance."
  },
  {
    id: 10,
    question: "Is lounge access included?",
    answer: "Included with VIP Platinum. For standard service, lounge access can be added during booking."
  },
  {
    id: 11,
    question: "How far in advance should I book?",
    answer: "Recommended 24 hours before. Same-day bookings accepted subject to availability."
  },
  {
    id: 12,
    question: "Can you assist with connecting flights?",
    answer: "Yes. Gate-to-gate transfer, inter-terminal shuttle, fast track transit security, escort to next gate."
  },
  {
    id: 13,
    question: "How do I get from BCN to Barcelona city center?",
    answer: "Aerobus 35 min, RENFE train 25 min, taxi flat rate approx 39 euros. Private transfer also available."
  },
  {
    id: 14,
    question: "Is the service available for private jet passengers?",
    answer: "Yes. VIP meet and greet with tarmac access, customs handling, and limousine transfers."
  },
  {
    id: 15,
    question: "What languages do your agents speak?",
    answer: "English, Spanish, Catalan, French, Russian. Additional languages on request."
  },
]

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null)

  // JSON-LD FAQPage structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <section className="bg-white py-10 lg:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 md:mb-8">
          FAQs
        </h2>

        {/* Accordion */}
        <div className="space-y-0">
          {FAQS.map((faq, index) => (
            <div key={faq.id}>
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between py-4 md:py-6 text-left transition-all hover:opacity-70"
              >
                <span className="text-sm md:text-base lg:text-lg font-medium text-foreground pr-3 md:pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 md:h-5 md:w-5 flex-shrink-0 text-foreground transition-transform duration-300",
                    openId === faq.id && "rotate-180"
                  )}
                />
              </button>

              {/* Answer */}
              {openId === faq.id && (
                <div className="pb-4 md:pb-6 text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed animate-in fade-in duration-300">
                  {faq.answer}
                </div>
              )}

              {/* Dotted Divider */}
              {index < FAQS.length - 1 && (
                <div className="border-b border-dotted border-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

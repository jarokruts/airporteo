"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const FAQS = [
  {
    id: 1,
    question: "What is airport meet and greet service?",
    answer: "Our meet and greet service provides a personal concierge who meets you at the aircraft door (arrival) or at the terminal entrance (departure). They assist with navigation, fast-track queues, and ensure a seamless airport experience."
  },
  {
    id: 2,
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 24-48 hours in advance. However, we also accommodate last-minute requests subject to availability. For peak travel seasons, booking 1 week ahead is advisable."
  },
  {
    id: 3,
    question: "Which airports do you cover?",
    answer: "We operate in over 120 airports worldwide, including major hubs like London Heathrow, Dubai International, JFK New York, Singapore Changi, and many more. Check our airport list for full coverage."
  },
  {
    id: 4,
    question: "Can I modify or cancel my booking?",
    answer: "Yes, you can modify or cancel your booking up to 12 hours before your scheduled service. Changes can be made through your confirmation email or by contacting our support team."
  },
  {
    id: 5,
    question: "What happens if my flight is delayed?",
    answer: "We monitor all flights in real-time. If your flight is delayed, your concierge will automatically adjust to your new arrival time at no extra charge."
  },
  {
    id: 6,
    question: "Is the service available for families with children?",
    answer: "Absolutely. Our service is ideal for families. We assist with strollers, carry-ons, and ensure a smooth journey for travelers of all ages, including unaccompanied minors."
  },
  {
    id: 7,
    question: "What's included in the VIP Platinum service?",
    answer: "VIP Platinum includes tarmac transfers, private terminal access where available, luxury vehicle service, fast-track through all checkpoints, and a dedicated agent throughout your journey."
  },
  {
    id: 8,
    question: "How do I contact my concierge on the day?",
    answer: "After booking, you'll receive your concierge's direct contact details via email and SMS. You can reach them by phone or WhatsApp on the day of your service."
  },
]

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-5 lg:px-8">
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

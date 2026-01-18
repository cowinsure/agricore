"use client";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import village from "../../../public/village.png";
import BackgroundImageLayer from "@/components/common/BackgroundImageLayer";
import SectionHeading from "@/components/SectionHeading";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Faq {
  question: string;
  answer: string;
}

const STATIC_FAQS: Faq[] = [
  {
    question: "What services does AgriCore provide?",
    answer:
      "We provide a full range of veterinary services including routine check-ups, vaccinations, emergency care, and nutritional advice for your livestock.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment by calling our clinic directly or using the online booking form available on our website.",
  },
  {
    question: "Do you provide on-site veterinary services?",
    answer:
      "Yes, our veterinarians can visit your farm or location to provide treatment and check-ups as needed.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "Our clinic is open Monday to Friday from 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 2:00 PM.",
  },
  {
    question: "What should I bring to my pet's appointment?",
    answer:
      "Please bring any previous medical records, vaccination history, and a list of current medications your animal is taking.",
  },
  {
    question: "How can I get advice in an emergency?",
    answer:
      "For urgent situations, please call our emergency hotline. Our team is trained to provide immediate guidance and assistance.",
  },
];

const FaqSectionStatic: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const faqRefs = useRef<(HTMLLIElement | null)[]>([]);
  const answerRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  // Scroll-triggered animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(titleRef.current, { y: -20, opacity: 0 });
      gsap.set(faqRefs.current, { y: -100, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(titleRef.current, {
        duration: 0.35,
        y: 0,
        opacity: 1,
        ease: "power2.out",
      });
      tl.to(
        faqRefs.current,
        { duration: 0.8, y: 0, opacity: 1, ease: "power2.out", stagger: 0.3 },
        "-=0.5",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Answer dropdown animation
  useEffect(() => {
    if (expandedIndex !== null && answerRefs.current[expandedIndex]) {
      const answerElement = answerRefs.current[expandedIndex];
      gsap.set(answerElement, {
        height: 0,
        opacity: 0,
        y: -30,
        overflow: "hidden",
      });
      gsap.to(answerElement, {
        duration: 0.6,
        height: "auto",
        opacity: 1,
        y: 0,
        ease: "power2.out",
      });
    }

    answerRefs.current.forEach((answerElement, index) => {
      if (answerElement && index !== expandedIndex) {
        gsap.to(answerElement, {
          duration: 0.5,
          height: 0,
          opacity: 0,
          y: -40,
          ease: "power2.in",
          onComplete: () => {
            gsap.set(answerElement, { y: -30 });
          },
        });
      }
    });
  }, [expandedIndex]);

  const toggleExpand = (index: number) => {
    const button = faqRefs.current[index]?.querySelector("button");
    if (button)
      gsap.to(button, {
        scale: 0.98,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      });
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="faq-section relative h-auto py-10 pb-20"
    >
      <BackgroundImageLayer
        imageUrl={village.src}
        opacity={0.1}
        size="80%"
        position="bottom"
      />
      <div className="relative z-10 container mx-auto px-4 space-y-20">
        <SectionHeading title="Frequently Asked Questions" />

        <ul className="space-y-6 max-w-4xl mx-auto">
          {STATIC_FAQS.map((faq, index) => (
            <li
              key={index}
              ref={(el) => {
                faqRefs.current[index] = el;
              }}
              className="border-b border-gray-200 pb-6 opacity-0"
            >
              <button
                className="w-full text-left text-xl font-semibold text-[#334b35] hover:text-green-700 transition-colors duration-300 flex justify-between items-center group"
                onClick={() => toggleExpand(index)}
              >
                <span className="pr-4">{faq.question}</span>
                <span
                  className={`text-2xl transition-transform duration-300 ${expandedIndex === index ? "rotate-45" : "rotate-0"} group-hover:scale-110`}
                >
                  +
                </span>
              </button>

              <div className="overflow-hidden">
                <p
                  ref={(el) => {
                    answerRefs.current[index] = el;
                  }}
                  className="mt-4 text-lg lg:text-xl text-gray-600 leading-relaxed text-left"
                  style={{
                    height: expandedIndex === index ? "auto" : "0",
                    opacity: expandedIndex === index ? 1 : 0,
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FaqSectionStatic;

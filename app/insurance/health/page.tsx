"use client";
import HealthInsuranceForm from "@/components/HealthInsurance/HealthInsuranceForm";
import React from "react";
import inspection from "../../../public/livestockinsuranceimg.jpg";
import Image from "next/image";
import FaqSection from "@/components/Home/FaqSection";

import { motion } from "framer-motion";
import { GiBullHorns } from "react-icons/gi";
import FaqSectionStatic from "@/components/service/Vet services/StaticFAQ";

function page() {
  return (
    <div className="h-auto md:pt-0 mx-auto lg:w-full  text-center bg-[#F7F7F7] ">
      <div className="pt-[10vh] lg:pt-[10vh]   container mx-auto flex flex-col lg:flex-col lg:justify-center justify-between">
        <div className="w-full  text-center mb-16">
          <GiBullHorns className="w-full text-3xl text-center text-green-700 mb-2" />

          <motion.div
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "100px" }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-xl font-bold text-[#687469] mb-2">
              Digital Insurance Solutions
            </h2>
            <h1 className="text-5xl font-bold text-[#334b35]">
              Simply compare, order, and get covered.
            </h1>
          </motion.div>
        </div>

        <div className=" mt-14 flex flex-col lg:flex-row lg:justify-center  gap-3 lg:mb-[10vh]">
          <div className="lg:w-1/2 flex flex-col items-center justify-left lg:justify-center lg:items-center">
            <div className="md:w-60  md:h-60 rounded-full overflow-hidden border-2 border-gray-300">
              <Image
                src={inspection}
                alt="Profile"
                objectFit="cover"
                className="rounded-full object-cover w-60 h-60"
              />
            </div>

            <div className="text-2xl text-start mt-5 font-semibold text-[#687469]">
              Choose the best{" "}
              <span className="text-3xl text-green-700 font-bold">
                Health Insurance Plan
              </span>
            </div>
          </div>
          <div className=" lg:w-1/2 flex justify-center items-start lg:justify-start lg:items-center">
            <HealthInsuranceForm />
          </div>
        </div>
      </div>

      {/* <div className="mt-11 bg-[#F6F4EC]">
        <FaqSection />
      </div> */}

            <div className="text-center bg-[#F6F4EC]">
       <FaqSectionStatic
  faqs={[
    {
      question: "What is health insurance?",
      answer:
        "Health insurance is a financial protection plan that helps cover medical expenses such as doctor visits, hospitalization, surgery, and medicines, reducing your out-of-pocket costs.",
    },
    {
      question: "Who can apply for health insurance in Bangladesh?",
      answer:
        "Most health insurance plans in Bangladesh are available for individuals, families, and corporate employees. Eligibility usually depends on age limits and basic health conditions.",
    },
    {
      question: "What medical expenses are covered?",
      answer:
        "Coverage typically includes hospitalization, surgeries, ICU charges, diagnostic tests, ambulance services, and sometimes outpatient consultations, depending on the policy.",
    },
    {
      question: "Are pre-existing diseases covered?",
      answer:
        "Pre-existing conditions are usually covered after a waiting period, which varies by insurance provider and policy terms.",
    },
    {
      question: "How does cashless hospitalization work?",
      answer:
        "With cashless hospitalization, you can receive treatment at network hospitals without paying upfront. The insurance company directly settles the bill with the hospital.",
    },
    {
      question: "What documents are required to make a claim?",
      answer:
        "Commonly required documents include hospital bills, medical reports, prescriptions, discharge summaries, and a completed claim form.",
    },
    {
      question: "Is health insurance mandatory in Bangladesh?",
      answer:
        "Currently, health insurance is not mandatory in Bangladesh, but it is highly recommended to manage rising healthcare costs.",
    },
    {
      question: "How do I renew my health insurance policy?",
      answer:
        "You can renew your policy annually by paying the renewal premium before the expiry date to ensure uninterrupted coverage.",
    },
  ]}
/>

      </div>
    </div>
  );
}

export default page;

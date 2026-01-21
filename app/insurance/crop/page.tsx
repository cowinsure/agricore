"use client";

import React from "react";
import inspection from "../../../public/a-young-man-holding-a-basket-of-freshly-harvested.jpg";
import Image from "next/image";
// import FaqSection from "@/components/Home/FaqSection";

import CropInsuranceForm from "@/components/crop/CropInsuranceForm";
import { motion } from "framer-motion";
import { GiWheat } from "react-icons/gi";
import FaqSectionStatic from "@/components/service/Vet services/StaticFAQ";

const Crop = () => {
  return (
    <div className="h-auto md:pt-0 mx-auto lg:w-full  text-center bg-[#F7F7F7] ">
      <div className="pt-[10vh] lg:pt-[10vh]   container mx-auto flex flex-col lg:flex-col lg:justify-center justify-between">
        <div className="w-full  text-center mb-16">
          <GiWheat className="w-full text-3xl text-center text-green-700 mb-2" />

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
          <div className="lg:w-2/6 flex flex-col items-center justify-center lg:justify-center lg:items-center">
            <div className="md:w-60  md:h-60 rounded-full overflow-hidden border-2 border-gray-300">
              <Image
                src={inspection}
                alt="Crop Insurance"
                objectFit="Content"
                className="rounded-full object-cover w-60 h-60"
              />
            </div>

            <div className="text-2xl text-start mt-5 font-semibold text-[#687469]">
              Choose the best{" "}
              <span className="text-3xl text-green-700 font-bold">
                Insurance Plan
              </span>
            </div>
          </div>
          <div className=" lg:w-1/2 flex justify-center items-center lg:justify-center lg:items-center">
            <CropInsuranceForm />
          </div>
        </div>
      </div>

      <div className="mt-11 bg-[#F6F4EC]">
        {/* <FaqSection /> */}
        <FaqSectionStatic
  faqs={[
    {
      question: "What is crop insurance?",
      answer:
        "Crop insurance provides financial protection to farmers against the loss or damage of crops due to natural disasters, pests, diseases, or other unforeseen events.",
    },
    {
      question: "Which crops can be insured?",
      answer:
        "Commonly insured crops in Bangladesh include rice, wheat, maize, jute, and sugarcane. Coverage depends on the insurance provider's policy.",
    },
    {
      question: "What risks are covered under crop insurance?",
      answer:
        "Coverage usually includes damage from floods, droughts, cyclones, hailstorms, pests, diseases, and fire, depending on the policy terms.",
    },
    {
      question: "How is the insurance premium calculated?",
      answer:
        "The premium is calculated based on the crop type, land area, location, historical risk factors, and the sum insured amount.",
    },
    {
      question: "What documents are required to insure crops?",
      answer:
        "Typically required documents include farmer's ID, land ownership proof, crop details, previous yield records, and photographs of the land and crops.",
    },
    {
      question: "How do I apply for crop insurance?",
      answer:
        "You can apply through registered insurance providers, agricultural cooperatives, or digital platforms offering crop insurance services.",
    },
    {
      question: "How do I make a claim?",
      answer:
        "To make a claim, notify the insurance provider immediately, submit required documents, crop damage reports, and photographs, and complete the claim form.",
    },
    {
      question: "What is the claim settlement process?",
      answer:
        "After verification by the insurance provider and assessment of damage, the claim amount is paid to the farmer according to the policy coverage.",
    },
    {
      question: "Is crop insurance mandatory in Bangladesh?",
      answer:
        "Crop insurance is not mandatory in Bangladesh, but it is highly recommended to protect farmers from financial loss due to crop failure.",
    },
  ]}
/>


      </div>
    </div>
  );
};

export default Crop;
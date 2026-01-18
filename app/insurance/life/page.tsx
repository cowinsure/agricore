'use client'

import React from 'react'
import inspection from '../../../public/livestockinsuranceimg.jpg';
import Image from 'next/image';
import FaqSection from '@/components/Home/FaqSection';

import { motion } from 'framer-motion';
import { GiBullHorns } from 'react-icons/gi'
import LifeInsuranceForm from '@/components/lifeInsurance/LifeInsuranceComponent';
import FaqSectionStatic from '@/components/service/Vet services/StaticFAQ';

const LifeInsurance = () => {
    return (
        <div className='h-auto md:pt-0 mx-auto lg:w-full  text-center bg-[#F7F7F7] '>
            <div className='pt-[10vh] lg:pt-[10vh]   container mx-auto flex flex-col lg:flex-col lg:justify-center justify-between'>
            <div className="w-full  text-center mb-16">
        <GiBullHorns className='w-full text-3xl text-center text-green-700 mb-2' />

        <motion.div
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "100px" }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xl font-bold text-[#687469] mb-2">Digital Insurance Solutions</h2>
          <h1 className="text-5xl font-bold text-[#334b35]">Simply compare,
          order, and get covered.</h1>
        </motion.div>
      </div>

                <div className=' mt-14 flex flex-col lg:flex-row lg:justify-center  gap-3 lg:mb-[10vh]'>

                    <div className='lg:w-1/2 flex flex-col items-center justify-center lg:justify-center lg:items-center'>
                    <div className="md:w-60  md:h-60 rounded-full overflow-hidden border-2 border-gray-300">
              <Image
                src={inspection}
                alt="Profile"


                objectFit='Content'
                className="rounded-full object-cover w-60 h-60"
              />
            </div>

                        <div className='text-2xl text-start mt-5 font-semibold text-[#687469]'>Choose the best  <span className='text-3xl text-green-700 font-bold' >Insurance Plan</span> 
                            </div>
                    </div>
                    <div className=' lg:w-1/2 flex justify-center items-center lg:justify-center lg:items-center'>
                       <LifeInsuranceForm/>
                    </div>
                </div>




            </div>


            <div className='mt-11 bg-[#F6F4EC]'>

            {/* <FaqSection /> */}
            <FaqSectionStatic
  faqs={[
    {
      question: "What is life insurance?",
      answer:
        "Life insurance is a financial protection plan that provides financial support to your family or nominees in case of your death during the policy term.",
    },
    {
      question: "Who can buy life insurance in Bangladesh?",
      answer:
        "Any Bangladeshi citizen within the eligible age range set by the insurer can purchase life insurance, subject to basic health and income criteria.",
    },
    {
      question: "What types of life insurance are available?",
      answer:
        "Common types include term life insurance, endowment plans, whole life insurance, and money-back policies.",
    },
    {
      question: "What benefits does life insurance provide?",
      answer:
        "Life insurance provides death benefits, maturity benefits (for some plans), financial security for dependents, and long-term savings support.",
    },
    {
      question: "Who will receive the insurance money?",
      answer:
        "The insurance benefit is paid to the nominee(s) specified by the policyholder in the event of death or at maturity, depending on the policy.",
    },
    {
      question: "How is the life insurance premium calculated?",
      answer:
        "Premiums are calculated based on age, policy term, coverage amount, health condition, occupation, and lifestyle factors.",
    },
    {
      question: "What documents are required to buy life insurance?",
      answer:
        "Generally required documents include a national ID, age proof, income details, photographs, and a completed application form.",
    },
    {
      question: "What is the policy term?",
      answer:
        "The policy term is the duration for which the life insurance coverage remains active, commonly ranging from 5 to 30 years.",
    },
    {
      question: "Is life insurance mandatory in Bangladesh?",
      answer:
        "Life insurance is not mandatory in Bangladesh, but it is highly recommended to ensure financial protection for your family.",
    },
  ]}
/>

            </div>
        </div>
    )
}

export default LifeInsurance

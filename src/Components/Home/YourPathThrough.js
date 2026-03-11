'use client'
import React from "react";
import {
  FaUserPlus,
  FaRoute,
  FaGraduationCap,
} from "react-icons/fa";
import {
  HiOutlineMap,
  HiOutlineUsers,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";
import { MdOutlineDocumentScanner } from "react-icons/md";


const steps = [
  {
    title: "Free Dashboard Check  ",
    desc:
      "Answer simple questions to assess your situation.",
    icon: MdOutlineDocumentScanner ,
  },
  {
    title: "Understand What’s Happening",
    desc:
      "Identify values, motivations and tensions.",
    icon: HiOutlineChatBubbleLeftRight,
  },
  {
    title: "Expedition Path ",
    desc:
      "A guided capsule journey to clarify direction.",
    icon: HiOutlineMap,
  },
  {
    title: "Meet the Crew (optional)",
    desc:
      "Connect with a mentor. ",
    icon: HiOutlineUsers,
  },
  {
    title: "Take Action",
    desc:
      "Move forward with clearer decisions.",
    icon: FaRoute,
  },

];

const YourPathThrough = () => {
  return (
    <section className="my-20 lg:my-32 px-4">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-semibold text-white">
          Your Exploration in <span className="text-orange-400">5 Phases</span>
        </h2>
        <p className="mt-4 text-gray-300 font-medium">
          A Gentle, Guided Progression Toward Career Clarity
        </p>
      </div>

      {/* Timeline */}
      <div className="relative mt-20">
        {/* Horizontal line */}
        <div className="hidden lg:block absolute w-[calc(95%-150px)] top-10 left-24 right-0 h-[5px] bg-[#B8B6D9]" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center relative">
                {/* Icon Circle */}
                <div className="mx-auto w-20 h-20 rounded-full border bg-primary shadow-[0_0_15px_#2d2a71]  flex items-center justify-center  relative z-10">
                  <Icon className="text-orange-400 text-3xl" />
                </div>

                {/* Content */}
                <h4 className="mt-6 font-semibold text-xl text-white">
                  {step.title}
                </h4>
                <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default YourPathThrough;

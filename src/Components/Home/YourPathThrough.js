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

const steps = [
  {
    title: "Registration",
    subtitle: "Joining the circle",
    desc:
      "Step into our shared space and begin your alignment by becoming part of the cosmic community.",
    icon: FaUserPlus,
  },
  {
    title: "Gentle Questions",
    subtitle: "Revealing your inner landscape",
    desc:
      "Answering kind inquiries designed to gently peel back layers and reveal your unique inner landscape.",
    icon: HiOutlineChatBubbleLeftRight,
  },
  {
    title: "Your Cosmic Map",
    subtitle: "Reflecting your unique constellation",
    desc:
      "Receive an AI-generated reflection of your skills and passions, mapped as a personal stellar system.",
    icon: HiOutlineMap,
  },
  {
    title: "Mentor Match",
    subtitle: "Resonating with your guide",
    desc:
      "Connecting with a guide who resonates with your light for personalized 1:1 wisdom sessions.",
    icon: HiOutlineUsers,
  },
  {
    title: "The Expedition",
    subtitle: "Focusing on your goal",
    desc:
      "Embark on the full 6-capsule journey or choose individual capsules to focus on specific areas of growth.",
    icon: FaRoute,
  },
  {
    title: "Individual Capsules",
    subtitle: "Diving deeper into your purpose",
    desc:
      "Explore focused topics that bring clarity and growth to specific areas of your professional journey.",
    icon: FaGraduationCap,
  },
];

const YourPathThrough = () => {
  return (
    <section className="my-20 lg:my-32 px-4">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-semibold text-primary">
          Your Path Through the Stars
        </h2>
        <p className="mt-4 text-gray-700 font-medium">
          A Gentle, Guided Progression Toward Career Clarity
        </p>
      </div>

      {/* Timeline */}
      <div className="relative mt-20">
        {/* Horizontal line */}
        <div className="hidden lg:block absolute w-[calc(100%-180px)] top-10 left-20 right-0 h-[5px] bg-[#B8B6D9]" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center relative">
                {/* Icon Circle */}
                <div className="mx-auto w-20 h-20 rounded-full bg-primary shadow-[0_0_15px_#2d2a71]  flex items-center justify-center  relative z-10">
                  <Icon className="text-white text-3xl" />
                </div>

                {/* Content */}
                <h4 className="mt-6 font-semibold text-primary">
                  {step.title}
                </h4>
                <p className="mt-2 italic text-sm text-gray-600">
                  {step.subtitle}
                </p>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
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

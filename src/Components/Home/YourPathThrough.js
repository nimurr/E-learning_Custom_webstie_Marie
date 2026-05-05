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
    title: "Bilan de tableau de bord gratuit",
    desc: "Répondez à de simples questions pour évaluer votre situation.",
    icon: MdOutlineDocumentScanner,
  },
  {
    title: "Comprendre ce qui se passe",
    desc: "Identifier les valeurs, motivations et tensions.",
    icon: HiOutlineChatBubbleLeftRight,
  },
  {
    title: "Parcours d’expédition",
    desc: "Un voyage guidé en capsules pour clarifier votre direction.",
    icon: HiOutlineMap,
  },
  {
    title: "Rencontrer l’équipe (optionnel)",
    desc: "Échanger avec un mentor.",
    icon: HiOutlineUsers,
  },
  {
    title: "Passer à l’action",
    desc: "Avancer avec des décisions plus claires.",
    icon: FaRoute,
  },
];

const YourPathThrough = () => {
  return (
    <section className="my-20 lg:my-32 px-4">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-semibold text-white">
          Votre exploration en <span className="text-orange-400">5 Phases</span>
        </h2>
        <p className="mt-4 text-gray-300 font-medium">
          Une progression douce et guidée vers la clarté de carrière
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

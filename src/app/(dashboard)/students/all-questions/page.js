'use client';
import React, { useState } from 'react';

import Step1Identification from '@/Components/Students/All/Questions/Step1Identification';
import Step2Identification from '@/Components/Students/All/Questions/Step2Identification';
import Step3Identification from '@/Components/Students/All/Questions/Step3Identification';
import Step4Identification from '@/Components/Students/All/Questions/Step4Identification';
import Step5Identification from '@/Components/Students/All/Questions/Step5Identification';
import Step6Identification from '@/Components/Students/All/Questions/Step6Identification';
import Step7Identification from '@/Components/Students/All/Questions/Step7Identification';

const steps = [
    { title: 'Identification', component: Step1Identification },
    { title: 'Current Situation', component: Step2Identification },
    { title: 'Values', component: Step3Identification },
    { title: 'Idea Future', component: Step4Identification },
    { title: 'Work Conditions', component: Step5Identification },
    { title: 'Work Style', component: Step6Identification },
    { title: 'Skills', component: Step7Identification },
];

const Page = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const CurrentComponent = steps[currentStep].component;

    const goNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
        }
    };

    return (
        <div className="relative min-h-screen p-10">
            <div className="absolute inset-0 bg-[url('/Images/StudentsDash/page_bg.png')] bg-cover opacity-60" />


            <div className="relative z-10 max-w-6xl mx-auto bg-white rounded-xl">

                {/* ===== STEPPER ===== */}
                <div className="p-6 flex justify-between">
                    {steps.map((step, index) => {
                        const isActive = index === currentStep;

                        return (
                            <div
                                key={index}
                                onClick={() => setCurrentStep(index)}
                                className="flex-1 text-center cursor-pointer"
                            >
                                <div
                                    className={`w-9 h-9 mx-auto rounded-full flex items-center justify-center text-sm font-semibold
                                    ${isActive
                                            ? 'bg-[#2b124f] text-white'
                                            : 'border border-gray-300 text-gray-400'
                                        }`}
                                >
                                    {index + 1}
                                </div>
                                <p className={`text-xs mt-2 font-semibold  ${isActive ? 'text-[#2b124f]' : 'text-gray-500'}`}>
                                    {step.title}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <hr />

                {/* ===== STEP CONTENT ===== */}
                <div className="p-10">
                    <CurrentComponent onNext={goNext} />
                </div>

            </div>
        </div>
    );
};

export default Page;

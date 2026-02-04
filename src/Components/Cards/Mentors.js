import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { FaRocket } from 'react-icons/fa6';

const Mentors = ({ item }) => {
    return (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b0b1f] via-[#15153a] to-[#0b0b1f] text-white h-[260px]">

            {/* BACKGROUND BLUR IMAGE */}
            {/* <div className="absolute inset-0 bg-[url('/Images/Cards/uiux-bg.png')] bg-cover object-fill bg-center opacity-30" /> */}

            {/* CONTENT */}
            <div className="relative z-10 flex h-full">

                {/* LEFT CONTENT */}
                <div className="flex flex-col w-full justify-between p-4  z-10">
                    <div>
                        <span className="inline-block bg-white/10 px-4 py-1 rounded-full text-sm mb-4">
                            Ideal for beginners
                        </span>

                        <h2 className="text-2xl font-semibold mb-2">
                            Basic UI/UX
                        </h2>

                        <p className="text-gray-300">
                            Figma • Principles • UI
                        </p>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex gap-2 w-full mt-6">
                        <button className="flex w-full text-sm items-center justify-center gap-2 customSignUpButton border px-3 py-3 rounded-xl">
                            <FaInfoCircle />
                            View Details
                        </button>

                        <button className="flex w-full text-sm items-center justify-center gap-2 border bg-white text-[#15153a] customSignUpButtonHover transition px-2 py-3 rounded-xl">
                            <FaRocket />
                            <span> Start Learning</span>
                        </button>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="absolute right-0 bottom-0 z-0 h-full flex items-end">
                    <img
                        src={item.image}
                        alt="Mentor"
                        className="h-[70%] object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Mentors;

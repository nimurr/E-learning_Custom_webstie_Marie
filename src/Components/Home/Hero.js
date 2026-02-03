import React from "react";

const Hero = () => {
    return (
        <div className="h-screen w-full bg-[url('/Images/Home/Hero/Banner.png')] bg-no-repeat bg-cover bg-center pt-20 flex items-center justify-center">
            <div className=" min-h-60 bg-gradient-to-t to-[#301f4b] from-[#1e142e] opacity-95 rounded-2xl min-w-[60%] px-5 py-20 relative">
                <h2 className="text-5xl text-center text-white">Find Your <span className="text-orange-500">Constellation</span> Within</h2>
                <p className="text-white text-center my-8">A gentle journey from career uncertainty to aligned purpose, guided by cosmic wisdom and human connection</p>
                <div className="flex items-center justify-center ">
                    <button className="px-8 py-4 block border bg-white text-[#301f4b] customSignUpButtonHover font-semibold rounded-lg mx-auto">Start Your Journey</button>
                </div>
                <img className="max-w-60 absolute -bottom-10 -right-14" src="/Images/Home/Hero/hero_position_bottom.png" alt="" />
                <img className="max-w-60 absolute -top-20 -left-20" src="/Images/Home/Hero/hero_position_top.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;

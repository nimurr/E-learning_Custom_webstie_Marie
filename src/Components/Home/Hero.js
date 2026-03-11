import React from "react";

const Hero = () => {
    return (
        <div className="h-screen w-full container mx-auto bg-no-repeat bg-cover bg-center pt-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-5 lg:px-0">
            <div>
                <h2 className="text-6xl  text-white">(Re)finding   <span className="text-orange-500">Meaning</span> at work</h2>
                <p className="text-white  my-8">Because no one ever taught you how to truly know yourself</p>
                <div className=" flex flex-wrap gap-5">
                    <button className="px-8 py-4    text-[#ffffff] bg-orange-500 font-semibold rounded-lg ">Take your Dashboard Check for free</button>
                    <button className="px-8 py-4  border bg-white text-[#301f4b] customSignUpButtonHover font-semibold rounded-lg ">Discover the approach</button>
                </div>
                <p className="mt-5 text-white font-semibold">Free • Instant insight • No pressure</p>
            </div>
            <div className="md:flex items-start justify-center hidden ">
                <img className="w-32 lg:max-w-60 lg:min-w-96" src="/Images/Home/Hero/hero_position_top.png" alt="" />
                <img className="w-32 lg:max-w-60 lg:min-w-96" src="/Images/Home/Hero/hero_position_bottom.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;

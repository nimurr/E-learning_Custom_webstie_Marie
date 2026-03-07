import React from "react";

const Hero = () => {
    return (
        <div className="h-screen w-full  bg-no-repeat bg-cover bg-center pt-20 flex items-center justify-center px-5 lg:px-0">
            <div className=" min-h-60 bg-gradient-to-t backdrop-blur-lg bg-white/20 rounded-2xl min-w-[60%]  px-5 py-20 relative">
                <h2 className="text-5xl text-center text-white">(Re)finding   <span className="text-orange-500">Meaning</span> at work</h2>
                <p className="text-white text-center my-8">Because no one ever taught you how to truly know yourself</p>
                <div className=" flex justify-center gap-5">
                    <button className="px-8 py-4    text-[#ffffff] bg-orange-500 font-semibold rounded-lg ">Take your Dashboard Check for free</button>
                    <button className="px-8 py-4  border bg-white text-[#301f4b] customSignUpButtonHover font-semibold rounded-lg ">Discover the approach</button>
                </div>
                <img className="w-32 lg:max-w-60 lg:min-w-60 absolute lg:-bottom-10 lg:-right-14 -bottom-10 right-0" src="/Images/Home/Hero/hero_position_bottom.png" alt="" />
                <img className="w-32 lg:max-w-60 lg:min-w-60 absolute lg:-top-20 lg:-left-20 -top-10 left-0" src="/Images/Home/Hero/hero_position_top.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;

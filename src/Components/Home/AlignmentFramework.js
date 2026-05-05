import React from 'react';

const AlignmentFramework = () => {
    return (
        <div className='lg:py-20 py-10 text-center relative'>
            <div className='lg:px-20'>
                <h2 className='text-4xl font-semibold text-white'>Le <span className='text-orange-400 '>cadre d’alignement</span></h2>
                <p className='my-10 text-gray-300'>La Propulserie est née de plusieurs années d’observation des trajectoires professionnelles, des signaux de désengagement et des transitions de carrière. Elle combine des analyses RH, <br /> des outils d’introspection et un accompagnement structuré pour aider les personnes à clarifier leur orientation professionnelle. </p>
                <span className='p-4 border-orange-400 rounded-lg bg-orange-500/20 block border  max-w-[700px] mx-auto text-orange-400 font-semibold'>Framework construit à partir de plus de 15 ans d’expérience en ressources humaines et de situations professionnelles réelles.</span>
            </div>

            <img className='absolute bottom-0 right-0 w-60 lg:block hidden' src="/Images/Home/A0154B82-8401-4046-9DCA-94370259980F.png" alt="" />
        </div>
    );
}

export default AlignmentFramework;

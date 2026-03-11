

import React from 'react';

const WhatExplorersSay = () => {
    return (
        <div className='lg:py-20 py-10'>
            <h2 className='text-3xl text-center font-semibold py-10 text-white'>Three short <span className='text-orange-400'>testimonials</span> </h2>
            <div className='text-gray-300 grid sm:grid-cols-2 lg:grid-cols-3 justify-center gap-5 my-10'>
                <div className="text-white border p-10 border-orange-300 rounded-xl bg-gradient-to-b from-orange-400/20 to-black/20">
                    <span className='text-5xl'>💎</span>
                    <p className='text-gray-400 my-5'>"I wasn't burned out. I was misaligned. The Dashboard Check made it clear."</p>
                    <p className='text-orange-400'>— Marketing Manager</p>
                </div>
                <div className="text-white border p-10 border-orange-300 rounded-xl bg-gradient-to-b from-orange-400/20 to-black/20">
                    <span className='text-5xl'>🌍</span>
                    <p className='text-gray-400 my-5'>"The Expedition Path helped me understand what I truly value in my work."</p>
                    <p className='text-orange-400'>— Product Designer</p>
                </div>
                <div className="text-white border p-10 border-orange-300 rounded-xl bg-gradient-to-b from-orange-400/20 to-black/20">
                    <span className='text-5xl'>🚀</span>
                    <p className='text-gray-400 my-5'>"Finally, a tool that doesn't push me to quit, but helps me understand."</p>
                    <p className='text-orange-400'>— Software Engineer</p>
                </div>

            </div>
        </div>
    );
}

export default WhatExplorersSay;

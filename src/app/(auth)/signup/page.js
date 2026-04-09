'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Page = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className='h-screen bg-[url("/Images/Auth/page_bg.png")] bg-cover bg-center flex items-center justify-center min-h-screen px-10'>

            <div className='w-full py-20 bg-slate-100/90 rounded-lg p-10 max-w-xl'>
                <div className=''>
                    <h2 className='text-3xl text-center text-[#3b398d] font-semibold'>Begin Your Expedition</h2>
                    <p className='text-center mt-5'>Discover your professional galaxy—where your talents meet your ambitions</p>

                    <div className='mt-5'>
                        <label className='font-semibold' htmlFor="name">Full Name</label>
                        <input
                            placeholder='Enter your name'
                            className='mt-2 w-full p-2 border border-[#3b398d] rounded-md focus:outline-0 ring-0 bg-white'
                            type="text"
                            name="name"
                            id="name"
                        />
                    </div>

                    <div className='mt-5'>
                        <label className='font-semibold' htmlFor="email">Email</label>
                        <input
                            placeholder='Enter your email'
                            className='mt-2 w-full p-2 border border-[#3b398d] rounded-md focus:outline-0 ring-0 bg-white'
                            type="email"
                            name="email"
                            id="email"
                        />
                    </div>

                    {/* ✅ NEW: Select Role */}
                    <div className='mt-5'>
                        <label className='font-semibold' htmlFor="role">Select Role</label>
                        <select
                            className='mt-2 w-full p-2 border border-[#3b398d] rounded-md focus:outline-0 ring-0 bg-white'
                            name="role"
                            id="role"
                            defaultValue=""
                        >
                            <option value="" disabled>Choose your role</option>
                            <option value="student">Student</option>
                            <option value="mentor">Mentor</option>
                        </select>
                    </div>

                    <div className='mt-5'>
                        <label className='font-semibold' htmlFor="password">Password</label>
                        <div className='relative'>
                            <input
                                placeholder='Enter your password'
                                className='mt-2 w-full p-2 border border-[#3b398d] rounded-md focus:outline-0 ring-0 bg-white'
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(p => !p)}
                                className='absolute cursor-pointer right-3 top-[30px] transform -translate-y-1/2 text-gray-500'
                            >
                                {!showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                    </div>

                    {/* ✅ NEW: Confirm Password */}
                    <div className='mt-5'>
                        <label className='font-semibold' htmlFor="confirmPassword">Confirm Password</label>
                        <div className='relative'>
                            <input
                                placeholder='Confirm your password'
                                className='mt-2 w-full p-2 border border-[#3b398d] rounded-md focus:outline-0 ring-0 bg-white'
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                id="confirmPassword"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(p => !p)}
                                className='absolute cursor-pointer right-3 top-[30px] transform -translate-y-1/2 text-gray-500'
                            >
                                {!showConfirmPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                    </div>

                    <div className='flex justify-between items-center my-5'>
                        <label htmlFor="remember">
                            <input type="checkbox" name="remember" id="remember" />
                            <span className='ml-2 text-gray-600'>I agree to all terms & conditions.</span>
                        </label>
                    </div>

                    <div className='mt-5'>
                        <button className='cursor-pointer w-full p-2 bg-[#3b398d] font-semibold text-white rounded-md'>Sign Up</button>
                    </div>
                    <p className='text-center mt-5 text-gray-600'>Already have an account? <Link className='text-blue-600' href="/login">Login</Link></p>
                </div>
            </div>

        </div>
    );
};

export default Page;
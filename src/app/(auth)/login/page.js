'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useLoginMutation } from '@/redux/fetures/auth/login';

const Page = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loginWithPassowrd, { isLoading }] = useLoginMutation();

    const togglePassword = () => {
        setShowPassword(prevState => !prevState);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password'); 
        const data = {
            email,
            password
        }

        
    };

    return (
        <div className='bg-[url("/Images/Auth/page_bg.png")] bg-cover bg-center flex items-center justify-center min-h-screen px-10'>

            <form onSubmit={handleSubmit} className='w-full py-20 bg-slate-100/90 rounded-lg p-10 max-w-lg'>
                <div className='min-w-80'>
                    <h2 className='text-3xl font-medium text-center'>Login</h2>

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
                                onClick={togglePassword}
                                className='absolute cursor-pointer right-3 top-[30px] transform -translate-y-1/2 text-gray-500'
                            >
                                {!showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                    </div>

                    <div className='flex justify-between items-center my-5'>
                        <label htmlFor="remember">
                            <input type="checkbox" name="remember" id="remember" />
                            <span className='ml-2 text-gray-600'>Remember me</span>
                        </label>
                        <Link className='text-blue-600 text-sm' href="/forgot-password">Forgot Password</Link>
                    </div>

                    <div className='mt-5'>
                        <button className='cursor-pointer w-full p-2 bg-[#3b398d] font-semibold text-white rounded-md'>Login</button>
                    </div>

                    <p className='text-center mt-5 text-gray-600'>Don't have an account? <Link className='text-blue-600' href="/signup">Sign Up</Link></p>
                </div>
            </form>

        </div>
    );
};

export default Page;
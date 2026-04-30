'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLoginMutation } from '@/redux/fetures/auth/login';
import { toast } from 'react-toastify';

const Page = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [loginWithPassowrd, { isLoading }] = useLoginMutation();
    const router = useRouter();

    const togglePassword = () => {
        setShowPassword(prevState => !prevState);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg('');
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const data = {
            email,
            password,
            rememberMe: true
        };
        
        try {
            const response = await loginWithPassowrd(data).unwrap();
            if (response?.code == 200) {
                toast.success(response?.message);
                console.log(response?.data?.userWithoutPassword)
                localStorage.setItem("token", JSON.stringify(response?.data?.tokens?.accessToken));
                localStorage.setItem("user", JSON.stringify(response?.data?.userWithoutPassword));
                if (response?.data?.userWithoutPassword?.role == 'student') {
                    router.push('/students'); // ✅ redirect after login
                } else if (response?.data?.userWithoutPassword?.role == 'mentor') {
                    router.push('/mentor'); // ✅ redirect after login
                }
            }
            else{
                toast.error(response?.message);
            }
            // router.push('/dashboard'); // ✅ redirect after login
        } catch (error) {
            console.error('Login failed:', error);
            toast.error(error?.data?.message || 'Login failed. Please try again.'); // ✅ toast error message
            alert(error?.data?.message || 'Login failed. Please try again.');
        }
    };

    return (
        <div className='bg-[url("/Images/Auth/page_bg.png")] bg-cover bg-center flex items-center justify-center min-h-screen px-10'>

            <form onSubmit={handleSubmit} className='w-full py-20 bg-slate-100/90 rounded-lg p-10 max-w-lg'>
                <div className='min-w-80'>
                    <h2 className='text-3xl font-medium text-center'>Login</h2>

                    {/* ✅ Error message */}
                    {errorMsg && (
                        <div className='mt-4 p-2 bg-red-100 border border-red-400 text-red-600 text-sm rounded-md text-center'>
                            {errorMsg}
                        </div>
                    )}

                    <div className='mt-5'>
                        <label className='font-semibold' htmlFor="email">Email</label>
                        <input
                            placeholder='Enter your email'
                            className='mt-2 w-full p-2 border border-[#3b398d] rounded-md focus:outline-0 ring-0 bg-white'
                            type="email"
                            name="email"
                            id="email"
                            required
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
                                required
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
                        <button
                            type='submit'
                            disabled={isLoading}
                            className='cursor-pointer w-full p-2 bg-[#3b398d] font-semibold text-white rounded-md disabled:opacity-60 disabled:cursor-not-allowed'
                        >
                            {isLoading ? 'Logging in...' : 'Login'} {/* ✅ loading state */}
                        </button>
                    </div>

                    <p className='text-center mt-5 text-gray-600'>Don't have an account? <Link className='text-blue-600' href="/signup">Sign Up</Link></p>
                </div>
            </form>

        </div>
    );
};

export default Page;
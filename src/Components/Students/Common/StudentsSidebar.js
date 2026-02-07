'use client';

import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { IoIosLogOut } from 'react-icons/io';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { RxCross1 } from 'react-icons/rx';
import { Modal, Button } from 'antd';
import { toast, ToastContainer } from 'react-toastify';

const menuItems = [
    {
        title: 'Dashboard',
        desc: 'Free questionnaire results & AI summary',
        icon: '⭐',
        path: '/students',
    },
    {
        title: 'Exploration Journey',
        desc: 'The structured 6-capsule program',
        icon: '🛸',
        path: '/students/exploration-journey',
    },
    {
        title: 'Mentors',
        desc: 'Recommended mentors, favorites, and bookings',
        icon: '🧑‍🏫',
        path: '/students/mentors',
    },
    {
        title: 'My Capsules',
        desc: 'All my purchased content',
        icon: '💎',
        path: '/students/my-capsules',
    },
    {
        title: 'My Account',
        desc: 'Profile, preferences, details',
        icon: '🤖',
        path: '/students/my-account',
    },
    {
        title: 'Settings',
        desc: 'FAQ, terms & conditions, privacy policy',
        icon: '⚙️',
        path: '/students/settings',
    },
];

const StudentsSidebar = ({ isOpen, setIsOpen }) => {
    const pathname = usePathname();
    const router = useRouter();

    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const handleLogout = () => {
        setShowLogoutModal(false);

        // 🔴 Clear auth data here
        // localStorage.removeItem('token');
        // localStorage.removeItem('user');
        toast.success('Logout successful');

        // router.push('/login');
    };

    return (
        <>
        <ToastContainer />
            <div
                className={`lg:flex flex-col lg:sticky top-0 lg:z-0 z-10 bg-[#eaeaf1] h-screen min-w-80 border-r border-gray-300
                ${isOpen ? 'block fixed left-0 top-0' : 'hidden'}`}
            >
                {/* LOGO */}
                <Link href="/" className="p-4 border-b border-gray-300 relative">
                    <img
                        className="w-2/3 mx-auto"
                        src="/Images/Auth/logo_student_dash.png"
                        alt="Logo"
                    />
                </Link>

                {/* CLOSE ICON */}
                <div
                    onClick={() => setIsOpen(false)}
                    className="absolute top-3 right-3 cursor-pointer"
                >
                    <RxCross1 className="text-3xl lg:hidden" />
                </div>

                {/* MENU */}
                <div className="p-4 space-y-2">
                    {menuItems.map((item, index) => {
                        const isActive = pathname === item.path;

                        return (
                            <div
                                key={index}
                                onClick={() => {
                                    router.push(item.path);
                                    setIsOpen(false);
                                }}
                                className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition
                                    ${
                                        isActive
                                            ? 'bg-white shadow-sm'
                                            : 'hover:bg-white/70'
                                    }`}
                            >
                                {/* ICON */}
                                <div className="text-xl mt-1">{item.icon}</div>

                                {/* TEXT */}
                                <div className="flex-1">
                                    <h3 className="font-semibold text-[#2b124f]">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-gray-600">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* ACTIVE ARROW */}
                                {isActive && (
                                    <FaChevronRight className="text-[#2b124f] mt-1" />
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* LOGOUT BUTTON */}
                <div className="absolute bottom-5 w-full flex items-center justify-center px-5">
                    <button
                        onClick={() => setShowLogoutModal(true)}
                        className="flex items-center gap-3 text-red-500 justify-center font-semibold p-3 w-full rounded-xl bg-white/70 transition"
                    >
                        Log Out <IoIosLogOut />
                    </button>
                </div>
            </div>

            {/* LOGOUT MODAL */}
            <Modal
                title="Confirm Logout"
                open={showLogoutModal}
                onCancel={() => setShowLogoutModal(false)}
                width={400}
                footer={[
                    <Button key="cancel" onClick={() => setShowLogoutModal(false)}>
                        Cancel
                    </Button>,
                    <Button
                        key="logout"
                        danger
                        type="primary"
                        onClick={handleLogout}
                    >
                        Log Out
                    </Button>,
                ]}
            >
                <p>Are you sure you want to log out from your account?</p>
            </Modal>
        </>
    );
};

export default StudentsSidebar;

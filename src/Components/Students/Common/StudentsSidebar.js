// import React from 'react';
// import { FaChevronRight } from 'react-icons/fa';
// import { IoIosLogOut } from 'react-icons/io';

// const menuItems = [
//     {
//         title: 'Dashboard',
//         desc: 'Free questionnaire results & AI summary',
//         icon: '⭐', 
//         path: '/'
//     },
//     {
//         title: 'Exploration Journey',
//         desc: 'The structured 6-capsule program',
//         icon: '🛸',
//         path: '/exploration-journey'

//     },
//     {
//         title: 'Mentors',
//         desc: 'Recommended mentors, favorites, and bookings',
//         icon: '🧑‍🏫',
//         path: '/mentors'
//     },
//     {
//         title: 'My Capsules',
//         desc: 'All my purchased content',
//         icon: '💎',
//         path: '/my-capsules'
//     },
//     {
//         title: 'My Account',
//         desc: 'Profile, preferences, details',
//         icon: '🤖',
//         path: '/my-account'
//     },
//     {
//         title: 'Settings',
//         desc: 'FAQ, terms & conditions, privacy policy',
//         icon: '⚙️',
//         path: '/settings'
//     },
// ];

// const StudentsSidebar = () => {
//     return (
//         <div className="hidden relative lg:flex flex-col bg-[#eaeaf1] h-screen w-80 border-r border-gray-300">

//             {/* LOGO */}
//             <div className="p-4 border-b border-gray-300">
//                 <img
//                     className="w-2/3 mx-auto"
//                     src="/Images/Auth/logo_student_dash.png"
//                     alt="Logo"
//                 />
//             </div>

//             {/* MENU */}
//             <div className="p-4 space-y-2">
//                 {menuItems.map((item, index) => (
//                     <div
//                         key={index}
//                         className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition
//                         ${item.active
//                                 ? 'bg-white shadow-sm'
//                                 : 'hover:bg-white/70'
//                             }`}
//                     >
//                         {/* ICON */}
//                         <div className="text-xl mt-1">
//                             {item.icon}
//                         </div>

//                         {/* TEXT */}
//                         <div className="flex-1">
//                             <h3 className="font-semibold text-[#2b124f]">
//                                 {item.title}
//                             </h3>
//                             <p className="text-xs text-gray-600">
//                                 {item.desc}
//                             </p>
//                         </div>

//                         {/* ARROW (ONLY FOR ACTIVE) */}
//                         {item.active && (
//                             <FaChevronRight className="text-[#2b124f] mt-1" />
//                         )}
//                     </div>
//                 ))}
//             </div>
//             <div className='absolute bottom-5 w-full flex items-center justify-center'>
//                 <button className="flex items-center text-red-500 font-semibold gap-3 p-3 rounded-xl cursor-pointer transition hover:bg-white/70">Log Out <IoIosLogOut /></button>
//             </div>
//         </div>
//     );
// };

// export default StudentsSidebar;


'use client';

import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { IoIosLogOut } from 'react-icons/io';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { RxCross1 } from 'react-icons/rx';

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

    console.log(isOpen)

    return (
        <div className={` lg:flex flex-col bg-[#eaeaf1]  h-screen min-w-80 border-r border-gray-300 ${isOpen ? 'block absolute left-0 top-0' : 'hidden relative'}`}>

            {/* LOGO */}
            <Link href="/" className="p-4 border-b border-gray-300 relative">
                <img
                    className="w-2/3 mx-auto"
                    src="/Images/Auth/logo_student_dash.png"
                    alt="Logo"
                />
            </Link>
            <div onClick={() => setIsOpen(!isOpen)} className='absolute top-3 right-3 cursor-pointer'>
                <RxCross1 className='text-2xl lg:hidden' />
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
                                ${isActive
                                    ? 'bg-white shadow-sm'
                                    : 'hover:bg-white/70'
                                }`}
                        >
                            {/* ICON */}
                            <div className="text-xl mt-1">
                                {item.icon}
                            </div>

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

            {/* LOGOUT */}
            <div className="absolute bottom-5 w-full flex justify-center">
                <button className="flex items-center gap-3 text-red-500 font-semibold p-3 rounded-xl hover:bg-white/70 transition">
                    Log Out <IoIosLogOut />
                </button>
            </div>
        </div>
    );
};

export default StudentsSidebar;

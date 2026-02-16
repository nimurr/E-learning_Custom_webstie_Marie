import React from 'react';
import { IoIosMenu, IoMdNotifications } from 'react-icons/io';

const StudentsHeader = ({ isOpen, setIsOpen }) => {
    return (
        <div className='bg-[#dedde8]  w-full p-5 flex justify-between lg:justify-end items-center gap-3'>


            <div onClick={() => setIsOpen(!isOpen)} className='w-14 h-14  cursor-pointer text-primary lg:hidden flex items-center justify-center rounded-full'>
                <IoIosMenu className='text-5xl' />
            </div>


            <div className='flex items-center gap-3'>
                <div className='w-14 h-14 bg-primary cursor-pointer text-white flex items-center justify-center rounded-full'>
                    <IoMdNotifications className='text-3xl' />
                </div>
                <div className='bg-white cursor-pointer flex items-center gap-2 p-2 rounded-lg'>
                    <img className=' w-10 rounded-full' src={'https://www.fullstackexperts.eu/wp-content/uploads/2024/12/Projekt-bez-nazwy-38-1024x1024.png'} alt="" />
                    <div className='-mb-2'>
                        <h2 className='font-semibold mb-0'>John Doe</h2>
                        <p className='text-gray-500 text-xs'>Student</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentsHeader;

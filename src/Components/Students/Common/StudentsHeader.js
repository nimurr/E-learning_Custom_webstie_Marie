import React from 'react';
import { IoIosMenu, IoMdNotifications } from 'react-icons/io';

const StudentsHeader = ({ isOpen, setIsOpen }) => {
    return (
        <div className='bg-[#dedde8]  w-full p-5 flex justify-between lg:justify-end items-center gap-3'>


            <div  onClick={() => setIsOpen(!isOpen)} className='w-14 h-14  cursor-pointer text-primary lg:hidden flex items-center justify-center rounded-full'>
                <IoIosMenu className='text-5xl' />
            </div>


            <div className='flex items-center gap-3'>
                <div className='w-14 h-14 bg-primary cursor-pointer text-white flex items-center justify-center rounded-full'>
                    <IoMdNotifications className='text-3xl' />
                </div>
                <div className='bg-white cursor-pointer h-14 flex items-center gap-2 p-2 rounded-lg'>
                    <img className=' h-full rounded-full' src={'https://www.fullstackexperts.eu/wp-content/uploads/2024/12/Projekt-bez-nazwy-38-1024x1024.png'} alt="" />
                    <IoIosMenu className='text-4xl' />
                </div>
            </div>
        </div>
    );
}

export default StudentsHeader;

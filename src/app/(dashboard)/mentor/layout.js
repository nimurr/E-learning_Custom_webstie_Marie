'use client';
import { Geist, Geist_Mono } from "next/font/google";
import './../../globals.css'
import StudentsHeader from "@/Components/Students/Common/StudentsHeader"; 
import { useState } from "react";
import MentorSidebar from "@/Components/mentors/Common/MentorSidebar";


// not root layout this is main layout

export default function Layout({ children }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative flex">
            <MentorSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="w-full">
                <StudentsHeader isOpen={isOpen} setIsOpen={setIsOpen} />

                <div className="">
                    {children}
                </div>
            </div>
        </div>
    );
}

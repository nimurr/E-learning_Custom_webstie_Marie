'use client';
import { Geist, Geist_Mono } from "next/font/google";
import './../../globals.css'
import StudentsHeader from "@/Components/Students/Common/StudentsHeader";
import StudentsSidebar from "@/Components/Students/Common/StudentsSidebar";
import { useState } from "react";


// not root layout this is main layout

export default function Layout({ children }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative flex ">
            <StudentsSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="w-full">
                <StudentsHeader isOpen={isOpen} setIsOpen={setIsOpen} />
                <div className="p-5">
                    {children}
                </div>
            </div>
        </div>
    );
}

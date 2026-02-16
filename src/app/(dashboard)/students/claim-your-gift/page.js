// import React from "react";
// import { FaArrowDown } from "react-icons/fa";
// import { FaArrowRightLong } from "react-icons/fa6";

// const Page = () => {
//     return (
//         <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-6">
//             {/* Container */}
//             <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur rounded-2xl shadow-md border border-gray-200 p-6">

//                 {/* Breadcrumb */}
//                 <p className="text-sm text-gray-500 mb-4">
//                     Home / Exploration Journey / Certificate
//                 </p>

//                 {/* Header */}
//                 <div className="flex items-center justify-between border rounded-xl px-5 py-4 bg-gray-50">
//                     <div>
//                         <h1 className="text-2xl font-semibold text-primary">
//                             Achievement Unlocked
//                         </h1>
//                         <p className="text-sm text-gray-500 mt-1">
//                             Completion Date: Oct 24, 2025
//                         </p>
//                     </div>

//                     <button className="customSignUpButton hover:bg-indigo-800 text-white px-5 py-4 rounded-lg text-sm font-medium flex items-center gap-2">
//                         Download Certificate
//                         <FaArrowDown />
//                     </button>
//                 </div>

//                 {/* Main Card */}
//                 <div className="mt-6 border rounded-2xl p-10 bg-gray-50 text-center">

//                     {/* Character Image */}
//                     <div className="flex justify-center mb-6">
//                         <img
//                             src="/Images/StudentsDash/gift_cliem.png" // replace with your image
//                             alt="astronaut"
//                             className="h-72 object-contain"
//                         />
//                     </div>

//                     {/* Title */}
//                     <h2 className="text-2xl font-semibold text-primary mb-3">
//                         A Gift For Your Dedication
//                     </h2>

//                     {/* Description */}
//                     <p className="text-gray-600 max-w-xl mx-auto mb-6 text-sm leading-relaxed">
//                         You've successfully finished your Stellar Expedition. To celebrate
//                         your commitment, we’re gifting you a bonus capsule. A special module
//                         to help you build meaningful professional connections.
//                     </p>

//                     {/* CTA */}
//                     <div className="flex justify-center">
//                         <button className="customSignUpButton hover:bg-indigo-800 text-white px-6 py-3 rounded-lg font-medium shadow flex items-center gap-2">
//                             Claim Your Gift <FaArrowRightLong />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Page;

// // when user clicks the download certificate button show the certificate template and download the certificate

// function CertificateTemplate() {
//     return (
//         <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
//             {/* Certificate Container */}
//             <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl relative overflow-hidden">

//                 {/* Decorative Background Glow */}
//                 <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-40" />
//                 <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-40" />

//                 {/* Inner Border + Background Image */}
//                 <div
//                     className=" rounded-xl p-10 text-center relative z-10 bg-center bg-no-repeat bg-cover"
//                     style={{
//                         backgroundImage:
//                             "url('/Images/Certificate_border.png')",
//                     }}
//                 >

//                     {/* Optional white overlay for readability */}
//                     <div className="absolute inset-0 bg-white/60 rounded-xl" />

//                     <div className="relative z-10 m-5">
//                         {/* Logo */}
//                         <div className="mb-6">
//                             <div className="w-32  h-32 mx-auto  rounded-full flex items-center justify-center text-white text-xl font-bold">
//                                 <img className="w-full" src="/Images/Auth/logo_student_dash.png" alt="" />
//                             </div>
//                         </div>

//                         {/* Title */}
//                         <h1 className="text-4xl font-bold text-primary tracking-wide mb-2">
//                             Certificate of Achievement
//                         </h1>

//                         <p className="text-gray-500 mb-8">This certificate is proudly presented to</p>

//                         {/* Recipient Name */}
//                         <h2 className="text-5xl mycertificateFont font-semibold text-gray-900 mb-8 border-b-2 border-dashed border-indigo-300 inline-block px-8 pb-2">
//                             Nimur Rahman Nerob
//                         </h2>

//                         {/* Description */}
//                         <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
//                             In recognition of outstanding dedication and successful completion of the program.
//                             Your commitment, passion, and effort have demonstrated excellence and perseverance.
//                         </p>

//                         {/* Footer Section */}
//                         <div className="flex justify-between items-end mt-12">

//                             {/* Date */}
//                             <div className="text-center">
//                                 <h3>12/02/2026</h3>
//                                 <div className="w-40 border-t border-gray-400 my-2" />
//                                 <p className="text-sm text-gray-500">Date</p>
//                             </div>

//                             {/* Signature */}
//                             <div className="text-center">
//                                 <h3 className="mycertificateFont font-semibold text-3xl text-gray-900">la~propulserie</h3>
//                                 <div className="w-48 border-t border-gray-400 my-2" />
//                                 <p className="text-sm text-gray-500">Authorized Signature</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
'use client';

import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import moment from "moment";
import Link from "next/link";

export default function Page() {
    const certificateRef = useRef();

    const downloadCertificate = async () => {
        const element = certificateRef.current;

        const canvas = await html2canvas(element, {
            scale: 3,
            useCORS: true,
        });

        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF({
            orientation: "landscape",
            unit: "px",
            format: [canvas.width, canvas.height],
        });

        pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
        pdf.save("certificate.pdf");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-6">
            <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur rounded-2xl shadow-md border border-gray-200 p-6">
                {/* Header */}
                <div className="flex items-center justify-between border rounded-xl px-5 py-4 bg-gray-50">
                    <div>
                        <h1 className="text-2xl font-semibold text-primary">
                            Achievement Unlocked
                        </h1>
                        <p className="text-sm text-gray-500 mt-1">
                            Completion Date: Oct 24, 2025
                        </p>
                    </div>

                    <button
                        onClick={downloadCertificate}
                        className="customSignUpButton hover:bg-indigo-800 text-white px-5 py-4 rounded-lg text-sm font-medium flex items-center gap-2"
                    >
                        Download Certificate <FaArrowDown />
                    </button>
                </div>

                {/* Main Card */}
                <div className="mt-6 border rounded-2xl p-10 bg-gray-50 text-center">
                    <div className="flex justify-center mb-6">
                        <img
                            src="/Images/StudentsDash/gift_cliem.png"
                            alt="gift"
                            className="h-72 object-contain"
                        />
                    </div>

                    <h2 className="text-2xl font-semibold text-primary mb-3">
                        A Gift For Your Dedication
                    </h2>

                    <p className="text-gray-600 max-w-xl mx-auto mb-6 text-sm leading-relaxed">
                        You've successfully finished your Stellar Expedition. To celebrate
                        your commitment, we’re gifting you a bonus capsule. A special module
                        to help you build meaningful professional connections.
                    </p>

                    <div className="flex justify-center">
                        <Link href="/students/claim-your-gift/capsule-modules" className="customSignUpButton hover:bg-indigo-800 text-white px-6 py-3 rounded-lg font-medium shadow flex items-center gap-2">
                            Claim Your Gift <FaArrowRightLong />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Hidden Certificate for PDF Capture */}
            <div className="fixed left-[-9999px] top-0">
                <div ref={certificateRef}>
                    <CertificateTemplate />
                </div>
            </div>
        </div>
    );
}


function CertificateTemplate() {
    return (
        <div className="w-[1200px] h-[850px] bg-white flex items-center justify-center p-6">
            <div className="w-full h-full shadow-2xl relative overflow-hidden">

                {/* Decorative Glow */}
                <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-40" />
                <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-40" />

                {/* Background */}
                <div
                    className="w-full h-full p-10 text-center relative bg-center bg-no-repeat bg-cover"
                    style={{
                        backgroundImage: "url('/Images/Certificate_border.png')",
                    }}
                >
                    <div className="absolute inset-0 bg-white/60" />

                    <div className="relative z-10 m-5">
                        {/* Logo */}
                        <div className="mb-6">
                            <div className="w-32 h-32 mx-auto rounded-full flex items-center justify-center">
                                <img
                                    className="w-full"
                                    src="/Images/Auth/logo_student_dash.png"
                                    alt="logo"
                                />
                            </div>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl font-bold text-primary tracking-wide mb-2">
                            Certificate of Achievement
                        </h1>

                        <p className="text-gray-500 mb-8">
                            This certificate is proudly presented to
                        </p>

                        {/* Name */}
                        <h2 className="text-5xl mycertificateFont font-semibold text-gray-900 mb-8 border-b-2 border-dashed border-indigo-300 inline-block px-8 pb-2">
                            Tasmia Hassan Shabonty
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
                            {/* this is the e-learning project need discussion  */}
                            In recognition of outstanding dedication and
                            successful completion of the program. Your
                            commitment, passion, and effort have
                            demonstrated excellence and perseverance.
                        </p>

                        {/* Footer */}
                        <div className="flex justify-between items-end mt-20">
                            <div className="text-center">
                                <h3>{moment().format("DD/MM/YYYY")}</h3>
                                <div className="w-40 border-t border-gray-400 mt-4" />
                                <p className="text-sm text-gray-500">Date</p>
                            </div>

                            <div className="text-center">
                                <h3 className="mycertificateFont font-semibold text-3xl text-gray-900">
                                    la~propulserie
                                </h3>
                                <div className="w-48 border-t border-gray-400 mt-4" />
                                <p className="text-sm text-gray-500">Authorized Signature</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
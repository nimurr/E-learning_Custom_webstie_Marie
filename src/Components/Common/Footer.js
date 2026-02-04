import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-[#2b124f] via-[#140b26] to-black text-white">
            {/* TOP CTA SECTION */}
            <div className="container mx-auto px-4 py-28 text-center">
                <h1 className="text-4xl md:text-5xl font-semibold mb-6">
                    Your Constellation Awaits
                </h1>

                <p className="max-w-3xl mx-auto text-gray-300 mb-10">
                    Begin With A Free Assessment. Receive Your Star Map. Meet Your Guide. Start Your Journey.
                </p>

                <button className="bg-white customSignUpButtonHover text-primary border px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition inline-flex items-center gap-2">
                    Begin Your Mentorship Journey  🚀
                </button>
            </div>

            {/* DIVIDER */}
            <div className="container mx-auto px-4">
                <div className="border-t border-white/20"></div>
            </div>

            {/* BOTTOM FOOTER CONTENT */}
            <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* LOGO + SOCIAL */}
                <div>
                    <h2 className="text-3xl font-bold mb-6">
                        <span className="text-yellow-500">La</span> Propulserie
                    </h2>

                    <div className="flex gap-4">
                        {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                            <div
                                key={i}
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition"
                            >
                                <Icon />
                            </div>
                        ))}
                    </div>
                </div>

                {/* THE JOURNEY */}
                <div>
                    <h3 className="font-semibold mb-4">The Journey</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li>Registration</li>
                        <li>Gentle Questions</li>
                        <li>Mentor Match</li>
                        <li>Your Cosmic Map</li>
                        <li>The Expedition</li>
                        <li>Individual Capsules</li>
                    </ul>
                </div>

                {/* INDIVIDUAL CAPSULES */}
                <div>
                    <h3 className="font-semibold mb-4">Individual Capsules</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li>Web Development & Design</li>
                        <li>Product Management</li>
                        <li>Business & Marketing</li>
                        <li>Creatives</li>
                        <li>Data Engineering</li>
                    </ul>
                </div>

                {/* FOR MENTORS */}
                <div>
                    <h3 className="font-semibold mb-4">For Mentors</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li>Become A Guide</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

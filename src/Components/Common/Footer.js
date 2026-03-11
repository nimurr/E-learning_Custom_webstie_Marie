import Link from 'next/link';
import React from 'react';

const Footer = () => {
    const columns = [
        {
            heading: 'La Propulserie',
            links: ['Free Dashboard Check', 'Expedition Path', 'Meet a Mentor', 'Take Action'],
        },
        {
            heading: 'Solutions',
            links: ['For Individuals', 'For Companies'],
        },
        {
            heading: 'Ecosystem',
            links: ['The Explorers', 'The Boosters', 'The Mentors', 'The Boosters'],
        },
        {
            heading: 'For Mentors',
            links: ['Become a Mentor', 'Application Process'],
        },
        {
            heading: 'About',
            links: ['The Approach', 'How It Works', 'Contact'],
        },
        {
            heading: 'Legal',
            links: ['Terms of Use', 'Privacy Policy', 'Cookie Policy', 'Legal Notice'],
        },
    ];

    return (
        <div className="bg-gradient-to-t from-blue-950 to-black">
            <footer className="container mx-auto text-white">

                {/* Top bar: logo + tagline */}
                <div className="flex flex-wrap items-center justify-between px-12 pt-9 pb-7 gap-3">
                    <div className="leading-tight">
                        <div className="text-xs font-bold text-amber-400">La</div>
                        <div className="text-xs font-bold text-amber-400">Propulserie</div>
                    </div>
                    <p className="text-xs text-slate-400 m-0">
                        Your journey to professional alignment starts here
                    </p>
                </div>

                {/* Divider */}
                <div className="mx-12 border-t border-white/10" />

                {/* Link columns */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 px-12 py-10">
                    {columns.map((col, i) => (
                        <div key={i}>
                            <h3 className="text-xs font-semibold text-amber-400 mb-4 tracking-wide">
                                {col.heading}
                            </h3>
                            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
                                {col.links.map((link, j) => (
                                    <li key={j}>
                                        <Link
                                            href="#"
                                            className="text-xs text-gray-300 no-underline hover:text-white transition-colors duration-200"
                                        >
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom divider */}
                <div className="mx-12 border-t border-white/10" />

                {/* Copyright */}
                <div className="px-12 py-5 text-center">
                    <p className="text-xs text-slate-400 m-0">
                        © 2026 La Propulserie.{' '}
                        <span className="text-amber-400">★</span>
                        {' '}All rights reserved.
                    </p>
                </div>

            </footer>
        </div>
    );
};

export default Footer;
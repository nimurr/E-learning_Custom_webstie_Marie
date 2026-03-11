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
        <footer className='container mx-auto' style={{ background: '#0a0d1f', width: '100%', color: 'white', fontFamily: 'sans-serif' }}>

            {/* Top bar: logo + tagline */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '36px 48px 28px 48px',
                gap: '12px'
            }}>
                <div style={{ lineHeight: 1.2 }}>
                    <div style={{ color: '#f5a623', fontWeight: 700, fontSize: '13px' }}>La</div>
                    <div style={{ color: '#f5a623', fontWeight: 700, fontSize: '13px' }}>Propulserie</div>
                </div>
                <p style={{ color: '#8898b8', fontSize: '13px', margin: 0 }}>
                    Your journey to professional alignment starts here
                </p>
            </div>

            {/* Divider */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', margin: '0 48px' }} />

            {/* Link columns */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '32px',
                padding: '40px 48px',
            }}>
                {columns.map((col, i) => (
                    <div key={i}>
                        <h3 style={{
                            color: '#f5a623',
                            fontSize: '12px',
                            fontWeight: 600,
                            marginBottom: '16px',
                            letterSpacing: '0.03em',
                        }}>
                            {col.heading}
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {col.links.map((link, j) => (
                                <li key={j}>
                                    <Link
                                        href="#"
                                        style={{ color: '#d1d5db', fontSize: '12px', textDecoration: 'none' }}
                                        target="_blank"
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
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', margin: '0 48px' }} />

            {/* Copyright */}
            <div style={{ padding: '20px 48px', textAlign: 'center' }}>
                <p style={{ color: '#8898b8', fontSize: '12px', margin: 0 }}>
                    © 2026 La Propulserie.{' '}
                    <span style={{ color: '#f5a623' }}>★</span>
                    {' '}All rights reserved.
                </p>
            </div>
        </footer >
    );
};

export default Footer;
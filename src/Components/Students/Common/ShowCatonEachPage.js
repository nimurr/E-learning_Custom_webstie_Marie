'use client';

import React, { useEffect, useRef, useState } from 'react';

const ShowCatonEachPage = ({ catroonUrl }) => {
    const [isShow, setIsShow] = useState(true);
    const wrapperRef = useRef(null);

    // Show only first time
    useEffect(() => {
        const hasSeen = localStorage.getItem('hasSeenCartoon');
        if (!hasSeen) {
            setIsShow(true);
        }
    }, []);

    // Hide on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                hideCartoon();
            }
        };

        if (isShow) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isShow]);

    const hideCartoon = () => {
        setIsShow(false);
        localStorage.setItem('hasSeenCartoon', 'true');
    };

    return (
        <div ref={wrapperRef} className=" fixed bottom-0 left-0 z-[999]">
            {/* FLOATING BUTTON */}
            {/* CARTOON */}
            {isShow && (
                <div onClick={hideCartoon} className="absolute cursor-pointer bottom-0 left-0 w-screen h-screen bg-black/40 shadow-xl p-3 flex items-end">
                    <img
                        src={catroonUrl}
                        alt="Helper"
                        className="w-2/3 lg:w-1/4"
                    />
                </div>
            )}
        </div>
    );
};

export default ShowCatonEachPage;

import Link from 'next/link';
import React from 'react';

const BeginQuestionnaire = () => {
    
    return (
        <div className='max-w-6xl mx-auto bg-white lg:p-10 p-5 text-center rounded-xl flex flex-col items-center'>
            <div>
                <img className='max-w-14 mb-5' src="/Images/StudentsDash/question_setp_first.png" alt="" />
            </div>
            <h2 className='text-2xl font-semibold mb-3 text-primary'>Choose Your Course to the Right Mentor</h2>
            <p className='text-gray-500'>Launch your Status Check — a 10-minute introspective journey to connect with mentors who share your orbit</p>

            <Link href="/students/all-questions" className='px-10 py-4 rounded-lg customSignUpButton text-white mt-5'>Begin Questionnaire</Link>
        </div>
    );
}

export default BeginQuestionnaire;

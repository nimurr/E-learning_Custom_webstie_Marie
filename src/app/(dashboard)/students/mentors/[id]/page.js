'use client';
import ProfileLeft from '@/Components/Students/Mentors/ProfileLeft';
import ProfileRight from '@/Components/Students/Mentors/ProfileRight';
import { useGetMentorDetailsQuery } from '@/redux/fetures/Mentors/Mentors';
import { useParams } from 'next/navigation';
import React from 'react';

const Page = () => {

  const params = useParams();
  const mentorId = params?.id;

  const { data } = useGetMentorDetailsQuery(mentorId);
  
  console.log(data)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="lg:col-span-1">
          <ProfileLeft />
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-2">
          <ProfileRight />
        </div>

      </div>
    </div>
  );
};

export default Page;
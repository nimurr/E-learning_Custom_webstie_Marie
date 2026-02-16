import ProfileLeft from '@/Components/Students/Mentors/ProfileLeft';
import ProfileRight from '@/Components/Students/Mentors/ProfileRight';
import React from 'react';

const Page = () => {
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
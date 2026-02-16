'use client';

import React from 'react';
import MentorProfileRateing from './MentorProfileRateing';

const Tag = ({ children }) => (
  <span className="px-3 py-1 text-sm border rounded-full bg-gray-50">
    {children}
  </span>
);

const Section = ({ title, children }) => (
  <div className="bg-white/90 backdrop-blur rounded-2xl p-6 shadow border mb-6">
    <h2 className="text-xl font-semibold text-primary mb-4">{title}</h2>
    {children}
  </div>
);

const ProfileRight = () => {
  return (
    <div>

      {/* ABOUT */}
      <Section title="About Me">
        <p className="text-gray-600 mb-4 leading-relaxed">
          I'm a career transition coach who believes work should energize, not drain you.
          I help professionals in tech and creative fields move from burnout to purpose.
        </p>

        <p className="font-medium mb-2">I'm passionate about:</p>

        <ul className="list-disc pl-6 text-gray-600 space-y-1">
          <li>Turning career confusion into clear direction</li>
          <li>Helping people build work around their life</li>
          <li>Guiding professionals from burnout to passion</li>
          <li>Making career development empowering</li>
        </ul>
      </Section>

      {/* VALUES */}
      <Section title="Values">
        <div className="flex flex-wrap gap-2">
          <Tag>Creativity</Tag>
          <Tag>Balance</Tag>
          <Tag>Impact</Tag>
          <Tag>Autonomy</Tag>
          <Tag>Empathy</Tag>
          <Tag>Growth</Tag>
          <Tag>Authenticity</Tag>
        </div>
      </Section>

      {/* SPECIALTIES */}
      <Section title="Specialties">
        <div className="flex flex-wrap gap-2">
          <Tag>Career Clarity (Mid-Level)</Tag>
          <Tag>Burnout Recovery</Tag>
          <Tag>Corporate-to-Creative Transition</Tag>
          <Tag>Values Alignment</Tag>
          <Tag>Confidence Building</Tag>
          <Tag>Remote Work Optimization</Tag>
          <Tag>Purpose-Driven Design</Tag>
        </div>
      </Section>

      {/* METHODOLOGIES */}
      <Section title="Methodologies">
        <div className="flex flex-wrap gap-2">
          <Tag>Mindful Reflection</Tag>
          <Tag>Action Planning</Tag>
          <Tag>Design Thinking</Tag>
          <Tag>Positive Psychology</Tag>
          <Tag>Accountability Systems</Tag>
        </div>
      </Section>

      <MentorProfileRateing />

    </div>
  );
};

export default ProfileRight;
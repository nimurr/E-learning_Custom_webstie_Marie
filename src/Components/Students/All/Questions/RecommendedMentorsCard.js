import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { GrLanguage } from 'react-icons/gr';
import { HiLanguage } from 'react-icons/hi2';


const RecommendedMentorsCard = () => {
    const mentor = {
        name: "James Chan",
        rating: 4,
        location: "Lyon, France",
        languages: ["French", "English"],
        mode: ["Online", "In-Person"],
        price: 70,
        description: "With over 8 years as a career transition coach, I specialize in guiding tech and creative professionals out of burnout and into careers with purpose and balance. My approach blends practical strategy with mindful introspection to help you design work that doesn't just pay the bills—it fuels your spirit.",
        methodologies: ["Strengths-based coaching", "Mindful reflection", "Action planning", "Design Thinking"],
        values: ["Creativity", "Balance", "Impact", "Autonomy"],
        specialization: ["Career coaching"]
    };

    return (
        <div className=" mx-auto bg-white border rounded-lg p-6 space-y-4">
            {/* Top Section */}
            <div className="flex items-center space-x-4">
                <img
                    src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?semt=ais_hybrid&w=740&q=80" // replace with actual image path
                    alt={mentor.name}
                    className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                    <h2 className="text-xl font-semibold">{mentor.name}</h2>
                    <div className="flex items-center space-x-2">
                        <span className="text-yellow-400">{'★'.repeat(mentor.rating)}</span>
                        <span className="text-gray-400">{'/5'}</span>
                    </div>
                    <div className="text-gray-500 text-sm flex space-x-5 mt-1">
                        <span className='flex items-center gap-2'><CiLocationOn className='text-xl' /> {mentor.location}</span>
                        <span className='flex items-center gap-2'><HiLanguage className='text-xl ' /> {mentor.languages.join(', ')}</span>
                        <span className='flex items-center gap-2'><GrLanguage className='text-xl ' /> {mentor.mode.join(', ')}</span>
                    </div>
                </div>
                <div className="text-xl font-bold text-gray-900">${mentor.price}/hour</div>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-sm">{mentor.description}</p>

            {/* Tags Section */}
            <div className="flex flex-wrap gap-2">
                <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm">
                    <strong>Methodologies:</strong> {mentor.methodologies.join(' • ')}
                </div>
                <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm">
                    <strong>Values:</strong> {mentor.values.join(' • ')}
                </div>
                <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm">
                    <strong>Specialization:</strong> {mentor.specialization.join(' • ')}
                </div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-2 mt-4">
                <button className="flex-1 border border-gray-300 rounded-lg py-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    View Details
                </button>
                <button className="flex-1 bg-primary text-white rounded-lg py-3 text-sm font-medium hover:bg-indigo-700">
                    Book a Session
                </button>
            </div>
        </div>
    );
};

export default RecommendedMentorsCard;

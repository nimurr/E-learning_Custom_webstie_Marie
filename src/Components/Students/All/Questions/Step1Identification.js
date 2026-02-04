'use client';
import React, { useState } from 'react';

const Step1Identification = ({ onNext }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSave = async () => {
        setLoading(true);

        const payload = {
            name,
            email,
        };

        try {
            // 🔥 save only this step
            console.log('Saving Step 1', payload);
            // await api.post('/steps/1', payload);

            onNext(); // 🚀 go next AFTER save
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2 className="text-xl font-semibold mb-6">
                Identification
            </h2>

            <div className="mb-6">
                <label className="block text-sm mb-2">Name</label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border rounded-lg px-4 py-3"
                />
            </div>

            <div className="mb-6">
                <label className="block text-sm mb-2">Email</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border rounded-lg px-4 py-3"
                />
            </div>

            {/* SAVE & NEXT */}
            <button
                onClick={handleSave}
                disabled={loading}
                className="px-8 py-3 bg-[#2b124f] text-white rounded-lg disabled:opacity-50"
            >
                {loading ? 'Saving...' : 'Save & Continue'}
            </button>
        </div>
    );
};

export default Step1Identification;

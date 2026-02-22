import React from 'react';

const TermsTab = () => {
    return (
        <div className="bg-gray-50 rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Terms & Conditions</h2>
            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                <p>
                    By accessing and using this platform, you accept and agree to be bound by the terms
                    and provisions of this agreement. Please read these terms carefully before using our services.
                </p>
                <div>
                    <h3 className="font-semibold text-gray-700 mb-1">1. Use of the Platform</h3>
                    <p>
                        You agree to use this platform only for lawful purposes and in a manner that does not
                        infringe the rights of others or restrict or inhibit anyone's use and enjoyment of the platform.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-700 mb-1">2. Intellectual Property</h3>
                    <p>
                        All content on this platform, including courses, materials, and media, is the intellectual
                        property of the platform and is protected by applicable copyright and trademark law.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-700 mb-1">3. Account Responsibility</h3>
                    <p>
                        You are responsible for maintaining the confidentiality of your account credentials and for all
                        activities that occur under your account.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-700 mb-1">4. Changes to Terms</h3>
                    <p>
                        We reserve the right to modify these terms at any time. Continued use of the platform
                        after changes constitutes your acceptance of the new terms.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsTab;
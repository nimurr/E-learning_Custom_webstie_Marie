import React from 'react';

const PrivacyTab = () => {
    return (
        <div className="bg-gray-50 rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Privacy Policy</h2>
            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                <p>
                    Your privacy is important to us. This policy explains how we collect, use, and protect
                    your personal information when you use our platform.
                </p>
                <div>
                    <h3 className="font-semibold text-gray-700 mb-1">1. Information We Collect</h3>
                    <p>
                        We collect information you provide directly, such as your name, email address, and profile data,
                        as well as usage data such as pages visited and features used.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-700 mb-1">2. How We Use Your Data</h3>
                    <p>
                        We use your data to provide and improve our services, personalize your experience,
                        communicate with you, and comply with legal obligations.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-700 mb-1">3. Data Sharing</h3>
                    <p>
                        We do not sell your personal information. We may share data with trusted service providers
                        who assist us in operating the platform, subject to confidentiality agreements.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-700 mb-1">4. Your Rights</h3>
                    <p>
                        You have the right to access, correct, or delete your personal data at any time by contacting
                        our support team or updating your profile settings.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyTab;
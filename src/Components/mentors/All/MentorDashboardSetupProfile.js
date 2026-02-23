'use client';
import React, { useState } from 'react';
import BasicInfoTab from './BasicInfoTab';
import MissionTab from './MissionTab';
import InnerFuelTab from './InnerFuelTab';
import MethodsTab from './MethodsTab';
import GoLiveTab from './GoLiveTab';
import StepProgress from './StepProgress';

const MentorDashboardSetupProfile = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [allData, setAllData] = useState({});

    const handleNext = (stepData) => {
        setAllData((prev) => ({ ...prev, ...stepData }));
        setCurrentStep((s) => Math.min(s + 1, 5));
    };

    const handleBack = () => setCurrentStep((s) => Math.max(s - 1, 1));

    const handleSubmit = () => {
        console.log('Final profile data:', allData);
        // Submit to API here
    };

    const renderTab = () => {
        switch (currentStep) {
            case 1: return <BasicInfoTab onNext={handleNext} />;
            case 2: return <MissionTab onNext={handleNext} onBack={handleBack} />;
            case 3: return <InnerFuelTab onNext={handleNext} onBack={handleBack} />;
            case 4: return <MethodsTab onNext={handleNext} onBack={handleBack} />;
            case 5: return <GoLiveTab onBack={handleBack} onSubmit={handleSubmit} />;
            default: return null;
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen max-w-6xl mx-auto rounded-lg shadow-md my-10 py-5">

            {/* Step Progress — click completed steps to go back */}
            <div className="border-b border-gray-100">
                <StepProgress
                    currentStep={currentStep}
                    onStepClick={(step) => {
                        if (step < currentStep) setCurrentStep(step);
                    }}
                />
            </div>

            {/* Tab Content */}
            <div className="p-4">
                {renderTab()}
            </div>

        </div>
    );
};

export default MentorDashboardSetupProfile;
'use client';
import React, { useState } from 'react';
import { Button, Alert } from 'antd';
import { CheckCircleFilled, WarningFilled } from '@ant-design/icons';
import { toast } from 'react-toastify';

// ── Data ──────────────────────────────────────────────────────
const plans = [
    {
        value: 'stellar',
        name: 'Stellar Explorer',
        tagline: 'Essential tools new mentors',
        price: 19,
        popular: false,
        features: [
            'Basic profile visibility',
            'Up to 3 leads per month',
            'Standard search listing',
            'Smart AI Matching',
        ],
    },
    {
        value: 'galactic',
        name: 'Galactic Guide',
        tagline: 'For serious mentors growing their reach.',
        price: 49,
        popular: true,
        features: [
            'Priority Profile Visibility',
            'Unlimited Leads',
            '"Verified Mentor" Badge',
            'Smart AI Matching',
        ],
    },
    {
        value: 'universal',
        name: 'Universal Master',
        tagline: 'Maximum exposure & zero fees.',
        price: 99,
        popular: false,
        features: [
            'Top of Search Results',
            'Featured in Weekly Newsletter',
            'Dedicated Success Manager',
            'Smart AI Matching',
        ],
    },
];

// ── GoLiveTab ─────────────────────────────────────────────────
const GoLiveTab = ({ onNext, onBack }) => {
    const [selectedPlan, setSelectedPlan] = useState('');

    const handleSubmit = () => {
        // onNext?.({ selectedPlan });
        toast.success(`You have selected the ${selectedPlan ? plans.find(p => p.value === selectedPlan)?.name : 'no'} plan!`);
    };

    return (
        <div className=" space-y-4">

            {/* ── Warning Banner ── */}
            <div className="flex gap-3 border border-yellow-200 bg-yellow-50 rounded-xl px-4 py-3">
                <WarningFilled style={{ color: '#f59e0b', fontSize: 18, marginTop: 2, flexShrink: 0 }} />
                <div>
                    <p className="text-sm font-semibold text-gray-800 mb-1">
                        Subscription Required For Visibility
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                        To maintain high-quality mentorship standards, we require all mentors to hold an active
                        subscription. Without a plan, your profile will remain hidden from the directory,
                        recommendations, and search results.
                    </p>
                </div>
            </div>

            {/* ── Plan Cards ── */}
            <div className="space-y-3">
                {plans.map((plan) => {
                    const isSelected = selectedPlan === plan.value;
                    return (
                        <div
                            key={plan.value}
                            onClick={() => setSelectedPlan(plan.value)}
                            className={`relative cursor-pointer border-2 rounded-2xl p-5 transition-all
                                ${isSelected
                                    ? 'border-indigo-500 bg-white shadow-md'
                                    : 'border-gray-200 bg-white hover:border-indigo-200'
                                }`}
                        >
                            {/* Most Popular Badge */}
                            {plan.popular && (
                                <span className="absolute -top-3 left-5 bg-red-500 text-white text-xs font-semibold px-3 py-0.5 rounded-full">
                                    Most Popular
                                </span>
                            )}

                            <div className="flex gap-5">
                                {/* Left: Plan Info */}
                                <div className="w-36 flex-shrink-0">
                                    <h3 className="text-lg font-bold text-indigo-800 leading-tight mb-1">
                                        {plan.name}
                                    </h3>
                                    <p className="text-xs text-gray-400 mb-3 leading-relaxed">
                                        {plan.tagline}
                                    </p>
                                    <div className="flex items-baseline gap-0.5">
                                        <span className="text-2xl font-bold text-gray-900">${plan.price}</span>
                                        <span className="text-xs text-gray-400">/Month</span>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="w-px bg-gray-100 self-stretch" />

                                {/* Right: Features */}
                                <div className="flex-1 space-y-2.5 pt-1">
                                    {plan.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-2">
                                            <CheckCircleFilled style={{ color: '#3730a3', fontSize: 16 }} />
                                            <span className="text-xs text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* ── Buttons ── */}
            <div className="flex gap-3 pt-2">
                {onBack && (
                    <Button
                        onClick={onBack}
                        size="large"
                        block
                        className='bg-primary text-white h-12'
                    >
                        Back
                    </Button>
                )}
                <Button
                    type="primary"
                    size="large"
                    onClick={handleSubmit}
                    // disabled={!selectedPlan}
                    block
                    className='bg-primary text-white h-12'
                >
                    Save & Continue
                </Button>
            </div>

        </div>
    );
};

export default GoLiveTab;
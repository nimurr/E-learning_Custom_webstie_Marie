'use client';
import React, { useState } from 'react';
import { Button, Checkbox, Radio, Tag, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

// ── Data ──────────────────────────────────────────────────────
const careerStages = [
    { value: 'students', label: 'Students & Interns', sub: 'Staring their journey' },
    { value: 'early_career', label: 'Early Career', sub: '0-3 years experience' },
    { value: 'mid_level', label: 'Mid-Level', sub: '3-7 years experience' },
    { value: 'senior', label: 'Senior Leadership', sub: 'Manager, Director, VP' },
    { value: 'executives', label: 'Executives', sub: 'C-Suite, Founders' },
    { value: 'career_pivoters', label: 'Career Pivoters', sub: 'Charging Industries' },
];

const focusAreaOptions = [
    'Career Clarity', 'Leadership', 'Burnout Recovery', 'Salary Negotiation',
    'Personal Branding', 'Startup Growth', 'Imposter Syndrome', 'Technical Skills',
];

const industryOptions = [
    'Technology', 'Creative & Design', 'Finance & Fintech', 'Marketing & Sales',
    'Education', 'Healthcare', 'E-Commerce',
];

// ── MissionTab ────────────────────────────────────────────────
const MissionTab = ({ onNext, onBack }) => {
    const [selectedStages, setSelectedStages] = useState([]);
    const [selectedFocus, setSelectedFocus] = useState([]);
    const [customFocusItems, setCustomFocusItems] = useState([]);
    const [customInput, setCustomInput] = useState('');
    const [showCustomInput, setShowCustomInput] = useState(false);
    const [selectedIndustry, setSelectedIndustry] = useState('');

    // Career stage toggle
    const toggleStage = (value) =>
        setSelectedStages((prev) =>
            prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
        );

    // Focus area toggle
    const toggleFocus = (value) =>
        setSelectedFocus((prev) =>
            prev.includes(value) ? prev.filter((f) => f !== value) : [...prev, value]
        );

    // Add custom focus area
    const addCustomFocus = () => {
        const trimmed = customInput.trim();
        if (trimmed && !customFocusItems.includes(trimmed)) {
            setCustomFocusItems((prev) => [...prev, trimmed]);
            setSelectedFocus((prev) => [...prev, trimmed]);
        }
        setCustomInput('');
        setShowCustomInput(false);
    };

    const handleSubmit = () => {
        onNext?.({
            careerStages: selectedStages,
            focusAreas: selectedFocus,
            industry: selectedIndustry,
        });
    };

    return (
        <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5 space-y-7">

            {/* ── Section 1: Career Stages ── */}
            <div>
                <h3 className="text-sm font-semibold text-gray-800 mb-3">
                    Who Do You Want To Mentor? <span className="font-normal text-gray-500">(Select Career Stages)</span>
                </h3>
                <div className="grid grid-cols-3 gap-3">
                    {careerStages.map((stage) => {
                        const isChecked = selectedStages.includes(stage.value);
                        return (
                            <div
                                key={stage.value}
                                onClick={() => toggleStage(stage.value)}
                                className={`cursor-pointer border rounded-xl p-3 flex items-start gap-2 transition-all
                                    ${isChecked
                                        ? 'border-indigo-400 bg-indigo-50'
                                        : 'border-gray-200 bg-white hover:border-indigo-200'
                                    }`}
                            >
                                <Checkbox checked={isChecked} onChange={() => toggleStage(stage.value)} />
                                <div>
                                    <p className="text-xs font-semibold text-gray-800 leading-tight">{stage.label}</p>
                                    <p className="text-xs text-gray-400 mt-0.5">{stage.sub}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* ── Section 2: Focus Area ── */}
            <div>
                <h3 className="text-sm font-semibold text-gray-800 mb-3">
                    Focus Area <span className="font-normal text-gray-500">(Select All That Apply)</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                    {[...focusAreaOptions, ...customFocusItems].map((area) => {
                        const isSelected = selectedFocus.includes(area);
                        return (
                            <div
                                key={area}
                                onClick={() => toggleFocus(area)}
                                className={`cursor-pointer flex items-center gap-1.5 border rounded-lg px-3 py-1.5 text-xs font-medium transition-all
                                    ${isSelected
                                        ? 'border-indigo-400 bg-indigo-50 text-indigo-800'
                                        : 'border-gray-200 bg-white text-gray-600 hover:border-indigo-200'
                                    }`}
                            >
                                <Checkbox checked={isSelected} onChange={() => toggleFocus(area)} />
                                {area}
                            </div>
                        );
                    })}

                    {/* Add Custom */}
                    {showCustomInput ? (
                        <Input
                            autoFocus
                            size="small"
                            value={customInput}
                            onChange={(e) => setCustomInput(e.target.value)}
                            onPressEnter={addCustomFocus}
                            onBlur={addCustomFocus}
                            placeholder="Type & press Enter"
                            style={{ width: 160, borderRadius: 8 }}
                        />
                    ) : (
                        <button
                            type="button"
                            onClick={() => setShowCustomInput(true)}
                            className="flex items-center gap-1 border border-gray-200 bg-white text-gray-500 hover:border-indigo-300 hover:text-indigo-700 rounded-lg px-3 py-1.5 text-xs font-medium transition-all"
                        >
                            <PlusOutlined style={{ fontSize: 11 }} />
                            Add Custom
                        </button>
                    )}
                </div>
            </div>

            {/* ── Section 3: Industry ── */}
            <div>
                <h3 className="text-sm font-semibold text-gray-800 mb-3">
                    Industry <span className="font-normal text-gray-500">(Select Relevant Field)</span>
                </h3>
                <Radio.Group
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="flex flex-wrap gap-2"
                >
                    {industryOptions.map((industry) => (
                        <Radio
                            key={industry}
                            value={industry}
                            className={`border rounded-full px-4 py-1.5 text-xs font-medium transition-all m-0
                                ${selectedIndustry === industry
                                    ? 'border-indigo-400 bg-indigo-50 text-indigo-800'
                                    : 'border-gray-200 bg-white text-gray-600'
                                }`}
                            style={{ borderRadius: 999 }}
                        >
                            {industry}
                        </Radio>
                    ))}
                </Radio.Group>
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
                    block
                    onClick={handleSubmit}
                    className='bg-primary h-12'
                >
                    Save & Continue
                </Button>
            </div>

        </div>
    );
};

export default MissionTab;
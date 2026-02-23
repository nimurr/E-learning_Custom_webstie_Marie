'use client';
import React, { useState } from 'react';
import { Form, Input, Select, Button, InputNumber, Upload } from 'antd';

const { TextArea } = Input;

// ── Photo Upload (inline) ──────────────────────────────────────
const PhotoUpload = ({ onChange }) => {
    const [preview, setPreview] = useState(null);

    const handleBeforeUpload = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => setPreview(e.target.result);
        reader.readAsDataURL(file);
        onChange?.(file);
        return false;
    };

    return (
        <div className="flex items-center gap-5 mb-6">
            <div className="w-20 h-20 rounded-full border-2 border-indigo-200 bg-indigo-50 flex items-center justify-center overflow-hidden flex-shrink-0">
                {preview ? (
                    <img src={preview} alt="profile" className="w-full h-full object-cover" />
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                )}
            </div>
            <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">Profile Photo</p>
                <p className="text-xs text-gray-400 mb-3">Upload a professional photo.</p>
                <Upload accept="image/*" showUploadList={false} beforeUpload={handleBeforeUpload}>
                    <Button
                        style={{
                            backgroundColor: '#3730a3',
                            borderColor: '#3730a3',
                            color: '#fff',
                            borderRadius: '8px',
                            fontSize: '12px',
                        }}
                    >
                        Upload Photo
                    </Button>
                </Upload>
            </div>
        </div>
    );
};

// ── Basic Info Tab ─────────────────────────────────────────────
const BasicInfoTab = ({ onNext }) => {
    const [form] = Form.useForm();
    const [photo, setPhoto] = useState(null);
    const [bioWordCount, setBioWordCount] = useState(0);

    const handleBioChange = (e) => {
        const text = e.target.value;
        setBioWordCount(text.trim() === '' ? 0 : text.trim().split(/\s+/).length);
    };

    const handleFinish = (values) => {
        onNext({ ...values, photo });
    };

    return (
        <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5">
            <PhotoUpload onChange={(file) => setPhoto(file)} />
            <hr className="border-gray-200 mb-5" />

            <Form form={form} layout="vertical" onFinish={handleFinish}>

                <Form.Item label="Full Name" name="fullName">
                    <Input className='border border-gray-400' placeholder="Enter your full name" size="large" />
                </Form.Item>

                <Form.Item label="Location" name="location">
                    <Select className='border border-gray-400 rounded-lg' placeholder="Select location" size="large">
                        {['Bangladesh', 'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'India'].map((opt) => (
                            <Select.Option key={opt} value={opt}>{opt}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item label="Available In" name="availableIn">
                    <Select className='border border-gray-400 rounded-lg' placeholder="Select language" size="large">
                        {['English', 'Bengali', 'Hindi', 'Arabic', 'French', 'Spanish'].map((opt) => (
                            <Select.Option key={opt} value={opt}>{opt}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item label="Session Price" name="sessionPrice">
                    <InputNumber className='border border-gray-400 rounded-lg w-full ' placeholder="Enter price" size="large" min={0} prefix="$" />
                </Form.Item>

                <Form.Item label="Current Job Title" name="jobTitle">
                    <Select className='border border-gray-400 rounded-lg' placeholder="Select job title" size="large">
                        {['Software Engineer', 'Product Manager', 'UI/UX Designer', 'Data Scientist', 'Marketing Manager', 'Business Analyst'].map((opt) => (
                            <Select.Option key={opt} value={opt}>{opt}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item label="Company / Organization" name="company">
                    <Select className='border border-gray-400 rounded-lg' placeholder="Select company" size="large">
                        {['Google', 'Meta', 'Amazon', 'Microsoft', 'Apple', 'Netflix', 'Freelance', 'Other'].map((opt) => (
                            <Select.Option key={opt} value={opt}>{opt}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item label="Years Of Experience" name="yearsOfExperience">
                    <InputNumber className='border border-gray-400 rounded-lg w-full block' placeholder="e.g. 5" size="large" min={0} max={50} />
                </Form.Item>

                <Form.Item
                    name="shortBio"
                    label={
                        <div className="flex items-center justify-between w-full">
                            <span>Short Bio </span>
                            <span className="text-xs text-gray-400 font-normal"> {bioWordCount}/2000 Words</span>
                        </div>
                    }
                >
                    <TextArea rows={7} placeholder="Write a short bio..." onChange={handleBioChange} />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        block
                        className='bg-primary text-white border-primary rounded-lg py-4 h-12'
                    >
                        Save & Continue
                    </Button>
                </Form.Item>

            </Form>
        </div>
    );
};

export default BasicInfoTab;
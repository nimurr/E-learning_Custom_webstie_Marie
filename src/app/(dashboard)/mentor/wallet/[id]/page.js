'use client';
import Link from 'next/link';
import React from 'react';
import { RxCross1 } from 'react-icons/rx';

// ── Sample Data ───────────────────────────────────────────────
const paymentData = {
    bank: {
        holderName: 'John Doe',
        bankName: 'Chase Bank',
        bankBranch: 'France',
        accountType: 'Savings',
        accountNumber: '****5678',
        routingNumber: '02100000254',
        mobileNumber: '+8801629253364',
    },
    payment: {
        amount: '$70',
        requestedDate: '01-01-2026',
        processDate: '10-01-2026',
        status: 'Completed',
    },
    proof: {
        amount: '$250.00',
        date: 'May 15, 2025',
        transactionId: '12345678',
    },
};

// ── Payment Details Modal ─────────────────────────────────────
// ── Page ──────────────────────────────────────────────────────
const Page = () => {
    const data = paymentData;

    return (
        <div className="relative py-10">
            <div className="absolute inset-0 bg-[url('/Images/StudentsDash/page_bg.png')] bg-cover bg-no-repeat opacity-60" />
            <div className="p-5 max-w-3xl relative bg-gray-100 rounded-2xl my-5 mx-auto space-y-4">

                {/* Header */}
                <div>
                    <div className="border-b border-gray-100 pb-4">
                        <h2 className="text-2xl font-bold text-gray-900">Successful Payments Details</h2>
                        <p className="text-xs text-gray-400 mt-0.5">View details of individual successful payment</p>
                    </div>
                    <Link href="/mentor/wallet" className="absolute top-4 right-4">
                        <RxCross1 className="absolute top-4 right-4 w-6 h-6 cursor-pointer" />
                    </Link>
                </div>

                {/* Bank Details */}
                <div className="border border-gray-100 rounded-xl p-4 bg-white">
                    <p className="text-base font-semibold text-gray-700 mb-3">Bank Details</p>
                    <div className="grid grid-cols-4 gap-4">
                        {[
                            { label: 'Account Holder Name', value: data.bank.holderName },
                            { label: 'Bank Name', value: data.bank.bankName },
                            { label: 'Bank Branch', value: data.bank.bankBranch },
                            { label: 'Account Type', value: data.bank.accountType },
                            { label: 'Account Number', value: data.bank.accountNumber },
                            { label: 'Routing Number', value: data.bank.routingNumber },
                            { label: 'Mobile Number', value: data.bank.mobileNumber },
                        ].map((item) => (
                            <div key={item.label} className="flex flex-col bg-gray-100 rounded-xl p-3">
                                <div className="flex items-center gap-1 mb-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-800 inline-block flex-shrink-0" />
                                    <span className="text-xs text-gray-400 leading-tight">{item.label}</span>
                                </div>
                                <p className="text-xs font-semibold text-gray-800 pl-2.5">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Payment Amount */}
                <div className="border border-gray-100 rounded-xl p-4 bg-white">
                    <p className="text-xs font-semibold text-gray-700 mb-2">Payment Amount</p>
                    <p className="text-lg font-bold text-indigo-800">{data.payment.amount}</p>
                </div>

                {/* Dates */}
                <div className="border border-gray-100 rounded-xl p-4 bg-white">
                    <p className="text-xs font-semibold text-gray-700 mb-3">Dates</p>
                    <div className="flex gap-8">
                        {[
                            { label: 'Requested Date', value: data.payment.requestedDate },
                            { label: 'Process Date', value: data.payment.processDate },
                        ].map((item) => (
                            <div key={item.label}>
                                <div className="flex items-center gap-1 mb-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-800 inline-block" />
                                    <span className="text-xs text-gray-400">{item.label}</span>
                                </div>
                                <p className="text-xs font-semibold text-gray-800 pl-2.5">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Proof of Payment */}
                <div className="border border-gray-100 rounded-xl p-4 bg-white">
                    <div className="flex items-center gap-2 mb-4">
                        <p className="text-xs font-semibold text-gray-700">Proof Of Payment</p>
                        <span className="inline-flex items-center gap-1 bg-green-50 text-green-600 border border-green-200 text-xs font-medium px-2 py-0.5 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                            {data.payment.status}
                        </span>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6 text-center">
                        <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8 15.414l-4.707-4.707a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 mb-4">Payment Confirmed!</h3>

                        <div className="text-left space-y-2 mb-5 max-w-xs mx-auto">
                            {[
                                { label: 'Amount:', value: data.proof.amount },
                                { label: 'Date:', value: data.proof.date },
                                { label: 'Transaction ID:', value: data.proof.transactionId },
                            ].map((row) => (
                                <div key={row.label} className="flex justify-between text-sm">
                                    <span className="font-semibold text-gray-700">{row.label}</span>
                                    <span className="text-gray-600">{row.value}</span>
                                </div>
                            ))}
                        </div>

                        <button className="w-full max-w-xs bg-gray-800 hover:bg-gray-700 text-white text-sm font-bold py-3 rounded-xl tracking-widest uppercase transition">
                            DONE
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Page;
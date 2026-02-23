'use client';
import Link from 'next/link';
import React, { useState } from 'react';

// ── Data ──────────────────────────────────────────────────────
const transactions = [
    { id: '01', date: '01-01-2026', txId: '#485d6A456i', amount: '$70.00' },
    { id: '01', date: '01-01-2026', txId: '#485d6A456i', amount: '$70.00' },
    { id: '01', date: '01-01-2026', txId: '#485d6A456i', amount: '$70.00' },
    { id: '01', date: '01-01-2026', txId: '#485d6A456i', amount: '$70.00' },
    { id: '01', date: '01-01-2026', txId: '#485d6A456i', amount: '$70.00' },
    { id: '01', date: '01-01-2026', txId: '#485d6A456i', amount: '$70.00' },
];

const withdrawalHistory = [
    { id: '01', date: '15-12-2025', txId: '#WD9821Ab3x', amount: '$200.00', status: 'Approved' },
    { id: '02', date: '20-12-2025', txId: '#WD1234Cd7y', amount: '$150.00', status: 'Pending' },
];

const ITEMS_PER_PAGE = 6;

// ── Modal Overlay ─────────────────────────────────────────────
const Modal = ({ open, onClose, children }) => {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
            <div className="relative z-10 w-full max-w-md mx-4">
                {children}
            </div>
        </div>
    );
};

// ── Withdrawal Request Modal ──────────────────────────────────
const WithdrawalModal = ({ open, onClose, balance }) => {
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = () => {
        const val = parseFloat(amount);
        if (!amount || isNaN(val)) return setError('Please enter an amount.');
        if (val < 10) return setError('Minimum withdrawal is $10.');
        if (val > balance) return setError(`Cannot exceed current balance of $${balance.toFixed(2)}.`);
        alert(`Withdrawal request of $${val.toFixed(2)} submitted!`);
        setAmount('');
        setError('');
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <div className="bg-white rounded-2xl shadow-2xl p-6">
                <h2 className="text-base font-bold text-gray-900 mb-1">Request Withdrawal</h2>
                <p className="text-xs text-gray-400 mb-5">Submit a withdrawal request for admin approval</p>

                <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-5">
                    <p className="text-xs text-gray-500 mb-1">Current Balance</p>
                    <p className="text-xl font-bold text-indigo-800">${balance.toFixed(2)}</p>
                </div>

                <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Withdrawal Amount
                    </label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => { setAmount(e.target.value); setError(''); }}
                            placeholder="0.00"
                            className="w-full border border-gray-200 rounded-xl pl-7 pr-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                        />
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Min: $10</p>
                    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 border border-gray-200 text-gray-600 text-sm font-medium py-2.5 rounded-xl hover:bg-gray-50 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="flex-1 bg-indigo-800 hover:bg-indigo-700 text-white text-sm font-medium py-2.5 rounded-xl transition"
                    >
                        Submit Request
                    </button>
                </div>
            </div>
        </Modal>
    );
};

// ── Edit Account Modal ────────────────────────────────────────
const EditAccountModal = ({ open, onClose, account, onSave }) => {
    const [form, setForm] = useState({ ...account });
    const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

    const handleSave = () => {
        onSave(form);
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-h-[90vh] overflow-y-auto">
                <h2 className="text-base font-bold text-gray-900 mb-1">Account Information</h2>
                <p className="text-xs text-gray-400 mb-5">Secure bank account details for withdrawals</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="text-xs text-gray-500 block mb-1">Bank Name</label>
                        <input value={form.bankName} onChange={set('bankName')} className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
                    </div>
                    <div>
                        <label className="text-xs text-gray-500 block mb-1">Bank Branch</label>
                        <input value={form.bankBranch} onChange={set('bankBranch')} className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
                    </div>
                    <div>
                        <label className="text-xs text-gray-500 block mb-1">Account Holder Name</label>
                        <input value={form.holderName} onChange={set('holderName')} className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
                    </div>
                    <div>
                        <label className="text-xs text-gray-500 block mb-1">Account Number</label>
                        <input value={form.accountNumber} onChange={set('accountNumber')} className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
                    </div>
                    <div>
                        <label className="text-xs text-gray-500 block mb-1">Routing Number</label>
                        <input value={form.routingNumber} onChange={set('routingNumber')} className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
                    </div>
                    <div>
                        <label className="text-xs text-gray-500 block mb-1">Bank Account Type</label>
                        <div className="flex gap-2 mt-1">
                            {['Savings', 'Current'].map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setForm({ ...form, accountType: type })}
                                    className={`flex-1 text-xs py-2 rounded-xl border transition font-medium
                                        ${form.accountType === type
                                            ? 'bg-indigo-800 text-white border-indigo-800'
                                            : 'bg-white text-gray-500 border-gray-200 hover:border-indigo-200'
                                        }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex gap-3 mt-2">
                    <button
                        onClick={onClose}
                        className="flex-1 border border-gray-200 text-gray-600 text-sm font-medium py-2.5 rounded-xl hover:bg-gray-50 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="flex-1 bg-indigo-800 hover:bg-indigo-700 text-white text-sm font-medium py-2.5 rounded-xl transition"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </Modal>
    );
};

// ── Info Tooltip Modal ────────────────────────────────────────
const InfoModal = ({ open, onClose, tx }) => (
    <Modal open={open} onClose={onClose}>
        <div className="bg-white rounded-2xl shadow-2xl p-6">
            <h2 className="text-base font-bold text-gray-900 mb-4">Transaction Details</h2>
            {tx && (
                <div className="space-y-3 text-sm">
                    {[
                        ['No', tx.id],
                        ['Processed Date', tx.date],
                        ['Transaction ID', tx.txId],
                        ['Amount', tx.amount],
                    ].map(([label, value]) => (
                        <div key={label} className="flex justify-between border-b border-gray-50 pb-2">
                            <span className="text-gray-400">{label}</span>
                            <span className="font-medium text-gray-800">{value}</span>
                        </div>
                    ))}
                </div>
            )}
            <button
                onClick={onClose}
                className="w-full mt-5 border border-gray-200 text-gray-600 text-sm font-medium py-2.5 rounded-xl hover:bg-gray-50 transition"
            >
                Close
            </button>
        </div>
    </Modal>
);

// ── Main Page ─────────────────────────────────────────────────
const Page = () => {
    const [activeTab, setActiveTab] = useState('payments');
    const [page, setPage] = useState(1);
    const [withdrawalOpen, setWithdrawalOpen] = useState(false);
    const [editAccountOpen, setEditAccountOpen] = useState(false);
    const [infoTx, setInfoTx] = useState(null);

    const [account, setAccount] = useState({
        holderName: 'John Doe',
        bankName: 'Chase Bank',
        bankBranch: 'Manhattan Main Branch',
        accountNumber: '****5678',
        routingNumber: '02100000254',
        accountType: 'Savings',
    });

    const balance = 2450.75;
    const totalPages = Math.ceil(transactions.length / ITEMS_PER_PAGE);
    const currentData = activeTab === 'payments'
        ? transactions.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
        : withdrawalHistory;

    return (
        <div className="relative py-10">
            <div className="absolute -z-10 inset-0 bg-[url('/Images/StudentsDash/page_bg.png')] bg-cover bg-no-repeat opacity-60" />

            <div className="p-4 z-[999] space-y-4 max-w-6xl mx-auto bg-gray-100 rounded-2xl my-5 shadow-sm">

                {/* ── Stat Cards ── */}
                <div className="grid grid-cols-3 gap-3">
                    {/* Current Balance */}
                    <div className="bg-indigo-900 text-white rounded-2xl p-10 shadow-sm">
                        <div className="flex items-start justify-between mb-3">
                            <p className="text-xs font-medium opacity-80">Current Balance</p>
                            <span className="text-3xl">💵</span>
                        </div>
                        <p className="text-5xl font-bold">${balance.toFixed(2)}</p>
                    </div>

                    {/* Pending Withdrawals */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-sm">
                        <div className="flex items-start justify-between mb-3">
                            <p className="text-xs font-medium text-gray-500">Pending Withdrawals</p>
                            <span className="text-3xl">⏰</span>
                        </div>
                        <p className="text-5xl font-bold text-red-500">2</p>
                    </div>

                    {/* Total Earnings */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-sm">
                        <div className="flex items-start justify-between mb-3">
                            <p className="text-xs font-medium text-gray-500">Total Earnings</p>
                            <span className="text-3xl">📈</span>
                        </div>
                        <p className="text-5xl font-bold text-green-500">$7705.75</p>
                    </div>
                </div>

                {/* ── Transaction History ── */}
                <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-1">
                        <div>
                            <h2 className=" font-bold text-gray-900">Transaction History</h2>
                            <p className="text-xs text-gray-400 mt-0.5">View your payments and withdrawal history</p>
                        </div>
                        <button
                            onClick={() => setWithdrawalOpen(true)}
                            className="flex items-center gap-1.5 bg-primary hover:bg-indigo-700 text-white text-xs font-medium px-3 py-3 rounded-lg transition"
                        >
                            $  Request Withdrawal
                        </button>
                    </div>

                    {/* Tabs */}
                    <div className="flex bg-gray-100 rounded-xl p-1 my-4 ">
                        {[['payments', 'Successful Payments'], ['withdrawals', 'Withdrawal History']].map(([key, label]) => (
                            <button
                                key={key}
                                onClick={() => { setActiveTab(key); setPage(1); }}
                                className={`flex-1 text-base font-medium py-2 rounded-lg transition-all
                                ${activeTab === key ? 'bg-white shadow-sm text-gray-800' : 'text-gray-400 hover:text-gray-600'}`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>

                    {/* Table */}
                    <div className="rounded-xl overflow-hidden border border-gray-100">
                        {/* Header */}
                        <div className={`grid text-xs font-semibold text-indigo-700 bg-indigo-50 px-4 py-3 ${activeTab === 'payments' ? 'grid-cols-5' : 'grid-cols-5'}`}>
                            <span>No</span>
                            <span>Processed Date</span>
                            <span>Transaction ID</span>
                            <span>Amount</span>
                            <span className="text-center">Details</span>
                        </div>

                        {/* Rows */}
                        {currentData.map((row, i) => (
                            <div
                                key={i}
                                className={`grid grid-cols-5 px-4 py-3 text-xs text-gray-600 items-center border-t border-gray-50 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                            >
                                <span className="text-gray-400">{row.id}</span>
                                <span>{row.date}</span>
                                <span className="text-gray-500">{row.txId}</span>
                                <span>{row.amount}</span>
                                <Link href={`/mentor/wallet/${row.id}`} className="flex justify-center">
                                    {activeTab === 'payments' ? (
                                        <button
                                            // onClick={() => setInfoTx(row)}
                                            className="w-7 h-7 rounded-full border border-indigo-200 bg-indigo-50 flex items-center justify-center hover:bg-indigo-100 transition"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </button>
                                    ) : (
                                        <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full border
                                        ${row.status === 'Approved'
                                                ? 'bg-green-50 text-green-600 border-green-200'
                                                : 'bg-yellow-50 text-yellow-600 border-yellow-200'
                                            }`}>
                                            <span className={`w-1.5 h-1.5 rounded-full inline-block ${row.status === 'Approved' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                                            {row.status}
                                        </span>
                                    )}
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Pagination (only for payments) */}
                    {activeTab === 'payments' && (
                        <div className="flex items-center justify-end gap-2 mt-4">
                            <button
                                onClick={() => setPage(p => Math.max(1, p - 1))}
                                disabled={page === 1}
                                className="text-xs text-gray-500 hover:text-gray-800 disabled:opacity-30 px-2 py-1"
                            >
                                Previous
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                                <button
                                    key={n}
                                    onClick={() => setPage(n)}
                                    className={`w-7 h-7 rounded-lg text-xs font-medium transition-all
                                    ${page === n ? 'bg-indigo-800 text-white' : 'text-gray-500 hover:bg-gray-100'}`}
                                >
                                    {n}
                                </button>
                            ))}
                            <button
                                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                                disabled={page === totalPages}
                                className="text-xs text-gray-500 hover:text-gray-800 disabled:opacity-30 px-2 py-1"
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>

                {/* ── Account Information ── */}
                <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h2 className="text-sm font-bold text-gray-900">Account Information</h2>
                            <p className="text-xs text-gray-400 mt-0.5">Secure bank account details for withdrawals</p>
                        </div>
                        <button
                            onClick={() => setEditAccountOpen(true)}
                            className="flex items-center gap-1.5 bg-primary hover:bg-indigo-700 text-white text-xs font-medium px-3 py-3 rounded-lg transition"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            Edit Details
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { icon: '👤', label: 'Account Holder', value: account.holderName },
                            { icon: '🏦', label: 'Bank Name', value: account.bankName },
                            { icon: '💳', label: 'Account Number', value: account.accountNumber },
                            { icon: '#', label: 'Routing Number', value: account.routingNumber },
                        ].map((item) => (
                            <div key={item.label} className="border border-gray-100 rounded-xl p-3">
                                <div className="flex items-center gap-1.5 mb-1">
                                    <span className="text-sm">{item.icon}</span>
                                    <span className="text-xs text-gray-400">{item.label}</span>
                                </div>
                                <p className="text-sm font-semibold text-gray-800">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Modals ── */}
                <WithdrawalModal
                    open={withdrawalOpen}
                    onClose={() => setWithdrawalOpen(false)}
                    balance={balance}
                />
                <EditAccountModal
                    open={editAccountOpen}
                    onClose={() => setEditAccountOpen(false)}
                    account={account}
                    onSave={(updated) => setAccount(updated)}
                />
                <InfoModal
                    open={!!infoTx}
                    onClose={() => setInfoTx(null)}
                    tx={infoTx}
                />
            </div>
        </div>
    );
};

export default Page;
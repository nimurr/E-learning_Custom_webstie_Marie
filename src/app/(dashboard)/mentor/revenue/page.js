// 'use client';
// import React, { useState } from 'react';
// import {
//     AreaChart, Area, XAxis, YAxis, CartesianGrid,
//     Tooltip,
// } from 'recharts';

// // ── Data ──────────────────────────────────────────────────────
// const chartData = {
//     Monthly: [
//         { month: 'Jan', revenue: 4200 },
//         { month: 'Feb', revenue: 11800 },
//         { month: 'Mar', revenue: 5300 },
//         { month: 'Apr', revenue: 10200 },
//         { month: 'May', revenue: 6800 },
//         { month: 'Jun', revenue: 5500 },
//     ],
//     Quarterly: [
//         { month: 'Q1', revenue: 21300 },
//         { month: 'Q2', revenue: 22500 },
//         { month: 'Q3', revenue: 18900 },
//         { month: 'Q4', revenue: 26100 },
//     ],
//     Annually: [
//         { month: '2021', revenue: 38000 },
//         { month: '2022', revenue: 52000 },
//         { month: '2023', revenue: 67000 },
//         { month: '2024', revenue: 82000 },
//     ],
// };

// const payoutHistory = [
//     { id: '01', mentee: 'Tasmia Hassan', email: 'tasmia@gmail.com', amount: '$70.00', status: 'Completed' },
//     { id: '01', mentee: 'Tasmia Hassan', email: 'tasmia@gmail.com', amount: '$70.00', status: 'Completed' },
//     { id: '01', mentee: 'Tasmia Hassan', email: 'tasmia@gmail.com', amount: '$70.00', status: 'Completed' },
//     { id: '01', mentee: 'Tasmia Hassan', email: 'tasmia@gmail.com', amount: '$70.00', status: 'Completed' },
//     { id: '01', mentee: 'Tasmia Hassan', email: 'tasmia@gmail.com', amount: '$70.00', status: 'Completed' },
//     { id: '01', mentee: 'Tasmia Hassan', email: 'tasmia@gmail.com', amount: '$70.00', status: 'Completed' },
// ];

// // ── Custom Tooltip ────────────────────────────────────────────
// const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//         return (
//             <div className="bg-indigo-800 text-white text-xs rounded-xl px-3 py-2 shadow-lg">
//                 <p className="font-semibold mb-0.5">{label}</p>
//                 <p>Revenue: ${payload[0].value.toLocaleString()}</p>
//             </div>
//         );
//     }
//     return null;
// };

// // ── Page ──────────────────────────────────────────────────────
// const Page = () => {
//     const [period, setPeriod] = useState('Monthly');
//     const data = chartData[period];

//     return (
//         <div className="p-4 space-y-4 bg-gray-100 min-h-screen max-w-6xl mx-auto rounded-lg shadow-md my-10 py-5">

//             {/* ── Stat Cards ── */}
//             <div className="grid grid-cols-2 gap-4">
//                 {/* Lifetime Earnings */}
//                 <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
//                     <div className="flex items-start justify-between mb-3">
//                         <p className="text-sm font-semibold text-gray-600">Lifetime Earnings</p>
//                         <span className="text-2xl">💵</span>
//                     </div>
//                     <p className="text-2xl font-bold text-gray-900 mb-2">$12,400.00</p>
//                     <div className="flex items-center gap-1.5 text-xs text-gray-400">
//                         <span>🗓</span>
//                         <span>06 months' total earning</span>
//                     </div>
//                 </div>

//                 {/* This Month */}
//                 <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
//                     <div className="flex items-start justify-between mb-3">
//                         <p className="text-sm font-semibold text-gray-600">This Month (Jan)</p>
//                         <span className="text-2xl">🚀</span>
//                     </div>
//                     <p className="text-2xl font-bold text-gray-900 mb-2">$3,240.00</p>
//                     <div className="flex items-center gap-1.5 text-xs text-green-500 font-medium">
//                         <span>↗</span>
//                         <span>5% Increased from last month</span>
//                     </div>
//                 </div>
//             </div>

//             {/* ── Revenue Trend Chart ── */}
//             <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
//                 <div className="flex items-center justify-between mb-4">
//                     <h2 className="text-sm font-semibold text-gray-800">Revenue Trend</h2>
//                     <div className="flex border border-gray-200 rounded-lg overflow-hidden text-xs">
//                         {['Monthly', 'Quarterly', 'Annually'].map((p) => (
//                             <button
//                                 key={p}
//                                 onClick={() => setPeriod(p)}
//                                 className={`px-3 py-1.5 font-medium transition-all
//                                     ${period === p
//                                         ? 'bg-indigo-800 text-white'
//                                         : 'bg-white text-gray-500 hover:bg-gray-50'
//                                     }`}
//                             >
//                                 {p}
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 <div key={period} width="100%" height={220}>
//                     <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
//                         <defs>
//                             <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
//                                 <stop offset="5%" stopColor="#4338ca" stopOpacity={0.6} />
//                                 <stop offset="95%" stopColor="#4338ca" stopOpacity={0.05} />
//                             </linearGradient>
//                         </defs>
//                         <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
//                         <XAxis
//                             dataKey="month"
//                             tick={{ fontSize: 11, fill: '#9ca3af' }}
//                             axisLine={false}
//                             tickLine={false}
//                         />
//                         <YAxis
//                             tick={{ fontSize: 11, fill: '#9ca3af' }}
//                             axisLine={false}
//                             tickLine={false}
//                             tickFormatter={(v) => `${v / 1000}k`}
//                         />
//                         <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#4338ca', strokeWidth: 1, strokeDasharray: '4 4' }} />
//                         <Area
//                             type="monotone"
//                             dataKey="revenue"
//                             stroke="#4338ca"
//                             strokeWidth={2.5}
//                             fill="url(#revenueGrad)"
//                             dot={false}
//                             activeDot={{ r: 5, fill: '#fff', stroke: '#4338ca', strokeWidth: 2 }}
//                         />
//                     </AreaChart>
//                 </div>
//             </div>

//             {/* ── Payout History ── */}
//             <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
//                 <h2 className="text-sm font-semibold text-gray-800 mb-4">Payout History</h2>

//                 <div className="rounded-xl overflow-hidden border border-gray-100">
//                     {/* Table Header */}
//                     <div className="grid grid-cols-5 bg-indigo-50 px-4 py-2.5 text-xs font-semibold text-indigo-800">
//                         <span>No</span>
//                         <span>Mantee</span>
//                         <span>Email</span>
//                         <span>Amount</span>
//                         <span>Payment Status</span>
//                     </div>

//                     {/* Table Rows */}
//                     {payoutHistory.map((row, i) => (
//                         <div
//                             key={i}
//                             className={`grid grid-cols-5 px-4 py-3 text-xs text-gray-600 items-center border-t border-gray-50
//                                 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
//                         >
//                             <span className="text-gray-400 py-4">{row.id}</span>
//                             <span className="font-medium text-gray-700 py-4">{row.mentee}</span>
//                             <span className="text-gray-400" py-4>{row.email}</span>
//                             <span className='py-4'>{row.amount}</span>
//                             <span>
//                                 <span className="inline-flex items-center gap-1 bg-green-50 text-green-600 border border-green-200 text-xs font-medium px-2.5 py-2 rounded-full">
//                                     <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
//                                     {row.status}
//                                 </span>
//                             </span>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Page;

'use client';
import React, { useState, useRef } from 'react';

// ── Data ──────────────────────────────────────────────────────
const chartData = {
    Monthly: [
        { month: 'Jan', revenue: 4200 },
        { month: 'Feb', revenue: 11800 },
        { month: 'Mar', revenue: 5300 },
        { month: 'Apr', revenue: 10200 },
        { month: 'May', revenue: 6800 },
        { month: 'Jun', revenue: 5500 },
    ],
    Quarterly: [
        { month: 'Q1', revenue: 21300 },
        { month: 'Q2', revenue: 22500 },
        { month: 'Q3', revenue: 18900 },
        { month: 'Q4', revenue: 26100 },
    ],
    Annually: [
        { month: '2021', revenue: 38000 },
        { month: '2022', revenue: 52000 },
        { month: '2023', revenue: 67000 },
        { month: '2024', revenue: 82000 },
    ],
};

const payoutHistory = [
    { id: '01', mentee: 'Tasmia Hassan', email: 'tasmia@gmail.com', amount: '$70.00', status: 'Completed' },
    { id: '01', mentee: 'Tasmia Hassan', email: 'tasmia@gmail.com', amount: '$70.00', status: 'Completed' },
    { id: '01', mentee: 'Tasmia Hassan', email: 'tasmia@gmail.com', amount: '$70.00', status: 'Completed' },
    { id: '01', mentee: 'Tasmia Hassan', email: 'tasmia@gmail.com', amount: '$70.00', status: 'Completed' },
    { id: '01', mentee: 'Tasmia Hassan', email: 'tasmia@gmail.com', amount: '$70.00', status: 'Completed' },
    { id: '01', mentee: 'Tasmia Hassan', email: 'tasmia@gmail.com', amount: '$70.00', status: 'Completed' },
];

// ── Pure SVG Area Chart (zero dependencies) ───────────────────
const AreaChart = ({ data }) => {
    const [tooltip, setTooltip] = useState(null);
    const svgRef = useRef(null);

    const W = 600, H = 200;
    const padL = 40, padR = 20, padT = 20, padB = 30;
    const chartW = W - padL - padR;
    const chartH = H - padT - padB;

    const maxVal = Math.max(...data.map(d => d.revenue));
    const minVal = 0;
    const range  = maxVal - minVal || 1;

    const getX = (i) => padL + (i / (data.length - 1)) * chartW;
    const getY = (v) => padT + chartH - ((v - minVal) / range) * chartH;

    // Smooth cubic bezier path
    const buildPath = () => {
        if (data.length < 2) return '';
        let d = `M ${getX(0)} ${getY(data[0].revenue)}`;
        for (let i = 1; i < data.length; i++) {
            const x0 = getX(i - 1), y0 = getY(data[i - 1].revenue);
            const x1 = getX(i),     y1 = getY(data[i].revenue);
            const cpX = (x0 + x1) / 2;
            d += ` C ${cpX} ${y0}, ${cpX} ${y1}, ${x1} ${y1}`;
        }
        return d;
    };

    const linePath = buildPath();
    const areaPath = linePath
        + ` L ${getX(data.length - 1)} ${padT + chartH}`
        + ` L ${getX(0)} ${padT + chartH} Z`;

    const yTicks = [0, 0.25, 0.5, 0.75, 1].map(t => ({
        value: Math.round(minVal + t * range),
        y: padT + chartH - t * chartH,
    }));

    const handleMouseMove = (e) => {
        const svg = svgRef.current;
        if (!svg) return;
        const rect = svg.getBoundingClientRect();
        const scaleX = W / rect.width;
        const mx = (e.clientX - rect.left) * scaleX - padL;
        const idx = Math.round((mx / chartW) * (data.length - 1));
        const clamped = Math.max(0, Math.min(data.length - 1, idx));
        setTooltip({ idx: clamped, x: getX(clamped), y: getY(data[clamped].revenue) });
    };

    const tooltipX = tooltip ? Math.min(tooltip.x - 44, W - padR - 92) : 0;
    const tooltipY = tooltip ? Math.max(tooltip.y - 44, padT) : 0;

    return (
        <svg
            ref={svgRef}
            viewBox={`0 0 ${W} ${H}`}
            className="w-full h-auto"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setTooltip(null)}
            style={{ overflow: 'visible' }}
        >
            <defs>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%"   stopColor="#4338ca" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#4338ca" stopOpacity="0.03" />
                </linearGradient>
            </defs>

            {/* Grid lines + Y labels */}
            {yTicks.map((t, i) => (
                <g key={i}>
                    <line x1={padL} y1={t.y} x2={W - padR} y2={t.y} stroke="#f0f0f0" strokeWidth="1" />
                    <text x={padL - 6} y={t.y + 4} textAnchor="end" fontSize="9" fill="#9ca3af">
                        {t.value >= 1000 ? `${(t.value / 1000).toFixed(0)}k` : t.value}
                    </text>
                </g>
            ))}

            {/* Area */}
            <path d={areaPath} fill="url(#areaGrad)" />

            {/* Line */}
            <path d={linePath} fill="none" stroke="#4338ca" strokeWidth="2.5" strokeLinecap="round" />

            {/* X labels */}
            {data.map((d, i) => (
                <text key={i} x={getX(i)} y={H - 6} textAnchor="middle" fontSize="9" fill="#9ca3af">
                    {d.month}
                </text>
            ))}

            {/* Tooltip */}
            {tooltip && (
                <g>
                    <line
                        x1={tooltip.x} y1={padT}
                        x2={tooltip.x} y2={padT + chartH}
                        stroke="#4338ca" strokeWidth="1" strokeDasharray="4 3"
                    />
                    <circle cx={tooltip.x} cy={tooltip.y} r="5" fill="white" stroke="#4338ca" strokeWidth="2" />
                    <g transform={`translate(${tooltipX}, ${tooltipY})`}>
                        <rect width="92" height="36" rx="8" fill="#3730a3" />
                        <text x="8" y="14" fontSize="9" fill="white" fontWeight="600">
                            {data[tooltip.idx].month}
                        </text>
                        <text x="8" y="28" fontSize="9" fill="#c7d2fe">
                            ${data[tooltip.idx].revenue.toLocaleString()}
                        </text>
                    </g>
                </g>
            )}
        </svg>
    );
};

// ── Page ──────────────────────────────────────────────────────
const Page = () => {
    const [period, setPeriod] = useState('Monthly');
    const data = chartData[period];

    return (
        <div className="p-4 space-y-4 bg-gray-100 min-h-screen max-w-6xl mx-auto rounded-lg shadow-md my-10 py-5">

            {/* Stat Cards */}
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                    <div className="flex items-start justify-between mb-3">
                        <p className="text-sm font-semibold text-gray-600">Lifetime Earnings</p>
                        <span className="text-2xl">💵</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900 mb-2">$12,400.00</p>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <span>🗓</span>
                        <span>06 months' total earning</span>
                    </div>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                    <div className="flex items-start justify-between mb-3">
                        <p className="text-sm font-semibold text-gray-600">This Month (Jan)</p>
                        <span className="text-2xl">🚀</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900 mb-2">$3,240.00</p>
                    <div className="flex items-center gap-1.5 text-xs text-green-500 font-medium">
                        <span>↗</span>
                        <span>5% Increased from last month</span>
                    </div>
                </div>
            </div>

            {/* Revenue Trend */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-sm font-semibold text-gray-800">Revenue Trend</h2>
                    <div className="flex border border-gray-200 rounded-lg overflow-hidden text-xs">
                        {['Monthly', 'Quarterly', 'Annually'].map((p) => (
                            <button
                                key={p}
                                onClick={() => setPeriod(p)}
                                className={`px-3 py-1.5 font-medium transition-all ${
                                    period === p
                                        ? 'bg-indigo-800 text-white'
                                        : 'bg-white text-gray-500 hover:bg-gray-50'
                                }`}
                            >
                                {p}
                            </button>
                        ))}
                    </div>
                </div>
                <AreaChart key={period} data={data} />
            </div>

            {/* Payout History */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <h2 className="text-sm font-semibold text-gray-800 mb-4">Payout History</h2>
                <div className="rounded-xl overflow-hidden border border-gray-100">
                    <div className="grid grid-cols-5 bg-indigo-50 px-4 py-2.5 text-xs font-semibold text-indigo-800">
                        <span>No</span>
                        <span>Mantee</span>
                        <span>Email</span>
                        <span>Amount</span>
                        <span>Payment Status</span>
                    </div>
                    {payoutHistory.map((row, i) => (
                        <div
                            key={i}
                            className={`grid grid-cols-5 px-4 py-3 text-xs text-gray-600 items-center border-t border-gray-50 ${
                                i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                            }`}
                        >
                            <span className="text-gray-400">{row.id}</span>
                            <span className="font-medium text-gray-700">{row.mentee}</span>
                            <span className="text-gray-400">{row.email}</span>
                            <span>{row.amount}</span>
                            <span>
                                <span className="inline-flex items-center gap-1 bg-green-50 text-green-600 border border-green-200 text-xs font-medium px-2.5 py-1.5 rounded-full">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                                    {row.status}
                                </span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Download,
    Activity,
    User,
    Scale,
    Ruler,
    Baby,
    Cigarette,
    MapPin,
} from 'lucide-react';

// Types
type FormData = {
    age: string;
    sex: 'Male' | 'Female';
    height: string;
    weight: string;
    children: string;
    smoker: 'Yes' | 'No';
    region: 'Northeast' | 'Northwest' | 'Southeast' | 'Southwest';
};

const AdvisorPage = () => {
    const [formData, setFormData] = useState<FormData>({
        age: '',
        sex: 'Male',
        height: '',
        weight: '',
        children: '0',
        smoker: 'No',
        region: 'Northeast',
    });

    const [isCalculated, setIsCalculated] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    // Calculations
    const bmi = useMemo(() => {
        const h = parseFloat(formData.height) / 100;
        const w = parseFloat(formData.weight);
        if (h > 0 && w > 0) {
            return parseFloat((w / (h * h)).toFixed(2));
        }
        return 0;
    }, [formData.height, formData.weight]);

    const bmiStatus = useMemo(() => {
        if (bmi === 0) return '—';
        if (bmi < 18.5) return 'Underweight';
        if (bmi < 25) return 'Normal';
        if (bmi < 30) return 'Overweight';
        return 'Obese';
    }, [bmi]);

    const estimates = useMemo(() => {
        if (!isCalculated) return { yearly: 0, monthly: 0 };

        // Simple mock logic for demonstration
        let base = 5000;
        const ageVal = parseInt(formData.age) || 25;
        base += ageVal * 150;
        if (formData.smoker === 'Yes') base *= 1.4;
        if (bmi > 25) base *= 1.1;
        if (bmi > 30) base *= 1.25;
        const childVal = parseInt(formData.children) || 0;
        base += childVal * 1000;

        return {
            yearly: base,
            monthly: base / 12
        };
    }, [isCalculated, formData, bmi]);

    const benefits = [
        { name: 'Support programs', score: 78, priority: 'High' },
        { name: 'Family floater', score: 78, priority: 'High' },
        { name: 'Child-specific', score: 78, priority: 'High' },
        { name: 'Financial protection', score: 65, priority: 'Medium' },
        { name: 'Cashless treatment', score: 63, priority: 'Medium' },
        { name: 'Access to care', score: 63, priority: 'Medium' },
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const calculateRecommendation = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsCalculated(true);
            setIsAnimating(false);
        }, 800);
    };

    const reset = () => {
        setFormData({
            age: '',
            sex: 'Male',
            height: '',
            weight: '',
            children: '0',
            smoker: 'No',
            region: 'Northeast',
        });
        setIsCalculated(false);
    };

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-black pt-28 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-3xl font-black text-zinc-900 dark:text-white mb-2">Insurance Advisor</h1>
                    <p className="text-zinc-500 dark:text-zinc-400">Enter a few details — get insurance recommendations & benefits</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Left: Form Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-7"
                    >
                        <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 sm:p-10 shadow-xl shadow-zinc-200/50 dark:shadow-none border border-zinc-200 dark:border-zinc-800">
                            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">Tell us about yourself</h2>

                            <div className="space-y-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                                            <User className="w-4 h-4" /> Age
                                        </label>
                                        <input
                                            type="number"
                                            id="age"
                                            value={formData.age}
                                            onChange={handleInputChange}
                                            placeholder="e.g. 34"
                                            className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl px-5 py-4 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                                            Sex
                                        </label>
                                        <select
                                            id="sex"
                                            value={formData.sex}
                                            onChange={handleInputChange}
                                            className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl px-5 py-4 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none appearance-none"
                                        >
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                                            <Ruler className="w-4 h-4" /> Height (cm)
                                        </label>
                                        <input
                                            type="number"
                                            id="height"
                                            value={formData.height}
                                            onChange={handleInputChange}
                                            placeholder="e.g. 170"
                                            className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl px-5 py-4 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                                            <Scale className="w-4 h-4" /> Weight (kg)
                                        </label>
                                        <input
                                            type="number"
                                            id="weight"
                                            value={formData.weight}
                                            onChange={handleInputChange}
                                            placeholder="e.g. 78"
                                            className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl px-5 py-4 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                                            <Baby className="w-4 h-4" /> Children
                                        </label>
                                        <input
                                            type="number"
                                            id="children"
                                            value={formData.children}
                                            onChange={handleInputChange}
                                            placeholder="0"
                                            className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl px-5 py-4 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                                            <Cigarette className="w-4 h-4" /> Smoker
                                        </label>
                                        <select
                                            id="smoker"
                                            value={formData.smoker}
                                            onChange={handleInputChange}
                                            className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl px-5 py-4 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none appearance-none"
                                        >
                                            <option>No</option>
                                            <option>Yes</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                                        <MapPin className="w-4 h-4" /> Region
                                    </label>
                                    <select
                                        id="region"
                                        value={formData.region}
                                        onChange={handleInputChange}
                                        className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl px-5 py-4 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none appearance-none sm:w-1/2"
                                    >
                                        <option>Northeast</option>
                                        <option>Northwest</option>
                                        <option>Southeast</option>
                                        <option>Southwest</option>
                                    </select>
                                </div>

                                {/* BMI Card */}
                                <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-3xl border border-blue-100 dark:border-blue-900/30 flex items-center justify-between">
                                    <div>
                                        <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">Calculated BMI</p>
                                        <p className="text-3xl font-black text-zinc-900 dark:text-white">{bmi || '—'}</p>
                                    </div>
                                    <div className={`px-4 py-2 rounded-xl text-sm font-bold ${bmiStatus === 'Normal' ? 'bg-emerald-100 text-emerald-600' :
                                        bmiStatus === '—' ? 'bg-zinc-100 text-zinc-400' :
                                            'bg-amber-100 text-amber-600'
                                        }`}>
                                        {bmiStatus}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    <button
                                        onClick={calculateRecommendation}
                                        disabled={!formData.age || !formData.height || !formData.weight || isAnimating}
                                        className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-500/25 active:scale-95"
                                    >
                                        {isAnimating ? 'Processing...' : 'Get Recommendation'}
                                    </button>
                                    <button
                                        onClick={reset}
                                        className="bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-400 px-8 py-4 rounded-2xl font-bold transition-all"
                                    >
                                        Reset
                                    </button>
                                </div>
                                <p className="text-xs text-zinc-400 italic">We calculate BMI automatically from height & weight, and estimate premiums using our model.</p>
                            </div>
                        </div>

                        {/* Input Summary (Bottom of form side) */}
                        {isCalculated && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-10 bg-white dark:bg-zinc-900 rounded-[2.5rem] p-10 border border-zinc-200 dark:border-zinc-800"
                            >
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">Input summary</h3>
                                <div className="grid grid-cols-2 gap-y-4 text-sm">
                                    {[
                                        ['Age', formData.age],
                                        ['Sex', formData.sex.toLowerCase()],
                                        ['Height (cm)', formData.height],
                                        ['Weight (kg)', formData.weight],
                                        ['BMI', bmi],
                                        ['Children', formData.children],
                                        ['Smoker', formData.smoker.toLowerCase()],
                                        ['Region', formData.region.toLowerCase()],
                                    ].map(([label, val]) => (
                                        <React.Fragment key={label as string}>
                                            <div className="text-zinc-500 font-medium">{label}</div>
                                            <div className="text-zinc-900 dark:text-white font-bold text-right">{val}</div>
                                        </React.Fragment>
                                    ))}
                                </div>
                                <div className="mt-10 flex gap-4">
                                    <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-blue-700 transition-colors">
                                        <Download className="w-4 h-4" /> Download Summary
                                    </button>
                                    <button onClick={() => setIsCalculated(false)} className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-6 py-3 rounded-xl font-bold text-sm hover:bg-zinc-200 transition-colors">
                                        Edit details
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Right: Results Card */}
                    <div className="lg:col-span-5 h-full">
                        <AnimatePresence mode="wait">
                            {!isCalculated ? (
                                <motion.div
                                    key="empty"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-10 bg-white/50 dark:bg-zinc-900/30 rounded-[2.5rem] border-2 border-dashed border-zinc-200 dark:border-zinc-800"
                                >
                                    <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-6">
                                        <Activity className="w-12 h-12 text-blue-500 animate-pulse" />
                                    </div>
                                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Ready to Advise</h3>
                                    <p className="text-zinc-500 dark:text-zinc-400 max-w-xs">Fill out the form to see tailored insurance recommendations and premium estimates.</p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="results"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-10 shadow-2xl shadow-zinc-200/50 dark:shadow-none border border-zinc-200 dark:border-zinc-800 space-y-10 sticky top-28"
                                >
                                    {/* Estimated Premium */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Estimated Premium</h3>
                                        <div className="flex gap-4">
                                            <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-2xl text-center min-w-[120px]">
                                                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Yearly</p>
                                                <p className="text-xl font-black text-zinc-900 dark:text-white">₹{estimates.yearly.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
                                            </div>
                                            <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-2xl text-center min-w-[120px]">
                                                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Monthly</p>
                                                <p className="text-xl font-black text-zinc-900 dark:text-white">₹{estimates.monthly.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Suggested Types */}
                                    <div>
                                        <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4 text-right">Suggested types</h4>
                                        <div className="flex flex-wrap justify-end gap-2">
                                            {['Health Insurance', 'Personal Accident', 'Term Life'].map(type => (
                                                <div key={type} className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold border border-blue-100 dark:border-blue-900/30">
                                                    {type}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Recommendations */}
                                    <div className="space-y-4">
                                        <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Recommendations</h4>
                                        <ul className="space-y-3">
                                            {[
                                                `Moderate risk BMI — consider a plan with strong preventive care and regular screening.`,
                                                formData.smoker === 'Yes' ? `Because you're a smoker, expect higher premiums and consider plans with quit-smoking support.` : `Being a non-smoker qualifies you for better premium rates and fewer exclusions.`,
                                                `Family floater policy could be cost-effective for coverage of ${parseInt(formData.children) + 1} family members.`
                                            ].map((rec, i) => (
                                                <li key={i} className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
                                                    {rec}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Top Benefits */}
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Top Benefits</h4>
                                            <div className="flex gap-2">
                                                {['Sort by relevance', 'Expand all', 'Collapse all'].map(btn => (
                                                    <button key={btn} className="text-[10px] font-bold text-zinc-400 border border-zinc-200 dark:border-zinc-800 px-2 py-1 rounded-md hover:bg-zinc-50 transition-colors">
                                                        {btn}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            {benefits.map((benefit, i) => (
                                                <div key={i} className="space-y-2">
                                                    <div className="flex justify-between items-center text-xs">
                                                        <span className="font-bold text-zinc-700 dark:text-zinc-300">{benefit.name}...</span>
                                                        <div className="flex items-center gap-3">
                                                            <span className="font-black text-zinc-900 dark:text-white">{benefit.score}%</span>
                                                            <span className={`px-2 py-0.5 rounded text-[10px] font-black text-white ${benefit.priority === 'High' ? 'bg-rose-500' : 'bg-amber-500'
                                                                }`}>{benefit.priority}</span>
                                                        </div>
                                                    </div>
                                                    <div className="h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${benefit.score}%` }}
                                                            transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <p className="mt-8 text-[10px] text-zinc-400 text-center uppercase tracking-widest">Prototype — not financial advice.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvisorPage;

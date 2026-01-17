'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, User, CheckCircle2, Loader2, MessageSquare, ArrowRight } from 'lucide-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Failed to send message');
            }

            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error: unknown) {
            console.error('Error submitting form:', error);
            setStatus('error');
            const message = error instanceof Error ? error.message : 'Something went wrong. Please try again later.';
            setErrorMessage(message);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const contactInfo = [
        {
            icon: <User className="w-6 h-6" />,
            label: 'Consultant',
            value: 'Chaitanya Garg',
            color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
        },
        {
            icon: <Mail className="w-6 h-6" />,
            label: 'Email',
            value: 'cgarg9432@gmail.com',
            color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
        },
        {
            icon: <Phone className="w-6 h-6" />,
            label: 'Phone',
            value: '+91 97708 49510',
            color: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            label: 'Office',
            value: 'Sector 2 Bhilai, CG',
            color: 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400',
        },
    ];

    const containerVariants: import("framer-motion").Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants: import("framer-motion").Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-6">
                        Contact <span className="text-blue-600">Us</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-zinc-600 dark:text-zinc-400">
                        Expert guidance is just a message away. Reach out to secure your family&apos;s future today.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left Side: Info & Background Card */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="lg:col-span-5 space-y-8"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="relative h-[300px] rounded-[2.5rem] overflow-hidden shadow-2xl group"
                        >
                            <Image
                                src="/images/contact_bg.png"
                                alt="Contact"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/60 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <h3 className="text-2xl font-bold mb-2">Personalized Advice</h3>
                                <p className="text-white/80">Tailored insurance solutions for your unique needs.</p>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="bg-white dark:bg-zinc-900 content-card p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 flex flex-col gap-4 shadow-xl shadow-zinc-200/50 dark:shadow-none transition-all"
                                >
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${info.color}`}>
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-500 mb-1">{info.label}</p>
                                        <p className="text-base font-bold text-zinc-900 dark:text-white leading-tight">{info.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-7"
                    >
                        <div className="bg-white dark:bg-zinc-900 p-8 sm:p-12 rounded-[3rem] border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-zinc-200/50 dark:shadow-none relative overflow-hidden group">
                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="flex flex-col items-center justify-center py-16 text-center"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", damping: 10, stiffness: 100 }}
                                            className="bg-emerald-100 dark:bg-emerald-900/30 p-6 rounded-full mb-8"
                                        >
                                            <CheckCircle2 className="w-16 h-16 text-emerald-600 dark:text-emerald-400" />
                                        </motion.div>
                                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Message Received!</h2>
                                        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-md">
                                            Thank you for reaching out. We&apos;ll review your query and get back to you within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => setStatus('idle')}
                                            className="bg-zinc-900 dark:bg-white text-white dark:text-black px-10 py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition-all active:scale-95"
                                        >
                                            Send Another Message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <div className="flex items-center gap-3 mb-10">
                                            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                                                <MessageSquare className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                            </div>
                                            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Send a Message</h2>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <div className="space-y-2 group">
                                                    <label htmlFor="name" className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 ml-1">
                                                        Full Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        required
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="Name"
                                                        className="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 rounded-2xl px-5 py-4 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label htmlFor="email" className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 ml-1">
                                                        Email Address
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="Email"
                                                        className="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 rounded-2xl px-5 py-4 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="subject" className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 ml-1">
                                                    Subject
                                                </label>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    required
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    placeholder="Inquiry Type"
                                                    className="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 rounded-2xl px-5 py-4 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="message" className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 ml-1">
                                                    Message
                                                </label>
                                                <textarea
                                                    id="message"
                                                    required
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    rows={5}
                                                    placeholder="How can we help you?"
                                                    className="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 rounded-2xl px-5 py-4 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all resize-none"
                                                />
                                            </div>

                                            {status === 'error' && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-rose-500 text-sm font-bold bg-rose-50 dark:bg-rose-900/10 p-4 rounded-xl border border-rose-200 dark:border-rose-900/50"
                                                >
                                                    {errorMessage}
                                                </motion.p>
                                            )}

                                            <motion.button
                                                whileHover={{ scale: 1.01 }}
                                                whileTap={{ scale: 0.98 }}
                                                type="submit"
                                                disabled={status === 'loading'}
                                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-500/25 disabled:opacity-70 disabled:cursor-not-allowed group"
                                            >
                                                {status === 'loading' ? (
                                                    <>
                                                        <Loader2 className="w-6 h-6 animate-spin" />
                                                        Sending Inquiry...
                                                    </>
                                                ) : (
                                                    <>
                                                        Send Message
                                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                    </>
                                                )}
                                            </motion.button>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;

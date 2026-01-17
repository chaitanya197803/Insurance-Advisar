'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Heart,
    Shield,
    Car,
    Home,
    Plane,
    Briefcase,
    ArrowRight,
    CheckCircle2,
    ChevronRight
} from 'lucide-react';

const ServicesPage = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const stagger = {
        whileInView: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const services = [
        {
            title: 'Life Insurance',
            description: 'Secure your family\'s financial future with comprehensive coverage designed for long-term peace of mind.',
            icon: <Heart className="w-8 h-8 text-rose-500" />,
            image: '/images/life_ins.png',
            features: ['Term Life', 'Whole Life', 'Legacy Planning'],
            color: 'from-rose-500/20 to-rose-500/5'
        },
        {
            title: 'Health Insurance',
            description: 'Premium medical coverage that ensures you and your loved ones receive the best possible care without financial stress.',
            icon: <Shield className="w-8 h-8 text-emerald-500" />,
            image: '/images/health_ins.png',
            features: ['Family Floater', 'Critical Illness', 'Cashless Hospitalization'],
            color: 'from-emerald-500/20 to-emerald-500/5'
        },
        {
            title: 'Motor Insurance',
            description: 'Complete protection for your vehicles against accidents, theft, and natural calamities with quick claim settlements.',
            icon: <Car className="w-8 h-8 text-blue-500" />,
            image: '/images/about_hero.png', // Reusing hero as a placeholder for quality
            features: ['Own Damage', 'Third Party', 'Zero Depreciation'],
            color: 'from-blue-500/20 to-blue-500/5'
        },
        {
            title: 'Home Insurance',
            description: 'Safeguard your most valuable asset from fire, burglary, and natural disasters with our tailored home protection plans.',
            icon: <Home className="w-8 h-8 text-indigo-500" />,
            image: '/images/security.png', // Reusing security abstract
            features: ['Structure Cover', 'Content Protection', 'Tenant Insurance'],
            color: 'from-indigo-500/20 to-indigo-500/5'
        },
        {
            title: 'Travel Insurance',
            description: 'Worry-free journeys globally with coverage for medical emergencies, trip cancellations, and lost baggage.',
            icon: <Plane className="w-8 h-8 text-cyan-500" />,
            image: '/images/team.png', // Reusing team collabo
            features: ['International Travel', 'Single Trip', 'Multi-Trip'],
            color: 'from-cyan-500/20 to-cyan-500/5'
        },
        {
            title: 'Business Insurance',
            description: 'Comprehensive risk management solutions for businesses of all sizes, protecting your enterprise and employees.',
            icon: <Briefcase className="w-8 h-8 text-amber-500" />,
            image: '/images/about_hero.png',
            features: ['Liability Cover', 'Employee Benefits', 'Asset Protection'],
            color: 'from-amber-500/20 to-amber-500/5'
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-bold mb-6"
                    >
                        <Shield className="w-4 h-4" />
                        Our Expertise
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-5xl md:text-7xl font-extrabold text-zinc-900 dark:text-white mb-6 tracking-tight"
                    >
                        Insurance Solutions <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            For Every Stage of Life.
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                        className="max-w-2xl mx-auto text-xl text-zinc-600 dark:text-zinc-400"
                    >
                        We provide a wide range of insurance products tailored to your unique needs,
                        ensuring maximum protection and peace of mind.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <motion.div
                    variants={stagger}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ y: -10 }}
                            className="group relative flex flex-col bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-xl shadow-zinc-200/50 dark:shadow-none transition-all"
                        >
                            {/* Image Header */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-b ${service.color} opacity-60`}></div>
                                <div className="absolute top-6 left-6 p-3 bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-2xl shadow-lg">
                                    {service.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-zinc-600 dark:text-zinc-400 mb-6 line-clamp-3">
                                    {service.description}
                                </p>

                                <div className="space-y-3 mb-8">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                            <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto">
                                    <button className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
                                        Learn More
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 p-12 lg:p-20 rounded-[3rem] bg-zinc-900 dark:bg-blue-900/10 text-center relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Don&apos;t wait for the unexpected.
                        </h2>
                        <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                            Get a personalized consultation today and find the perfect plan for your needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 group">
                                Get a Custom Quote
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="bg-transparent hover:bg-white/5 text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg transition-all">
                                Talk to an Expert
                            </button>
                        </div>
                    </div>

                    {/* Abstract background shapes */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
                </motion.div>
            </div>
        </div>
    );
};

export default ServicesPage;

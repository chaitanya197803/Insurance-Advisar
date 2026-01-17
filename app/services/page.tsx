'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Heart,
    Shield,
    Car,
    Home,
    Plane,
    Briefcase,
    ArrowRight,
    CheckCircle2,
    ChevronRight,
    X,
    Activity,
    Clock,
    UserCheck
} from 'lucide-react';

const ServicesPage = () => {
    const [selectedService, setSelectedService] = useState<any>(null);

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    } as const;

    const stagger = {
        whileInView: {
            transition: {
                staggerChildren: 0.1
            }
        }
    } as const;

    const services = [
        {
            title: 'Life Insurance',
            description: 'Secure your family\'s financial future with comprehensive coverage designed for long-term peace of mind.',
            longDescription: 'Our Life Insurance plans are designed to be a cornerstone of your long-term financial strategy. Beyond just a safety net, we offer products that can build cash value, provide tax-advantaged growth, and ensure that your legacy is protected for generations to come. Whether you\'re looking for temporary protection during your working years or a lifelong commitment to your family\'s security, our advisers tailor every policy to your specific goals.',
            icon: <Heart className="w-8 h-8 text-rose-500" />,
            image: '/images/life_ins.png',
            features: ['Term Life', 'Whole Life', 'Legacy Planning'],
            detailedFeatures: [
                { title: 'Death Benefit', desc: 'Guaranteed payout to your beneficiaries to cover mortgage, education, and lifestyle.' },
                { title: 'Flexible Terms', desc: 'Choose from 10, 20, or 30-year terms or permanent lifelong coverage.' },
                { title: 'Tax Benefits', desc: 'Enjoy potential tax-free payouts and tax-deferred growth on permanent policies.' },
                { title: 'Rider Options', desc: 'Add critical illness or accidental disability covers for total protection.' }
            ],
            color: 'from-rose-500/20 to-rose-500/5'
        },
        {
            title: 'Health Insurance',
            description: 'Premium medical coverage that ensures you and your loved ones receive the best possible care without financial stress.',
            longDescription: 'In an era of rising medical costs, our Health Insurance provides a robust shield against the unexpected. We partner with the top medical networks to ensure you have access to specialized care, diagnostic imaging, and emergency services globally. Our plans focus on preventive wellness, meaning we help you stay healthy before problems arise, while providing the highest level of support during major medical events.',
            icon: <Shield className="w-8 h-8 text-emerald-500" />,
            image: '/images/health_ins.png',
            features: ['Family Floater', 'Critical Illness', 'Cashless Hospitalization'],
            detailedFeatures: [
                { title: 'Cashless Network', desc: 'Direct settlement with 10,000+ top-tier hospitals across the country.' },
                { title: 'Pre/Post Hospitalization', desc: 'Coverage for medical expenses up to 60 days before and 90 days after admission.' },
                { title: 'Preventive Care', desc: 'Annual health check-ups and wellness rewards for maintaining a healthy BMI.' },
                { title: 'No Claim Bonus', desc: 'Benefit from increased sum insured for every year you don\'t file a claim.' }
            ],
            color: 'from-emerald-500/20 to-emerald-500/5'
        },
        {
            title: 'Motor Insurance',
            description: 'Complete protection for your vehicles against accidents, theft, and natural calamities with quick claim settlements.',
            longDescription: 'Your vehicle is more than just transport; it\'s an investment. Our Motor Insurance offers advanced protection that goes beyond basic legal requirements. We utilize AI-driven claim assessments to get you back on the road faster, and our zero-depreciation add-ons ensure your vehicle retains its value even after a major repair. With 24/7 roadside assistance, you\'re never alone on your journey.',
            icon: <Car className="w-8 h-8 text-blue-500" />,
            image: '/images/about_hero.png',
            features: ['Own Damage', 'Third Party', 'Zero Depreciation'],
            detailedFeatures: [
                { title: 'Instant Online Policy', desc: 'Generate and renew your policy in seconds with our paperless process.' },
                { title: 'Roadside Assistance', desc: 'Help with flat tires, battery jumpstarts, and towing available 24/7.' },
                { title: 'Personal Accident Cover', desc: 'High-value protection for the owner-driver in case of any mishap.' },
                { title: 'Engine Protection', desc: 'Special cover for water ingression or oil leakage affecting the engine.' }
            ],
            color: 'from-blue-500/20 to-blue-500/5'
        },
        {
            title: 'Home Insurance',
            description: 'Safeguard your most valuable asset from fire, burglary, and natural disasters with our tailored home protection plans.',
            longDescription: 'Protecting your home means protecting your peace of mind. Our Home Insurance covers not just the structure, but the life you\'ve built inside it. From valuable art and jewelry to standard household electronics, we provide full-replacement-cost coverage. Our plans are specifically designed to handle regional risks like earthquakes or floods, ensuring your family always has a roof over their heads.',
            icon: <Home className="w-8 h-8 text-indigo-500" />,
            image: '/images/security.png',
            features: ['Structure Cover', 'Content Protection', 'Tenant Insurance'],
            detailedFeatures: [
                { title: 'Comprehensive Structure', desc: 'Protection against fire, lightning, storms, and other natural calamities.' },
                { title: 'Valuable Contents', desc: 'Specific riders for electronics, jewelry, and high-value furniture.' },
                { title: 'Alternative Accommodation', desc: 'Covers temporary rent if your home becomes uninhabitable during repair.' },
                { title: 'Burglary & Theft', desc: 'Security against unauthorized entry and loss of personal belongings.' }
            ],
            color: 'from-indigo-500/20 to-indigo-500/5'
        },
        {
            title: 'Travel Insurance',
            description: 'Worry-free journeys globally with coverage for medical emergencies, trip cancellations, and lost baggage.',
            longDescription: 'Explore the world with total confidence. Our Travel Insurance is more than just paperwork; it\'s a global support system. Whether you\'re on a business trip or a family vacation, we provide 24/7 multilingual emergency assistance. From lost passports to emergency medical evacuations, we handle the logistics so you can focus on your destination.',
            icon: <Plane className="w-8 h-8 text-cyan-500" />,
            image: '/images/team.png',
            features: ['International Travel', 'Single Trip', 'Multi-Trip'],
            detailedFeatures: [
                { title: 'Medical Emergencies', desc: 'Full coverage for hospitalization and outpatient care while abroad.' },
                { title: 'Trip Cancellation', desc: 'Refunds for non-refundable bookings if your trip is cut short or cancelled.' },
                { title: 'Baggage Delay/Loss', desc: 'Fixed payouts to cover essentials if your bags don\'t arrive on time.' },
                { title: 'Passport Support', desc: 'Assistance and cost coverage for obtaining emergency travel documents.' }
            ],
            color: 'from-cyan-500/20 to-cyan-500/5'
        },
        {
            title: 'Business Insurance',
            description: 'Comprehensive risk management solutions for businesses of all sizes, protecting your enterprise and employees.',
            longDescription: 'In the rapidly changing business landscape, risk is the only constant. Our Business Insurance provides a stable foundation for growth. We offer specialized liability covers combined with employee health benefits that help you attract and retain top talent. Our expert risk assessors work with you to identify vulnerabilities in your supply chain and operations, creating a custom shield for your enterprise.',
            icon: <Briefcase className="w-8 h-8 text-amber-500" />,
            image: '/images/about_hero.png',
            features: ['Liability Cover', 'Employee Benefits', 'Asset Protection'],
            detailedFeatures: [
                { title: 'Professional Liability', desc: 'Protection against errors, omissions, and legal claims in your operations.' },
                { title: 'Employee Wellness', desc: 'Group health and accident insurance tailored for your workforce.' },
                { title: 'Cyber Risk', desc: 'Critical protection against data breaches and digital business interruption.' },
                { title: 'Property Damage', desc: 'Coverage for office structure, inventory, and specialized equipment.' }
            ],
            color: 'from-amber-500/20 to-amber-500/5'
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
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
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-b ${service.color} opacity-60`}></div>
                                <div className="absolute top-6 left-6 p-3 bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/20">
                                    {service.icon}
                                </div>
                            </div>

                            <div className="p-8 flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-zinc-600 dark:text-zinc-400 mb-6 line-clamp-3 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="space-y-3 mb-8">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto">
                                    <button
                                        onClick={() => setSelectedService(service)}
                                        className="w-full py-4 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-bold rounded-2xl hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2 group/btn border border-blue-100 dark:border-blue-900/30"
                                    >
                                        Learn More
                                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Detail Modal */}
                <AnimatePresence>
                    {selectedService && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedService(null)}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl max-h-[90vh] bg-white dark:bg-zinc-950 rounded-[2.5rem] z-[70] shadow-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800"
                            >
                                <button
                                    onClick={() => setSelectedService(null)}
                                    className="absolute top-6 right-6 p-3 bg-zinc-100 dark:bg-zinc-900 rounded-full text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors z-10"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                <div className="grid grid-cols-1 lg:grid-cols-12 h-full overflow-y-auto lg:overflow-hidden">
                                    {/* Left Panel: Visuals */}
                                    <div className="lg:col-span-5 relative h-64 lg:h-full bg-zinc-100 dark:bg-zinc-900">
                                        <Image
                                            src={selectedService.image}
                                            alt={selectedService.title}
                                            fill
                                            className="object-cover opacity-80"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80`} />
                                        <div className="absolute bottom-10 left-10 right-10">
                                            <div className="p-4 bg-white/20 backdrop-blur-xl rounded-2xl w-fit mb-6 border border-white/20">
                                                {selectedService.icon}
                                            </div>
                                            <h2 className="text-4xl font-black text-white leading-tight">
                                                {selectedService.title}
                                            </h2>
                                        </div>
                                    </div>

                                    {/* Right Panel: Info */}
                                    <div className="lg:col-span-7 p-8 lg:p-14 lg:overflow-y-auto">
                                        <div className="space-y-10">
                                            <div>
                                                <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4 flex items-center gap-2">
                                                    <Activity className="w-3 h-3" /> Overview
                                                </h4>
                                                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                                                    {selectedService.longDescription}
                                                </p>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                                {selectedService.detailedFeatures.map((feat: any, i: number) => (
                                                    <div key={i} className="group">
                                                        <div className="flex items-start gap-4 mb-2">
                                                            <div className="mt-1 w-5 h-5 rounded-md bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                                                <CheckCircle2 className="w-4 h-4" />
                                                            </div>
                                                            <h5 className="font-bold text-zinc-900 dark:text-white">{feat.title}</h5>
                                                        </div>
                                                        <p className="text-sm text-zinc-500 dark:text-zinc-500 ml-9 leading-relaxed">
                                                            {feat.desc}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="pt-8 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap gap-4">
                                                <Link href="/advisor" className="flex-1 min-w-[200px]">
                                                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-500/20">
                                                        <Activity className="w-5 h-5" /> Calculate Premium
                                                    </button>
                                                </Link>
                                                <Link href="/contact" className="flex-1 min-w-[200px]">
                                                    <button className="w-full bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white px-8 py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-2">
                                                        <UserCheck className="w-5 h-5" /> Talk to Advisor
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 p-12 lg:p-20 rounded-[4rem] bg-zinc-900 dark:bg-blue-900/10 text-center relative overflow-hidden group shadow-2xl"
                >
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                            Ready to secure your future?
                        </h2>
                        <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Join 10,000+ families who trust Insurance Adviser for their protection.
                            Find your perfect plan in under 3 minutes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/advisor" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 rounded-[2rem] font-black text-xl transition-all flex items-center justify-center gap-3 group/cta shadow-2xl shadow-blue-500/25 active:scale-95">
                                    Get a Custom Quote
                                    <ArrowRight className="w-6 h-6 group-hover/cta:translate-x-2 transition-transform" />
                                </button>
                            </Link>
                            <Link href="/contact" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border border-white/20 px-12 py-6 rounded-[2rem] font-black text-xl transition-all shadow-2xl active:scale-95">
                                    Talk to an Expert
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[130px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[110px] rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
                </motion.div>
            </div>
        </div>
    );
};

export default ServicesPage;

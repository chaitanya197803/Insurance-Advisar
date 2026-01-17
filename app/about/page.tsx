'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, Target, Award, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

const AboutPage = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const stagger = {
        whileInView: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const stats = [
        { label: 'Years Experience', value: '15+', icon: <Award className="w-6 h-6" /> },
        { label: 'Happy Clients', value: '10k+', icon: <Users className="w-6 h-6" /> },
        { label: 'Claims Settled', value: '98%', icon: <CheckCircle2 className="w-6 h-6" /> },
        { label: 'Expert Agents', value: '50+', icon: <Shield className="w-6 h-6" /> },
    ];

    const values = [
        {
            title: 'Integrity First',
            description: 'We believe in honest advice over quick sales. Your trust is our most valuable asset.',
            icon: <Shield className="w-8 h-8 text-blue-600" />
        },
        {
            title: 'Customer Centric',
            description: 'Every policy we recommend is tailored to your specific life situation and goals.',
            icon: <Target className="w-8 h-8 text-emerald-600" />
        },
        {
            title: 'Simplified Insurance',
            description: 'We cut through the jargon to help you understand exactly what you are paying for.',
            icon: <CheckCircle2 className="w-8 h-8 text-indigo-600" />
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center pt-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/about_hero.png"
                        alt="About Hero"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-white dark:to-black"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
                    >
                        Securing Your Future,<br />
                        <span className="text-blue-400">Step by Step.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="max-w-2xl mx-auto text-xl text-zinc-200"
                    >
                        Insurance Adviser has been at the forefront of financial security for over a decade,
                        helping thousands of families find peace of mind.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="w-1.5 h-1.5 bg-white rounded-full"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Our Story */}
            <section className="py-24 px-4 bg-zinc-50 dark:bg-zinc-900/30">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            {...fadeInUp}
                            className="relative aspect-square lg:aspect-video rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/team.png"
                                alt="Our Team"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        <motion.div
                            {...stagger}
                            className="space-y-6"
                        >
                            <motion.div {...fadeInUp}>
                                <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">Our Story</h2>
                                <h3 className="text-4xl font-bold text-zinc-900 dark:text-white leading-tight">
                                    Born from a vision to make insurance <span className="text-blue-600">accessible.</span>
                                </h3>
                            </motion.div>

                            <motion.p {...fadeInUp} className="text-lg text-zinc-600 dark:text-zinc-400">
                                Founded in 2010, Insurance Adviser started with a simple belief: that everyone deserves
                                clear, unbiased advice when it comes to protecting what matters most. We saw a gap between
                                complex corporate policies and the real needs of everyday people.
                            </motion.p>

                            <motion.div {...fadeInUp} className="grid grid-cols-2 gap-8 pt-6">
                                {stats.map((stat, index) => (
                                    <div key={index} className="flex flex-col">
                                        <span className="text-3xl font-bold text-zinc-900 dark:text-white">{stat.value}</span>
                                        <span className="text-sm text-zinc-500">{stat.label}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.h2 {...fadeInUp} className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
                            Our Core Values
                        </motion.h2>
                        <motion.p {...fadeInUp} className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                            These principles guide every decision we make and every policy we recommend.
                        </motion.p>
                    </div>

                    <motion.div
                        variants={stagger}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ y: -10 }}
                                className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-none transition-all"
                            >
                                <div className="mb-6">{value.icon}</div>
                                <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">{value.title}</h4>
                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Mission CTA */}
            <section className="py-24 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto relative rounded-[3rem] overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/security.png"
                            alt="Security"
                            fill
                            className="object-cover brightness-[0.3]"
                        />
                    </div>

                    <div className="relative z-10 p-12 lg:p-24 text-center">
                        <motion.h2
                            {...fadeInUp}
                            className="text-4xl md:text-6xl font-bold text-white mb-8"
                        >
                            Ready to find the <br />
                            right protection?
                        </motion.h2>
                        <motion.div {...fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 group">
                                Get a Custom Quote
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-2xl font-bold text-lg transition-all">
                                Contact our Experts
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer Space */}
            <div className="h-20"></div>
        </div>
    );
};

export default AboutPage;

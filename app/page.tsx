'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Shield,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Star,
  Users,
  Award,
  Zap,
  Lock,
  Heart
} from 'lucide-react';

const HomePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  } as const;

  const stagger = {
    whileInView: {
      transition: {
        staggerChildren: 0.2
      }
    }
  } as const;

  const serviceHighlights = [
    {
      title: 'Life Insurance',
      description: 'Secure your family\'s legacy with plans that provide lasting financial security.',
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      href: '/services'
    },
    {
      title: 'Health Protection',
      description: 'Premium medical coverage for peace of mind during unexpected health challenges.',
      icon: <Shield className="w-6 h-6 text-emerald-500" />,
      href: '/services'
    },
    {
      title: 'Business Risk',
      description: 'Customized insurance solutions to protect your enterprise and its assets.',
      icon: <Lock className="w-6 h-6 text-amber-500" />,
      href: '/services'
    }
  ];

  const features = [
    {
      title: 'Transparent Advice',
      text: 'Clear, jargon-free explanations for every policy condition.',
      icon: <Zap className="w-6 h-6 text-blue-600" />
    },
    {
      title: 'Expert Guidance',
      text: 'Our certified advisers help you navigate complex coverage options.',
      icon: <Star className="w-6 h-6 text-blue-600" />
    },
    {
      title: 'Fast Claims',
      text: 'Dedicated support team to ensure your claims are processed swiftly.',
      icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              x: [0, 100, 0],
              y: [0, 50, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -90, 0],
              x: [0, -50, 0],
              y: [0, 100, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[100px] rounded-full"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-bold mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Trusted by 10,000+ Families
              </div>
              <h1 className="text-6xl lg:text-8xl font-black text-zinc-900 dark:text-white leading-[1.1] mb-8 tracking-tight">
                Your Future, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Secured.
                </span>
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed max-w-xl">
                Expert insurance advice tailored to your life. We help you find the perfect protection
                so you can focus on building your legacy with total confidence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/25 transition-all flex items-center gap-2 group">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/about" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 px-8 py-5 rounded-2xl font-bold text-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all">
                  Our Expertise
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/about_hero.png"
                  alt="Modern Security"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-transparent"></div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 p-3 rounded-2xl">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Claim Settled</p>
                    <p className="text-2xl font-black text-zinc-900 dark:text-white">99.2%</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-8 border-y border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-around gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2"><Award className="w-5 h-5" /> <span className="font-bold">AA+ Rated Insurer</span></div>
            <div className="flex items-center gap-2"><Users className="w-5 h-5" /> <span className="font-bold">1 Million+ Users</span></div>
            <div className="flex items-center gap-2"><Lock className="w-5 h-5" /> <span className="font-bold">Secured by AES-256</span></div>
            <div className="flex items-center gap-2 text-rose-600"><Heart className="w-5 h-5 fill-rose-600" /> <span className="font-bold text-zinc-900 dark:text-white">Customer Favorite 2024</span></div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-4 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white mb-6">
              Tailored Protection.
            </motion.h2>
            <motion.p {...fadeInUp} className="max-w-xl mx-auto text-lg text-zinc-600 dark:text-zinc-400">
              One size does not fit all. We offer specialized plans across various domains
              to ensure you get the exact coverage you need.
            </motion.p>
          </div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {serviceHighlights.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group p-10 bg-zinc-50 dark:bg-zinc-900 rounded-[3rem] border border-zinc-100 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-none transition-all flex flex-col items-start"
              >
                <div className="p-4 bg-white dark:bg-black rounded-3xl shadow-lg mb-8 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <Link href={service.href} className="flex items-center gap-2 text-blue-600 font-bold group/link">
                  Learn More
                  <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeInUp} className="mt-16 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 font-bold text-lg text-zinc-900 dark:text-white hover:text-blue-600 transition-colors">
              Explore All 15+ Specialized Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="bg-zinc-900 dark:bg-blue-900/10 rounded-[4rem] p-12 lg:p-24 overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10 items-center">
              <div>
                <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                  Why Thousands Trust <br />
                  <span className="text-blue-500">Insurance Adviser.</span>
                </motion.h2>
                <div className="space-y-10">
                  {features.map((feature, index) => (
                    <motion.div key={index} {...fadeInUp} className="flex gap-6">
                      <div className="shrink-0 w-14 h-14 bg-blue-600/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/10">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                        <p className="text-zinc-400 max-w-sm">{feature.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                {...fadeInUp}
                className="relative aspect-square lg:aspect-video rounded-3xl overflow-hidden"
              >
                <Image
                  src="/images/security.png"
                  alt="Security Trust"
                  fill
                  className="object-cover brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-10 left-10">
                  <div className="flex items-center gap-1 text-amber-500 mb-2">
                    <Star className="w-4 h-4 fill-amber-500" />
                    <Star className="w-4 h-4 fill-amber-500" />
                    <Star className="w-4 h-4 fill-amber-500" />
                    <Star className="w-4 h-4 fill-amber-500" />
                    <Star className="w-4 h-4 fill-amber-500" />
                  </div>
                  <p className="text-xl font-bold text-white italic">&quot;The most transparent advice I&apos;ve ever received in 15 years of business.&quot;</p>
                  <p className="text-zinc-400 mt-2 font-medium">— Chaitanya Garg, CEO</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-16 rounded-[4rem] bg-gradient-to-b from-blue-600 to-indigo-700 text-white shadow-2xl shadow-blue-500/30"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to secure your future?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
              Joint our 10,000+ happy clients and get a personalized insurance quote in under 3 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/advisor">
                <button className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2 group w-full sm:w-auto">
                  Get a Custom Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="bg-blue-700 text-white border border-white/20 px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-800 transition-all w-full">
                  Contact our Experts
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Buffer */}
      <div className="h-20"></div>
    </div>
  );
};

export default HomePage;

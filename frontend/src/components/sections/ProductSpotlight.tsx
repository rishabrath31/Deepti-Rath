"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function ProductSpotlight() {
    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-8">
                            <Star size={14} fill="currentColor" />
                            Featured Product
                        </div>

                        <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                            LIC's <span className="text-accent italic">Jeevan Utsav</span>
                        </h2>

                        <p className="text-xl text-white/70 mb-10 leading-relaxed font-light italic">
                            "A lifetime of certainty for a life full of celebrations."
                        </p>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Lifetime Income Guarantee</h4>
                                    <p className="text-white/60 text-sm">Receive 10% of the Sum Assured annually for your entire life after the premium paying term.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                                    <Star size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Whole Life Protection</h4>
                                    <p className="text-white/60 text-sm">Secure cover for your entire life (up to 100 years of age).</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                                    <CheckCircle2 size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Flexible Premium Terms</h4>
                                    <p className="text-white/60 text-sm">Choose a short payment window of 5 to 16 years based on your financial comfort.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link
                                href="#contact"
                                className="bg-accent text-primary px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:translate-y-[-2px] transition-all shadow-xl shadow-accent/20 text-center"
                            >
                                Get a Quote
                            </Link>
                            <Link
                                href="#plans"
                                className="group flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs py-5 px-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-all text-center justify-center"
                            >
                                Compare Other Plans
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Visual Side Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-3xl border border-white/10 rounded-[4rem] p-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-3xl rounded-full" />

                            <div className="flex items-center justify-between mb-16">
                                <div className="w-16 h-16 bg-accent rounded-3xl flex items-center justify-center text-primary text-3xl font-black">
                                    LIC
                                </div>
                                <div className="text-right">
                                    <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-1">Plan Number</p>
                                    <p className="text-white font-mono text-xl">871</p>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-2">Benefit Percentage</p>
                                    <p className="text-white text-6xl font-serif">10% <span className="text-2xl italic text-white/40 font-sans">p.a.</span></p>
                                </div>

                                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                                    <div>
                                        <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-2">Min Age</p>
                                        <p className="text-white font-bold text-xl">90 Days</p>
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-2">Max Age</p>
                                        <p className="text-white font-bold text-xl">65 Years</p>
                                    </div>
                                </div>

                                <div className="bg-accent/10 rounded-2xl p-6 border border-accent/20">
                                    <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-3">Core USP</p>
                                    <p className="text-white/90 text-md leading-relaxed">
                                        The income benefit starts from age of 18 or end of deferment period, whichever is later. A perfect gift for your family's future.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Floating badge */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl flex items-center gap-4 border border-slate-100">
                            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                                <CheckCircle2 size={24} />
                            </div>
                            <div>
                                <p className="text-primary font-black text-sm uppercase tracking-tighter">Guaranteed</p>
                                <p className="text-muted-foreground text-[10px] font-bold">Maturity & Benefits</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

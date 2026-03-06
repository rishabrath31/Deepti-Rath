"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, TrendingUp, HeartHandshake } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-white via-white to-blue-50">
            {/* Background Shapes */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top-right -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full font-bold text-sm mb-6 uppercase tracking-wider">
                        <ShieldCheck size={16} /> Certified LIC Financial Advisor
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif text-primary leading-tight mb-6">
                        Secure Your Future with <span className="text-accent italic">Trusted</span> Guidance
                    </h1>
                    <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                        Planning for your family's future shouldn't be complicated. I provide personalized financial strategies to ensure your peace of mind and long-term prosperity.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/20 transition-all flex items-center gap-2 group">
                            Explore Plans <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="bg-white border-2 border-primary/10 text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/5 transition-all">
                            Book Consultation
                        </button>
                    </div>

                    <div className="mt-12 flex gap-8 items-center border-t border-primary/5 pt-8">
                        <div className="flex flex-col">
                            <span className="text-3xl font-serif font-black text-primary">15+</span>
                            <span className="text-xs uppercase tracking-widest text-muted-foreground">Years Experience</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-serif font-black text-primary">5k+</span>
                            <span className="text-xs uppercase tracking-widest text-muted-foreground">Families Secured</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-serif font-black text-primary">99%</span>
                            <span className="text-xs uppercase tracking-widest text-muted-foreground">Claim Settlement</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative z-10 rounded-[2rem] overflow-hidden border-[12px] border-white shadow-2xl shadow-primary/10 aspect-[4/5] bg-muted">
                        {/* Placeholder for Advisor Photo - User should replace this */}
                        <div className="w-full h-full bg-gradient-to-tr from-primary to-primary/80 flex items-center justify-center p-12 text-center text-white">
                            <div className="flex flex-col items-center">
                                <HeartHandshake size={64} className="mb-4 text-accent" />
                                <p className="text-xl font-serif">A professional photo of the advisor will be placed here</p>
                            </div>
                        </div>
                    </div>
                    {/* Floating Element 1 */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-primary/5"
                    >
                        <TrendingUp size={32} className="text-accent mb-3" />
                        <p className="text-sm font-bold text-primary">Custom Solutions</p>
                        <p className="text-[10px] text-muted-foreground">Personalized Growth</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

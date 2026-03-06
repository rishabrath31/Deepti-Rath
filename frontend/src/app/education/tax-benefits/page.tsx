"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Landmark, Percent, Receipt, Gift, Briefcase, Info, BadgeAlert } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function TaxBenefitsPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <Link href="/" className="inline-flex items-center gap-2 text-primary font-bold mb-12 hover:text-accent transition-colors">
                    <ArrowLeft size={20} /> Back to Home
                </Link>

                <div className="max-w-3xl mb-20">
                    <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Tax Smart Planning</span>
                    <h1 className="text-5xl md:text-7xl font-serif text-primary mb-8 leading-tight">
                        The Dual Advantage: <span className="italic text-accent">Tax Saving</span> & Protection
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        LIC plans aren't just for safety; they are powerful tools to optimize your tax liabilities under the Indian Income Tax Act.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-primary/5"
                    >
                        <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mb-10">
                            <Receipt size={40} />
                        </div>
                        <h2 className="text-4xl font-serif text-primary mb-6">Section 80C</h2>
                        <p className="text-accent font-bold mb-8 uppercase tracking-widest text-sm">Investment Phase Benefit</p>
                        <div className="space-y-6 text-lg text-muted-foreground mb-10">
                            <p>Under Section 80C, the premiums you pay for your life insurance policy are deductible from your gross total income.</p>
                            <ul className="space-y-4">
                                <li className="flex gap-4 items-start">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                                    <span>Maximum deduction allowed: **₹1,50,000** per financial year.</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                                    <span>Available for self, spouse, and children.</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                                    <span>Helps reduce your taxable income significantly.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex gap-4 items-center">
                            <BadgeAlert className="text-blue-600" size={24} />
                            <p className="text-sm font-bold text-blue-900 leading-tight italic">Note: Premium must be below 10% of sum assured (for policies after 2012).</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-primary p-12 rounded-[3.5rem] shadow-2xl text-white relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-[80px]" />
                        <div className="w-20 h-20 bg-white/10 text-accent rounded-3xl flex items-center justify-center mb-10">
                            <Gift size={40} />
                        </div>
                        <h2 className="text-4xl font-serif mb-6">Section 10(10D)</h2>
                        <p className="text-accent font-bold mb-8 uppercase tracking-widest text-sm">Maturity Phase Benefit</p>
                        <div className="space-y-6 text-lg text-white/70 mb-10">
                            <p>This is the most "powerful" section. It makes your entire maturity amount or death benefit completely **tax-free**.</p>
                            <ul className="space-y-4">
                                <li className="flex gap-4 items-start">
                                    <div className="w-2 h-2 rounded-full bg-accent mt-2.5 shrink-0" />
                                    <span>The sum assured + bonus + loyalty additions are all exempt from tax.</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="w-2 h-2 rounded-full bg-accent mt-2.5 shrink-0" />
                                    <span>No ceiling on the amount exempted (subject to 10% premium criteria).</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="w-2 h-2 rounded-full bg-accent mt-2.5 shrink-0" />
                                    <span>Death benefit is ALWAYS tax-free for nominees.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white/10 p-6 rounded-2xl border border-white/10 flex gap-4 items-center">
                            <Landmark className="text-accent" size={24} />
                            <p className="text-sm font-bold text-white leading-tight italic">Comparison: FD interest and Mutual Fund LTCG are taxable, but LIC matured proceeds are FREE.</p>
                        </div>
                    </motion.div>
                </div>

                {/* Example Illustration */}
                <div className="bg-white p-12 md:p-20 rounded-[4rem] border border-primary/5 shadow-sm overflow-hidden flex flex-col items-center">
                    <h2 className="text-4xl font-serif text-primary mb-6 text-center">Visualizing Your Savings</h2>
                    <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl">
                        Assuming you are in the 30% tax bracket, here's how a small investment in LIC works for you.
                    </p>

                    <div className="grid md:grid-cols-3 gap-12 w-full max-w-5xl">
                        <div className="text-center">
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Investment</p>
                            <div className="p-8 rounded-3xl bg-slate-50 font-serif text-3xl font-black text-primary">₹1,00,000</div>
                            <p className="text-sm mt-4 text-muted-foreground">Annual LIC Premium</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white mb-2 shadow-lg">
                                <Percent size={20} />
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">You Save Instantly</p>
                            <div className="p-8 rounded-3xl bg-emerald-50 font-serif text-3xl font-black text-emerald-600">₹31,200</div>
                            <p className="text-sm mt-4 text-muted-foreground">in Taxes Every Year</p>
                        </div>
                    </div>

                    <p className="mt-20 text-muted-foreground italic text-center text-sm">
                        *Calculation based on Section 80C limit for a person in 30% tax slab.
                    </p>
                </div>
            </div>
        </div>
    );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, IndianRupee, PieChart, Info } from "lucide-react";

export default function Calculators() {
    const [amount, setAmount] = useState(1000000);
    const [years, setYears] = useState(20);
    const [returnRate, setReturnRate] = useState(8);

    const calculateMaturity = () => {
        // Simple compound interest for visualization
        const p = amount;
        const r = returnRate / 100;
        const t = years;
        const maturity = p * Math.pow(1 + r, t);
        return Math.round(maturity).toLocaleString("en-IN");
    };

    return (
        <section id="calculators" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Interactive Tools</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Financial Planning Made Simple</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Use our interactive calculators to estimate your returns and plan for a secure future.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-primary/5">
                        <h3 className="text-2xl font-serif text-primary mb-8 flex items-center gap-3">
                            <Calculator className="text-accent" /> Investment Growth Calculator
                        </h3>

                        <div className="space-y-8">
                            <div>
                                <div className="flex justify-between mb-4">
                                    <label className="font-bold text-primary">Initial Investment</label>
                                    <span className="text-accent font-bold">₹{amount.toLocaleString("en-IN")}</span>
                                </div>
                                <input
                                    type="range"
                                    min="50000"
                                    max="10000000"
                                    step="50000"
                                    value={amount}
                                    onChange={(e) => setAmount(Number(e.target.value))}
                                    className="w-full h-2 bg-primary/10 rounded-lg appearance-none cursor-pointer accent-accent"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between mb-4">
                                    <label className="font-bold text-primary">Duration (Years)</label>
                                    <span className="text-accent font-bold">{years} Years</span>
                                </div>
                                <input
                                    type="range"
                                    min="5"
                                    max="40"
                                    value={years}
                                    onChange={(e) => setYears(Number(e.target.value))}
                                    className="w-full h-2 bg-primary/10 rounded-lg appearance-none cursor-pointer accent-accent"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between mb-4">
                                    <label className="font-bold text-primary">Expected Return Rate (%)</label>
                                    <span className="text-accent font-bold">{returnRate}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="4"
                                    max="15"
                                    value={returnRate}
                                    onChange={(e) => setReturnRate(Number(e.target.value))}
                                    className="w-full h-2 bg-primary/10 rounded-lg appearance-none cursor-pointer accent-accent"
                                />
                            </div>
                        </div>

                        <div className="mt-12 bg-primary p-8 rounded-2xl text-white">
                            <p className="text-sm uppercase tracking-widest opacity-80 mb-2">Estimated Maturity Value</p>
                            <h4 className="text-4xl md:text-5xl font-serif font-black text-accent">₹{calculateMaturity()}*</h4>
                            <p className="text-[10px] mt-4 opacity-60">*Values are indicative based on selected parameters. Actual LIC plan returns may vary.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="bg-primary/5 p-8 rounded-3xl border border-primary/5">
                            <PieChart className="text-accent mb-4" />
                            <h4 className="text-xl font-bold text-primary mb-3">Why Planning Matters?</h4>
                            <p className="text-muted-foreground leading-relaxed">
                                Compound interest is the eighth wonder of the world. Starting just 5 years early can double your final maturity corpus.
                            </p>
                        </div>
                        <div className="bg-accent/10 p-8 rounded-3xl border border-accent/20">
                            <Info className="text-accent mb-4" />
                            <h4 className="text-xl font-bold text-primary mb-3">Expert Consultation</h4>
                            <p className="text-muted-foreground leading-relaxed">
                                Calculators are great, but personalized advice is better. Let's talk about which LIC plan fits your unique life stage.
                            </p>
                            <button className="mt-6 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all w-full md:w-auto">
                                Discuss Strategy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { Shield, TrendingUp, Heart, Wallet, Percent, ArrowLeft } from "lucide-react";
import Link from "next/link";

const reasons = [
    {
        title: "Financial Security for Family",
        description: "The primary purpose of life insurance is to ensure that your dependents are financially secure even in your absence.",
        icon: Shield,
        color: "text-blue-600",
        bg: "bg-blue-50"
    },
    {
        title: "Income Replacement",
        description: "If you are the breadwinner, life insurance replaces your income, helping your family maintain their standard of living.",
        icon: Wallet,
        color: "text-emerald-600",
        bg: "bg-emerald-50"
    },
    {
        title: "Disciplined Savings",
        description: "Policy premiums act as a forced saving tool, helping you accumulate a corpus for long-term goals like retirement or education.",
        icon: TrendingUp,
        color: "text-accent",
        bg: "bg-accent/10"
    },
    {
        title: "Protection Against Uncertainty",
        description: "Life is unpredictable. Insurance provides a safety net against critical illnesses and accidental disabilities.",
        icon: Heart,
        color: "text-rose-600",
        bg: "bg-rose-50"
    },
    {
        title: "Tax Advantages",
        description: "Benefit from tax deductions under Section 80C and tax-free maturity proceeds under Section 10(10D).",
        icon: Percent,
        color: "text-purple-600",
        bg: "bg-purple-50"
    }
];

export default function WhyLifeInsurancePage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <Link href="/" className="inline-flex items-center gap-2 text-primary font-bold mb-12 hover:text-accent transition-colors">
                    <ArrowLeft size={20} /> Back to Home
                </Link>

                <div className="max-w-3xl mb-20">
                    <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Knowledge Base</span>
                    <h1 className="text-5xl md:text-7xl font-serif text-primary mb-8 leading-tight">
                        Why Life Insurance is the <span className="italic underline decoration-accent underline-offset-8">Foundation</span> of Financial Planning
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Many view insurance as an expense, but it is actually the most critical investment one can make. It's about buying peace of mind for those you love most.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-10 rounded-[2.5rem] border border-primary/5 hover:border-accent/30 transition-all group bg-slate-50 shadow-sm"
                        >
                            <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110", reason.bg, reason.color)}>
                                <reason.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-serif text-primary font-bold mb-4">{reason.title}</h3>
                            <p className="text-muted-foreground leading-relaxed text-lg italic">
                                "{reason.description}"
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 bg-primary rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -mr-32 -mt-32" />
                    <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-serif mb-8">Ready to Build Your <span className="text-accent">Safety Net</span>?</h2>
                            <p className="text-lg text-white/70 mb-10 leading-relaxed">
                                Don't leave your family's future to chance. Let's calculate the exact coverage you need today.
                            </p>
                            <button className="bg-accent text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-accent/90 transition-all shadow-xl shadow-accent/20">
                                Get Free Consultation
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                                <p className="text-3xl font-serif font-bold text-accent mb-2">99%</p>
                                <p className="text-sm uppercase tracking-widest opacity-60">Claim Ratio</p>
                            </div>
                            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                                <p className="text-3xl font-serif font-bold text-accent mb-2">15+</p>
                                <p className="text-sm uppercase tracking-widest opacity-60">Years Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { cn } from "@/lib/utils";

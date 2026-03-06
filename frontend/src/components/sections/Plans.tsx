"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
    ShieldCheck,
    Baby,
    TrendingUp,
    Coins,
    Gem,
    HeartPulse,
    X,
    CheckCircle2,
    ExternalLink,
    Award
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const plans = [
    {
        title: "LIC's New Tech Term",
        description: "Pure protection for your family. Online exclusive with lower rates for non-smokers and women.",
        icon: ShieldCheck,
        color: "bg-blue-600",
        badge: "Online Exclusive",
        details: {
            intro: "A non-linked, non-participating, individual, pure risk premium life insurance plan that provides financial protection to your family.",
            benefits: ["Special lower rates for women", "Incentives for non-smokers", "Benefit of lower rates for direct purchase", "Minimum sum assured ₹50 Lakhs"]
        }
    },
    {
        title: "LIC's Jeevan Utsav",
        description: "Whole life plan with a 10% lifetime income guarantee. Start securing your future today.",
        icon: Gem,
        color: "bg-amber-500",
        badge: "Top Seller",
        details: {
            intro: "A unique whole life plan with guaranteed additions and lifetime income benefits after the premium paying term.",
            benefits: ["Lifetime 10% Sum Assured annually", "Cover up to age 100", "Guaranteed additions during PPT", "Loan facility available"]
        }
    },
    {
        title: "LIC's Amrutbal",
        description: "Secure your child's brilliant future with this guaranteed growth savings plan.",
        icon: Baby,
        color: "bg-pink-500",
        badge: "Child Special",
        details: {
            intro: "Designed specifically to meet the higher education and other needs of children with guaranteed additions.",
            benefits: ["Guaranteed Additions per ₹1000 sum assured", "Single/Limited premium payment", "Premium waiver benefit rider", "Maturity up to age 25"]
        }
    },
    {
        title: "LIC's Bima Jyoti",
        description: "Guaranteed additions plan that offers both protection and high-payout savings.",
        icon: TrendingUp,
        color: "bg-emerald-600",
        badge: "High Returns",
        details: {
            intro: "A policy that offers guaranteed additions of ₹50 per thousand sum assured at the end of each policy year.",
            benefits: ["Fixed ₹50 bonus per ₹1000 every year", "Tax-free maturity benefits", "Short premium payment terms", "Safe wealth creation"]
        }
    },
    {
        title: "LIC's Bima Lakshmi",
        description: "Exclusively for women. Features auto-cover and tailored benefits for financial independence.",
        icon: Award,
        color: "bg-purple-600",
        badge: "Women Centric",
        details: {
            intro: "A dedicated plan for women policyholders with an auto-cover facility and attractive survival benefits.",
            benefits: ["Auto-cover facility", "Special rates for women", "Regular survival benefits", "Liquidity through policy loans"]
        }
    },
    {
        title: "LIC's SIIP",
        description: "A unit-linked savings plan that lets you benefit from market growth with LIC's trust.",
        icon: Coins,
        color: "bg-indigo-600",
        badge: "Market Linked",
        details: {
            intro: "A non-participating, unit-linked individual life insurance plan that offers investment and insurance.",
            benefits: ["Refund of Mortality Charges", "Choice of 4 investment funds", "Flexible premium partial withdrawals", "Switching/Redirection options"]
        }
    },
];

export default function Plans() {
    const [selectedPlan, setSelectedPlan] = useState<any>(null);

    return (
        <section id="plans" className="py-24 bg-slate-50 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-accent font-black uppercase tracking-widest text-xs mb-4 block">Official Branded Products</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-primary mb-6">Explore <span className="italic underline underline-offset-8 decoration-accent/30">Premium</span> LIC Plans</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
                        Discover standard and online-exclusive plans tailored by the Life Insurance Corporation of India to meet your specific life milestones.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onClick={() => setSelectedPlan(plan)}
                            className="bg-white p-10 rounded-[2.5rem] border border-primary/5 hover:border-accent/40 shadow-sm hover:shadow-2xl transition-all group cursor-pointer relative overflow-hidden"
                        >
                            {/* Card Decorative background */}
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-slate-50 rounded-full group-hover:bg-accent/5 transition-colors" />

                            <div className="flex items-start justify-between mb-8">
                                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg", plan.color)}>
                                    <plan.icon size={28} />
                                </div>
                                {plan.badge && (
                                    <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-[10px] font-black uppercase tracking-widest">
                                        {plan.badge}
                                    </span>
                                )}
                            </div>

                            <h3 className="text-2xl text-primary font-bold mb-4 font-serif">{plan.title}</h3>
                            <p className="text-muted-foreground mb-8 leading-relaxed text-sm italic">
                                "{plan.description}"
                            </p>

                            <div className="flex items-center gap-3 text-primary font-black uppercase tracking-tighter text-xs group-hover:text-accent transition-colors">
                                View Full Benefits
                                <span className="w-8 h-8 rounded-full border border-primary/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all">
                                    <ExternalLink size={14} />
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-primary p-12 rounded-[3rem] text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] pointer-events-none" />
                    <h4 className="text-2xl font-serif mb-4 italic">Not sure which plan is right for you?</h4>
                    <p className="text-white/60 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
                        Our expert advisors help you navigate complex terms and conditions to find the bridge between your current savings and future dreams.
                    </p>
                    <a href="#contact" className="bg-accent text-primary px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all inline-block">
                        Request Expert Consultation
                    </a>
                </div>

                {/* Detail Modal */}
                <AnimatePresence>
                    {selectedPlan && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedPlan(null)}
                                className="absolute inset-0 bg-primary/60 backdrop-blur-md"
                            />
                            <motion.div
                                layoutId={selectedPlan.title}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="bg-white rounded-[3.5rem] w-full max-w-2xl relative z-10 overflow-hidden shadow-2xl"
                            >
                                <button
                                    onClick={() => setSelectedPlan(null)}
                                    className="absolute top-10 right-10 text-primary/20 hover:text-primary transition-colors"
                                >
                                    <X size={28} />
                                </button>

                                <div className="p-12 md:p-20">
                                    <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-10 text-white shadow-xl", selectedPlan.color)}>
                                        <selectedPlan.icon size={32} />
                                    </div>
                                    <div className="mb-4">
                                        <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-[10px] font-black uppercase tracking-widest">LIC Official Plan</span>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight">{selectedPlan.title}</h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed mb-10 italic border-l-4 border-accent pl-6">
                                        {selectedPlan.details.intro}
                                    </p>

                                    <div className="space-y-4 mb-12">
                                        <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-6 opacity-40">Plan Highlights & Benefits</h4>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {selectedPlan.details.benefits.map((benefit: string) => (
                                                <div key={benefit} className="flex items-start gap-3 text-primary font-bold text-sm bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                                    <CheckCircle2 size={18} className="text-secondary shrink-0" />
                                                    {benefit}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <a href="#contact" onClick={() => setSelectedPlan(null)} className="w-full bg-primary text-white py-6 rounded-3xl font-black uppercase tracking-widest hover:bg-primary/95 transition-all text-center block shadow-2xl shadow-primary/20">
                                        Ask for Custom Quote
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

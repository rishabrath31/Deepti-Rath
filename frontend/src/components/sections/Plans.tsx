"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Umbrella, Baby, GraduationCap, Coins, Briefcase, Heart, X, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const plans = [
    {
        title: "Life Insurance",
        description: "Ensure your family's financial security with comprehensive life coverage policies.",
        icon: Umbrella,
        color: "bg-blue-500",
        details: {
            intro: "Comprehensive life cover that provides financial security to your family in your absence.",
            benefits: ["High coverage premiums", "Income replacement", "Debt protection", "Family security"]
        }
    },
    {
        title: "Child Education",
        description: "Plan ahead for your child's bright future with secure education investment plans.",
        icon: Baby,
        color: "bg-pink-500",
        details: {
            intro: "Create a dedicated fund for your child's education milestones and future dreams.",
            benefits: ["Educational fund creation", "Premium waiver benefit", "Guaranteed additions", "Goal protection"]
        }
    },
    {
        title: "Retirement Plans",
        description: "Enjoy a stress-free retirement with our tailored pension and annuity schemes.",
        icon: GraduationCap,
        color: "bg-orange-500",
        details: {
            intro: "Ensure a steady stream of income in your golden years with our pension solutions.",
            benefits: ["Lifelong pension", "Joint life options", "Tax-free partial withdrawals", "Capital return"]
        }
    },
    {
        title: "Tax Saving Plans",
        description: "Maximize your wealth and minimize tax liabilities with smart investment tools.",
        icon: Coins,
        color: "bg-emerald-500",
        details: {
            intro: "Invest strategically to save on taxes under Sec 80C and earn tax-free maturity under Sec 10(10D).",
            benefits: ["Section 80C benefits", "Tax-free maturity", "Disciplined savings", "Wealth growth"]
        }
    },
    {
        title: "Investment Plans",
        description: "Grow your wealth steadily with LIC's market-linked and non-linked schemes.",
        icon: Briefcase,
        color: "bg-purple-500",
        details: {
            intro: "Balanced portfolios that offer both stability and growth for your long-term goals.",
            benefits: ["Long-term wealth", "Flexible premiums", "Liquidity options", "Growth stability"]
        }
    },
    {
        title: "Health Insurance",
        description: "Protect your health and finances against unexpected medical emergencies.",
        icon: Heart,
        color: "bg-red-500",
        details: {
            intro: "Comprehensive health coverage for you and your family for quality medical care.",
            benefits: ["Cashless treatment", "Critical illness cover", "Hospitalization benefits", "Family floater"]
        }
    },
];

export default function Plans() {
    const [selectedPlan, setSelectedPlan] = useState<any>(null);

    return (
        <section id="plans" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Our Services</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Comprehensive Financial Protection</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Choose from a wide range of LIC plans designed to meet your specific life goals and financial needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onClick={() => setSelectedPlan(plan)}
                            className="bg-white p-8 rounded-3xl border border-primary/5 hover:border-accent/40 shadow-sm hover:shadow-xl transition-all group cursor-pointer"
                        >
                            <div className={cn("w-14 h-14 rounded-2xl mb-6 flex items-center justify-center text-white", plan.color)}>
                                <plan.icon size={28} />
                            </div>
                            <h3 className="text-2xl text-primary font-bold mb-4">{plan.title}</h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {plan.description}
                            </p>
                            <button className="text-primary font-bold flex items-center gap-2 group-hover:text-accent transition-colors">
                                Learn More
                                <span className="w-6 h-6 rounded-full border border-primary/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all text-[10px]">
                                    →
                                </span>
                            </button>
                        </motion.div>
                    ))}
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
                                className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
                            />
                            <motion.div
                                layoutId={selectedPlan.title}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="bg-white rounded-[3rem] w-full max-w-2xl relative z-10 overflow-hidden shadow-2xl"
                            >
                                <button
                                    onClick={() => setSelectedPlan(null)}
                                    className="absolute top-8 right-8 text-primary/40 hover:text-primary transition-colors"
                                >
                                    <X size={24} />
                                </button>

                                <div className="p-10 md:p-16">
                                    <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-white", selectedPlan.color)}>
                                        <selectedPlan.icon size={32} />
                                    </div>
                                    <h3 className="text-4xl font-serif text-primary mb-6">{selectedPlan.title}</h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed mb-10 italic">
                                        {selectedPlan.details.intro}
                                    </p>

                                    <div className="space-y-4 mb-10">
                                        <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-4">Key Benefits</h4>
                                        {selectedPlan.details.benefits.map((benefit: string) => (
                                            <div key={benefit} className="flex items-center gap-4 text-primary font-medium">
                                                <CheckCircle2 size={18} className="text-accent" />
                                                {benefit}
                                            </div>
                                        ))}
                                    </div>

                                    <a href="#contact" onClick={() => setSelectedPlan(null)} className="w-full bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-primary/90 transition-all text-center block">
                                        Consult for this Plan
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

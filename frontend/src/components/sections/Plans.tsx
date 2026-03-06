"use client";

import { motion } from "framer-motion";
import { Umbrella, Baby, GraduationCap, Coins, Briefcase, Heart } from "lucide-react";

const plans = [
    {
        title: "Life Insurance",
        description: "Ensure your family's financial security with comprehensive life coverage policies.",
        icon: Umbrella,
        color: "bg-blue-500",
    },
    {
        title: "Child Education",
        description: "Plan ahead for your child's bright future with secure education investment plans.",
        icon: Baby,
        color: "bg-pink-500",
    },
    {
        title: "Retirement Plans",
        description: "Enjoy a stress-free retirement with our tailored pension and annuity schemes.",
        icon: GraduationCap,
        color: "bg-orange-500",
    },
    {
        title: "Tax Saving Plans",
        description: "Maximize your wealth and minimize tax liabilities with smart investment tools.",
        icon: Coins,
        color: "bg-emerald-500",
    },
    {
        title: "Investment Plans",
        description: "Grow your wealth steadily with LIC's market-linked and non-linked schemes.",
        icon: Briefcase,
        color: "bg-purple-500",
    },
    {
        title: "Health Insurance",
        description: "Protect your health and finances against unexpected medical emergencies.",
        icon: Heart,
        color: "bg-red-500",
    },
];

export default function Plans() {
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
                            className="bg-white p-8 rounded-3xl border border-primary/5 hover:border-accent/40 shadow-sm hover:shadow-xl transition-all group"
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
            </div>
        </section>
    );
}

// Helper to make the code cleaner - I forgot to import cn in this snippet but I'll add it in the final file
import { cn } from "@/lib/utils";

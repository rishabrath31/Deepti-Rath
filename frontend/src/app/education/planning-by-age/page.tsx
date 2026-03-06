"use client";

import { motion } from "framer-motion";
import { ArrowLeft, User, Briefcase, Home, GraduationCap, Ship, HeartPulse, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const stages = [
    {
        age: "20–30",
        title: "The Accumulation Phase",
        focus: "Career Building & Early Savings",
        needs: [
            "Low-premium Term Insurance",
            "Health Insurance (Self)",
            "Small SIPs in Mutual Funds",
            "Create Emergency Fund"
        ],
        icon: Briefcase,
        color: "border-blue-500",
        iconColor: "text-blue-500",
        bg: "bg-blue-50"
    },
    {
        age: "30–40",
        title: "The Foundation Phase",
        focus: "Family Life & Home Stability",
        needs: [
            "High-cover Life Insurance (HLV based)",
            "Child Education Planning (LIC)",
            "Home Loan Protection",
            "Family Floater Health Plan"
        ],
        icon: Home,
        color: "border-emerald-500",
        iconColor: "text-emerald-500",
        bg: "bg-emerald-50"
    },
    {
        age: "40–50",
        title: "The Peak Phase",
        focus: "Wealth Maximization & Debt Payoff",
        needs: [
            "Critical Illness Rider",
            "Retirement Corpus Build-up",
            "Wealth Enhancement Plans",
            "Daughter's Marriage Provision"
        ],
        icon: GraduationCap,
        color: "border-accent",
        iconColor: "text-accent",
        bg: "bg-accent/10"
    },
    {
        age: "50+",
        title: "The Golden Phase",
        focus: "Conservation & Retirement Prep",
        needs: [
            "Pension/Annuity Plans",
            "Legacy Planning (Will/Trust)",
            "Higher Health Cover for Seniors",
            "Shift to Debt Instruments"
        ],
        icon: Ship,
        color: "border-purple-500",
        iconColor: "text-purple-500",
        bg: "bg-purple-50"
    }
];

export default function PlanningByAgePage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <Link href="/" className="inline-flex items-center gap-2 text-primary font-bold mb-12 hover:text-accent transition-colors">
                    <ArrowLeft size={20} /> Back to Home
                </Link>

                <div className="max-w-3xl mb-20">
                    <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Strategic Roadmap</span>
                    <h1 className="text-5xl md:text-6xl font-serif text-primary mb-8 leading-tight">
                        Financial Planning Across the <span className="italic text-accent underline decoration-primary/10">Lifespan</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Your financial needs change as you age. Understanding what to prioritize at each stage is the key to a worry-free life.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line for Desktop */}
                    <div className="absolute left-[50%] top-0 bottom-0 w-1 bg-slate-100 hidden lg:block -translate-x-1/2" />

                    <div className="space-y-20 relative">
                        {stages.map((stage, index) => (
                            <motion.div
                                key={stage.age}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={cn(
                                    "flex flex-col lg:flex-row items-center gap-12",
                                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                )}
                            >
                                <div className="flex-1 w-full lg:w-1/2">
                                    <div className={cn(
                                        "p-10 rounded-[3rem] border-t-[12px] shadow-xl bg-white",
                                        stage.color
                                    )}>
                                        <div className="flex items-center justify-between mb-8">
                                            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center font-black", stage.bg, stage.iconColor)}>
                                                <stage.icon size={28} />
                                            </div>
                                            <span className="text-4xl font-serif font-black text-slate-200">{stage.age}</span>
                                        </div>
                                        <h3 className="text-3xl font-serif text-primary font-bold mb-2">{stage.title}</h3>
                                        <p className="text-accent font-bold mb-8 uppercase tracking-widest text-sm">{stage.focus}</p>

                                        <div className="space-y-4">
                                            <p className="font-bold text-primary mb-4 flex items-center gap-2">
                                                <ShieldCheck size={18} className="text-accent" /> Key Priorities:
                                            </p>
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                {stage.needs.map((need) => (
                                                    <div key={need} className="flex gap-3 items-start bg-slate-50 p-4 rounded-2xl">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                                                        <span className="text-sm font-medium text-primary/80 leading-snug">{need}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Center Circle for Desktop */}
                                <div className="hidden lg:flex w-16 h-16 rounded-full bg-white border-4 border-slate-100 items-center justify-center z-10 shadow-lg shrink-0">
                                    <div className={cn("w-4 h-4 rounded-full", stage.iconColor.replace("text-", "bg-"))} />
                                </div>

                                <div className="hidden lg:block flex-1 w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-32 text-center bg-slate-50 p-16 rounded-[4rem] border border-primary/5">
                    <h2 className="text-4xl font-serif text-primary mb-8">Where do you stand currently?</h2>
                    <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto italic">
                        "The best time to plant a tree was 20 years ago. The second best time is now."
                    </p>
                    <div className="flex justify-center gap-6">
                        <button className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
                            Book Life Planning Call
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

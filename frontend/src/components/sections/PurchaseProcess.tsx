"use client";

import { motion } from "framer-motion";
import { MousePointerClick, ClipboardEdit, BadgeCheck, ShieldEllipsis } from "lucide-react";

const steps = [
    {
        title: "Select Your Plan",
        description: "Browse through our curated LIC products and choose the one that fits your goal.",
        icon: MousePointerClick,
        color: "text-blue-600",
        bg: "bg-blue-50"
    },
    {
        title: "Share Details",
        description: "Briefly share your age and financial goals for a personalized premium quote.",
        icon: ClipboardEdit,
        color: "text-amber-600",
        bg: "bg-amber-50"
    },
    {
        title: "Verify & Approve",
        description: "Our advisors help you verify the documents and approve your application swiftly.",
        icon: BadgeCheck,
        color: "text-emerald-600",
        bg: "bg-emerald-50"
    },
    {
        title: "Stay Protected",
        description: "Receive your digital policy bond and enjoy a lifetime of financial security.",
        icon: ShieldEllipsis,
        color: "text-primary",
        bg: "bg-primary/5"
    }
];

export default function PurchaseProcess() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-secondary font-black uppercase tracking-widest text-[10px] mb-4 block">The Journey to Security</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 italic">How <span className="underline decoration-accent underline-offset-8">Online</span> Buying Works</h2>
                    <p className="text-muted-foreground text-sm max-w-xl mx-auto font-light leading-relaxed">
                        Experience a seamless, digital-first approach to securing your family's future with the trust of LIC.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-100 -translate-y-12 z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative z-10 flex flex-col items-center text-center group"
                        >
                            <div className={`w-24 h-24 rounded-[2rem] flex items-center justify-center mb-8 shadow-xl transition-all group-hover:scale-110 group-hover:rotate-3 ${step.bg} ${step.color}`}>
                                <step.icon size={40} strokeWidth={1.5} />
                                <div className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full border border-slate-100 flex items-center justify-center text-primary font-black text-xs shadow-sm">
                                    {index + 1}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4">{step.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed px-4 group-hover:text-primary transition-colors">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 p-8 rounded-[2rem] bg-slate-50 border border-slate-100 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-6 justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-black animate-pulse">
                            %
                        </div>
                        <div>
                            <p className="text-primary font-bold text-sm">Direct Purchase Benefit</p>
                            <p className="text-muted-foreground text-xs">Enjoy lower premium rates for direct online purchases.</p>
                        </div>
                    </div>
                    <a href="#plans" className="text-primary font-black uppercase tracking-widest text-[10px] flex items-center gap-2 hover:text-accent transition-colors">
                        Explore Tech Term →
                    </a>
                </div>
            </div>
        </section>
    );
}

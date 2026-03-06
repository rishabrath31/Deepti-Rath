"use client";

import { motion } from "framer-motion";
import { MessageCircle, PhoneCall, Gift } from "lucide-react";

export default function FloatingLeadGen() {
    return (
        <>
            <div className="fixed bottom-8 right-8 z-[60] flex flex-col gap-4">
                {/* WhatsApp Button */}
                <motion.a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40 cursor-pointer"
                >
                    <MessageCircle size={32} fill="white" />
                </motion.a>

                {/* Free consultation button */}
                <motion.a
                    href="#contact"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-accent text-white px-6 py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl flex items-center gap-3"
                >
                    <Gift size={18} />
                    Free Consultation
                </motion.a>
            </div>

            {/* Floating Trust Indicator (Bottom Left) */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="fixed bottom-8 left-8 z-[60] hidden md:flex bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-primary/5 shadow-xl items-center gap-4"
            >
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    <PhoneCall size={20} />
                </div>
                <div>
                    <p className="text-[10px] font-black uppercase tracking-tighter text-muted-foreground leading-none mb-1">Response Time</p>
                    <p className="text-sm font-bold text-primary leading-none underline decoration-accent underline-offset-2 italic">Under 60 Mins</p>
                </div>
            </motion.div>
        </>
    );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, IndianRupee, PieChart, ShieldCheck, ArrowRight, Download, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import apiClient from "@/lib/api";

const LIC_PLANS = [
    { code: "914", name: "New Endowment Plan (914)" },
    { code: "836", name: "Jeevan Labh (836)" },
];

export default function LicPlanCalculator() {
    const [planCode, setPlanCode] = useState("914");
    const [age, setAge] = useState(30);
    const [term, setTerm] = useState(20);
    const [sumAssured, setSumAssured] = useState(500000);
    const [mode, setMode] = useState("yearly");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any>(null);

    const calculate = async () => {
        setLoading(true);
        try {
            const response = await apiClient.post("/calculators/lic-plan", {
                plan_code: planCode,
                age,
                term,
                sum_assured: sumAssured,
                mode
            });
            setResult(response.data);
        } catch (error) {
            console.error("Failed to calculate:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Inputs */}
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-primary/5 space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Select LIC Plan</label>
                        <select
                            value={planCode}
                            onChange={(e) => setPlanCode(e.target.value)}
                            className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-accent outline-none font-bold text-primary"
                        >
                            {LIC_PLANS.map(p => <option key={p.code} value={p.code}>{p.name}</option>)}
                        </select>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Entry Age</label>
                            <input
                                type="number"
                                value={age}
                                onChange={(e) => setAge(Number(e.target.value))}
                                className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-accent outline-none font-bold text-primary"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Policy Term</label>
                            <input
                                type="number"
                                value={term}
                                onChange={(e) => setTerm(Number(e.target.value))}
                                className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-accent outline-none font-bold text-primary"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Sum Assured (₹)</label>
                        <div className="relative">
                            <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                            <input
                                type="number"
                                value={sumAssured}
                                onChange={(e) => setSumAssured(Number(e.target.value))}
                                className="w-full bg-slate-50 border-none rounded-2xl p-4 pl-12 focus:ring-2 focus:ring-accent outline-none font-bold text-primary text-lg"
                                step="10000"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Premium Mode</label>
                        <div className="flex gap-2 p-1 bg-slate-100 rounded-2xl">
                            {["yearly", "half_yearly", "monthly"].map((m) => (
                                <button
                                    key={m}
                                    onClick={() => setMode(m)}
                                    className={cn(
                                        "flex-1 py-3 rounded-xl text-xs font-bold uppercase tracking-tighter transition-all",
                                        mode === m ? "bg-white text-primary shadow-sm" : "text-muted-foreground hover:bg-white/50"
                                    )}
                                >
                                    {m.replace("_", " ")}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={calculate}
                        disabled={loading}
                        className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-primary/95 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3"
                    >
                        {loading ? "Calculating..." : "Calculate Benefits"}
                        <ArrowRight size={20} />
                    </button>
                </div>

                {/* Results */}
                <div className="space-y-6">
                    <AnimatePresence mode="wait">
                        {result ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="space-y-6"
                            >
                                <div className="bg-accent/10 border-2 border-accent/20 p-8 rounded-[2.5rem] relative overflow-hidden">
                                    <div className="relative z-10">
                                        <p className="text-xs font-black uppercase tracking-widest text-accent mb-2">Estimated Maturity Value</p>
                                        <h4 className="text-5xl font-serif font-black text-primary italic">₹{result.maturity.total_maturity.toLocaleString("en-IN")}</h4>
                                        <div className="mt-8 pt-8 border-t border-accent/10 grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-[10px] uppercase font-bold text-muted-foreground">Installment Premium</p>
                                                <p className="text-xl font-bold text-primary">₹{result.premium.total_premium.toLocaleString("en-IN")}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase font-bold text-muted-foreground">Estimated Bonus</p>
                                                <p className="text-xl font-bold text-primary">₹{result.maturity.bonus.toLocaleString("en-IN")}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <ShieldCheck className="absolute -bottom-4 -right-4 w-32 h-32 text-accent/5 -rotate-12" />
                                </div>

                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-accent shadow-sm">
                                        <Info size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-primary mb-1">Professional Representation</p>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            These values are indicative based on current bonus rates. Actual results may vary based on LIC's performance.
                                        </p>
                                    </div>
                                </div>

                                <button className="w-full bg-white border-2 border-primary/10 text-primary py-4 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
                                    <Download size={18} />
                                    Download Premium Quote
                                </button>
                            </motion.div>
                        ) : (
                            <div className="h-full min-h-[400px] border-2 border-dashed border-slate-200 rounded-[2.5rem] flex flex-col items-center justify-center p-12 text-center text-muted-foreground">
                                <Calculator size={48} className="mb-4 opacity-20" />
                                <h5 className="font-bold text-primary opacity-50 mb-2">Ready to Plan?</h5>
                                <p className="text-sm italic">Enter the policy details on the left to see your personalized maturity and premium breakdown.</p>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

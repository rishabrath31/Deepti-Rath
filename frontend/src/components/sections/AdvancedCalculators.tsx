"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, IndianRupee, PieChart, ShieldCheck, Milestone, GraduationCap, Coins } from "lucide-react";
import { appointmentApi, authApi } from "@/lib/api"; // Sample usage, would create a calculatorApi

const calculatorOptions = [
    { id: "insurance", name: "Insurance Coverage", icon: ShieldCheck },
    { id: "retirement", name: "Retirement Planning", icon: Milestone },
    { id: "education", name: "Child Education", icon: GraduationCap },
    { id: "growth", name: "Investment Growth", icon: Coins },
    { id: "lic", name: "LIC Specifics", icon: Calculator },
];

export default function AdvancedCalculators() {
    const [activeTab, setActiveTab] = useState("insurance");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any>(null);

    // Form states
    const [insuranceData, setInsuranceData] = useState({ expenses: 50000, liabilities: 500000, currentInsurance: 0 });
    const [retirementData, setRetirementData] = useState({ age: 30, retAge: 60, exp: 50000 });

    const calculateInsurance = async () => {
        setLoading(true);
        // Emulated API call to the backend we just built
        try {
            // In real app: const res = await apiClient.post('/calculators/insurance-coverage', ...)
            const annualExp = insuranceData.expenses * 12;
            const total = (annualExp * 20) + insuranceData.liabilities;
            const final = Math.max(0, total - insuranceData.currentInsurance);
            setResult({
                value: final,
                type: "Insurance Coverage Required",
                suggestion: final > 5000000 ? "Term Insurance" : "Balanced Endowment Plan"
            });
        } finally {
            setLoading(false);
        }
    };

    const calculateRetirement = () => {
        setLoading(true);
        const years = retirementData.retAge - retirementData.age;
        const inflatedExp = retirementData.exp * Math.pow(1.06, years);
        const corpus = (inflatedExp * 12) / 0.04; // 4% rule
        setResult({
            value: corpus,
            type: "Total Retirement Corpus Needed",
            suggestion: `Estimated monthly expense at retirement: ₹${Math.round(inflatedExp).toLocaleString("en-IN")}`
        });
        setLoading(false);
    };

    return (
        <section id="advanced-calculators" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Expert Tools</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Built-in Financial Intelligence</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Accurate estimations for your most important life goals.
                    </p>
                </div>

                <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-primary/5 min-h-[600px] flex flex-col lg:flex-row">
                    {/* Sidebar Tabs */}
                    <div className="w-full lg:w-80 bg-primary p-8 lg:p-12 space-y-4">
                        {calculatorOptions.map((opt) => (
                            <button
                                key={opt.id}
                                onClick={() => {
                                    if (opt.id === "lic") {
                                        window.location.href = "/tools/lic-calculators";
                                        return;
                                    }
                                    setActiveTab(opt.id);
                                    setResult(null);
                                }}
                                className={cn(
                                    "w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all text-left",
                                    activeTab === opt.id ? "bg-accent text-primary shadow-lg shadow-accent/20" : "text-white/60 hover:text-white hover:bg-white/5"
                                )}
                            >
                                <opt.icon size={20} />
                                {opt.name}
                            </button>
                        ))}
                        <div className="mt-12 bg-white/5 p-6 rounded-2xl border border-white/10 hidden lg:block">
                            <p className="text-xs text-white/40 leading-relaxed uppercase tracking-tighter italic">
                                *Calculators use standard financial formulas and inflation benchmarks of 6%.
                            </p>
                        </div>
                    </div>

                    {/* Calculator Interface */}
                    <div className="flex-1 p-8 md:p-16">
                        {activeTab === "insurance" && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                                <h3 className="text-3xl font-serif text-primary mb-8 border-b border-slate-100 pb-4">Insurance Coverage Analysis</h3>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Monthly Expenses (₹)</label>
                                        <input
                                            type="number"
                                            value={insuranceData.expenses}
                                            onChange={(e) => setInsuranceData({ ...insuranceData, expenses: Number(e.target.value) })}
                                            className="w-full bg-slate-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-accent outline-none font-black text-primary text-xl"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Total Liabilities/Loans (₹)</label>
                                        <input
                                            type="number"
                                            value={insuranceData.liabilities}
                                            onChange={(e) => setInsuranceData({ ...insuranceData, liabilities: Number(e.target.value) })}
                                            className="w-full bg-slate-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-accent outline-none font-black text-primary text-xl"
                                        />
                                    </div>
                                </div>
                                <button
                                    onClick={calculateInsurance}
                                    className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-primary/95 transition-all shadow-xl shadow-primary/20 w-full"
                                >
                                    Analyze Protection Gap
                                </button>
                            </motion.div>
                        )}

                        {activeTab === "retirement" && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                                <h3 className="text-3xl font-serif text-primary mb-8 border-b border-slate-100 pb-4">Retirement Corpus Planning</h3>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Current Age</label>
                                        <input
                                            type="number"
                                            value={retirementData.age}
                                            onChange={(e) => setRetirementData({ ...retirementData, age: Number(e.target.value) })}
                                            className="w-full bg-slate-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-accent outline-none font-black text-primary text-xl"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Expected Retirement Age</label>
                                        <input
                                            type="number"
                                            value={retirementData.retAge}
                                            onChange={(e) => setRetirementData({ ...retirementData, retAge: Number(e.target.value) })}
                                            className="w-full bg-slate-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-accent outline-none font-black text-primary text-xl"
                                        />
                                    </div>
                                </div>
                                <button
                                    onClick={calculateRetirement}
                                    className="bg-accent text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:shadow-xl transition-all w-full"
                                >
                                    Estimate Future Corpus
                                </button>
                            </motion.div>
                        )}

                        {/* Display Result Popup */}
                        {result && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="mt-12 p-10 rounded-[2.5rem] bg-emerald-50 border-2 border-emerald-100 relative overflow-hidden"
                            >
                                <div className="relative z-10">
                                    <p className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-2">{result.type}</p>
                                    <h4 className="text-5xl font-serif font-black text-primary mb-4 italic">₹{Math.round(result.value).toLocaleString("en-IN")}</h4>
                                    <div className="bg-white/50 p-6 rounded-2xl border border-emerald-200">
                                        <p className="text-emerald-900 font-bold italic">💡 Advisor Note: {result.suggestion}</p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

import { cn } from "@/lib/utils";

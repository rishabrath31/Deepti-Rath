"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, XCircle, Info, TrendingUp, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const comparisonData = [
    { parameter: "Purpose", lic: "Protection + Saving", mf: "Wealth Creation", fd: "Capital Preservation", stocks: "High Growth" },
    { parameter: "Risk Level", lic: "Zero to Low", mf: "Medium to High", fd: "Very Low", stocks: "Very High" },
    { parameter: "Capital Protection", lic: "Guranteed (Sovereign)", mf: "Market Dependent", fd: "High (Limited DICGC)", stocks: "No Protection" },
    { parameter: "Tax Benefit", lic: "Sec 80C & 10(10D)", mf: "ELSS Only (80C)", fd: "Taxable Returns", stocks: "LTCG/STCG Taxable" },
    { parameter: "Liquidity", lic: "Medium (Surrender/Loan)", mf: "High (T+2 Days)", fd: "High (Instant)", stocks: "Very High" },
    { parameter: "Death Benefit", lic: "Comprehensive Cover", mf: "Only Fund Value", fd: "Only Principal+Interest", stocks: "Only Portfolio Value" },
];

export default function ComparisonPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <Link href="/" className="inline-flex items-center gap-2 text-primary font-bold mb-12 hover:text-accent transition-colors">
                    <ArrowLeft size={20} /> Back to Home
                </Link>

                <div className="text-center mb-20">
                    <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Smart Comparison</span>
                    <h1 className="text-5xl md:text-6xl font-serif text-primary mb-6">LIC vs Other Investments</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Understand where your money works best. Successful financial planning is about balance, not just picking one.
                    </p>
                </div>

                {/* Investment Philosophy Infographic */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    <div className="bg-primary p-12 rounded-[3rem] text-white flex flex-col justify-center">
                        <ShieldCheck size={48} className="text-accent mb-6" />
                        <h3 className="text-3xl font-serif mb-4">Insurance = <span className="text-accent">Protection</span></h3>
                        <p className="text-lg opacity-80 leading-relaxed italic">
                            "Insurance is meant for the 'What Ifs' of life. It creates an instant estate for your family in case you are not around."
                        </p>
                    </div>
                    <div className="bg-accent p-12 rounded-[3rem] text-primary flex flex-col justify-center">
                        <TrendingUp size={48} className="text-primary mb-6" />
                        <h3 className="text-3xl font-serif mb-4">Mutual Funds = <span className="text-white">Wealth</span></h3>
                        <p className="text-lg opacity-90 leading-relaxed italic">
                            "Mutual Funds are meant for wealth appreciation and beating inflation over the long term for your known goals."
                        </p>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-primary/5">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-primary text-white">
                                    <th className="p-8 text-xl font-serif">Main Parameters</th>
                                    <th className="p-8 text-xl font-serif bg-accent/20 text-primary border-x border-white/10 underline decoration-accent decoration-2 underline-offset-4">LIC Insurance</th>
                                    <th className="p-8 text-xl font-serif">Mutual Funds</th>
                                    <th className="p-8 text-xl font-serif">Fixed Deposits</th>
                                    <th className="p-8 text-xl font-serif">Direct Stocks</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {comparisonData.map((row, i) => (
                                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                                        <td className="p-8 font-bold text-primary bg-slate-50/50">{row.parameter}</td>
                                        <td className="p-8 font-black text-primary bg-accent/5 italic">{row.lic}</td>
                                        <td className="p-8 text-muted-foreground">{row.mf}</td>
                                        <td className="p-8 text-muted-foreground">{row.fd}</td>
                                        <td className="p-8 text-muted-foreground">{row.stocks}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-16 bg-white p-10 rounded-3xl border-l-[12px] border-accent shadow-sm flex items-start gap-6">
                    <Info className="text-accent shrink-0" size={32} />
                    <div>
                        <h4 className="text-xl font-bold text-primary mb-2">Expert Advice: The Bucket Portfolio</h4>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            A sound financial plan involves allocating funds across all these categories. Use **LIC** for your family's safety and tax-free retirement, **FDs** for emergency funds, and **Mutual Funds/Stocks** for aggressive wealth creation. Never mix insurance with pure investment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

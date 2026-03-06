"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Search, FileText, AlertCircle, CheckCircle2, Loader2, Calendar, User, Hash } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PolicyVerificationPage() {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        policyNo: "",
        fullName: "",
        dob: "",
        polDob: "",
        consent: false
    });

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setResult(null);

        if (!formData.consent) {
            setError("Please provide your consent to verify the policy.");
            setLoading(false);
            return;
        }

        try {
            // Mocking the Consent Artifact for Sandbox
            const requestPayload = {
                txnId: `f7f1469c-${Math.random().toString(36).substr(2, 9)}`,
                format: "pdf",
                certificateParameters: {
                    PolDOB: formData.polDob,
                    PolicyNo: formData.policyNo,
                    FullName: formData.fullName,
                    DOB: formData.dob.split('-').reverse().join('-') // converting to DD-MM-YYYY if needed or keeping as per API requirement
                },
                consentArtifact: {
                    consent: {
                        consentId: "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
                        timestamp: new Date().toISOString(),
                        dataConsumer: { id: "in.gov.sandbox" },
                        dataProvider: { id: "licindia" },
                        purpose: { description: "Policy Verification" },
                        user: {
                            idType: "MOBILE",
                            idNumber: "9988776655",
                            mobile: "9988776655",
                            email: "test@email.com"
                        },
                        data: { id: "PODOC" },
                        permission: {
                            access: "VIEW",
                            dateRange: {
                                from_date: new Date().toISOString(),
                                to_date: new Date(Date.now() + 86400000).toISOString()
                            },
                            frequency: {
                                unit: "MONTH",
                                value: 1,
                                repeats: 1
                            }
                        }
                    },
                    signature: { signature: "mock_signature" }
                }
            };

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/policy/verify`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(requestPayload)
            });

            const data = await response.json();

            if (response.ok) {
                setResult(data);
            } else {
                setError(data.detail || "Failed to verify policy. Please check your details.");
            }
        } catch (err) {
            setError("A network error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            <section className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="inline-flex items-center justify-center w-20 h-20 bg-primary/5 text-primary rounded-3xl mb-8"
                        >
                            <ShieldCheck size={40} />
                        </motion.div>
                        <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">Policy Verification</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto italic font-light">
                            Instantly verify your LIC policy documents using our secure digital verification tool.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-12 items-start">
                        {/* Form Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:col-span-3 bg-white p-10 rounded-[3rem] shadow-2xl shadow-primary/5 border border-primary/5"
                        >
                            <h3 className="text-2xl font-bold text-primary mb-8 border-b border-primary/5 pb-6">Enter Policy Details</h3>

                            <form onSubmit={handleVerify} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 block">Policy Number</label>
                                        <div className="relative">
                                            <Hash className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20" size={18} />
                                            <input
                                                type="text"
                                                required
                                                placeholder="e.g. 123456789"
                                                className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 focus:ring-2 focus:ring-accent transition-all outline-none text-primary font-bold"
                                                value={formData.policyNo}
                                                onChange={(e) => setFormData({ ...formData, policyNo: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 block">Full Name (As per Policy)</label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20" size={18} />
                                            <input
                                                type="text"
                                                required
                                                placeholder="Demo User"
                                                className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 focus:ring-2 focus:ring-accent transition-all outline-none text-primary font-bold"
                                                value={formData.fullName}
                                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 block">Policy Date of Birth</label>
                                        <div className="relative">
                                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20" size={18} />
                                            <input
                                                type="date"
                                                required
                                                className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 focus:ring-2 focus:ring-accent transition-all outline-none text-primary font-bold"
                                                value={formData.polDob}
                                                onChange={(e) => setFormData({ ...formData, polDob: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 block">Proposer Date of Birth</label>
                                        <div className="relative">
                                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20" size={18} />
                                            <input
                                                type="date"
                                                required
                                                className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 focus:ring-2 focus:ring-accent transition-all outline-none text-primary font-bold"
                                                value={formData.dob}
                                                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-amber-50/50 border border-amber-50">
                                    <input
                                        type="checkbox"
                                        id="consent"
                                        className="mt-1 w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary"
                                        checked={formData.consent}
                                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                                    />
                                    <label htmlFor="consent" className="text-xs text-primary/60 leading-relaxed italic">
                                        I hereby provide my consent to verify my policy details through the official LIC database via the integrated secure API channel. I understand this data is used for verification purposes only.
                                    </label>
                                </div>

                                <button
                                    disabled={loading}
                                    className="w-full bg-primary text-white py-6 rounded-3xl font-black uppercase tracking-widest hover:bg-primary/95 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                                >
                                    {loading ? (
                                        <Loader2 className="animate-spin" />
                                    ) : (
                                        <Search size={20} />
                                    )}
                                    {loading ? "Verifying Policy..." : "Verify Policy Now"}
                                </button>
                            </form>
                        </motion.div>

                        {/* Result Side */}
                        <div className="lg:col-span-2 space-y-6">
                            <AnimatePresence mode="wait">
                                {error && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="bg-red-50 p-8 rounded-3xl border border-red-100 flex gap-4"
                                    >
                                        <AlertCircle className="text-red-600 shrink-0" size={24} />
                                        <div>
                                            <h4 className="text-red-900 font-bold mb-1">Verification Failed</h4>
                                            <p className="text-red-700 text-sm">{error}</p>
                                        </div>
                                    </motion.div>
                                )}

                                {result && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-emerald-50 p-8 rounded-[3rem] border border-emerald-100/50 shadow-xl shadow-emerald-500/5"
                                    >
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
                                                <CheckCircle2 size={24} />
                                            </div>
                                            <h4 className="text-primary font-black uppercase tracking-tight">Verified Successfully</h4>
                                        </div>

                                        <div className="space-y-4 mb-10">
                                            <div className="p-4 rounded-xl bg-white/60">
                                                <p className="text-[10px] text-primary/40 font-black uppercase tracking-widest mb-1">Policy Status</p>
                                                <p className="text-emerald-700 font-bold">Active / In-Force</p>
                                            </div>
                                            <div className="p-4 rounded-xl bg-white/60">
                                                <p className="text-[10px] text-primary/40 font-black uppercase tracking-widest mb-1">Transaction ID</p>
                                                <p className="text-primary font-mono text-xs">{result.txnId}</p>
                                            </div>
                                        </div>

                                        <button className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors">
                                            <FileText size={18} />
                                            Download Document (.pdf)
                                        </button>
                                    </motion.div>
                                )}

                                {!error && !result && (
                                    <div className="bg-slate-100/50 p-12 rounded-[3.5rem] border-2 border-dashed border-slate-200 text-center">
                                        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-300 mx-auto mb-6">
                                            <FileText size={32} />
                                        </div>
                                        <p className="text-slate-400 text-sm italic">
                                            Result will appear here after verification.
                                        </p>
                                    </div>
                                )}
                            </AnimatePresence>

                            <div className="p-8 rounded-3xl bg-primary text-white">
                                <h5 className="font-serif italic italic mb-4">Official Verification</h5>
                                <p className="text-white/60 text-xs leading-relaxed">
                                    This tool uses the API Setu infrastructure to securely pull data from the LIC of India's authorized systems. This is an official sandbox integration.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

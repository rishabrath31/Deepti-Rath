"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authApi } from "@/lib/api";
import { Lock, Mail, Loader2 } from "lucide-react";

export default function AdminLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const formData = new FormData();
            formData.append("username", email);
            formData.append("password", password);

            const response = await authApi.login(formData);
            localStorage.setItem("token", response.data.access_token);
            router.push("/admin/dashboard");
        } catch (err: any) {
            setError("Invalid credentials. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
            <div className="max-w-md w-full bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-primary/5">
                <div className="bg-primary p-12 text-center text-white">
                    <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-primary text-3xl font-black mx-auto mb-6">
                        LIC
                    </div>
                    <h1 className="text-3xl font-serif font-bold">Advisor Portal</h1>
                    <p className="text-white/60 mt-2">Secure access for authorized users only</p>
                </div>

                <form onSubmit={handleLogin} className="p-10 space-y-6">
                    {error && (
                        <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-bold border border-red-100 italic">
                            {error}
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-slate-50 border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-accent outline-none font-medium"
                                placeholder="admin@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-slate-50 border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-accent outline-none font-medium"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <button
                        disabled={loading}
                        className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-primary/95 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : "Sign In to Dashboard"}
                    </button>
                </form>
            </div>
        </div>
    );
}

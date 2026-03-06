"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
    Users,
    Calendar,
    FileText,
    MessageSquare,
    LayoutDashboard,
    LogOut,
    TrendingUp,
    Clock,
    CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
    { name: "Overview", icon: LayoutDashboard, href: "/admin/dashboard" },
    { name: "Appointments", icon: Calendar, href: "/admin/appointments" },
    { name: "Blog Management", icon: FileText, href: "/admin/blog" },
    { name: "Inquiries", icon: MessageSquare, href: "/admin/inquiries" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("Overview");

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/admin");
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.push("/admin");
    };

    return (
        <div className="flex min-h-screen bg-slate-50">
            {/* Sidebar */}
            <aside className="w-80 bg-primary text-white p-8 flex flex-col fixed h-full">
                <div className="flex items-center gap-3 mb-12">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-primary text-2xl font-black">
                        LIC
                    </div>
                    <span className="font-serif font-bold text-xl">Advisor Portal</span>
                </div>

                <nav className="flex-1 space-y-2">
                    {sidebarLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => setActiveTab(link.name)}
                            className={cn(
                                "w-full flex items-center gap-4 px-6 py-4 rounded-xl transition-all font-bold",
                                activeTab === link.name ? "bg-accent text-primary shadow-lg shadow-accent/20" : "hover:bg-white/5 text-white/70"
                            )}
                        >
                            <link.icon size={20} />
                            {link.name}
                        </button>
                    ))}
                </nav>

                <button
                    onClick={handleLogout}
                    className="mt-auto flex items-center gap-4 px-6 py-4 rounded-xl text-white/50 hover:text-white hover:bg-red-500/10 transition-all font-bold"
                >
                    <LogOut size={20} />
                    Sign Out
                </button>
            </aside>

            {/* Main Content */}
            <main className="ml-80 flex-1 p-12">
                <header className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-4xl font-serif text-primary mb-2">Welcome Back, Advisor</h1>
                        <p className="text-muted-foreground">Here's what's happening with your portfolio today.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <p className="font-bold text-primary">Rishab Rath</p>
                            <p className="text-xs text-muted-foreground">Senior LIC Consultant</p>
                        </div>
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-black">
                            RR
                        </div>
                    </div>
                </header>

                {activeTab === "Overview" ? (
                    <div className="space-y-12">
                        {/* Stats Overview */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { label: "Total Inquiries", value: "128", icon: MessageSquare, color: "text-blue-600", bg: "bg-blue-50" },
                                { label: "Booked Appointments", value: "45", icon: Calendar, color: "text-accent", bg: "bg-accent/10" },
                                { label: "Blog Views", value: "1,240", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50" },
                                { label: "Client Satisfied", value: "99%", icon: CheckCircle2, color: "text-purple-600", bg: "bg-purple-50" },
                            ].map((stat) => (
                                <div key={stat.label} className="bg-white p-8 rounded-3xl border border-primary/5 shadow-sm">
                                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6", stat.bg, stat.color)}>
                                        <stat.icon size={24} />
                                    </div>
                                    <p className="text-4xl font-serif font-black text-primary mb-2">{stat.value}</p>
                                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Recent Activity */}
                        <div className="grid lg:grid-cols-2 gap-12">
                            <div className="bg-white p-8 rounded-3xl border border-primary/5 shadow-sm">
                                <div className="flex justify-between items-center mb-8">
                                    <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                                        <Clock className="text-accent" /> Recent Appointments
                                    </h3>
                                    <button className="text-accent text-sm font-bold hover:underline">View All</button>
                                </div>
                                <div className="space-y-6">
                                    {[
                                        { name: "Amit Kumar", date: "Today, 2:00 PM", status: "Confirmed" },
                                        { name: "Priya Singh", date: "Tomorrow, 10:30 AM", status: "Pending" },
                                        { name: "Rahul Verma", date: "8 Mar, 4:00 PM", status: "Cancelled" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                            <div>
                                                <p className="font-bold text-primary">{item.name}</p>
                                                <p className="text-xs text-muted-foreground">{item.date}</p>
                                            </div>
                                            <span className={cn(
                                                "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                                                item.status === "Confirmed" ? "bg-emerald-100 text-emerald-700" :
                                                    item.status === "Pending" ? "bg-amber-100 text-amber-700" :
                                                        "bg-red-100 text-red-700"
                                            )}>
                                                {item.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-3xl border border-primary/5 shadow-sm">
                                <h3 className="text-xl font-bold text-primary mb-8 flex items-center gap-2">
                                    <TrendingUp className="text-accent" /> Monthly Performance
                                </h3>
                                <div className="h-64 flex items-end gap-4 px-4 pb-4">
                                    {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                                        <div key={i} className="flex-1 space-y-2 group">
                                            <div
                                                className="w-full bg-primary/10 group-hover:bg-accent rounded-t-lg transition-all"
                                                style={{ height: `${h}%` }}
                                            />
                                            <p className="text-[10px] text-center font-bold text-muted-foreground">M {i + 1}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white p-12 rounded-[2.5rem] border border-primary/5 shadow-sm min-h-[500px] flex items-center justify-center text-center">
                        <div>
                            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mx-auto mb-6">
                                <FileText size={40} />
                            </div>
                            <h3 className="text-2xl font-serif text-primary mb-2 italic">Module under construction</h3>
                            <p className="text-muted-foreground">The {activeTab} management system is being implemented.</p>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import { Search, Tag, Calendar, ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const blogCategories = ["All", "Insurance", "Retirement", "Investment", "Tax Savings", "Child Future"];

const dummyPosts = [
    {
        title: "Why Life Insurance Should Be Your First Investment",
        slug: "why-insurance-first-investment",
        category: "Insurance",
        excerpt: "Before you think about stocks or mutual funds, understand why a safety net is non-negotiable for a steady financial life.",
        date: "March 6, 2026",
        readingTime: "5 min read"
    },
    {
        title: "Tax Saving Tips for Salaried Professionals",
        slug: "tax-saving-tips-2026",
        category: "Tax Savings",
        excerpt: "Maximize your take-home salary by utilizing Section 80C, 80D, and 10(10D) effectively with these smart tips.",
        date: "March 4, 2026",
        readingTime: "8 min read"
    },
    {
        title: "Retirement Planning Guide for Your 30s",
        slug: "retirement-planning-guide",
        category: "Retirement",
        excerpt: "Starting early is the secret to a comfortable retirement. Learn how to build a 5-crore corpus starting with small steps.",
        date: "March 1, 2026",
        readingTime: "12 min read"
    }
];

export default function BlogListingPage() {
    const [filter, setFilter] = useState("All");

    return (
        <div className="pt-32 pb-24 min-h-screen bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <Link href="/" className="inline-flex items-center gap-2 text-primary font-bold mb-12 hover:text-accent transition-colors">
                    <ArrowLeft size={20} /> Back to Home
                </Link>

                <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
                    <div className="max-w-2xl">
                        <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Advisor's Journal</span>
                        <h1 className="text-5xl md:text-6xl font-serif text-primary mb-6">Financial Awareness & <span className="text-accent italic">Insights</span></h1>
                        <p className="text-lg text-muted-foreground leading-relaxed italic">
                            Helping you make educated decisions for your future wealth and protection.
                        </p>
                    </div>

                    <div className="w-full md:w-80">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                className="w-full bg-white border-2 border-primary/5 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-accent outline-none font-medium shadow-sm"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-12">
                    {blogCategories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={cn(
                                "px-6 py-2 rounded-full font-bold transition-all border-2",
                                filter === cat ? "bg-primary border-primary text-white" : "bg-white border-transparent text-primary hover:border-accent"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {dummyPosts.map((post, i) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[2.5rem] overflow-hidden border border-primary/5 hover:border-accent/40 shadow-sm hover:shadow-2xl transition-all group flex flex-col"
                        >
                            <div className="p-8 pb-4 flex-1">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                                        {post.category}
                                    </span>
                                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                                        <Calendar size={12} /> {post.date}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-serif text-primary font-bold mb-4 group-hover:text-accent transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                                    {post.excerpt}
                                </p>
                            </div>
                            <div className="p-8 pt-0 mt-auto">
                                <div className="border-t border-slate-50 pt-6 flex justify-between items-center">
                                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-widest">{post.readingTime}</span>
                                    <Link href={`/blog/${post.slug}`} className="text-primary font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                        Read More <ChevronRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

import { cn } from "@/lib/utils";

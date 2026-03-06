"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-primary text-2xl font-bold">
                                LIC
                            </div>
                            <span className="font-serif font-bold text-2xl">Rishab Rath</span>
                        </div>
                        <p className="text-white/60 leading-relaxed italic">
                            "Your trust is my greatest asset. Dedicated to securing your future with the gold standard of financial planning."
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-8 text-accent uppercase tracking-widest">Quick Links</h4>
                        <ul className="space-y-4">
                            {["Home", "About", "Insurance Plans", "Calculators", "Blog", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-white/70 hover:text-accent transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-8 text-accent uppercase tracking-widest">Insurance Plans</h4>
                        <ul className="space-y-4">
                            {["Life Insurance", "Term Insurance", "Child Education", "Retirement Planning", "Tax Savings", "Health Insurance"].map((item) => (
                                <li key={item}>
                                    <Link href="#plans" className="text-white/70 hover:text-accent transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-8 text-accent uppercase tracking-widest">Contact Info</h4>
                        <ul className="space-y-6">
                            <li className="flex gap-4 items-start">
                                <Phone className="text-accent shrink-0" size={20} />
                                <span className="text-white/70">+91 98765 43210</span>
                            </li>
                            <li className="flex gap-4 items-start">
                                <Mail className="text-accent shrink-0" size={20} />
                                <span className="text-white/70">contact@rishabrath.com</span>
                            </li>
                            <li className="flex gap-4 items-start">
                                <MapPin className="text-accent shrink-0" size={20} />
                                <span className="text-white/70">123, Finance Plaza, Marine Drive, Mumbai, 400001</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
                    <p>© 2026 Rishab Rath Financial Services. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-accent">Privacy Policy</Link>
                        <Link href="#" className="hover:text-accent">Terms of Service</Link>
                        <Link href="#" className="hover:text-accent">LIC Disclaimer</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

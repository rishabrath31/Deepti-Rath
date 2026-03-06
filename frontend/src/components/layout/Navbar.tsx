"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Knowledge Hub", href: "/education/why-life-insurance" },
    { name: "Comparison", href: "/education/comparison" },
    { name: "Calculators", href: "/#advanced-calculators" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
                scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-accent text-2xl font-bold">
                        LIC
                    </div>
                    <div className="flex flex-col">
                        <span className={cn("font-serif font-bold text-xl leading-none", scrolled ? "text-primary" : "text-primary")}>
                            Rishab Rath
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-accent font-semibold">
                            Financial Advisor
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-primary font-medium hover:text-accent transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
                        </Link>
                    ))}
                    <Link
                        href="#calculate"
                        className="bg-accent text-white px-6 py-2 rounded-full font-semibold hover:bg-accent/90 transition-all flex items-center gap-2"
                    >
                        <Calendar size={18} />
                        Book Now
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-primary"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden py-6 px-8 flex flex-col gap-4 border-t"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-semibold text-primary"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className="bg-primary text-white text-center py-3 rounded-lg mt-4 font-bold"
                            onClick={() => setIsOpen(false)}
                        >
                            Get a Quote
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

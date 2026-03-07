import LicPlanCalculator from "@/components/calculators/LicPlanCalculator";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function LicCalculatorsPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            <header className="py-20 bg-primary text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="grid grid-cols-12 h-full">
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="border-r border-white h-full" />
                        ))}
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Professional Tools</span>
                    <h1 className="text-5xl md:text-7xl font-serif mb-6 italic">LIC All-in-One <span className="text-accent underline underline-offset-8">Calculator</span></h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Precision planning for your LIC policies. Calculate premiums, maturity benefits, and survival benefits instantly.
                    </p>
                </div>
            </header>

            <section className="py-20 -mt-20 relative z-20">
                <div className="max-w-7xl mx-auto px-6">
                    <LicPlanCalculator />
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-accent font-bold text-xl">01</div>
                            <h3 className="text-xl font-bold text-primary">Select Your Plan</h3>
                            <p className="text-muted-foreground leading-relaxed">Choose from various LIC plans like Endowment, Money Back, or Jeevan Labh to see specific benefits.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-accent font-bold text-xl">02</div>
                            <h3 className="text-xl font-bold text-primary">Input Parameters</h3>
                            <p className="text-muted-foreground leading-relaxed">Adjust age, term, and sum assured to find the perfect balance between premium and maturity.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-accent font-bold text-xl">03</div>
                            <h3 className="text-xl font-bold text-primary">Get Your Quote</h3>
                            <p className="text-muted-foreground leading-relaxed">View detailed breakdowns of bonus, FAB, and final maturity. Download a professional PDF quote instantly.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

import Hero from "@/components/sections/Hero";
import Plans from "@/components/sections/Plans";
import Calculators from "@/components/sections/Calculators";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-primary p-12 rounded-3xl text-white">
              <h2 className="text-4xl font-serif mb-6 italic text-accent">Personalized Strategy</h2>
              <p className="text-lg leading-relaxed opacity-90 mb-6">
                With over 15 years of dedicated service in the financial industry, I've helped thousands of families achieve their dreams through strategic LIC planning.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3 items-center font-bold">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  100% Transparency
                </li>
                <li className="flex gap-3 items-center font-bold">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  Claim Assistance Support
                </li>
                <li className="flex gap-3 items-center font-bold">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  Custom Investment Portfolios
                </li>
              </ul>
            </div>
            <div>
              <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">About Me</span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Meet Rishab Rath</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Your financial journey is unique, and your insurance should be too. I specialize in crafting bespoke financial solutions that align with your life goals.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <h4 className="text-primary font-bold text-xl mb-1">MDRT</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Club Member</p>
                </div>
                <div>
                  <h4 className="text-primary font-bold text-xl mb-1">5000+</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Active Policies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Plans />
      <Calculators />

      {/* Contact & Appointment Section */}
      <section id="contact" className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-white h-full" />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
              <h2 className="text-5xl font-serif mb-8">Ready to Secure Your <span className="text-accent underline underline-offset-8">Legacy</span>?</h2>
              <p className="text-lg text-white/70 mb-12 max-w-lg">
                Book a complimentary 30-minute consultation today. Let's build a roadmap for your financial freedom.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6 items-center">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-accent">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-widest text-white/50 mb-1">WhatsApp Quick Contact</p>
                    <p className="text-xl font-bold">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex gap-6 items-center">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-accent">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-widest text-white/50 mb-1">Operational Hours</p>
                    <p className="text-xl font-bold">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-10 text-primary shadow-2xl">
              <h3 className="text-3xl font-serif font-bold mb-8">Schedule a Call</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Full Name</label>
                    <input type="text" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-accent outline-none" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                    <input type="email" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-accent outline-none" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Select Date</label>
                  <input type="date" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-accent outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Message (Optional)</label>
                  <textarea className="w-full bg-slate-50 border-none rounded-xl p-4 h-32 focus:ring-2 focus:ring-accent outline-none" placeholder="Talk about your financial goals..."></textarea>
                </div>
                <button className="w-full bg-accent text-white py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-accent/90 transition-all shadow-xl shadow-accent/20">
                  Book My Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

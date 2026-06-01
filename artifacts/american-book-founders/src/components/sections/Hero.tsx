import { useState } from "react";
import { Star, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="relative bg-navy text-white pt-24 pb-20 overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-20 left-10 text-gold/20 animate-pulse">
        <Star className="w-10 h-10 fill-current" />
      </div>
      <div className="absolute bottom-16 left-1/3 text-gold/15 animate-pulse delay-700">
        <Star className="w-7 h-7 fill-current" />
      </div>
      <div className="absolute top-1/2 right-[55%] text-gold/10 animate-pulse delay-1000">
        <Star className="w-14 h-14 fill-current" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left — Headline + Trust + CTAs */}
          <div className="space-y-7 relative z-10 pt-4">
            <h1 className="text-5xl md:text-6xl lg:text-[3.8rem] xl:text-[4.2rem] font-serif font-bold leading-[1.1]">
              Control Your Work, Share Your Voice, And Keep{" "}
              <span className="text-gold">100% Of Your Royalties</span> Of Your Story
            </h1>

            <p className="text-lg text-gray-300 font-medium">
              Fostering Trust On Top Review Platforms
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3 border border-white/10">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 font-semibold">Goodreads</span>
                  <div className="flex items-center gap-1 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                    ))}
                    <span className="text-white font-bold text-sm ml-1">4.9</span>
                  </div>
                  <span className="text-[10px] text-gray-400 mt-0.5">700+ Reviews</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3 border border-white/10">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 font-semibold">Google</span>
                  <div className="flex items-center gap-1 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                    ))}
                    <span className="text-white font-bold text-sm ml-1">4.8</span>
                  </div>
                  <span className="text-[10px] text-gray-400 mt-0.5">Verified</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gold hover:bg-yellow-400 text-navy font-bold text-base px-8 h-13 rounded-md">
                Get A Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 hover:text-white font-bold text-base px-8 h-13 rounded-md">
                View Portfolio
              </Button>
            </div>
          </div>

          {/* Right — Lead Form Card */}
          <div className="relative z-10">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Form Header */}
              <div className="bg-gold px-8 py-5">
                <h2 className="text-navy font-serif font-bold text-2xl">Get A Free Consultation</h2>
                <p className="text-navy/70 text-sm mt-1">Fill out the form and we'll get back to you within 24 hours</p>
              </div>

              {/* Form Body */}
              <div className="px-8 py-7">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 fill-gold text-gold" />
                    </div>
                    <h3 className="text-navy font-serif font-bold text-xl mb-2">Thank You!</h3>
                    <p className="text-gray-500 text-sm">Our expert team will contact you shortly to discuss your project.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-navy font-semibold text-sm mb-1.5">Full Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-navy font-semibold text-sm mb-1.5">Email Address <span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-navy font-semibold text-sm mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-navy font-semibold text-sm mb-1.5">Service Required</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition bg-white"
                      >
                        <option value="">Select a service</option>
                        <option value="ghostwriting">Ghostwriting</option>
                        <option value="editing">Editing &amp; Proofreading</option>
                        <option value="cover-design">Book Cover Design</option>
                        <option value="publishing">Publishing Services</option>
                        <option value="marketing">Book Marketing</option>
                        <option value="audiobook">Audiobook Production</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-navy hover:bg-navy/90 text-white font-bold py-4 rounded-lg text-base transition-colors mt-2"
                    >
                      Get A Free Consultation
                    </button>
                  </form>
                )}

                {/* Contact info strip */}
                <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col sm:flex-row gap-3 justify-center items-center text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-gold" />
                    +1 (800) 555-0199
                  </span>
                  <span className="hidden sm:block text-gray-200">|</span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-gold" />
                    info@americanbookfounders.com
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

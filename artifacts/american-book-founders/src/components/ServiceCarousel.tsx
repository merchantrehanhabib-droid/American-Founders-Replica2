import { useState, useEffect } from "react";
import { X, Send, Phone, CheckCircle } from "lucide-react";

interface LeadPopupProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  source?: string;
}

export default function LeadPopup({
  open,
  onClose,
  title = "Get A Free Quote",
  subtitle = "Fill in your details and our team will contact you within 24 hours.",
  source = "cta-popup",
}: LeadPopupProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Reset when opening
  useEffect(() => {
    if (open) {
      setSubmitted(false);
      setSubmitting(false);
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && open) onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: `Service: ${form.service || "N/A"}\n${form.message}`,
          source,
        }),
      });
    } catch (_) {
      /* silent */
    }
    setSubmitted(true);
    setSubmitting(false);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-[480px] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gold px-6 py-4 flex items-center justify-between">
          <div>
            <h3 className="font-serif font-bold text-navy text-lg">{title}</h3>
            <p className="text-navy/70 text-xs mt-0.5">{subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="text-navy/60 hover:text-navy transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7 text-green-600" />
              </div>
              <h4 className="font-serif font-bold text-navy text-lg mb-2">
                Thank You!
              </h4>
              <p className="text-gray-500 text-sm">
                Our team has received your request and will contact you within 24 hours.
              </p>
              <button
                onClick={onClose}
                className="mt-6 bg-navy text-white font-bold px-6 py-2.5 rounded-md text-sm hover:bg-navy/90 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-500 uppercase">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-500 uppercase">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-500 uppercase">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-500 uppercase">
                  Interested Service
                </label>
                <select
                  value={form.service}
                  onChange={(e) =>
                    setForm({ ...form, service: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition bg-white"
                >
                  <option value="">Select a service...</option>
                  <option value="Ghost Writing">Ghost Writing</option>
                  <option value="Book Writing">Book Writing</option>
                  <option value="Memoir Writing">Memoir Writing</option>
                  <option value="Biography Writing">Biography Writing</option>
                  <option value="Children's Book">Children's Book Writing</option>
                  <option value="Proofreading">Proofreading</option>
                  <option value="Copy Editing">Copy Editing</option>
                  <option value="Developmental Editing">Developmental Editing</option>
                  <option value="Book Formatting">Book Formatting</option>
                  <option value="Self Publishing">Self Publishing</option>
                  <option value="eBook Publishing">eBook Publishing</option>
                  <option value="ISBN & Copyright">ISBN & Copyright</option>
                  <option value="Print-on-Demand">Print-on-Demand</option>
                  <option value="Author Website">Author Website</option>
                  <option value="Book Cover Design">Book Cover Design</option>
                  <option value="Social Media Marketing">Social Media Marketing</option>
                  <option value="Book Trailer">Book Trailer</option>
                  <option value="Audiobook Production">Audiobook Production</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-500 uppercase">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-navy hover:bg-navy/90 text-white font-bold py-3.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Request
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 pt-1">
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>Or call us at</span>
                <a
                  href="tel:+18005550199"
                  className="font-semibold hover:text-gold transition-colors"
                >
                  +1 (800) 555-0199
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { X, MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200">
        
        {/* Header */}
        <div className="bg-[#0b1a48] text-white p-5 flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-base tracking-wide">
              Contact & Campus Visit
            </h3>
            <p className="text-[11px] text-blue-200">
              GanitGridd - Math & Science Academy • Gummidipoondi Branch
            </p>
          </div>
          <button onClick={onClose} className="text-slate-300 hover:text-white p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">
                Message Sent Successfully!
              </h4>
              <p className="text-xs text-slate-600">
                Thank you, {name}. Our academy team will reach back at {phone} promptly.
              </p>
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="mt-2 px-6 py-2 rounded-full bg-[#0b1a48] text-white text-xs font-bold"
              >
                Close
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              
              {/* Academy Contact Details */}
              <div className="space-y-2.5 p-3.5 bg-blue-50/60 rounded-2xl border border-blue-100 text-xs text-slate-700">
                <div className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-[#0b1a48] flex-shrink-0 mt-0.5" />
                  <span>1st floor (V.V.School cross street), near Railway station, Gummidipoondi, Tamil Nadu 601201</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Phone className="w-4 h-4 text-[#0b1a48] flex-shrink-0" />
                  <a href="tel:09442678741" className="font-bold text-[#0b1a48] hover:underline">09442678741 / 94426 78741</a>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Mail className="w-4 h-4 text-[#0b1a48] flex-shrink-0" />
                  <span>contact@ganitgridd.com</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Clock className="w-4 h-4 text-[#0b1a48] flex-shrink-0" />
                  <span>Office Hours: Mon - Sun (8:00 AM - 7:30 PM)</span>
                </div>
              </div>

              {/* Inquiry Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                    className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-slate-800 focus:outline-hidden focus:border-blue-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter 10-digit mobile number"
                    required
                    className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-slate-800 focus:outline-hidden focus:border-blue-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">How can we help? *</label>
                  <textarea
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    rows={3}
                    placeholder="Ask about batch timings, fee structures, hostel assistance..."
                    required
                    className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-slate-800 focus:outline-hidden focus:border-blue-700 resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-full bg-[#0b1a48] hover:bg-blue-900 text-white text-xs font-bold transition-colors flex items-center space-x-1.5 shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};

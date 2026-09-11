import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Calendar,
  Navigation,
  Train,
  Bus
} from 'lucide-react';
import { PageType } from '../types';

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
  onOpenEnroll: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenEnroll
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Admission Inquiry',
    visitDate: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#081747] text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" width="100%" height="100%">
            <defs>
              <pattern id="contactGridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contactGridPattern)" />
          </svg>
        </div>

        <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center space-x-2 text-xs text-blue-200 mb-4">
            <button 
              onClick={() => onNavigate('home')} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-white font-semibold">Contact & Campus Visit</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-400/30 text-amber-300 text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>We Are Here to Guide Your Career</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
              Contact & Visit GanitGridd
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Connect with our academic counseling team, visit our air-conditioned campus and library in Gummidipoondi, or request free study brochures.
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid: Form + Address Info */}
      <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Details Cards & Transit */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-lg font-black text-[#081747]">
                Main Campus & Head Office
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#081747] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5">Campus Location</strong>
                    <span>No. 12, GNT Road, Near State Bank of India, Gummidipoondi, Tiruvallur District, Tamil Nadu - 601201</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5">Admissions & Helpline Numbers</strong>
                    <div className="space-y-0.5 font-medium">
                      <a href="tel:9442678741" className="block text-blue-700 hover:underline">+91 94426 78741</a>
                      <a href="tel:8148847444" className="block text-blue-700 hover:underline">+91 81488 47444</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5">Email Support</strong>
                    <a href="mailto:contact@ganitgridd.com" className="text-blue-700 hover:underline font-medium">
                      contact@ganitgridd.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5">Campus Operating Hours</strong>
                    <span>Monday – Sunday: 8:00 AM – 7:30 PM (Library accessible 24/7 for enrolled students)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Transit & Commute Guide */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h4 className="font-bold text-sm text-[#081747] flex items-center space-x-2">
                <Navigation className="w-4 h-4 text-blue-600" />
                <span>How to Reach Our Campus</span>
              </h4>
              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start space-x-2.5">
                  <Train className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold text-slate-800">By Suburban Train:</strong> Gummidipoondi Suburban Railway Station is located just 1.2 km away (5 mins by auto). Frequent EMU trains run from Chennai Central / Moore Market.
                  </div>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Bus className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold text-slate-800">By Bus:</strong> Gummidipoondi Bus Stand is 800m away. Direct MTC and TNSTC buses connect from Broadway, Red Hills, and Koyambedu.
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Message & Visit Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg">
            <div className="border-b border-slate-100 pb-4 mb-6">
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200 uppercase tracking-wider">
                Direct Contact Desk
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#081747] mt-2">
                Send an Inquiry or Schedule a Campus Visit
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Have a question regarding fees, courses, or hostel facilities? Submit your details and our counselor will connect with you promptly.
              </p>
            </div>

            {isSent ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-[#081747]">Inquiry Dispatched Successfully!</h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our academic team has received your query and will contact you via <strong className="text-slate-900">{formData.phone}</strong> shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setIsSent(false)}
                    className="px-6 py-2.5 rounded-full bg-[#081747] text-white text-xs font-bold"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white text-slate-900"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit mobile number"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Inquiry Subject *</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white text-slate-900 font-semibold"
                    >
                      <option value="Admission Inquiry">Admission & Course Fees</option>
                      <option value="Scholarship Test">50% Scholarship Test Details</option>
                      <option value="Campus Visit Tour">Campus Visit & Demo Lecture</option>
                      <option value="Hostel Accommodation">Hostel & Mess Facilities</option>
                      <option value="Online Batch">Online Portal & Test Series</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Planned Visit Date (Optional)</label>
                    <input
                      type="date"
                      value={formData.visitDate}
                      onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Your Message or Question *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the courses you're interested in, any specific doubts, or when you plan to visit..."
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white text-slate-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#081747] hover:bg-blue-900 text-white font-black text-sm transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry Message</span>
                </button>
              </form>
            )}

            {/* Embedded Interactive Map */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <h4 className="font-bold text-xs text-[#081747] mb-2 uppercase tracking-wider">
                Interactive Google Map Location
              </h4>
              <div className="rounded-2xl overflow-hidden border border-slate-200 aspect-16/9 bg-slate-100 relative">
                <iframe
                  title="GanitGridd Academy Campus Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.890666014457!2d80.1251!3d13.4072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDI0JzI1LjkiTiA4MMKwMDcnMzAuNCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

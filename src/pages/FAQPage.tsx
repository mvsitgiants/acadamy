import React from 'react';
import { Sparkles, HelpCircle, ArrowRight, MessageSquareQuote } from 'lucide-react';
import { FAQSection } from '../components/FAQSection';
import { PageType } from '../types';

interface FAQPageProps {
  onNavigate: (page: PageType) => void;
  onOpenContact: () => void;
  onOpenEnroll: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({
  onNavigate,
  onOpenContact,
  onOpenEnroll
}) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#081747] text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" width="100%" height="100%">
            <defs>
              <pattern id="faqGridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#faqGridPattern)" />
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
            <span className="text-white font-semibold">Frequently Asked Questions</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-400/30 text-amber-300 text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Help & Knowledge Center</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Find instant answers to common questions regarding admissions, batch timings, scholarships, classroom vs. online delivery, and campus policies.
            </p>
          </div>
        </div>
      </div>

      {/* Main FAQ Section Component */}
      <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <FAQSection onOpenContact={onOpenContact} onOpenEnroll={onOpenEnroll} />
      </div>

      {/* Still Have Questions Banner */}
      <div className="bg-[#081747] text-white py-12 mt-12">
        <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-black">Still have an unanswered question?</h3>
            <p className="text-xs sm:text-sm text-blue-200">
              Our academic counselors are available to clarify your individual doubts via phone, WhatsApp, or in person.
            </p>
          </div>
          <div className="flex flex-col min-[420px]:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={onOpenContact}
              className="w-full min-[420px]:w-auto px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white transition-colors cursor-pointer"
            >
              Ask a Counselor
            </button>
            <button
              onClick={onOpenEnroll}
              className="w-full min-[420px]:w-auto justify-center px-6 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-[#081747] text-xs font-black transition-transform hover:scale-105 shadow-md flex items-center space-x-1.5 cursor-pointer"
            >
              <span>Apply for Admission</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

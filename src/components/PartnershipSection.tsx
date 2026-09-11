import React from 'react';

export const PartnershipSection: React.FC = () => {
  return (
    <section id="partnership-section" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0b1a48] tracking-tight">
            Partnership
          </h2>
        </div>

        {/* Partner Logos Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Top Row: Two Academic Colleges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Partner 1: GOJAN */}
            <div className="border border-slate-300 rounded-xl p-4 flex items-center space-x-3 bg-white hover:shadow-xs transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-amber-50 border border-amber-300 flex items-center justify-center p-1 flex-shrink-0">
                <div className="w-full h-full rounded border border-amber-500/70 flex flex-col items-center justify-center">
                  <span className="text-[10px] font-black text-amber-800">GSBT</span>
                </div>
              </div>
              <div>
                <span className="block text-xs sm:text-sm font-black text-slate-900 tracking-tight leading-tight">
                  GOJAN
                </span>
                <span className="block text-[10px] sm:text-xs font-semibold text-slate-600 leading-tight">
                  SCHOOL OF BUSINESS AND TECHNOLOGY
                </span>
                <span className="text-[9px] text-slate-400">Approved by AICTE & Affiliated to Anna University</span>
              </div>
            </div>

            {/* Partner 2: VIVEKANANDA VISION */}
            <div className="border border-slate-300 rounded-xl p-4 flex items-center space-x-3 bg-white hover:shadow-xs transition-shadow">
              <div className="w-12 h-12 rounded-full bg-rose-50 border border-rose-400 flex items-center justify-center p-1 flex-shrink-0">
                <div className="w-full h-full rounded-full border border-rose-600/70 flex flex-col items-center justify-center">
                  <span className="text-[9px] font-black text-rose-900">VVASC</span>
                </div>
              </div>
              <div>
                <span className="block text-xs sm:text-sm font-black text-slate-900 tracking-tight leading-tight">
                  VIVEKANANDA VISION
                </span>
                <span className="block text-[10px] sm:text-xs font-semibold text-slate-600 leading-tight">
                  ARTS & SCIENCE COLLEGE
                </span>
                <span className="text-[9px] text-slate-400">Recognized Academic Institution Partner</span>
              </div>
            </div>

          </div>

          {/* Bottom Row: Centered IMPACTEERS */}
          <div className="flex justify-center">
            <div className="border border-slate-300 rounded-xl px-8 py-3.5 bg-white text-center hover:shadow-xs transition-shadow max-w-md w-full">
              <span className="block text-sm sm:text-base font-black tracking-wider text-slate-900">
                IMPACTEERS
              </span>
              <span className="block text-[10px] text-slate-500 mt-0.5">
                1ST FLOOR, 39/4, KOTHARI APARTMENTS, CHENNAI
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

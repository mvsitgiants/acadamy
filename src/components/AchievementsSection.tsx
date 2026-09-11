import React from 'react';
import { achieversData } from '../data/academyData';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements-section" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0b1a48] tracking-tight">
            Student Achievements
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-slate-800">
            They Cracked the Code, Now They're Changing the World, GanitGridd's Achievers Success Story
          </p>
        </div>

        {/* Big Key Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-8 max-w-4xl mx-auto mb-14 text-center">
          <div className="space-y-1">
            <span className="text-2xl min-[380px]:text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b1a48]">
              700+
            </span>
            <p className="text-[11px] sm:text-sm font-bold text-slate-700">
              Govt. Officers
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-2xl min-[380px]:text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b1a48]">
              5,000+
            </span>
            <p className="text-[11px] sm:text-sm font-bold text-slate-700">
              Trusted Students
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-2xl min-[380px]:text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b1a48]">
              500+
            </span>
            <p className="text-[11px] sm:text-sm font-bold text-slate-700">
              IAS Successful Candidates
            </p>
          </div>
        </div>

        {/* 3 Featured Achievers Portraits */}
        <div className="grid grid-cols-3 gap-3 sm:gap-8 max-w-4xl mx-auto">
          {achieversData.map((achiever) => (
            <div
              key={achiever.id}
              id={`achiever-${achiever.id}`}
              className="flex flex-col items-center text-center group"
            >
              {/* Circular Avatar */}
              <div className="w-20 h-20 min-[380px]:w-24 min-[380px]:h-24 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 sm:border-4 border-amber-500/80 shadow-md p-0.5 bg-white mb-2 sm:mb-4 transition-transform group-hover:scale-105">
                <img 
                  src={achiever.image} 
                  alt={achiever.name} 
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Name and Designation */}
              <h3 className="font-bold text-slate-900 text-[11px] min-[380px]:text-xs sm:text-base leading-tight">
                {achiever.name}
              </h3>
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5 leading-tight">
                {achiever.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { StudyMode } from '../types';
import { studyModesData } from '../data/academyData';

interface StudyModeSectionProps {
  onOpenEnroll: (modeTitle?: string) => void;
  onOpenDetails: (modeTitle: string) => void;
}

export const StudyModeSection: React.FC<StudyModeSectionProps> = ({
  onOpenEnroll,
  onOpenDetails
}) => {
  return (
    <section id="study-mode-section" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0b1a48] tracking-tight">
            Study Mode
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-slate-800">
            Flexible study modes crafted to suit every aspirant's learning style and schedule.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {studyModesData.map((mode) => (
            <div 
              key={mode.id}
              id={`study-mode-${mode.id}`}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Photo */}
                <div className="h-44 overflow-hidden bg-slate-100">
                  <img 
                    src={mode.image} 
                    alt={mode.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Content */}
                <div className="p-5 text-center space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    {mode.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {mode.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 flex flex-col space-y-2 items-center">
                <button
                  onClick={() => onOpenDetails(mode.title)}
                  className="w-full max-w-[150px] py-1.5 rounded-full border border-[#0b1a48] text-[#0b1a48] text-xs font-bold hover:bg-blue-50 transition-colors"
                >
                  Course Details
                </button>
                <button
                  onClick={() => onOpenEnroll(mode.title)}
                  className="w-full max-w-[150px] py-1.5 rounded-full bg-[#0b1a48] text-white text-xs font-bold hover:bg-blue-900 transition-colors shadow-2xs"
                >
                  Enroll Now
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

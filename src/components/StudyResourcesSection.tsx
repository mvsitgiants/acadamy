import React from 'react';
import { ExternalLink } from 'lucide-react';
import { resourcesData } from '../data/academyData';

interface StudyResourcesSectionProps {
  onOpenResource: (category: string, title: string) => void;
}

export const StudyResourcesSection: React.FC<StudyResourcesSectionProps> = ({ onOpenResource }) => {
  return (
    <section id="resources-section" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0b1a48] tracking-tight">
            Study Resources
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-slate-800">
            Learn Your Way: Visualize, Analyze, Conquer.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Daily Current Affairs */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="p-4 pb-2">
                <div className="bg-[#0b1a48] text-white py-2.5 px-4 rounded-full text-center">
                  <h3 className="font-bold text-xs sm:text-sm tracking-wide">
                    Daily Current Affairs
                  </h3>
                </div>
              </div>

              <div className="px-6 py-4 space-y-3">
                {resourcesData.daily.map((item, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => onOpenResource('Daily Current Affairs', item.title)}
                    className="text-center cursor-pointer group"
                  >
                    <span className="text-[11px] sm:text-xs text-slate-700 underline group-hover:text-blue-700 transition-colors font-medium">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 pt-0 flex justify-center">
              <button
                onClick={() => onOpenResource('Daily Current Affairs', 'Daily Current Affairs Hub')}
                className="px-6 py-1.5 rounded-full bg-[#0b1a48] text-white text-xs font-bold hover:bg-blue-900 transition-colors flex items-center space-x-1.5 shadow-2xs"
              >
                <span>Read More</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 2: Weekly Current Affairs */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="p-4 pb-2">
                <div className="bg-[#0b1a48] text-white py-2.5 px-4 rounded-full text-center">
                  <h3 className="font-bold text-xs sm:text-sm tracking-wide">
                    Weekly Current Affairs
                  </h3>
                </div>
              </div>

              <div className="px-6 py-4 space-y-3">
                {resourcesData.weekly.map((item, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => onOpenResource('Weekly Current Affairs', item.title)}
                    className="text-center cursor-pointer group"
                  >
                    <span className="text-[11px] sm:text-xs text-slate-700 underline group-hover:text-blue-700 transition-colors font-medium">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 pt-0 flex justify-center">
              <button
                onClick={() => onOpenResource('Weekly Current Affairs', 'Weekly Compilation Archives')}
                className="px-6 py-1.5 rounded-full bg-[#0b1a48] text-white text-xs font-bold hover:bg-blue-900 transition-colors flex items-center space-x-1.5 shadow-2xs"
              >
                <span>Read More</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 3: Monthly Current Affairs */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="p-4 pb-2">
                <div className="bg-[#0b1a48] text-white py-2.5 px-4 rounded-full text-center">
                  <h3 className="font-bold text-xs sm:text-sm tracking-wide">
                    Monthly Current Affairs
                  </h3>
                </div>
              </div>

              <div className="px-6 py-4 space-y-3">
                {resourcesData.monthly.map((item, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => onOpenResource('Monthly Current Affairs', item.title)}
                    className="text-center cursor-pointer group"
                  >
                    <span className="text-[11px] sm:text-xs text-slate-700 underline group-hover:text-blue-700 transition-colors font-medium">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 pt-0 flex justify-center">
              <button
                onClick={() => onOpenResource('Monthly Current Affairs', 'Monthly Magazine Edition')}
                className="px-6 py-1.5 rounded-full bg-[#0b1a48] text-white text-xs font-bold hover:bg-blue-900 transition-colors flex items-center space-x-1.5 shadow-2xs"
              >
                <span>Read More</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

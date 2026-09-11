import React from 'react';
import { tickerAnnouncements } from '../data/academyData';

export const NoticeTicker: React.FC = () => {
  const tickerText = tickerAnnouncements.join('   |   ');

  return (
    <div id="notice-ticker" className="bg-[#0b1a48] text-white text-xs md:text-sm py-2 px-4 overflow-hidden border-b border-blue-950 select-none">
      <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto flex items-center justify-between">
        <div className="w-full overflow-hidden relative">
          <div className="animate-marquee whitespace-nowrap font-medium tracking-wide">
            <span className="mx-4">{tickerText}</span>
            <span className="mx-4 text-amber-300">★</span>
            <span className="mx-4">{tickerText}</span>
            <span className="mx-4 text-amber-300">★</span>
          </div>
        </div>
      </div>
    </div>
  );
};

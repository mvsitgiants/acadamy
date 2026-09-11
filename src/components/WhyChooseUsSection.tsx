import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  UserCheck, 
  BookOpen, 
  Lightbulb, 
  Headphones 
} from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-16 bg-[#5c9cf8] text-slate-900 overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Illustrated Student Mascot with floating question marks */}
          <div className="lg:col-span-4 flex justify-center relative">
            <div className="relative w-60 sm:w-72 h-64 sm:h-80 flex items-center justify-center">
              
              {/* Floating Question marks */}
              <div className="absolute top-4 left-6 text-slate-900 font-extrabold text-2xl animate-bounce" style={{ animationDuration: '3s' }}>
                ?
              </div>
              <div className="absolute top-0 right-10 text-slate-900 font-extrabold text-3xl animate-bounce" style={{ animationDuration: '2.5s' }}>
                ?
              </div>
              <div className="absolute top-12 right-2 text-slate-900 font-extrabold text-xl animate-bounce" style={{ animationDuration: '3.5s' }}>
                ?
              </div>

              {/* Mascot Vector SVG illustration */}
              <svg viewBox="0 0 240 260" className="w-full h-full drop-shadow-md">
                {/* Hair back */}
                <ellipse cx="120" cy="110" rx="55" ry="60" fill="#4a2c11" />
                <circle cx="75" cy="120" r="22" fill="#4a2c11" />
                <circle cx="165" cy="120" r="22" fill="#4a2c11" />

                {/* Face & neck */}
                <path d="M110 145 L110 170 L130 170 L130 145 Z" fill="#fcd3b6" />
                <circle cx="120" cy="105" r="42" fill="#fcd3b6" />

                {/* Hair front & bangs */}
                <path d="M78 95 Q 120 70, 162 95 Q 150 70, 120 72 Q 90 70, 78 95 Z" fill="#5c3818" />
                <path d="M85 85 C 90 60, 150 60, 155 85" stroke="#f59e0b" strokeWidth="6" fill="none" strokeLinecap="round" />

                {/* Eyes & smile */}
                <ellipse cx="106" cy="102" rx="4" ry="5" fill="#1e293b" />
                <ellipse cx="134" cy="102" rx="4" ry="5" fill="#1e293b" />
                <circle cx="107.5" cy="100.5" r="1.5" fill="#ffffff" />
                <circle cx="135.5" cy="100.5" r="1.5" fill="#ffffff" />
                
                {/* Cheeks */}
                <ellipse cx="98" cy="110" rx="4" ry="2.5" fill="#f87171" opacity="0.6" />
                <ellipse cx="142" cy="110" rx="4" ry="2.5" fill="#f87171" opacity="0.6" />

                {/* Happy smile */}
                <path d="M112 114 Q 120 123, 128 114" stroke="#1e293b" strokeWidth="2.5" fill="none" strokeLinecap="round" />

                {/* Yellow Dress / Shirt */}
                <path d="M92 170 C 80 180, 70 240, 70 240 L 170 240 C 170 240, 160 180, 148 170 Z" fill="#facc15" />
                
                {/* White collar */}
                <polygon points="120,185 105,170 135,170" fill="#ffffff" />

                {/* Books in arms */}
                <rect x="90" y="195" width="60" height="35" rx="3" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5" transform="rotate(-6 120 210)" />
                <rect x="94" y="200" width="56" height="32" rx="3" fill="#ef4444" stroke="#b91c1c" strokeWidth="1.5" transform="rotate(4 120 210)" />
                <rect x="92" y="208" width="58" height="28" rx="3" fill="#10b981" stroke="#047857" strokeWidth="1.5" />

                {/* Arms holding books */}
                <path d="M80 180 Q 95 215, 110 210" stroke="#fcd3b6" strokeWidth="10" fill="none" strokeLinecap="round" />
                <path d="M160 180 Q 145 215, 130 210" stroke="#fcd3b6" strokeWidth="10" fill="none" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Right: Title and 6 Key Highlights */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-8 text-center lg:text-left">
              Why Choose Us
            </h2>

            <div className="grid grid-cols-3 gap-4 sm:gap-8">
              
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border-2 border-slate-900 flex items-center justify-center mb-1.5 sm:mb-2.5 transition-transform group-hover:scale-110 bg-white/10">
                  <ShieldCheck className="w-5 h-5 sm:w-7 sm:h-7 text-slate-900" />
                </div>
                <h3 className="font-bold text-[10px] min-[380px]:text-xs sm:text-sm text-slate-900 leading-tight">
                  Expert Faculty
                </h3>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border-2 border-slate-900 flex items-center justify-center mb-1.5 sm:mb-2.5 transition-transform group-hover:scale-110 bg-white/10">
                  <Award className="w-5 h-5 sm:w-7 sm:h-7 text-slate-900" />
                </div>
                <h3 className="font-bold text-[10px] min-[380px]:text-xs sm:text-sm text-slate-900 leading-tight">
                  Proven Success
                </h3>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border-2 border-slate-900 flex items-center justify-center mb-1.5 sm:mb-2.5 transition-transform group-hover:scale-110 bg-white/10">
                  <UserCheck className="w-5 h-5 sm:w-7 sm:h-7 text-slate-900" />
                </div>
                <h3 className="font-bold text-[10px] min-[380px]:text-xs sm:text-sm text-slate-900 leading-tight">
                  Personalized Coaching
                </h3>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border-2 border-slate-900 flex items-center justify-center mb-1.5 sm:mb-2.5 transition-transform group-hover:scale-110 bg-white/10">
                  <BookOpen className="w-5 h-5 sm:w-7 sm:h-7 text-slate-900" />
                </div>
                <h3 className="font-bold text-[10px] min-[380px]:text-xs sm:text-sm text-slate-900 leading-tight">
                  Comprehensive Materials
                </h3>
              </div>

              {/* Feature 5 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border-2 border-slate-900 flex items-center justify-center mb-1.5 sm:mb-2.5 transition-transform group-hover:scale-110 bg-white/10">
                  <Lightbulb className="w-5 h-5 sm:w-7 sm:h-7 text-slate-900" />
                </div>
                <h3 className="font-bold text-[10px] min-[380px]:text-xs sm:text-sm text-slate-900 leading-tight">
                  Innovative Methods
                </h3>
              </div>

              {/* Feature 6 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border-2 border-slate-900 flex items-center justify-center mb-1.5 sm:mb-2.5 transition-transform group-hover:scale-110 bg-white/10">
                  <Headphones className="w-5 h-5 sm:w-7 sm:h-7 text-slate-900" />
                </div>
                <h3 className="font-bold text-[10px] min-[380px]:text-xs sm:text-sm text-slate-900 leading-tight">
                  Student Support
                </h3>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

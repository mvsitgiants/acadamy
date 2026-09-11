import React from 'react';

interface AboutSectionProps {
  onLearnMore?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  return (
    <section id="about-section" className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0b1a48] tracking-tight">
            Welcome to GanitGridd : Best Math & Science Academy
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Classroom Photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-16/10">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=900" 
                alt="Classroom at GanitGridd Math & Science Academy" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4 text-white text-xs font-semibold bg-black/60 backdrop-blur-xs px-3 py-1 rounded-full">
                GanitGridd Advanced Learning & Analytical Lab
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="lg:col-span-6 space-y-5 text-slate-700 leading-relaxed text-sm sm:text-base">
            <p>
              Welcome to <strong className="text-[#0b1a48] font-bold">GanitGridd : Best Math & Science Academy</strong>, your one-stop destination for achieving conceptual mastery, analytical brilliance, and competitive success. We are a premier institute dedicated to providing students with the highest quality education and structured guidance across mathematics, sciences, and competitive entrance examinations.
            </p>

            <p>
              At <strong className="text-[#0b1a48] font-bold">GanitGridd</strong>, we believe that every student has the potential to excel when guided through clear conceptual grids and scientific problem-solving frameworks. We nurture curiosity, build rigorous problem-solving habits, and empower learners to become confident high achievers.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100">
                <span className="block font-bold text-[#0b1a48]">Proven Pedagogy</span>
                <span className="text-slate-500">Comprehensive syllabus coverage with bilingual materials</span>
              </div>
              <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100">
                <span className="block font-bold text-[#0b1a48]">Individual Mentoring</span>
                <span className="text-slate-500">Regular answer evaluation and strategy review</span>
              </div>
            </div>

            {onLearnMore && (
              <div className="pt-2">
                <button
                  onClick={onLearnMore}
                  className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-[#081747] hover:bg-blue-900 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  <span>Read More About Our Vision & Faculty</span>
                  <span>→</span>
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';

interface RecognitionSectionProps {
  onOpenExplore: () => void;
}

export const RecognitionSection: React.FC<RecognitionSectionProps> = ({ onOpenExplore }) => {
  return (
    <section id="recognition-section" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0b1a48] tracking-tight">
            Recognition
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-slate-800">
            Discover the Success and Excellence of GanitGridd – Where Achievers Are Made.
          </p>
        </div>

        {/* Big Highlight Card with warm peach background */}
        <div className="bg-[#fff8ed] rounded-3xl p-6 sm:p-10 border border-amber-100 shadow-xs max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: MOU Signing Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border-2 border-white shadow-md bg-white aspect-4/3">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" 
                  alt="MOU Signing and Recognition Ceremony" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold text-center bg-black/60 backdrop-blur-xs py-1.5 px-3 rounded-lg">
                  Academic Affiliation & MOU Signing Ceremony
                </div>
              </div>
            </div>

            {/* Right: Detailed Content */}
            <div className="lg:col-span-7 space-y-4 text-slate-700 text-xs sm:text-sm leading-relaxed">
              <h3 className="text-base sm:text-lg lg:text-xl font-black text-[#0b1a48]">
                GanitGridd – Premier Institute for Mathematical & Scientific Mastery
              </h3>

              <p>
                GanitGridd is one of the premier coaching academies for STEM foundations and competitive examinations. We help aspiring candidates master core scientific principles and quantitative logic with the right guidance and structured mentoring.
              </p>

              <p>
                Our expert educators, conceptual visual grids, and comprehensive study materials make it easier for students to prepare for every stage of national and state examinations. Whether you are just starting or looking for advanced problem-solving techniques, we have the right course for you.
              </p>

              <p>
                At GanitGridd, we combine strong conceptual knowledge with smart problem-solving shortcuts to help you understand the syllabus and succeed in competitive exams. Our classroom and online programs are designed to suit every type of learner.
              </p>

              <p>
                Join us and take the first step toward academic excellence and a rewarding career. <strong className="text-slate-900 font-bold">Your success is our mission.</strong>
              </p>

              <div className="pt-2">
                <button
                  id="btn-recognition-explore"
                  onClick={onOpenExplore}
                  className="px-6 py-2 rounded-full bg-[#0b1a48] hover:bg-blue-900 text-white text-xs font-bold transition-colors shadow-xs"
                >
                  Explore More...
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

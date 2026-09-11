import React, { useState, useMemo } from 'react';
import { 
  ChevronDown, 
  HelpCircle, 
  Search, 
  BookOpen, 
  GraduationCap, 
  ShieldCheck, 
  PhoneCall, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface FAQItem {
  id: string;
  category: 'enrollment' | 'course' | 'policy';
  question: string;
  answer: string;
  highlights?: string[];
}

const FAQ_DATA: FAQItem[] = [
  // Enrollment Category
  {
    id: 'faq-enroll-1',
    category: 'enrollment',
    question: 'How do I enroll in GanitGridd classroom or online batches?',
    answer: 'You can enroll directly through our online Admission Registration Form by clicking the "Enroll Now" button on the website, or by visiting our Gummidipoondi campus in person. Once you submit your target exam and contact details, our admissions counselor will get in touch within 2 hours to finalize your batch schedule and provide fee details.',
    highlights: ['Online admission form', 'Same-day counselor assistance', 'Instant batch seat reservation']
  },
  {
    id: 'faq-enroll-2',
    category: 'enrollment',
    question: 'Is there a scholarship test or fee concession available?',
    answer: 'Yes! GanitGridd conducts a regular Merit Scholarship Assessment through which aspirants can qualify for up to a 50% tuition fee waiver. Special fee concessions are also available for top college graduates, economically disadvantaged students, and early-bird registrants for upcoming batches.',
    highlights: ['Up to 50% merit scholarship', 'Early-bird fee discounts', 'Need-based fee support']
  },
  {
    id: 'faq-enroll-3',
    category: 'enrollment',
    question: 'What educational qualifications and documents are required to register?',
    answer: 'Eligibility depends on your target exam: 10th/12th pass for SSC GD/TNUSRB Police Constable, and an undergraduate degree (or final year pursuing) for UPSC, TNPSC Group 1/2, SSC CGL, and Banking. During registration, you will need to submit a photocopy of your degree/marksheets, 2 passport-size photographs, and a valid Government Photo ID.',
    highlights: ['Degree / Final-year eligible for Officer batches', 'Photo ID & academic certificates needed']
  },
  {
    id: 'faq-enroll-4',
    category: 'enrollment',
    question: 'Can I attend a free demo class before completing my admission?',
    answer: 'Absolutely. We encourage all prospective candidates and parents to attend up to 2 complimentary classroom or live online demo lectures. This allows you to experience our faculty teaching pedagogy, structured grid methodology, and interactive learning environment firsthand.',
    highlights: ['2 free trial lectures', 'Personal faculty consultation']
  },

  // Course Structure Category
  {
    id: 'faq-course-1',
    category: 'course',
    question: 'What are the batch timings for Regular and Weekend programs?',
    answer: 'We provide two convenient timing options: Regular Weekday batches run Monday through Friday (Morning: 8:30 AM to 1:30 PM; Evening: 4:30 PM to 8:00 PM). Weekend batches run on Saturdays and Sundays (9:00 AM to 4:30 PM), specifically tailored for college-going students and working professionals.',
    highlights: ['Morning & Evening weekday options', 'Intensive weekend batches for working aspirants']
  },
  {
    id: 'faq-course-2',
    category: 'course',
    question: 'What study materials and test series are included with the course?',
    answer: 'Every enrolled candidate receives our complete GanitGridd publication package: comprehensive subject booklets, bilingual NCERT and Samacheer Kalvi compilations, previous 10 years solved papers, and daily current affairs mind maps. You also receive access to our full-length OMR test series with statewide rank analysis.',
    highlights: ['Comprehensive printed books', 'Bilingual current affairs notes', 'OMR test series with statewide ranks']
  },
  {
    id: 'faq-course-3',
    category: 'course',
    question: 'Are classes taught bilingually in English and regional languages?',
    answer: 'Yes! Classes are conducted in a student-friendly bilingual medium (English & Tamil / Hindi) to ensure complete conceptual clarity. Study notes, mock test papers, and model answers are available in both English and regional mediums so students can write exams in their preferred language.',
    highlights: ['Dual-medium conceptual delivery', 'Separate English & Regional question papers']
  },
  {
    id: 'faq-course-4',
    category: 'course',
    question: 'What happens if I miss a live classroom lecture?',
    answer: 'You will never fall behind. Every classroom topic is synchronized with our GanitGridd Student Portal. High-definition lecture recordings, digital whiteboard notes, and practice MCQs are uploaded within 24 hours and remain accessible throughout your course duration.',
    highlights: ['24/7 Student Portal access', 'Recorded video lectures & downloadable PDFs']
  },

  // Academy Policies Category
  {
    id: 'faq-policy-1',
    category: 'policy',
    question: 'What is the fee payment structure? Are installment options available?',
    answer: 'We believe quality education should be accessible. Tuition fees can be paid in 2 to 3 flexible, interest-free installments across the first 3 months of your course. All fee structures are fully transparent with zero hidden exam or registration charges.',
    highlights: ['2-3 easy installment options', 'Transparent pricing with no hidden charges']
  },
  {
    id: 'faq-policy-2',
    category: 'policy',
    question: 'Does the academy provide library and hostel facilities?',
    answer: 'Yes. GanitGridd maintains a fully air-conditioned, high-speed Wi-Fi enabled silent study library open from 7:00 AM to 9:00 PM daily. We also assist outstation students with verified, hygienic boy and girl hostel accommodations within 500 meters of our campus.',
    highlights: ['AC silent study library', 'Secure nearby hostel assistance with food']
  },
  {
    id: 'faq-policy-3',
    category: 'policy',
    question: 'Can I switch between Classroom and Online mode or change my batch?',
    answer: 'Yes, students can switch between classroom and online live modes or transfer between weekday and weekend batches by submitting a written request to the academic coordinator. Batch transfers are accommodated without additional tuition penalty, subject to seat availability.',
    highlights: ['Seamless mode switching', 'Flexible batch transfer with coordinator approval']
  },
  {
    id: 'faq-policy-4',
    category: 'policy',
    question: 'How are personal doubt clarification and mentoring sessions conducted?',
    answer: 'Apart from regular classroom hours, our faculty members hold dedicated daily doubt-clearing sessions from 4:00 PM to 6:30 PM. Furthermore, each student is assigned a dedicated faculty mentor who monitors test score trajectories, reviews answer scripts, and guides study schedules.',
    highlights: ['Daily 1-on-1 faculty doubt desk', 'Personal mentor assigned to every student']
  }
];

interface FAQSectionProps {
  onOpenEnroll: () => void;
  onOpenContact: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenEnroll, onOpenContact }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'enrollment' | 'course' | 'policy'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState<string[]>(['faq-enroll-1', 'faq-course-1']);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = 
        searchQuery.trim() === '' ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="faq-section" className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden border-t border-slate-100">
      
      {/* Background Subtle Grid Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="faqGridPattern" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#e2e8f0" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#faqGridPattern)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold mb-3 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>Got Questions? We Have Answers</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-[#081747] tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about admissions, batch timings, study resources, and student policies at <strong className="text-slate-900 font-bold">GanitGridd</strong>.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mb-10 space-y-4">
          {/* Keyword Search Input */}
          <div className="relative max-w-lg mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="faq-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics (e.g., scholarship, weekend batch, fees, hostel)..."
              className="w-full pl-11 pr-4 py-3 text-xs sm:text-sm bg-white border border-slate-300 rounded-2xl shadow-xs focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-slate-800 transition-all placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-semibold px-1.5 py-0.5"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            {[
              { key: 'all', label: 'All Questions', icon: HelpCircle },
              { key: 'enrollment', label: 'Enrollment & Admission', icon: GraduationCap },
              { key: 'course', label: 'Course Structures & Batches', icon: BookOpen },
              { key: 'policy', label: 'Academy Policies & Facilities', icon: ShieldCheck }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  id={`btn-faq-tab-${tab.key}`}
                  onClick={() => setActiveCategory(tab.key as any)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-[#081747] text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item) => {
              const isOpen = openIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  id={item.id}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'border-blue-300 shadow-md ring-1 ring-blue-100' 
                      : 'border-slate-200 hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  {/* Header Button */}
                  <button
                    id={`btn-${item.id}`}
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-start justify-between space-x-4 cursor-pointer"
                  >
                    <span className="font-extrabold text-sm sm:text-base text-slate-900 leading-snug">
                      {item.question}
                    </span>
                    <div 
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 mt-0.5 ${
                        isOpen 
                          ? 'bg-[#081747] text-white rotate-180' 
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Expanded Body */}
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 mt-1 space-y-3">
                      <p className="pt-2 text-slate-700">
                        {item.answer}
                      </p>

                      {/* Key highlights pill tags */}
                      {item.highlights && item.highlights.length > 0 && (
                        <div className="pt-1 flex flex-wrap gap-2">
                          {item.highlights.map((hl, idx) => (
                            <span 
                              key={idx} 
                              className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-blue-50/80 border border-blue-100 text-[#081747] text-[11px] font-semibold"
                            >
                              <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                              <span>{hl}</span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            /* Empty State */
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
              <HelpCircle className="w-10 h-10 text-slate-300 mx-auto" />
              <h3 className="font-bold text-slate-800 text-base">No matching questions found</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                We could not find any FAQ matching "{searchQuery}". You can try a different search or contact our admission counselors directly.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                  className="px-4 py-2 rounded-full bg-[#081747] text-white text-xs font-bold"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA Card: Still Have Questions? */}
        <div className="mt-12 bg-[#081747] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl">
          {/* Subtle Decorative Circle */}
          <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-blue-600/20 pointer-events-none blur-2xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-1.5 max-w-xl">
              <span className="text-amber-400 text-xs font-extrabold uppercase tracking-wider">
                Direct Academic Support
              </span>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                Still have unanswered questions?
              </h3>
              <p className="text-xs sm:text-sm text-blue-200 leading-relaxed">
                Our senior academic mentors and admission counselors are available Monday through Sunday (8:00 AM – 7:30 PM) to assist your career journey.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:9442678741"
                className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs flex items-center space-x-2 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                <span>Call 94426 78741</span>
              </a>

              <button
                id="btn-faq-enroll"
                onClick={onOpenEnroll}
                className="px-6 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-[#081747] font-black text-xs transition-all shadow-md flex items-center space-x-1.5 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Clock, 
  GraduationCap, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  Filter, 
  Calendar,
  Layers,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { Course, PageType } from '../types';
import { coursesData } from '../data/academyData';

interface CoursesPageProps {
  onNavigate: (page: PageType) => void;
  onSelectCourse: (course: Course) => void;
  onOpenEnroll: (courseId?: string) => void;
  onOpenContact: () => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({
  onNavigate,
  onSelectCourse,
  onOpenEnroll,
  onOpenContact
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'civil' | 'state' | 'banking-ssc' | 'stem'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      const titleLower = course.title.toLowerCase();
      const descLower = (course.description || '').toLowerCase();
      const q = searchQuery.toLowerCase().trim();

      const matchesSearch = !q || titleLower.includes(q) || descLower.includes(q);

      let matchesFilter = true;
      if (selectedFilter === 'civil') {
        matchesFilter = course.id === 'upsc' || course.id.startsWith('tnpsc');
      } else if (selectedFilter === 'state') {
        matchesFilter = course.id.startsWith('tnpsc') || course.id === 'group-4' || course.id.includes('police');
      } else if (selectedFilter === 'banking-ssc') {
        matchesFilter = course.id === 'ssc' || course.id === 'banking' || course.id === 'rrb';
      } else if (selectedFilter === 'stem') {
        matchesFilter = course.id === 'neet' || course.id === 'iit-jee' || course.id === 'foundation-stem';
      }

      return matchesSearch && matchesFilter;
    });
  }, [selectedFilter, searchQuery]);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#081747] text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" width="100%" height="100%">
            <defs>
              <pattern id="coursesGridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#coursesGridPattern)" />
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
            <span className="text-white font-semibold">Courses Catalog</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-400/30 text-amber-300 text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Comprehensive 2024-2025 Academic Programs</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
              Explore Our Specialized Courses
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              From UPSC and TNPSC civil services officer tracks to rigorous IIT-JEE & STEM analytical foundations. Expert mentoring, bilingual delivery, and full-length test series.
            </p>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-slate-200 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">

          {/* Category Tabs: horizontal scroll on phones instead of wrapping */}
          <div className="flex md:flex-wrap items-center gap-1.5 w-full md:w-auto overflow-x-auto no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
            {[
              { id: 'all', label: 'All Programs' },
              { id: 'civil', label: 'Civil Services (UPSC/TNPSC)' },
              { id: 'state', label: 'Tamil Nadu Exams' },
              { id: 'banking-ssc', label: 'SSC & Banking & RRB' },
              { id: 'stem', label: 'Math, Science & NEET/JEE' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex-shrink-0 ${
                  selectedFilter === tab.id
                    ? 'bg-[#081747] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by exam name..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-500 focus:bg-white text-slate-800"
            />
          </div>
        </div>
      </div>

      {/* Courses Cards Grid */}
      <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#081747]">
              Available Programs ({filteredCourses.length})
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Select a course to examine the full module syllabus, batch timings, and scholarship options.
            </p>
          </div>
          <button
            onClick={() => onOpenEnroll()}
            className="inline-flex items-center justify-center space-x-1.5 px-4 py-2.5 sm:py-2 rounded-full bg-amber-400 hover:bg-amber-300 text-[#081747] font-bold text-xs shadow-xs transition-colors"
          >
            <span>Download All Syllabus PDFs</span>
            <Download className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Header Tag */}
                <div className="p-5 pb-3 border-b border-slate-100 bg-gradient-to-r from-blue-50/50 to-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#081747] text-white">
                      {course.badge || 'Admissions Open'}
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      50% Scholarship
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-[#081747] group-hover:text-blue-700 transition-colors">
                    {course.title}
                  </h3>
                </div>

                {/* Body Details */}
                <div className="p-5 space-y-4">
                  {/* Meta items */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div>
                      <span className="block font-semibold text-slate-400 text-[10px] uppercase">Duration</span>
                      <span className="font-bold text-slate-800">{course.duration || '6-10 Months'}</span>
                    </div>
                    <div>
                      <span className="block font-semibold text-slate-400 text-[10px] uppercase">Format</span>
                      <span className="font-bold text-slate-800">{course.mode || 'Classroom + Live'}</span>
                    </div>
                  </div>

                  {/* Syllabus Bullet Points */}
                  <div>
                    <span className="text-[11px] font-bold text-slate-900 block mb-2">Key Focus Areas:</span>
                    <ul className="space-y-1.5">
                      {course.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Description */}
                  {course.description && (
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {course.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 flex items-center space-x-2 border-t border-slate-100 mt-2">
                <button
                  onClick={() => onSelectCourse(course)}
                  className="flex-1 py-2.5 px-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-[#081747] font-bold text-xs transition-colors flex items-center justify-center space-x-1 cursor-pointer"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenEnroll(course.id)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#081747] hover:bg-blue-900 text-white font-bold text-xs transition-colors shadow-xs flex items-center justify-center space-x-1 cursor-pointer"
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Batch Schedule & Delivery Format Comparison */}
      <div className="bg-white py-16 border-t border-slate-200">
        <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-blue-600 uppercase tracking-wider">Flexible Study Schedules</span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#081747] mt-1 mb-3">
              Choose the Learning Format That Fits Your Life
            </h2>
            <p className="text-slate-600 text-sm">
              We offer morning, evening, and weekend batches for college students, full-time aspirants, and working professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#081747] flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#081747] mb-1">Morning Regular Batch</h3>
              <p className="text-xs text-blue-600 font-bold mb-3">Monday – Friday | 8:30 AM – 1:30 PM</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ideal for full-time dedicated aspirants. Includes 4 hours of classroom conceptual lecture, followed by 1 hour daily OMR testing and faculty doubt desk.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#081747] mb-1">Evening College Batch</h3>
              <p className="text-xs text-blue-800 font-bold mb-3">Monday – Friday | 4:30 PM – 8:00 PM</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Designed for college students. Synchronized with university exams with condensed high-yield notes and weekend revision test papers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#081747] mb-1">Weekend Professional Batch</h3>
              <p className="text-xs text-amber-900 font-bold mb-3">Saturday & Sunday | 9:00 AM – 4:30 PM</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Designed for IT & working professionals. Intensive full-day deep-dive sessions with weekday recorded video backups and online test portal.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#081747] text-white py-12">
        <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-black">Not sure which course is right for your background?</h3>
            <p className="text-xs sm:text-sm text-blue-200 mt-1">Speak with our senior academic counselor for a free 1-on-1 profile evaluation.</p>
          </div>
          <div className="flex flex-col min-[420px]:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={onOpenContact}
              className="w-full min-[420px]:w-auto px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white transition-colors"
            >
              Talk to Counselor
            </button>
            <button
              onClick={() => onOpenEnroll()}
              className="w-full min-[420px]:w-auto justify-center px-6 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-[#081747] text-xs font-black transition-transform hover:scale-105 shadow-md flex items-center space-x-1.5"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

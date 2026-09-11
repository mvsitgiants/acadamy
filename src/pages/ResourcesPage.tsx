import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  BookOpen, 
  Sparkles, 
  Calendar, 
  Search, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink,
  Layers,
  GraduationCap
} from 'lucide-react';
import { PageType } from '../types';

interface ResourcesPageProps {
  onNavigate: (page: PageType) => void;
  onOpenResourceModal: (category: string, title: string) => void;
  onOpenEnroll: () => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({
  onNavigate,
  onOpenResourceModal,
  onOpenEnroll
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'daily' | 'ncert' | 'pyq' | 'math'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const resourcesList = [
    {
      id: 'res-1',
      title: 'Current Affairs Daily Digest - National & Tamil Nadu Events',
      category: 'daily',
      format: 'PDF Compilation',
      date: 'Updated Daily',
      description: 'Comprehensive analysis of The Hindu, Indian Express, and Dinamani with MCQs and mind maps.',
      tags: ['Daily CA', 'Bilingual', 'UPSC/TNPSC']
    },
    {
      id: 'res-2',
      title: 'Monthly Civil Services & Competitive Round-up (Comprehensive)',
      category: 'daily',
      format: 'Full Magazine',
      date: 'Latest Edition',
      description: 'Monthly consolidation covering Polity, Economy, Sci-Tech, Environment, and Government Schemes.',
      tags: ['Monthly', 'Govt Schemes', 'Quick Revision']
    },
    {
      id: 'res-3',
      title: 'Samacheer Kalvi 6th to 10th Social Science Consolidated Notes',
      category: 'ncert',
      format: 'Subject Booklets',
      date: 'Academic Bank',
      description: 'High-yield points extracted from Tamil Nadu state board books specifically mapped to Group 4 and Group 2 syllabus.',
      tags: ['Samacheer', 'TNPSC', 'Tamil & English']
    },
    {
      id: 'res-4',
      title: 'NCERT Class 11 & 12 Indian Polity & Modern History Gist',
      category: 'ncert',
      format: 'PDF Guide',
      date: 'Standard Reference',
      description: 'Simplified, bulleted summaries of Bipin Chandra, Laxmikanth, and Ramesh Singh economics concepts.',
      tags: ['NCERT', 'UPSC Prelims', 'Polity']
    },
    {
      id: 'res-5',
      title: 'Quantitative Aptitude 100 Speed-Math Formula Grids',
      category: 'math',
      format: 'Formula Sheet',
      date: 'Speed Lab',
      description: 'Vedic math multiplication shortcuts, square/cube roots, percentages, and profit & loss memory grids.',
      tags: ['Speed Math', 'Banking', 'SSC CGL']
    },
    {
      id: 'res-6',
      title: 'TNPSC Group 1 & Group 2 Previous 10 Years Solved Papers',
      category: 'pyq',
      format: 'Solved Question Bank',
      date: '2014 - 2024',
      description: 'Complete prelims and mains question papers with verified official answer keys and step-by-step solutions.',
      tags: ['PYQ', 'Solved', 'Verified Keys']
    },
    {
      id: 'res-7',
      title: 'SSC CGL Tier-1 & Tier-2 Previous Papers with Video Solutions',
      category: 'pyq',
      format: 'Digital Exam Bank',
      date: 'Recent Cycles',
      description: 'Real exam papers with speed-strategy breakdowns for Reasoning, Math, and English sections.',
      tags: ['SSC PYQ', 'Answer Keys']
    },
    {
      id: 'res-8',
      title: 'Science & Analytical Reasoning Foundation Handbook',
      category: 'math',
      format: 'Concept Book',
      date: 'STEM Lab',
      description: 'Core concepts in Physics, Chemistry, and Logical Syllogisms for competitive and entrance exams.',
      tags: ['STEM', 'Logical Reasoning']
    }
  ];

  const filtered = resourcesList.filter((item) => {
    const matchesTab = activeTab === 'all' || item.category === activeTab;
    const matchesSearch = 
      !searchTerm || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#081747] text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" width="100%" height="100%">
            <defs>
              <pattern id="resGridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#resGridPattern)" />
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
            <span className="text-white font-semibold">Study Resources</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-400/30 text-amber-300 text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Digital Study Bank & Downloads</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
              Free Study Resources & Material
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Curated by GanitGridd faculty. Access daily current affairs compilations, NCERT summaries, speed math formula sheets, and past 10-year question papers.
            </p>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'all', label: 'All Resources' },
              { id: 'daily', label: 'Current Affairs' },
              { id: 'ncert', label: 'NCERT & Samacheer' },
              { id: 'math', label: 'Math Formula Grids' },
              { id: 'pyq', label: 'Previous Year Papers' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#081747] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search study material..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-500 focus:bg-white text-slate-800"
            />
          </div>
        </div>
      </div>

      {/* Resources Cards Grid */}
      <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all flex flex-col justify-between p-5 group"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase mb-2">
                  <span className="bg-blue-50 text-blue-800 px-2 py-0.5 rounded-md border border-blue-100">{item.format}</span>
                  <span>{item.date}</span>
                </div>

                <h3 className="font-bold text-sm text-[#081747] group-hover:text-blue-700 transition-colors mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {item.tags.map((tg, idx) => (
                    <span key={idx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                      {tg}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenResourceModal(item.format, item.title)}
                className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-[#081747] text-[#081747] hover:text-white font-bold text-xs border border-slate-200 hover:border-[#081747] transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Access Resource</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Subscription Callout */}
      <div className="bg-[#081747] text-white py-12">
        <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-black">Want daily study materials directly on WhatsApp?</h3>
            <p className="text-xs sm:text-sm text-blue-200 mt-1">Join our official GanitGridd Aspirants Broadcast Channel for free morning current affairs PDFs.</p>
          </div>
          <button
            onClick={onOpenEnroll}
            className="px-6 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-[#081747] text-xs font-black transition-transform hover:scale-105 shadow-md flex items-center space-x-1.5 flex-shrink-0 cursor-pointer"
          >
            <span>Enroll for Full Study Kit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

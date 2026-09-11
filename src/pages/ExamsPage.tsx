import React, { useState } from 'react';
import { 
  BookOpen, 
  FileText, 
  Award, 
  CheckCircle2, 
  Download, 
  ChevronRight, 
  Sparkles, 
  Calendar, 
  Layers, 
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { PageType } from '../types';

interface ExamsPageProps {
  onNavigate: (page: PageType) => void;
  onOpenEnroll: (courseId?: string) => void;
  onOpenContact: () => void;
}

interface ExamDetail {
  id: string;
  name: string;
  conductingBody: string;
  posts: string;
  eligibility: string;
  ageLimit: string;
  stages: {
    stageName: string;
    description: string;
    marks: string;
  }[];
  syllabusHighlights: string[];
  tips: string;
}

const EXAM_DATA: ExamDetail[] = [
  {
    id: 'upsc',
    name: 'UPSC Civil Services Examination (CSE)',
    conductingBody: 'Union Public Service Commission',
    posts: 'IAS, IPS, IFS, IRS, and 20+ Group A & B Central Civil Services',
    eligibility: 'Bachelor Degree in any discipline from a recognized university',
    ageLimit: '21 to 32 years (Relaxations for OBC +3, SC/ST +5)',
    stages: [
      { stageName: 'Stage 1: Preliminary Exam', description: 'Paper 1: General Studies (200 marks) + Paper 2: CSAT (200 marks, qualifying 33%)', marks: '400 Marks (Objective)' },
      { stageName: 'Stage 2: Mains Exam', description: '9 Written Descriptive Papers (Essay, GS 1-4, Optional Papers 1 & 2, Language Qualifiers)', marks: '1750 Marks (Descriptive)' },
      { stageName: 'Stage 3: Personality Test', description: 'Interview by UPSC Board in New Delhi assessing leadership and intellectual caliber', marks: '275 Marks' }
    ],
    syllabusHighlights: [
      'Indian Polity & Governance, Constitution, Rights Issues',
      'Modern History, Freedom Struggle, World History, Art & Culture',
      'Economic & Social Development, Sustainable Growth, Budget & Surveys',
      'Environment & Ecology, Climate Change, Biodiversity',
      'Ethics, Integrity, Aptitude & Case Studies'
    ],
    tips: 'Focus early on NCERT line-by-line reading and daily newspaper editorial analysis. Answer writing practice is paramount for Mains.'
  },
  {
    id: 'tnpsc-group-1',
    name: 'TNPSC Group 1 Examination',
    conductingBody: 'Tamil Nadu Public Service Commission',
    posts: 'Deputy Collector, DSP, Commercial Tax Officer, District Registrar, District Employment Officer',
    eligibility: 'Degree in any discipline (B.E, B.A, B.Sc, B.Com, etc.)',
    ageLimit: '21 to 34 years for General (39 years for BC/MBC/SC/ST)',
    stages: [
      { stageName: 'Stage 1: Preliminary Exam', description: 'Single objective paper with 200 Questions (General Studies 175 Q + Aptitude & Mental Ability 25 Q)', marks: '300 Marks (3 Hours)' },
      { stageName: 'Stage 2: Mains Exam', description: 'Descriptive Papers covering History/Culture, Indian Constitution & Polity, Science & Technology, Economy', marks: '750 Marks (3 Papers)' },
      { stageName: 'Stage 3: Oral Test (Interview)', description: 'Board interview evaluating candidate aptitude for Tamil Nadu state administration', marks: '100 Marks' }
    ],
    syllabusHighlights: [
      'Unit 8: History, Culture, Heritage and Socio-Political Movements in Tamil Nadu',
      'Unit 9: Development Administration in Tamil Nadu (Social Welfare Schemes & Indices)',
      'Indian Economy with specific Tamil Nadu industrial trends',
      'Mental Ability & Quantitative Reasoning from Samacheer Kalvi books'
    ],
    tips: 'Units 8 & 9 constitute over 40% of the prelims question paper. Thoroughly study Tamil literature, Thirukkural, and state administration reports.'
  },
  {
    id: 'tnpsc-group-2',
    name: 'TNPSC Group 2 & 2A (Interview & Non-Interview)',
    conductingBody: 'Tamil Nadu Public Service Commission',
    posts: 'Sub-Registrar, Municipal Commissioner, Assistant Section Officer (ASO), Senior Inspector of Co-operatives',
    eligibility: 'Bachelor Degree in any subject',
    ageLimit: '18 to 32 years (Relaxations for reserved categories)',
    stages: [
      { stageName: 'Stage 1: Preliminary Exam', description: 'General Tamil / English (100 Q) + General Studies (75 Q) + Aptitude (25 Q)', marks: '300 Marks' },
      { stageName: 'Stage 2: Mains Exam', description: 'Mandatory Tamil Eligibility Test + General Studies Descriptive Paper', marks: '300 Marks' }
    ],
    syllabusHighlights: [
      'Pothu Tamil (Iyal, Isai, Nadagam grammar & literature)',
      'Indian Polity & Central/State Relations',
      'Current Events of National and Tamil Nadu importance',
      'Aptitude: LCM/HCF, Ratio, Percentage, Compound Interest, Mensuration'
    ],
    tips: 'Target 95+ marks in General Tamil to secure a high ranking score in the preliminary cutoff.'
  },
  {
    id: 'group-4',
    name: 'TNPSC Group 4 & VAO',
    conductingBody: 'Tamil Nadu Public Service Commission',
    posts: 'Village Administrative Officer (VAO), Junior Assistant, Bill Collector, Typist, Steno-Typist',
    eligibility: 'SSLC (10th Standard Passed)',
    ageLimit: '21 to 32 years for General (37 to 42 years for reserved categories)',
    stages: [
      { stageName: 'Single Written Examination', description: '200 Objective Questions: General Tamil (100 Q) + General Studies (75 Q) + Aptitude (25 Q)', marks: '300 Marks (3 Hours)' }
    ],
    syllabusHighlights: [
      'Complete Samacheer Kalvi 6th to 10th Standard School Textbooks',
      'Tamil Grammar, Classical Literature, Modern Prose and Poetry',
      'Basic General Science (Physics, Chemistry, Biology)',
      'Tamil Nadu Geography, Rivers, Minerals, Agriculture'
    ],
    tips: 'School textbooks from 6th to 10th standard are the exact source for 90% of the questions. Daily revision tests are essential.'
  },
  {
    id: 'ssc-cgl',
    name: 'Staff Selection Commission (SSC CGL / CHSL)',
    conductingBody: 'Staff Selection Commission',
    posts: 'Income Tax Inspector, Central Excise Inspector, Assistant Section Officer in MEA/CSS, CBI Sub-Inspector',
    eligibility: 'Graduation for CGL / 12th Pass for CHSL',
    ageLimit: '18 to 30/32 years',
    stages: [
      { stageName: 'Tier 1: Computer Based Exam', description: 'Reasoning (25 Q), Quantitative Aptitude (25 Q), English (25 Q), General Awareness (25 Q)', marks: '200 Marks (1 Hour)' },
      { stageName: 'Tier 2: Computer Based Exam', description: 'Math & Reasoning (180 Marks) + English & General Awareness (210 Marks) + Computer Knowledge Test', marks: '390 Merit Marks' }
    ],
    syllabusHighlights: [
      'Advanced Mathematics: Geometry, Trigonometry, Algebra, Mensuration',
      'Arithmetic: Percentage, Profit/Loss, Time & Work, Speed & Distance',
      'English Comprehension, Cloze Test, Active/Passive Voice, Idioms',
      'Reasoning & Non-Verbal Puzzles'
    ],
    tips: 'Speed calculation and computer-based mock tests are critical. GanitGridd speed labs train students to solve questions in under 45 seconds.'
  },
  {
    id: 'banking',
    name: 'Banking Exams (IBPS PO/Clerk & SBI PO/Clerk)',
    conductingBody: 'Institute of Banking Personnel Selection & State Bank of India',
    posts: 'Probationary Officer (PO), Clerk, Junior Associate, Specialist Officer (SO)',
    eligibility: 'Graduate Degree in any discipline',
    ageLimit: '20 to 30 years for PO, 20 to 28 years for Clerk',
    stages: [
      { stageName: 'Prelims CBT', description: 'English (30 Q), Quantitative Aptitude (35 Q), Reasoning Ability (35 Q) with 20-min sectional timers', marks: '100 Marks (1 Hour)' },
      { stageName: 'Mains CBT & Essay', description: 'Advanced Reasoning & DI, Financial & Banking Awareness, English Language & Letter Writing', marks: '200 + 25 Marks' },
      { stageName: 'Interview & Group Exercise', description: 'Conducted for PO posts by public sector banks panel', marks: '100 Marks' }
    ],
    syllabusHighlights: [
      'Data Interpretation (Tabular, Pie, Bar, Radar, Missing DI, Caselets)',
      'Complex Puzzles, Seating Arrangements (Floor, Circular, Parallel rows)',
      'Banking & Financial Awareness, RBI Monetary Policies, Repo Rates',
      'Speed Simplification, Quadratic Equations, Number Series'
    ],
    tips: 'Sectional time limits require strict question selection strategy. Never spend more than 2 minutes on a single puzzle.'
  }
];

export const ExamsPage: React.FC<ExamsPageProps> = ({
  onNavigate,
  onOpenEnroll,
  onOpenContact
}) => {
  const [selectedExamId, setSelectedExamId] = useState<string>('upsc');
  const activeExam = EXAM_DATA.find((e) => e.id === selectedExamId) || EXAM_DATA[0];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#081747] text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" width="100%" height="100%">
            <defs>
              <pattern id="examsGridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#examsGridPattern)" />
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
            <span className="text-white font-semibold">Exams & Syllabus</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-400/30 text-amber-300 text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Exam Patterns, Eligibility & Syllabus Breakdowns</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
              Exams & Syllabus Guide
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Clear, up-to-date breakdowns of examination stages, marking schemes, qualifying eligibility, and syllabus modules to give you strategic clarity from Day 1.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content: Selector Tabs & Detailed Pane */}
      <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Exam List Selector */}
          <div className="lg:col-span-4 space-y-2">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 mb-3">
              Select Examination
            </h3>
            {EXAM_DATA.map((exam) => (
              <button
                key={exam.id}
                onClick={() => setSelectedExamId(exam.id)}
                className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  selectedExamId === exam.id
                    ? 'bg-[#081747] text-white border-[#081747] shadow-md'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div>
                  <h4 className="font-bold text-xs sm:text-sm">{exam.name}</h4>
                  <span className={`text-[11px] block mt-0.5 ${selectedExamId === exam.id ? 'text-blue-200' : 'text-slate-500'}`}>
                    {exam.conductingBody}
                  </span>
                </div>
                <ChevronRight className={`w-4 h-4 flex-shrink-0 ${selectedExamId === exam.id ? 'text-amber-400' : 'text-slate-400'}`} />
              </button>
            ))}

            {/* Need personalized counseling */}
            <div className="mt-6 p-5 rounded-2xl bg-blue-50/80 border border-blue-200 text-[#081747]">
              <HelpCircle className="w-6 h-6 text-blue-700 mb-2" />
              <h4 className="font-bold text-sm mb-1">Confused about which exam to target?</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Our academic counselors provide 1-on-1 syllabus mapping based on your college degree and career goals.
              </p>
              <button
                onClick={onOpenContact}
                className="w-full py-2 rounded-xl bg-[#081747] text-white text-xs font-bold hover:bg-blue-900 transition-colors cursor-pointer"
              >
                Book Free Consultation
              </button>
            </div>
          </div>

          {/* Right Column: Detailed Exam Information View */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
            
            {/* Exam Header */}
            <div className="border-b border-slate-100 pb-5">
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
                {activeExam.conductingBody}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#081747] mt-1 mb-2">
                {activeExam.name}
              </h2>
              <div className="flex flex-wrap gap-2 pt-1 text-xs">
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">
                  <strong>Target Posts:</strong> {activeExam.posts}
                </span>
              </div>
            </div>

            {/* Eligibility & Age Limits */}
            <div className="grid sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-400 uppercase text-[10px] block mb-1">Academic Eligibility</span>
                <p className="font-semibold text-slate-800">{activeExam.eligibility}</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-400 uppercase text-[10px] block mb-1">Age Criteria & Limits</span>
                <p className="font-semibold text-slate-800">{activeExam.ageLimit}</p>
              </div>
            </div>

            {/* Stages & Exam Pattern */}
            <div>
              <h3 className="font-bold text-base text-[#081747] mb-3 flex items-center space-x-2">
                <Layers className="w-4 h-4 text-blue-600" />
                <span>Examination Pattern & Stages</span>
              </h3>
              <div className="space-y-3">
                {activeExam.stages.map((stg, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-xs sm:text-sm text-[#081747]">{stg.stageName}</h4>
                      <span className="text-[11px] font-black text-blue-700 bg-white px-2 py-0.5 rounded-md border border-blue-200">
                        {stg.marks}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">{stg.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Syllabus Modules */}
            <div>
              <h3 className="font-bold text-base text-[#081747] mb-3 flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Key Syllabus Focus Areas</span>
              </h3>
              <ul className="space-y-2">
                {activeExam.syllabusHighlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Academy Expert Strategy Tip */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs">
              <strong className="text-amber-900 block font-bold mb-1">GanitGridd Mentor Strategy Tip:</strong>
              <p className="text-amber-800 leading-relaxed">{activeExam.tips}</p>
            </div>

            {/* Bottom Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
              <button
                onClick={() => onOpenEnroll(activeExam.id)}
                className="px-6 py-2.5 rounded-xl bg-[#081747] hover:bg-blue-900 text-white font-bold text-xs transition-colors shadow-md flex items-center space-x-2 cursor-pointer"
              >
                <span>Enroll in {activeExam.name.split(' ')[0]} Batch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenContact}
                className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center space-x-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-slate-500" />
                <span>Request Detailed Syllabus Booklet</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

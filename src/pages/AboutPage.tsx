import React from 'react';
import { 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  GraduationCap, 
  HeartHandshake, 
  Layers, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Target, 
  Users, 
  ArrowRight,
  Compass
} from 'lucide-react';
import { PageType } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
  onOpenEnroll: () => void;
  onOpenContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenEnroll,
  onOpenContact
}) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb Header */}
      <div className="bg-[#081747] text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" width="100%" height="100%">
            <defs>
              <pattern id="aboutHeroGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#aboutHeroGrid)" />
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
            <span className="text-white font-semibold">About Us</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-400/30 text-amber-300 text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Nurturing Analytical Minds Since Inception</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
              About GanitGridd Academy
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Tamil Nadu’s premier institution for Mathematical Rigor, Scientific Foundations, and Civil Services Excellence. Empowering the next generation of officers, researchers, and problem-solvers.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Selected Officers & Achievers', val: '700+' },
            { label: 'Faculty Teaching Experience', val: '15+ Yrs' },
            { label: 'Weekly Testing & OMR Sessions', val: '120+' },
            { label: 'Student-to-Mentor Ratio', val: '1 : 15' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-md text-center">
              <div className="text-2xl sm:text-3xl font-black text-[#081747] mb-1">{stat.val}</div>
              <div className="text-xs text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Story & Philosophy */}
      <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-[#081747] text-xs font-black uppercase tracking-wider">
              <Compass className="w-4 h-4 text-blue-600" />
              <span>Our Genesis & Core Philosophy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#081747] leading-snug">
              Demystifying Complex Concepts Through Structured Analytical Grids
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              At <strong className="text-slate-900 font-bold">GanitGridd</strong>, we believe every competitive exam—from UPSC and TNPSC to IIT-JEE and Banking—is essentially a test of structured thinking, conceptual clarity, and systematic problem solving.
            </p>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Founded by passionate educators, former civil servants, and senior mathematics professors, GanitGridd replaced outdated rote memorization with our proprietary <strong className="text-blue-900 font-bold">"Conceptual Grid Method"</strong>. We break down sprawling syllabi into interconnected visual matrices, allowing students to recall facts effortlessly and solve complex problems within exam time limits.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100">
                <Target className="w-5 h-5 text-blue-700 mb-2" />
                <h4 className="font-bold text-xs text-[#081747] mb-1">Our Mission</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Provide accessible, world-class coaching that bridges rural-urban academic divides and enables every aspirant to succeed.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
                <ShieldCheck className="w-5 h-5 text-amber-700 mb-2" />
                <h4 className="font-bold text-xs text-[#081747] mb-1">Our Vision</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  To be India’s most trusted center for scientific problem-solving and public service career leadership.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000" 
                alt="GanitGridd Interactive Classroom" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Campus Environment</span>
                <h3 className="text-lg font-bold">State-of-the-Art Smart Lecture Theatres</h3>
                <p className="text-xs text-slate-200 mt-1">Air-conditioned halls equipped with digital smartboards, audio recording, and high-speed fiber connectivity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The GanitGridd 4-Pillar Grid Methodology */}
      <div className="bg-white py-16 border-y border-slate-200/80">
        <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-blue-600 uppercase tracking-wider">The Academic Framework</span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#081747] mt-1 mb-3">
              The 4-Pillar GanitGridd Learning Matrix
            </h2>
            <p className="text-slate-600 text-sm">
              Our structured educational pedagogy that transforms aspirants into high-scoring achievers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Foundational Matrix',
                desc: 'Line-by-line mastery of NCERT & Samacheer Kalvi textbooks combined with first-principles scientific concepts.',
                icon: Layers,
                color: 'blue'
              },
              {
                step: '02',
                title: 'Analytical Drill Lab',
                desc: 'Speed math algorithms, quantitative reasoning shortcuts, and critical thinking essay workshops.',
                icon: BookOpen,
                color: 'indigo'
              },
              {
                step: '03',
                title: 'Adaptive Test Engine',
                desc: 'Weekly full-length OMR and computer-based mock tests with negative marking calibration and micro-rankings.',
                icon: Target,
                color: 'amber'
              },
              {
                step: '04',
                title: '1-on-1 Mentorship Desk',
                desc: 'Individual performance review sessions, psychological counseling, and interview grooming boards.',
                icon: Users,
                color: 'emerald'
              }
            ].map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.step} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-300">{pillar.step}</span>
                    <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center text-[#081747]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[#081747] mb-2">{pillar.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Infrastructure & Facilities */}
      <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold text-blue-600 uppercase tracking-wider">Campus Highlights</span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#081747] mt-1 mb-3">
            Campus Infrastructure Designed for Focused Study
          </h2>
          <p className="text-slate-600 text-sm">
            Everything an aspirant requires to prepare without distractions under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: '24/7 Silent Study Library',
              desc: 'Air-conditioned, acoustically treated reading hall with personal carrels, charging points, and reference books collection.',
              img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600'
            },
            {
              title: 'Computer CBT Testing Center',
              desc: 'Dedicated computer lab simulating actual SSC, Banking, and RRB exam interfaces with instant performance analytics.',
              img: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=600'
            },
            {
              title: 'Hostel & Mess Assistance',
              desc: 'Safe, verified accommodations for male and female outstation students located within 500 meters from campus.',
              img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=600'
            }
          ].map((fac, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-16/10 overflow-hidden">
                <img src={fac.img} alt={fac.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-base text-[#081747] mb-2">{fac.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{fac.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="bg-[#081747] text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <h3 className="text-xl sm:text-2xl font-black">Experience GanitGridd Firsthand</h3>
            <p className="text-xs sm:text-sm text-blue-200">Attend 2 free trial lectures or schedule an in-person campus orientation today.</p>
          </div>
          <div className="flex flex-col min-[420px]:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={onOpenContact}
              className="w-full min-[420px]:w-auto px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white transition-colors cursor-pointer"
            >
              Contact Campus
            </button>
            <button
              onClick={onOpenEnroll}
              className="w-full min-[420px]:w-auto justify-center px-6 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-[#081747] text-xs font-black transition-transform hover:scale-105 shadow-md flex items-center space-x-1.5 cursor-pointer"
            >
              <span>Apply for Admission</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

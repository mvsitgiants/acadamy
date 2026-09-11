import React, { useState } from 'react';
import { 
  GraduationCap, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Sparkles, 
  ArrowRight, 
  PhoneCall, 
  ShieldCheck, 
  Calendar,
  AlertCircle,
  CreditCard
} from 'lucide-react';
import { PageType } from '../types';
import { coursesData } from '../data/academyData';

interface AdmissionsPageProps {
  onNavigate: (page: PageType) => void;
  onOpenContact: () => void;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({
  onNavigate,
  onOpenContact
}) => {
  const [formData, setFormData] = useState({
    studentName: '',
    phone: '',
    email: '',
    courseId: 'upsc',
    batchPreference: 'Morning Regular (Mon - Fri)',
    studyMode: 'Classroom Physical',
    scholarshipTest: true,
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#081747] text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" width="100%" height="100%">
            <defs>
              <pattern id="admissionsGridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#admissionsGridPattern)" />
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
            <span className="text-white font-semibold">Admissions</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-400/30 text-amber-300 text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Admissions Open for 2024-2025 Batches</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
              Admission Process & Registration
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Join GanitGridd to accelerate your academic and competitive career. Learn about eligibility, our 50% merit scholarship test, fee plans, and submit your registration.
            </p>
          </div>
        </div>
      </div>

      {/* 4-Step Admission Journey */}
      <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-extrabold text-blue-600 uppercase tracking-wider">Simple & Transparent</span>
            <h2 className="text-xl sm:text-2xl font-black text-[#081747]">
              Your 4-Step Admission Journey
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 'Step 1',
                title: 'Online Application',
                desc: 'Fill out the simple online registration form below or visit our Gummidipoondi campus in person.',
                icon: FileText
              },
              {
                step: 'Step 2',
                title: 'Free Profile Counseling',
                desc: 'Speak with our senior mentor to evaluate syllabus suitability, previous attempts, and target exam timeline.',
                icon: PhoneCall
              },
              {
                step: 'Step 3',
                title: 'Scholarship Test',
                desc: 'Take our 60-minute aptitude & general knowledge test to qualify for up to a 50% tuition waiver.',
                icon: GraduationCap
              },
              {
                step: 'Step 4',
                title: 'Kit & Orientation',
                desc: 'Receive your full set of GanitGridd printed books, student ID card, portal login, and batch schedule.',
                icon: CheckCircle2
              }
            ].map((st) => {
              const Icon = st.icon;
              return (
                <div key={st.step} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black text-blue-700 bg-blue-100 px-2 py-0.5 rounded-md">{st.step}</span>
                    <Icon className="w-5 h-5 text-[#081747]" />
                  </div>
                  <h3 className="font-bold text-sm text-[#081747] mb-1.5">{st.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content Grid: Form + Policies */}
      <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Registration Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg">
            <div className="border-b border-slate-100 pb-5 mb-6">
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 uppercase tracking-wider">
                Instant Seat Reservation
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#081747] mt-2">
                Online Admission Application Form
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill this form to reserve your seat in the upcoming batch. Our admissions officer will contact you within 2 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-[#081747]">Registration Received Successfully!</h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.studentName}</strong>. Your application for <strong className="text-slate-900">{formData.courseId.toUpperCase()}</strong> has been recorded. Our counselor will call you at <strong className="text-slate-900">{formData.phone}</strong> with batch timings and scholarship test details.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#081747] text-white text-xs font-bold"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Full Student Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white text-slate-900"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Mobile / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit mobile number"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Target Examination Course *</label>
                    <select
                      value={formData.courseId}
                      onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white text-slate-900 font-semibold"
                    >
                      {coursesData.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Preferred Mode of Study *</label>
                    <select
                      value={formData.studyMode}
                      onChange={(e) => setFormData({ ...formData, studyMode: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white text-slate-900"
                    >
                      <option value="Classroom Physical">Classroom (Gummidipoondi Campus)</option>
                      <option value="Online Live Interactive">Online Live Interactive + Recordings</option>
                      <option value="Hybrid Both">Hybrid (Classroom + Online Portal)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Batch Schedule Preference *</label>
                  <select
                    value={formData.batchPreference}
                    onChange={(e) => setFormData({ ...formData, batchPreference: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white text-slate-900"
                  >
                    <option value="Morning Regular (Mon - Fri)">Morning Regular (Mon - Fri, 8:30 AM - 1:30 PM)</option>
                    <option value="Evening College (Mon - Fri)">Evening College Batch (Mon - Fri, 4:30 PM - 8:00 PM)</option>
                    <option value="Weekend Professional (Sat - Sun)">Weekend Batch (Sat & Sun, 9:00 AM - 4:30 PM)</option>
                  </select>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="scholarshipCheckbox"
                    checked={formData.scholarshipTest}
                    onChange={(e) => setFormData({ ...formData, scholarshipTest: e.target.checked })}
                    className="mt-0.5 rounded text-blue-900 focus:ring-blue-500 w-4 h-4 cursor-pointer"
                  />
                  <label htmlFor="scholarshipCheckbox" className="text-[11px] text-amber-900 cursor-pointer">
                    <strong className="font-bold">Apply for 50% Merit Scholarship Test.</strong> Check this to appear for our upcoming free scholarship assessment and qualify for tuition fee waivers.
                  </label>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Questions / Educational Background (Optional)</label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="E.g., B.E graduate 2024, preparing for TNPSC Group 1..."
                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 focus:bg-white text-slate-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#081747] hover:bg-blue-900 text-white font-black text-sm transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Submit Application & Reserve Seat</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Policies, Eligibility & Fee Installments */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Fee & Installment Structure */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center space-x-2 text-[#081747]">
                <CreditCard className="w-5 h-5 text-blue-600" />
                <h4 className="font-bold text-base">Transparent Fee & Installments</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                At GanitGridd, all course fees are fully inclusive of printed textbook kits, OMR test papers, and digital portal logins. Zero hidden charges.
              </p>
              <div className="space-y-2 pt-1 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                  <span className="font-semibold text-slate-700">Installment Option</span>
                  <span className="font-bold text-[#081747]">2 - 3 Easy Monthly Parts</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                  <span className="font-semibold text-slate-700">Payment Modes</span>
                  <span className="font-bold text-[#081747]">UPI, Cards, NetBanking, Cheque</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                  <span className="font-semibold text-slate-700">Trial Period</span>
                  <span className="font-bold text-emerald-700">2 Free Demo Classes</span>
                </div>
              </div>
            </div>

            {/* Documents Required */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center space-x-2 text-[#081747]">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <h4 className="font-bold text-base">Documents Needed at Admission</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>2 Passport-size recent color photographs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Photocopy of Graduation Degree / 10th / 12th Certificate</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Valid Govt ID Proof (Aadhaar Card / Voter ID / Driving License)</span>
                </li>
              </ul>
            </div>

            {/* Direct Helpline */}
            <div className="bg-[#081747] text-white rounded-3xl p-6 shadow-md space-y-3">
              <span className="text-amber-400 text-[10px] font-bold uppercase tracking-wider">Admission Desk Helpline</span>
              <h4 className="font-bold text-lg">Need Assistance with Registration?</h4>
              <p className="text-xs text-blue-200">
                Our admission counselors are ready to help you choose the right course and finalize your schedule.
              </p>
              <div className="pt-2">
                <a
                  href="tel:9442678741"
                  className="w-full py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#081747] font-black text-xs transition-colors flex items-center justify-center space-x-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call +91 94426 78741</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { X, CheckCircle2, Phone, GraduationCap } from 'lucide-react';
import { coursesData } from '../data/academyData';

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourseId?: string;
}

export const EnrollModal: React.FC<EnrollModalProps> = ({
  isOpen,
  onClose,
  defaultCourseId
}) => {
  const [selectedCourse, setSelectedCourse] = useState(defaultCourseId || 'upsc');
  const [studyMode, setStudyMode] = useState('Classroom');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [qualification, setQualification] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
    setQualification('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-t-3xl sm:rounded-3xl max-w-lg w-full max-h-[92dvh] sm:max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200">

        {/* Modal Header */}
        <div className="bg-[#0b1a48] text-white p-4 sm:p-5 flex items-center justify-between gap-3 flex-shrink-0">
          <div className="flex items-center space-x-2.5 min-w-0">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h3 className="font-extrabold text-sm sm:text-base tracking-wide">
                Admission Registration Form
              </h3>
              <p className="text-[11px] text-blue-200">
                GanitGridd - Math & Science Academy • 50% Scholarship Batch
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="text-slate-300 hover:text-white p-1 rounded-lg flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto overscroll-contain">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Enrollment Inquiry Received!
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you <strong className="text-slate-900">{name}</strong>. Our admissions counselor will contact you at <strong className="text-slate-900">{phone}</strong> within 2 hours to confirm your seat and scholarship discount eligibility.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-8 py-2.5 rounded-full bg-[#0b1a48] text-white text-xs font-bold hover:bg-blue-900 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Select Target Course */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Target Course / Exam *
                </label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-slate-800 focus:outline-hidden focus:border-blue-700 font-semibold"
                  required
                >
                  {coursesData.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Study Mode */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Preferred Study Mode
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {['Classroom', 'Online Live', 'Test Series'].map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setStudyMode(mode)}
                      className={`py-2 px-2 text-center rounded-xl border font-semibold transition-all ${
                        studyMode === mode
                          ? 'border-[#0b1a48] bg-blue-50 text-[#0b1a48]'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              {/* Aspirant Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Aspirant Full Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. S. Poovizhi"
                  required
                  className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-hidden focus:border-blue-700"
                />
              </div>

              {/* Mobile Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 94426 78741"
                    required
                    className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-hidden focus:border-blue-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. aspirant@gmail.com"
                    className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-hidden focus:border-blue-700"
                  />
                </div>
              </div>

              {/* Highest Educational Qualification */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Highest Qualification / Degree
                </label>
                <input
                  type="text"
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  placeholder="e.g. B.E / B.Sc / B.Com / Final Year Graduate"
                  className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-hidden focus:border-blue-700"
                />
              </div>

              {/* Scholarship Callout */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-[11px] text-amber-900 flex items-center space-x-2">
                <span className="font-bold">🎉 Special Offer:</span>
                <span>Early registrations qualify for up to 50% merit scholarship waiver.</span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-end gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 sm:py-2.5 rounded-full bg-[#0b1a48] hover:bg-blue-900 text-white text-xs font-bold shadow-md transition-colors"
                >
                  Submit Admission Form
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};

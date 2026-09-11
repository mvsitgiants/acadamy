import React from 'react';
import { X, CheckCircle2, Clock, BookCheck, Users, ArrowRight } from 'lucide-react';
import { Course } from '../types';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onEnrollNow: (courseId: string) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  onEnrollNow
}) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-t-3xl sm:rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[92dvh] sm:max-h-[90vh]">

        {/* Header */}
        <div className="bg-[#0b1a48] text-white p-5 sm:p-6 flex items-start justify-between gap-3 flex-shrink-0">
          <div className="min-w-0">
            <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest block mb-1">
              Official Syllabus & Batch Roadmap
            </span>
            <h3 className="text-xl sm:text-2xl font-black tracking-wide">
              {course.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="text-slate-300 hover:text-white p-1 rounded-lg flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto overscroll-contain space-y-6 text-slate-700 text-xs sm:text-sm">
          
          {/* Overview */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
              <BookCheck className="w-4 h-4 text-[#0b1a48]" />
              <span>Program Overview</span>
            </h4>
            <p className="text-slate-600 leading-relaxed text-xs">
              {course.description}
            </p>
          </div>

          {/* Curriculum Stages Covered */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-sm">
              Stages & Examination Coverage
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {course.points.map((pt, idx) => (
                <div key={idx} className="flex items-start space-x-2 p-2.5 bg-blue-50/50 rounded-xl border border-blue-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="font-bold text-xs text-slate-800">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Parameters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <span className="text-[11px] text-slate-400 font-semibold flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Batch Duration</span>
              </span>
              <p className="font-bold text-xs text-slate-800">
                {course.duration || '6 to 12 Months Intensive'}
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <span className="text-[11px] text-slate-400 font-semibold flex items-center space-x-1">
                <Users className="w-3.5 h-3.5" />
                <span>Eligibility</span>
              </span>
              <p className="font-bold text-xs text-slate-800">
                {course.eligibility || 'Graduates / Final Year Students'}
              </p>
            </div>
          </div>

          {/* Key Advantages */}
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3.5 space-y-1.5 text-xs text-amber-900">
            <span className="font-bold block">Why prepare this at GanitGridd?</span>
            <ul className="list-disc pl-4 space-y-1 text-[11px] text-amber-800">
              <li>Comprehensive textbook & NCERT consolidated question banks.</li>
              <li>Weekly full-length test series with individual percentile ranks.</li>
              <li>Daily analytical notes, formula sheets, and visual mind maps.</li>
            </ul>
          </div>

        </div>

        {/* Footer Action */}
        <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-2 flex-shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2.5 sm:py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onEnrollNow(course.id);
            }}
            className="w-full sm:w-auto min-w-0 px-6 py-3 sm:py-2.5 rounded-full bg-[#0b1a48] hover:bg-blue-900 text-white text-xs font-bold transition-colors flex items-center justify-center space-x-2 shadow-md"
          >
            <span className="truncate">Enroll for {course.title}</span>
            <ArrowRight className="w-4 h-4 flex-shrink-0" />
          </button>
        </div>

      </div>
    </div>
  );
};

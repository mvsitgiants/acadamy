import React from 'react';
import { X, FileText, Download, Calendar, ExternalLink } from 'lucide-react';

interface ResourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
  title: string;
}

export const ResourceModal: React.FC<ResourceModalProps> = ({
  isOpen,
  onClose,
  category,
  title
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200">
        
        {/* Header */}
        <div className="bg-[#0b1a48] text-white p-5 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-amber-300" />
            <div>
              <h3 className="font-extrabold text-base tracking-wide">
                {category}
              </h3>
              <span className="text-[10px] text-blue-200">
                GanitGridd Digital Learning & Study Bank
              </span>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-300 hover:text-white p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-2 text-xs text-slate-500">
            <Calendar className="w-4 h-4 text-blue-700" />
            <span>Updated for UPSC / TNPSC Prelims & Mains Syllabus</span>
          </div>

          <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-4">
            <h4 className="font-bold text-sm text-[#0b1a48] mb-1">
              {title}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Curated analysis on climatology, national disaster management guidelines (NDMA), heatwave thresholds in the Indian subcontinent, and relevant TNPSC/UPSC GS Paper 1 & 3 analytical points.
            </p>
          </div>

          <div className="space-y-2 text-xs text-slate-700">
            <span className="font-bold text-slate-900 block">Available Materials:</span>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4 text-red-600" />
                <span className="font-medium">Complete PDF Handout (Tamil & English)</span>
              </div>
              <button 
                onClick={() => alert("Downloading PDF material...")}
                className="p-1.5 rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-100 transition-colors"
                title="Download PDF"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ExternalLink className="w-4 h-4 text-blue-600" />
                <span className="font-medium">Daily 10 MCQs Practice Quiz</span>
              </div>
              <button 
                onClick={() => alert("Starting practice quiz...")}
                className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-[#0b1a48] text-white hover:bg-blue-900 transition-colors"
              >
                Attempt
              </button>
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-full bg-[#0b1a48] text-white text-xs font-bold"
            >
              Done
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

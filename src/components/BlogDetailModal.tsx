import React from 'react';
import { X, Calendar, Share2 } from 'lucide-react';
import { BlogItem } from '../types';

interface BlogDetailModalProps {
  blog: BlogItem | null;
  onClose: () => void;
}

export const BlogDetailModal: React.FC<BlogDetailModalProps> = ({ blog, onClose }) => {
  if (!blog) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-[#0b1a48] text-white p-5 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-amber-300" />
            <span className="text-xs font-semibold text-blue-100">
              GanitGridd Academy Blog • {blog.date || 'Exam & STEM Insights'}
            </span>
          </div>
          <button onClick={onClose} className="text-slate-300 hover:text-white p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="h-56 rounded-2xl overflow-hidden bg-slate-100">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
            />
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
            {blog.title}
          </h3>

          <div className="text-slate-700 text-xs sm:text-sm leading-relaxed space-y-3">
            <p className="font-semibold text-slate-800">
              {blog.snippet}
            </p>
            <p>
              {blog.content}
            </p>
            <p>
              To excel in this competitive landscape, civil service aspirants must prioritize consistency, daily newspaper analysis, Tamil Nadu government schemes, and regular full-length mock examinations.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
            <div className="text-[11px] text-slate-500">
              Published by <strong className="text-slate-800">Academic Research Team</strong>
            </div>
            <button
              onClick={() => alert("Link copied to clipboard!")}
              className="flex items-center space-x-1 text-xs font-semibold text-blue-700 hover:text-blue-900"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Article</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

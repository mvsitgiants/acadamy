import React from 'react';
import { BlogItem } from '../types';
import { blogsData } from '../data/academyData';

interface BlogsSectionProps {
  onSelectBlog: (blog: BlogItem) => void;
  onViewMore: () => void;
}

export const BlogsSection: React.FC<BlogsSectionProps> = ({ onSelectBlog, onViewMore }) => {
  return (
    <section id="blogs-section" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0b1a48] tracking-tight">
            Blogs
          </h2>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogsData.map((blog) => (
            <div 
              key={blog.id}
              id={`blog-card-${blog.id}`}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Blog Image */}
                <div className="h-48 overflow-hidden bg-slate-100 relative">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  {/* Badge for Interview Dos and Don'ts if applicable */}
                  {blog.title.includes("Dos and Don'ts") && (
                    <div className="absolute top-3 left-3 right-3 flex justify-between pointer-events-none">
                      <span className="bg-emerald-600/90 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-sm">
                        DOS
                      </span>
                      <span className="bg-rose-600/90 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-sm">
                        DON'TS
                      </span>
                    </div>
                  )}
                  {blog.title.includes("Syllabus") && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="bg-white/85 text-slate-800 font-serif font-bold text-xl px-4 py-1 rounded-md shadow-xs">
                        Syllabus
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {blog.snippet}
                  </p>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onSelectBlog(blog)}
                  className="px-6 py-1.5 rounded-full bg-[#0b1a48] hover:bg-blue-900 text-white text-xs font-bold transition-colors shadow-2xs"
                >
                  Read More
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-10 flex justify-center">
          <button
            id="btn-view-more-blogs"
            onClick={onViewMore}
            className="px-8 py-2 rounded-full bg-[#0b1a48] hover:bg-blue-900 text-white text-xs font-bold transition-colors shadow-2xs"
          >
            View More...
          </button>
        </div>

      </div>
    </section>
  );
};

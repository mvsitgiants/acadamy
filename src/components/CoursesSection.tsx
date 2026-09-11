import React from 'react';
import { Course } from '../types';
import { coursesData } from '../data/academyData';

interface CoursesSectionProps {
  onSelectCourse: (course: Course) => void;
  onViewAllCourses?: () => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onSelectCourse, onViewAllCourses }) => {
  return (
    <section id="courses-section" className="py-16 bg-white">
      <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0b1a48] tracking-tight">
            Courses
          </h2>
          <p className="text-sm sm:text-base font-semibold text-slate-800">
            Learn Smart, Excel in STEM & Competitive Exams, GanitGridd's Specialized Courses
          </p>
        </div>

        {/* 3x3 Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {coursesData.map((course) => (
            <div 
              key={course.id}
              id={`course-card-${course.id}`}
              className="bg-white border-2 border-[#0b1a48] rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Header with pill curved styling matching screenshot */}
                <div className="p-3">
                  <div className="bg-[#0b1a48] text-white py-3 px-4 rounded-2xl text-center shadow-xs">
                    <h3 className="font-extrabold text-sm sm:text-base tracking-wide uppercase">
                      {course.title}
                    </h3>
                  </div>
                </div>

                {/* Bullets List */}
                <div className="px-6 py-4 space-y-2.5">
                  {course.points.map((pt, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs font-bold text-slate-800 tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0b1a48] flex-shrink-0"></span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="p-5 pt-2 flex justify-center">
                <button
                  id={`btn-course-details-${course.id}`}
                  onClick={() => onSelectCourse(course)}
                  className="px-6 py-2 rounded-full bg-[#0b1a48] hover:bg-blue-900 text-white text-xs font-bold transition-colors shadow-2xs cursor-pointer"
                >
                  Course Details
                </button>
              </div>

            </div>
          ))}
        </div>

        {onViewAllCourses && (
          <div className="mt-12 text-center">
            <button
              onClick={onViewAllCourses}
              className="inline-flex items-center space-x-2 px-8 py-3 rounded-full bg-[#081747] hover:bg-blue-900 text-white text-xs sm:text-sm font-black transition-all shadow-md hover:scale-105 cursor-pointer"
            >
              <span>Explore Full Course Catalog & Detailed Syllabus</span>
              <span>→</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

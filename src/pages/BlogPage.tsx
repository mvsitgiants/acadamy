import React, { useState, useMemo } from 'react';
import { 
  Calendar, 
  Search, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  User, 
  Tag,
  BookOpen
} from 'lucide-react';
import { BlogItem, PageType } from '../types';
import { blogsData } from '../data/academyData';

interface BlogPageProps {
  onNavigate: (page: PageType) => void;
  onSelectBlog: (blog: BlogItem) => void;
  onOpenContact: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onNavigate,
  onSelectBlog,
  onOpenContact
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Expand blogs data with extra rich articles if needed
  const allBlogs: BlogItem[] = useMemo(() => {
    return [
      ...blogsData,
      {
        id: 'blog-4',
        title: 'How to Crack Quantitative Aptitude for SSC CGL & Bank PO in 90 Days',
        snippet: 'Mastering high-yield topics like Ratio, Percentages, and Geometry through daily speed calculation drills and timed sectional tests.',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
        category: 'Exam Strategy',
        date: 'May 18, 2024',
        content: `Quantitative Aptitude is the highest scoring section in competitive examinations if approached with a disciplined framework rather than brute force calculation.
        
1. Mental Math Foundations: Spend the first 15 minutes of your morning practicing Vedic math shortcuts, tables up to 30, squares up to 50, and cube roots.
2. Conceptual Core: Topics like Ratio & Proportion, Percentages, and Profit & Loss form the algebraic backbone for 70% of arithmetic and Data Interpretation questions.
3. Timed Sectional Mocks: Transition from untimed practice to strictly timed 20-minute mocks on computer interfaces. Track accuracy percentage before speed.`
      },
      {
        id: 'blog-5',
        title: 'Mastering Units 8 & 9 for TNPSC Group 1 & 2 Preliminary Exams',
        snippet: 'Essential reading strategy for Tamil Nadu socio-political movements, Dravidian history, and social welfare development administration.',
        image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800',
        category: 'TNPSC Focus',
        date: 'June 02, 2024',
        content: `Units 8 and 9 constitute the most decisive section in TNPSC examinations.
        
- Unit 8: Dedicate focused time to classical Sangam literature, Thirukkural couplets with ethical commentary, and the 19th-20th century social reform movements led by Periyar, Bharathiyar, and CN Annadurai.
- Unit 9: Focus on government policy indices, HDI rankings of Tamil Nadu districts, industrial corridors, and flagship state welfare schemes like Pudhumai Penn and breakfast schemes.`
      },
      {
        id: 'blog-6',
        title: 'Topper Interview: From Rural College to Deputy Collector',
        snippet: 'Read how consistent 6-hour daily study routines and regular weekly test series helped S. Poovizhi crack the officer cadre examination.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
        category: 'Success Stories',
        date: 'June 20, 2024',
        content: `"Consistency beats intensity every single time," says S. Poovizhi. "The faculty at GanitGridd guided me through every syllabus detail. When I was struggling with current affairs notes, the bilingual compilations and Sunday mock test rankings gave me clarity on my weaknesses."`
      }
    ];
  }, []);

  const filteredBlogs = useMemo(() => {
    return allBlogs.filter((blog) => {
      const matchesCat = selectedCategory === 'all' || (blog.category || '').toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch = 
        !searchQuery || 
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.snippet.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [allBlogs, selectedCategory, searchQuery]);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#081747] text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" width="100%" height="100%">
            <defs>
              <pattern id="blogGridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blogGridPattern)" />
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
            <span className="text-white font-semibold">Blog & Insights</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-400/30 text-amber-300 text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Expert Articles & Preparation Guides</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
              Academy Blog & Articles
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              In-depth exam strategies, subject masterclasses, topper experiences, and up-to-the-minute recruitment notifications written by our senior educators.
            </p>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-slate-200 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">

          <div className="flex md:flex-wrap items-center gap-1.5 overflow-x-auto no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
            {[
              { id: 'all', label: 'All Articles' },
              { id: 'exam strategy', label: 'Exam Strategy' },
              { id: 'tnpsc focus', label: 'TNPSC Guidance' },
              { id: 'success stories', label: 'Topper Stories' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex-shrink-0 ${
                  selectedCategory === tab.id
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-500 focus:bg-white text-slate-800"
            />
          </div>
        </div>
      </div>

      {/* Blogs Grid */}
      <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <article
              key={blog.id}
              onClick={() => onSelectBlog(blog)}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="aspect-16/10 overflow-hidden relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  {blog.category && (
                    <span className="absolute top-3 left-3 bg-[#081747]/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                      {blog.category}
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 text-xs text-slate-400 mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{blog.date || 'Recent Article'}</span>
                  </div>

                  <h3 className="font-bold text-base text-[#081747] group-hover:text-blue-700 transition-colors line-clamp-2 leading-snug mb-2">
                    {blog.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {blog.snippet}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-700 mt-2">
                <span>Read Full Guide</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

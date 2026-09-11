import React, { useState } from 'react';
import { 
  ChevronDown, 
  Phone, 
  User, 
  GraduationCap, 
  Menu, 
  X,
  BookOpen,
  Award,
  Calendar,
  FileText
} from 'lucide-react';
import { GanitGriddLogo } from './GanitGriddLogo';
import { PageType } from '../types';

interface NavbarProps {
  currentPage?: PageType;
  onNavigate: (page: PageType) => void;
  onOpenEnroll: (courseId?: string) => void;
  onOpenAccount: () => void;
  onOpenContact: () => void;
  onSelectCourse?: (courseId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage = 'home',
  onNavigate,
  onOpenEnroll,
  onOpenAccount,
  onOpenContact,
  onSelectCourse
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleNavClick = (page: PageType) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCourseNav = (courseId: string) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    onNavigate('courses');
    onSelectCourse?.(courseId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-xs border-b border-slate-100">
      <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 h-16 sm:h-20">
          
          {/* Logo Brand: GanitGridd with Math & Science Vector Icon */}
          <div 
            id="brand-logo" 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2.5 cursor-pointer select-none group py-1 flex-shrink-0"
          >
            <GanitGriddLogo size="md" hideTaglineOnXl />
          </div>

          {/* Desktop Nav Items - Visible on Desktop (xl: 1280px+); below that the hamburger menu is used */}
          <nav className="hidden xl:flex items-center space-x-0.5 2xl:space-x-1.5 text-[13px] font-semibold text-slate-700 whitespace-nowrap">
            {/* About Us Dropdown */}
            <div className="relative group">
              <button 
                id="nav-about-dropdown"
                onClick={() => handleNavClick('about')}
                className={`px-2 py-1.5 rounded-lg flex items-center space-x-1 transition-colors cursor-pointer ${
                  currentPage === 'about' 
                    ? 'text-[#081747] font-black bg-slate-100/80' 
                    : 'hover:text-[#081747] hover:bg-slate-50'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className="w-3 h-3 text-slate-400 group-hover:text-[#081747] transition-transform" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-52 bg-white border border-slate-100 rounded-xl shadow-xl py-2 z-50">
                <button 
                  onClick={() => handleNavClick('about')}
                  className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#081747] cursor-pointer"
                >
                  Overview & Philosophy
                </button>
                <button 
                  onClick={() => handleNavClick('about')}
                  className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#081747] cursor-pointer"
                >
                  The GanitGridd Matrix
                </button>
                <button 
                  onClick={() => handleNavClick('gallery')}
                  className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#081747] cursor-pointer"
                >
                  Campus & Smart Theatres
                </button>
                <button 
                  onClick={() => handleNavClick('about')}
                  className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#081747] cursor-pointer"
                >
                  Faculty & Mentors
                </button>
              </div>
            </div>

            {/* Courses Dropdown */}
            <div className="relative group">
              <button 
                id="nav-courses-dropdown"
                onClick={() => handleNavClick('courses')}
                className={`px-2 py-1.5 rounded-lg flex items-center space-x-1 transition-colors cursor-pointer ${
                  currentPage === 'courses' 
                    ? 'text-[#081747] font-black bg-slate-100/80' 
                    : 'hover:text-[#081747] hover:bg-slate-50'
                }`}
              >
                <span>Courses</span>
                <ChevronDown className="w-3 h-3 text-slate-400 group-hover:text-[#081747] transition-transform" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-60 bg-white border border-slate-100 rounded-xl shadow-xl py-2 z-50">
                <button 
                  onClick={() => handleNavClick('courses')}
                  className="w-full text-left px-4 py-2 text-xs font-bold text-blue-700 bg-blue-50/50 hover:bg-blue-50 cursor-pointer"
                >
                  View All Programs (11 Courses)
                </button>
                <button 
                  onClick={() => handleCourseNav('upsc')}
                  className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-[#081747] cursor-pointer"
                >
                  UPSC Civil Services
                </button>
                <button 
                  onClick={() => handleCourseNav('tnpsc-group-1')}
                  className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-[#081747] cursor-pointer"
                >
                  TNPSC Group 1 / 2 / 4
                </button>
                <button 
                  onClick={() => handleCourseNav('ssc')}
                  className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-[#081747] cursor-pointer"
                >
                  SSC & Railway (RRB)
                </button>
                <button 
                  onClick={() => handleCourseNav('banking')}
                  className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-[#081747] cursor-pointer"
                >
                  Banking (IBPS & SBI)
                </button>
                <button 
                  onClick={() => handleCourseNav('iit-jee')}
                  className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-[#081747] cursor-pointer"
                >
                  IIT-JEE & NEET (Math & Science)
                </button>
              </div>
            </div>

            <button 
              id="nav-admissions"
              onClick={() => handleNavClick('admissions')}
              className={`px-2 py-1.5 rounded-lg transition-colors cursor-pointer ${
                currentPage === 'admissions' 
                  ? 'text-[#081747] font-black bg-slate-100/80' 
                  : 'hover:text-[#081747] hover:bg-slate-50'
              }`}
            >
              Admissions
            </button>

            {/* Exam & Syllabus */}
            <button 
              id="nav-exams"
              onClick={() => handleNavClick('exams')}
              className={`px-2 py-1.5 rounded-lg transition-colors cursor-pointer ${
                currentPage === 'exams' 
                  ? 'text-[#081747] font-black bg-slate-100/80' 
                  : 'hover:text-[#081747] hover:bg-slate-50'
              }`}
            >
              Exam & Syllabus
            </button>

            {/* Resources */}
            <button 
              id="nav-resources"
              onClick={() => handleNavClick('resources')}
              className={`px-2 py-1.5 rounded-lg transition-colors cursor-pointer ${
                currentPage === 'resources' 
                  ? 'text-[#081747] font-black bg-slate-100/80' 
                  : 'hover:text-[#081747] hover:bg-slate-50'
              }`}
            >
              Resources
            </button>

            <button 
              id="nav-blog"
              onClick={() => handleNavClick('blog')}
              className={`px-2 py-1.5 rounded-lg transition-colors cursor-pointer ${
                currentPage === 'blog' 
                  ? 'text-[#081747] font-black bg-slate-100/80' 
                  : 'hover:text-[#081747] hover:bg-slate-50'
              }`}
            >
              Blog
            </button>

            <button 
              id="nav-gallery"
              onClick={() => handleNavClick('gallery')}
              className={`px-2 py-1.5 rounded-lg transition-colors cursor-pointer ${
                currentPage === 'gallery' 
                  ? 'text-[#081747] font-black bg-slate-100/80' 
                  : 'hover:text-[#081747] hover:bg-slate-50'
              }`}
            >
              Gallery
            </button>

            <button 
              id="nav-faq"
              onClick={() => handleNavClick('faq')}
              className={`px-2 py-1.5 rounded-lg transition-colors cursor-pointer ${
                currentPage === 'faq' 
                  ? 'text-[#081747] font-black bg-slate-100/80' 
                  : 'hover:text-[#081747] hover:bg-slate-50'
              }`}
            >
              FAQ
            </button>
          </nav>

          {/* Action Buttons Right - Visible on Desktop (xl: 1280px+); Contact & Account are icon-only until 2xl to keep one line */}
          <div className="hidden xl:flex items-center space-x-2 flex-shrink-0">
            <button
              id="btn-nav-contact"
              onClick={() => handleNavClick('contact')}
              aria-label="Contact"
              title="Contact"
              className="h-9 w-9 2xl:w-auto 2xl:px-4 rounded-full border border-[#081747] text-[#081747] hover:bg-[#081747] hover:text-white transition-colors flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden 2xl:inline text-xs font-bold">Contact</span>
            </button>

            <button
              id="btn-nav-account"
              onClick={onOpenAccount}
              aria-label="Account"
              title="Account"
              className="h-9 w-9 2xl:w-auto 2xl:px-4 rounded-full bg-slate-100 hover:bg-slate-200 text-[#081747] transition-colors flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
            >
              <User className="w-4 h-4" />
              <span className="hidden 2xl:inline text-xs font-bold">Account</span>
            </button>

            <button
              id="btn-nav-enroll"
              onClick={() => onOpenEnroll()}
              className="px-4.5 py-2 whitespace-nowrap rounded-full bg-[#081747] hover:bg-blue-900 text-amber-300 text-xs font-black transition-all flex items-center space-x-1.5 shadow-md hover:scale-105 cursor-pointer"
            >
              <GraduationCap className="w-4 h-4 text-amber-300" />
              <span>Enroll Now</span>
            </button>
          </div>

          {/* Mobile menu trigger - ONLY VISIBLE ON SCREENS LESS THAN xl (< 1280px) */}
          <div className="flex xl:hidden items-center space-x-1.5 sm:space-x-2 flex-shrink-0">
            {/* Hidden on the narrowest phones (<360px) so the logo fits; Enroll is also in the drawer */}
            <button
              id="btn-mobile-enroll"
              onClick={() => onOpenEnroll()}
              className="hidden min-[360px]:block px-3.5 py-2 rounded-full bg-[#081747] text-amber-300 text-xs font-black shadow-xs cursor-pointer"
            >
              Enroll
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#081747] rounded-md focus:outline-hidden cursor-pointer"
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Only under 1280px) */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1 shadow-xl max-h-[calc(100dvh-4rem)] sm:max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain animate-in slide-in-from-top duration-200">
          <button
            onClick={() => handleNavClick('about')}
            className={`block w-full text-left py-3 px-3 text-sm font-semibold rounded-lg ${currentPage === 'about' ? 'text-blue-900 font-bold bg-blue-50' : 'text-slate-700 hover:bg-slate-50'}`}
          >
            About Us
          </button>
          <button
            onClick={() => handleNavClick('courses')}
            className={`block w-full text-left py-3 px-3 text-sm font-semibold rounded-lg ${currentPage === 'courses' ? 'text-blue-900 font-bold bg-blue-50' : 'text-slate-700 hover:bg-slate-50'}`}
          >
            Courses Catalog
          </button>
          <button
            onClick={() => handleNavClick('admissions')}
            className={`block w-full text-left py-3 px-3 text-sm font-semibold rounded-lg ${currentPage === 'admissions' ? 'text-blue-900 font-bold bg-blue-50' : 'text-slate-700 hover:bg-slate-50'}`}
          >
            Admissions
          </button>
          <button
            onClick={() => handleNavClick('exams')}
            className={`block w-full text-left py-3 px-3 text-sm font-semibold rounded-lg ${currentPage === 'exams' ? 'text-blue-900 font-bold bg-blue-50' : 'text-slate-700 hover:bg-slate-50'}`}
          >
            Exam & Syllabus Guide
          </button>
          <button
            onClick={() => handleNavClick('resources')}
            className={`block w-full text-left py-3 px-3 text-sm font-semibold rounded-lg ${currentPage === 'resources' ? 'text-blue-900 font-bold bg-blue-50' : 'text-slate-700 hover:bg-slate-50'}`}
          >
            Study Resources & Materials
          </button>
          <button
            onClick={() => handleNavClick('blog')}
            className={`block w-full text-left py-3 px-3 text-sm font-semibold rounded-lg ${currentPage === 'blog' ? 'text-blue-900 font-bold bg-blue-50' : 'text-slate-700 hover:bg-slate-50'}`}
          >
            Blog & Preparation Insights
          </button>
          <button
            onClick={() => handleNavClick('gallery')}
            className={`block w-full text-left py-3 px-3 text-sm font-semibold rounded-lg ${currentPage === 'gallery' ? 'text-blue-900 font-bold bg-blue-50' : 'text-slate-700 hover:bg-slate-50'}`}
          >
            Campus & Gallery
          </button>
          <button
            id="nav-mobile-faq"
            onClick={() => handleNavClick('faq')}
            className={`block w-full text-left py-3 px-3 text-sm font-semibold rounded-lg ${currentPage === 'faq' ? 'text-blue-900 font-bold bg-blue-50' : 'text-slate-700 hover:bg-slate-50'}`}
          >
            FAQ
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`block w-full text-left py-3 px-3 text-sm font-semibold rounded-lg ${currentPage === 'contact' ? 'text-blue-900 font-bold bg-blue-50' : 'text-slate-700 hover:bg-slate-50'}`}
          >
            Contact & Location
          </button>

          <div className="pt-3 border-t border-slate-100 flex flex-col space-y-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenEnroll(); }}
              className="w-full py-3 rounded-full bg-[#081747] text-amber-300 text-xs font-black flex items-center justify-center space-x-1.5"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Enroll Now</span>
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAccount(); }}
              className="w-full py-3 rounded-full bg-slate-100 text-[#081747] text-xs font-bold flex items-center justify-center space-x-1.5"
            >
              <User className="w-3.5 h-3.5" />
              <span>My Account</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};


/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NoticeTicker } from './components/NoticeTicker';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { CoursesSection } from './components/CoursesSection';
import { AchievementsSection } from './components/AchievementsSection';
import { StudyModeSection } from './components/StudyModeSection';
import { StudyResourcesSection } from './components/StudyResourcesSection';
import { RecognitionSection } from './components/RecognitionSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { PartnershipSection } from './components/PartnershipSection';
import { BlogsSection } from './components/BlogsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { EnrollModal } from './components/EnrollModal';
import { CourseDetailModal } from './components/CourseDetailModal';
import { AccountModal } from './components/AccountModal';
import { ContactModal } from './components/ContactModal';
import { BlogDetailModal } from './components/BlogDetailModal';
import { ResourceModal } from './components/ResourceModal';
import { Course, BlogItem, PageType } from './types';
import { coursesData } from './data/academyData';

// Dedicated Page Views
import { AboutPage } from './pages/AboutPage';
import { CoursesPage } from './pages/CoursesPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { ExamsPage } from './pages/ExamsPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { BlogPage } from './pages/BlogPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [enrollDefaultCourse, setEnrollDefaultCourse] = useState<string | undefined>(undefined);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | null>(null);
  const [resourceModal, setResourceModal] = useState<{ isOpen: boolean; category: string; title: string }>({
    isOpen: false,
    category: '',
    title: ''
  });

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnroll = (courseIdOrTitle?: string) => {
    let matchId = 'upsc';
    if (courseIdOrTitle) {
      const found = coursesData.find(
        (c) => c.id === courseIdOrTitle || c.title.toLowerCase().includes(courseIdOrTitle.toLowerCase())
      );
      if (found) matchId = found.id;
    }
    setEnrollDefaultCourse(matchId);
    setEnrollModalOpen(true);
  };

  const handleOpenCourseDetails = (courseOrTitle: Course | string) => {
    if (typeof courseOrTitle === 'string') {
      const found = coursesData.find(
        (c) => c.title.toLowerCase().includes(courseOrTitle.toLowerCase()) || c.id === courseOrTitle
      );
      if (found) {
        setSelectedCourse(found);
      } else {
        setSelectedCourse(coursesData[0]);
      }
    } else {
      setSelectedCourse(courseOrTitle);
    }
  };

  const handleOpenResource = (category: string, title: string) => {
    setResourceModal({
      isOpen: true,
      category,
      title
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-900 selection:text-white">
      {/* 1. Topmost Notice Ticker */}
      <NoticeTicker />

      {/* 2. Main Navigation Bar - Always visible on large screens */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenEnroll={handleOpenEnroll}
        onOpenAccount={() => setAccountModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
        onSelectCourse={(courseId) => {
          handleOpenCourseDetails(courseId);
        }}
      />

      <main className="flex-1">
        {/* Dynamic Multi-Page Router */}
        {currentPage === 'home' && (
          <div>
            {/* 3. Hero Section (Admission Open, Scholarship, Registration) */}
            <HeroSection onOpenEnroll={() => handleOpenEnroll('upsc')} />

            {/* 4. Welcome / About Section */}
            <AboutSection onLearnMore={() => navigateTo('about')} />

            {/* 5. Courses Section (9 Cards) */}
            <CoursesSection 
              onSelectCourse={handleOpenCourseDetails}
              onViewAllCourses={() => navigateTo('courses')}
            />

            {/* 6. Student Achievements Section (700+ Officers, 3 Featured Achievers) */}
            <AchievementsSection />

            {/* 7. Study Mode Section (4 Cards) */}
            <StudyModeSection
              onOpenEnroll={handleOpenEnroll}
              onOpenDetails={(modeTitle) => handleOpenCourseDetails(modeTitle)}
            />

            {/* 8. Study Resources Section (Daily, Weekly, Monthly Current Affairs) */}
            <StudyResourcesSection onOpenResource={handleOpenResource} />

            {/* 9. Recognition Section (MOU Signing & Affiliation) */}
            <RecognitionSection onOpenExplore={() => navigateTo('gallery')} />

            {/* 10. Why Choose Us Section (Illustrated Mascot & 6 Key Features) */}
            <WhyChooseUsSection />

            {/* 11. Partnership Section (College Logos & Impacteers) */}
            <PartnershipSection />

            {/* 12. Blogs Section (3 Articles & View More) */}
            <BlogsSection
              onSelectBlog={(blog) => setSelectedBlog(blog)}
              onViewMore={() => navigateTo('blog')}
            />

            {/* 13. Testimonials (Sweet Words From Students & Google Rating) */}
            <TestimonialsSection />

            {/* 14. Frequently Asked Questions (Enrollment, Course Structures, Policies) */}
            <FAQSection
              onOpenEnroll={() => handleOpenEnroll('upsc')}
              onOpenContact={() => setContactModalOpen(true)}
            />
          </div>
        )}

        {currentPage === 'about' && (
          <AboutPage 
            onNavigate={navigateTo}
            onOpenEnroll={() => handleOpenEnroll('upsc')}
            onOpenContact={() => setContactModalOpen(true)}
          />
        )}

        {currentPage === 'courses' && (
          <CoursesPage 
            onNavigate={navigateTo}
            onSelectCourse={handleOpenCourseDetails}
            onOpenEnroll={handleOpenEnroll}
            onOpenContact={() => setContactModalOpen(true)}
          />
        )}

        {currentPage === 'admissions' && (
          <AdmissionsPage 
            onNavigate={navigateTo}
            onOpenContact={() => setContactModalOpen(true)}
          />
        )}

        {currentPage === 'exams' && (
          <ExamsPage 
            onNavigate={navigateTo}
            onOpenEnroll={handleOpenEnroll}
            onOpenContact={() => setContactModalOpen(true)}
          />
        )}

        {currentPage === 'resources' && (
          <ResourcesPage 
            onNavigate={navigateTo}
            onOpenResourceModal={handleOpenResource}
            onOpenEnroll={() => handleOpenEnroll('upsc')}
          />
        )}

        {currentPage === 'blog' && (
          <BlogPage 
            onNavigate={navigateTo}
            onSelectBlog={(blog) => setSelectedBlog(blog)}
            onOpenContact={() => setContactModalOpen(true)}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage 
            onNavigate={navigateTo}
            onOpenContact={() => setContactModalOpen(true)}
            onOpenEnroll={() => handleOpenEnroll('upsc')}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage 
            onNavigate={navigateTo}
            onOpenEnroll={() => handleOpenEnroll('upsc')}
          />
        )}

        {currentPage === 'faq' && (
          <FAQPage 
            onNavigate={navigateTo}
            onOpenContact={() => setContactModalOpen(true)}
            onOpenEnroll={() => handleOpenEnroll('upsc')}
          />
        )}
      </main>

      {/* Dark Footer with full interactive navigation */}
      <Footer 
        onNavigate={navigateTo} 
        onOpenContact={() => setContactModalOpen(true)} 
      />

      {/* Floating Live Chat & WhatsApp Buttons */}
      <ChatWidget />

      {/* Modals */}
      <EnrollModal
        isOpen={enrollModalOpen}
        onClose={() => setEnrollModalOpen(false)}
        defaultCourseId={enrollDefaultCourse}
      />

      <CourseDetailModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnrollNow={(courseId) => {
          setSelectedCourse(null);
          handleOpenEnroll(courseId);
        }}
      />

      <AccountModal
        isOpen={accountModalOpen}
        onClose={() => setAccountModalOpen(false)}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      <BlogDetailModal
        blog={selectedBlog}
        onClose={() => setSelectedBlog(null)}
      />

      <ResourceModal
        isOpen={resourceModal.isOpen}
        onClose={() => setResourceModal((prev) => ({ ...prev, isOpen: false }))}
        category={resourceModal.category}
        title={resourceModal.title}
      />
    </div>
  );
}

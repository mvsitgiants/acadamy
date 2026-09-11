import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { GanitGriddLogo } from './GanitGriddLogo';
import { PageType } from '../types';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContact }) => {
  const handleNav = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Extra bottom padding on phones keeps the copyright clear of the floating chat buttons
  return (
    <footer className="bg-black text-white pt-12 pb-24 md:py-14 border-t border-slate-800">
      <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-x-6 gap-y-10 md:gap-10">

          {/* Col 1: Brand, Address, Contacts, Socials */}
          <div className="col-span-2 lg:col-span-4 space-y-4">
            
            {/* White Logo Badge */}
            <div className="inline-block bg-white rounded-2xl p-2.5 shadow-sm">
              <GanitGriddLogo size="sm" />
            </div>

            {/* Address */}
            <div className="flex items-start space-x-2.5 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
              <span>
                1st floor (V.V.School cross street), near Railway station, Gummidipoondi, Tamil Nadu 601201
              </span>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-2.5 text-xs text-slate-300">
              <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
              <a href="tel:09442678741" className="hover:text-white transition-colors">
                09442678741
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-2.5 text-xs text-slate-300">
              <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
              <a href="mailto:contact@ganitgridd.com" className="hover:text-white transition-colors break-all">
                contact@ganitgridd.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center space-x-3">
              {/* Facebook */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 sm:w-7 sm:h-7 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 sm:w-7 sm:h-7 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 sm:w-7 sm:h-7 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 sm:w-7 sm:h-7 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-red-600 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-sm text-white tracking-wide">
              Quick Link
            </h4>
            <ul className="space-y-2.5 sm:space-y-2 text-[13px] sm:text-xs text-slate-300">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('courses')} className="hover:text-white transition-colors cursor-pointer">
                  Courses Catalog
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('admissions')} className="hover:text-white transition-colors cursor-pointer">
                  Admissions
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('exams')} className="hover:text-white transition-colors cursor-pointer">
                  Exam & Syllabus
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('resources')} className="hover:text-white transition-colors cursor-pointer">
                  Resources
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-white transition-colors cursor-pointer">
                  Campus Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('blog')} className="hover:text-white transition-colors cursor-pointer">
                  Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Help Center */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-sm text-white tracking-wide">
              Help Center
            </h4>
            <ul className="space-y-2.5 sm:space-y-2 text-[13px] sm:text-xs text-slate-300">
              <li>
                <button 
                  onClick={() => handleNav('faq')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('contact')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Directions
                </button>
              </li>
              <li>
                <button onClick={onOpenContact} className="hover:text-white transition-colors cursor-pointer">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={onOpenContact} className="hover:text-white transition-colors cursor-pointer">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Location Map */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4">
            <div className="md:max-w-md lg:max-w-none rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-md">
              <div className="relative aspect-4/3 w-full bg-slate-800">
                {/* Visual Map Layout matching screenshot with landmarks */}
                <div className="absolute inset-0 bg-[#e5e3df] p-3 flex flex-col justify-between select-none">
                  
                  {/* Streets representation */}
                  <svg className="w-full h-full absolute inset-0 opacity-60 pointer-events-none" viewBox="0 0 200 150">
                    <line x1="10" y1="30" x2="190" y2="30" stroke="#ffffff" strokeWidth="6" />
                    <line x1="40" y1="10" x2="40" y2="140" stroke="#ffffff" strokeWidth="5" />
                    <line x1="40" y1="80" x2="180" y2="100" stroke="#ffffff" strokeWidth="6" />
                    <line x1="120" y1="20" x2="140" y2="140" stroke="#ffffff" strokeWidth="4" />
                    <line x1="80" y1="30" x2="70" y2="140" stroke="#d1d5db" strokeWidth="3" />
                  </svg>

                  {/* Landmarks pins */}
                  <div className="relative z-10 space-y-2">
                    <div className="flex items-center space-x-1 bg-white/90 px-1.5 py-0.5 rounded shadow-xs text-[9px] font-bold text-slate-800 w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                      <span>Gummidipoondi Rly Station</span>
                    </div>

                    <div className="flex items-center space-x-1 bg-white/90 px-1.5 py-0.5 rounded shadow-xs text-[8px] text-slate-600 w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                      <span>Near State Bank of India</span>
                    </div>
                  </div>

                  <div className="relative z-10 flex justify-between items-end">
                    <div className="flex items-center space-x-1 bg-amber-50 border border-amber-300 px-2 py-1 rounded shadow-xs text-[9px] font-extrabold text-[#081747]">
                      <MapPin className="w-3 h-3 text-red-600 fill-red-600" />
                      <span>GanitGridd Academy</span>
                    </div>

                    <a 
                      href="https://maps.google.com/?q=Gummidipoondi+Tamil+Nadu+601201" 
                      target="_blank" 
                      rel="noreferrer"
                      className="bg-[#081747] text-white text-[9px] font-bold px-2 py-1 rounded hover:bg-blue-900 transition-colors"
                    >
                      View on Google Maps ↗
                    </a>
                  </div>

                </div>
              </div>
              <div className="p-2.5 bg-slate-900 text-[10px] text-slate-400 text-center">
                Gummidipoondi Campus, Tamil Nadu 601201
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} GanitGridd - Math & Science Academy. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

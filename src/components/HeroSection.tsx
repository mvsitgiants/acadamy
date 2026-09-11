import React from 'react';
import { Phone, Globe, Plus, Volume2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenEnroll: () => void;
}

// Organic curved dome with lateral wings (450 x 450 viewBox)
const BLOB_PATH = `M 225,25
  C 320,25 385,85 380,165
  C 435,200 460,270 435,340
  C 410,405 330,440 225,445
  C 120,440 40,405 15,340
  C -10,270 15,200 70,165
  C 65,85 130,25 225,25 Z`;

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnroll }) => {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden bg-linear-to-br from-white via-white to-blue-50/70 py-8 sm:py-10 lg:py-12"
    >
      {/* Full-bleed soft glow behind the student side */}
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-blue-100/40 blur-3xl pointer-events-none select-none hidden lg:block" />

      {/* 1. Top Right Decorative Squiggle & Plus */}
      <div className="absolute top-12 right-1/4 text-slate-400 pointer-events-none select-none hidden lg:block opacity-60">
        <svg width="45" height="15" viewBox="0 0 45 15" fill="none">
          <path d="M2 7.5 Q 7 2, 12 7.5 T 22 7.5 T 32 7.5 T 42 7.5" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>

      <div className="absolute top-8 right-16 text-slate-400 pointer-events-none select-none hidden lg:block opacity-70">
        <Plus className="w-3.5 h-3.5 text-slate-400" />
      </div>

      <div className="w-full max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

          {/* Left Column: Dotted Matrix + Big Heading + Pill + Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-5">

            {/* Dotted Matrix directly above "ADMISSION" matching the screenshot */}
            <div className="w-full flex justify-center lg:justify-start pl-0 lg:pl-36 select-none pointer-events-none pb-1">
              <div className="grid grid-cols-10 gap-x-1.5 gap-y-1">
                {Array.from({ length: 40 }).map((_, i) => (
                  <span key={i} className="w-1 h-1 rounded-full bg-slate-300 inline-block"></span>
                ))}
              </div>
            </div>

            {/* ADMISSION OPEN Headings */}
            <div className="space-y-0 select-none">
              <h1 className="text-5xl sm:text-7xl xl:text-8xl 2xl:text-9xl font-black text-[#081747] tracking-tight uppercase leading-[0.9]">
                ADMISSION
              </h1>
              <h1 className="text-5xl sm:text-7xl xl:text-8xl 2xl:text-9xl font-black text-[#081747] tracking-tight uppercase leading-[0.9]">
                OPEN
              </h1>
            </div>

            {/* NOW OPEN FOR REGISTRATIONS! */}
            <div className="pt-1">
              <p className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-extrabold text-[#1d4ed8] tracking-wide uppercase">
                NOW OPEN FOR REGISTRATIONS!
              </p>
            </div>

            {/* Exam Badge Container */}
            <div className="bg-white border border-slate-200/90 rounded-full px-6 sm:px-8 py-2.5 shadow-2xs inline-block">
              <p className="text-xs sm:text-sm font-extrabold text-[#081747] tracking-wide text-center uppercase">
                UPSC | SSC | RRB | BANKING | RAILWAY
              </p>
              <p className="text-xs sm:text-sm font-extrabold text-[#081747] tracking-wide text-center uppercase mt-0.5">
                TNPSC | TNUSRB
              </p>
            </div>

            {/* Actions Row: ENROLL NOW, Phone, Website with Plus */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm">
              {/* Enroll Now Pill Button */}
              <button
                id="btn-hero-enroll"
                onClick={onOpenEnroll}
                className="px-7 py-3 rounded-full bg-[#081747] hover:bg-blue-950 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                ENROLL NOW
              </button>

              {/* Phone */}
              <a
                href="tel:9442678741"
                className="flex items-center space-x-2 text-[#081747] font-bold text-sm hover:text-blue-700 transition-colors"
              >
                <Phone className="w-4 h-4 fill-[#081747]" />
                <span>94426 78741</span>
              </a>

              {/* Website */}
              <a
                href="https://ganitgridd.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1 text-[#081747] font-semibold text-xs sm:text-sm hover:text-blue-800 transition-colors"
              >
                <Globe className="w-4 h-4 text-slate-500" />
                <span>www.ganitgridd.com</span>
                <Plus className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

          </div>

          {/* Right Column: Student over Deep Navy Blob & 50% Scholarship Badge */}
          <div className="lg:col-span-5 relative flex items-center justify-center">

            {/* Floating Wavy Line to the left of the student */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none select-none hidden xl:block opacity-60">
              <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
                <path d="M2 6 Q 6 2, 10 6 T 18 6 T 26 6 T 34 6 T 38 6" stroke="#94a3b8" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>

            {/* Student & Blob — scales with the column; head rises above the blob */}
            <div className="relative w-full max-w-[19rem] sm:max-w-[24rem] lg:max-w-[28rem] xl:max-w-[31rem] 2xl:max-w-[37rem] mt-6 sm:mt-8 lg:mt-10">

              <svg
                viewBox="0 0 450 450"
                className="w-full h-auto overflow-visible drop-shadow-xl"
                role="img"
                aria-label="Kanchi Valluvan IAS Academy Top Aspirant"
              >
                <defs>
                  <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#081747" />
                    <stop offset="100%" stopColor="#061238" />
                  </linearGradient>
                  {/* Blob shape + open area above it: photo pops out of the top, curves off at the bottom */}
                  <clipPath id="heroPhotoClip">
                    <rect x="-50" y="-200" width="550" height="400" />
                    <path d={BLOB_PATH} />
                  </clipPath>
                </defs>

                <path d={BLOB_PATH} fill="url(#blobGrad)" />

                {/* Transparent cutout from /public/herosection.png (408 x 612) */}
                <image
                  href="/herosection.png"
                  x="38"
                  y="-110"
                  width="374"
                  height="560"
                  preserveAspectRatio="xMidYMax meet"
                  clipPath="url(#heroPhotoClip)"
                />

                {/* Light blue crescent curve at the bottom */}
                <path
                  d="M 120,420 C 175,442 275,442 330,420 C 300,436 225,442 120,420 Z"
                  fill="#bfdbfe"
                  opacity="0.8"
                />
                <path
                  d="M 140,430 C 185,445 265,445 310,430 C 285,442 225,446 140,430 Z"
                  fill="#ffffff"
                  opacity="0.9"
                />
              </svg>

              {/* Small Plus icon above the student's left shoulder */}
              <div className="absolute top-[12%] left-2 text-slate-400 pointer-events-none select-none hidden sm:block opacity-70">
                <Plus className="w-3 h-3 text-slate-400" />
              </div>

              {/* Floating "WE OFFERED 50% SCHOLARSHIP" Speech Bubble / Card */}
              <div className="absolute top-[6%] -right-2 sm:-right-6 z-20 bg-white border border-slate-200/90 rounded-2xl py-2 px-3 sm:py-2.5 sm:px-4 shadow-lg flex items-center space-x-2.5">
                <div className="text-[#081747] flex items-center justify-center">
                  <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 transform -rotate-12" />
                </div>
                <div className="text-left leading-none">
                  <span className="block text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                    WE OFFERED
                  </span>
                  <span className="block text-xl sm:text-3xl font-black text-[#081747] my-0.5 tracking-tight">
                    50%
                  </span>
                  <span className="block text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#081747]">
                    SCHOLARSHIP
                  </span>
                </div>
              </div>

              {/* Plus icon on right */}
              <div className="absolute bottom-[18%] -right-4 text-slate-400 pointer-events-none select-none hidden sm:block opacity-70">
                <Plus className="w-3 h-3 text-slate-400" />
              </div>

              {/* 2x5 Grid of 'X' on bottom right below student */}
              <div className="absolute -bottom-8 -right-4 text-slate-400 font-mono text-[11px] select-none tracking-widest leading-3 opacity-75 hidden sm:block">
                <div>× × × × ×</div>
                <div className="mt-1">× × × × ×</div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';

interface GanitGriddLogoProps {
  variant?: 'full' | 'icon' | 'dark' | 'light';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  /** Hide the "STEM & Olympiads" tagline on xl screens (1280–1535px), where the desktop navbar is tight */
  hideTaglineOnXl?: boolean;
}

export const GanitGriddLogo: React.FC<GanitGriddLogoProps> = ({
  variant = 'full',
  className = '',
  size = 'md',
  hideTaglineOnXl = false
}) => {
  const isDark = variant === 'dark';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14'
  };

  return (
    <div className={`flex items-center space-x-3 select-none ${className}`}>
      {/* Math & Science Vector Icon Badge */}
      <div
        className={`relative ${iconSizes[size]} rounded-2xl flex items-center justify-center p-1.5 shadow-sm transition-transform hover:scale-105 ${
          isDark
            ? 'bg-gradient-to-br from-slate-900 to-[#0b1a48] border border-blue-500/30'
            : 'bg-gradient-to-br from-[#081747] via-[#0b2568] to-[#1e3a8a] text-white shadow-md'
        }`}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Grid Pattern */}
            <pattern id="mathGrid" width="16" height="16" patternUnits="userSpaceOnUse">
              <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#60a5fa" strokeWidth="0.75" strokeOpacity="0.28" />
            </pattern>
            {/* Glow Gradient */}
            <linearGradient id="sciOrbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id="goldAcc" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>

          {/* Background Mathematical Grid */}
          <rect x="10" y="10" width="80" height="80" rx="14" fill="url(#mathGrid)" />

          {/* Coordinate Axes */}
          <line x1="12" y1="50" x2="88" y2="50" stroke="#93c5fd" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="2 2" />
          <line x1="50" y1="12" x2="50" y2="88" stroke="#93c5fd" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="2 2" />

          {/* Science Orbit 1: Angled Electron Ellipse */}
          <ellipse
            cx="50"
            cy="50"
            rx="38"
            ry="14"
            transform="rotate(32 50 50)"
            stroke="url(#sciOrbGrad)"
            strokeWidth="2.2"
            strokeDasharray="140 10"
          />

          {/* Science Orbit 2: Counter-angled Electron Ellipse */}
          <ellipse
            cx="50"
            cy="50"
            rx="38"
            ry="14"
            transform="rotate(-32 50 50)"
            stroke="#38bdf8"
            strokeWidth="1.8"
            strokeOpacity="0.7"
          />

          {/* Nucleus / Origin Point (Golden Sun / Core Particle) */}
          <circle cx="50" cy="50" r="5" fill="url(#goldAcc)" filter="drop-shadow(0 0 4px #fbbf24)" />

          {/* Orbiting Particle Electrons */}
          <circle cx="78" cy="34" r="2.6" fill="#38bdf8" filter="drop-shadow(0 0 3px #38bdf8)" />
          <circle cx="22" cy="66" r="2.2" fill="#f59e0b" />

          {/* Mathematical Function Curve / Sigma / Pi Motif in Foreground */}
          {/* Pi & Integral / Sigma stylized apex */}
          <path
            d="M 32 30 L 68 30 M 42 30 L 42 68 C 42 71 39 73 36 71 M 58 30 L 58 70"
            stroke="#ffffff"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.95"
          />
        </svg>
      </div>

      {/* Typography if variant != 'icon' */}
      {variant !== 'icon' && (
        <div className="flex flex-col text-left">
          <div className="flex items-center space-x-1 leading-none">
            <span
              className={`text-xl sm:text-2xl font-black tracking-tight ${
                isDark ? 'text-white' : 'text-[#081747]'
              }`}
            >
              Ganit<span className="text-blue-600">Gridd</span>
            </span>
          </div>
          <div className="flex items-center space-x-1.5 mt-1">
            <span
              className={`text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.18em] ${
                isDark ? 'text-blue-300' : 'text-slate-500'
              }`}
            >
              Math & Science Academy
            </span>
            <span className={`inline-block w-1 h-1 rounded-full bg-amber-500 ${hideTaglineOnXl ? 'xl:hidden 2xl:inline-block' : ''}`}></span>
            <span
              className={`text-[9px] sm:text-[10px] font-semibold hidden md:inline tracking-wider ${
                isDark ? 'text-slate-400' : 'text-slate-400'
              } ${hideTaglineOnXl ? 'xl:hidden 2xl:inline' : ''}`}
            >
              STEM & Olympiads
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

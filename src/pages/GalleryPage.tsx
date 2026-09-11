import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Building2, 
  Users, 
  GraduationCap, 
  Award,
  ArrowRight
} from 'lucide-react';
import { PageType } from '../types';

interface GalleryPageProps {
  onNavigate: (page: PageType) => void;
  onOpenContact: () => void;
  onOpenEnroll: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onNavigate,
  onOpenContact,
  onOpenEnroll
}) => {
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const galleryItems = [
    {
      id: 'g-1',
      title: 'Interactive Smart Lecture Theatres',
      tag: 'classrooms',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
      caption: 'Air-conditioned lecture hall featuring digital smartboards, audio recording, and ergonomic tiered seating.'
    },
    {
      id: 'g-2',
      title: '24/7 Silent Study Library & Reading Hall',
      tag: 'library',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800',
      caption: 'Quiet academic sanctuary equipped with high-speed Wi-Fi, individual study carrels, and 10,000+ reference volumes.'
    },
    {
      id: 'g-3',
      title: 'Online Computer-Based Testing Lab',
      tag: 'labs',
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=800',
      caption: 'Modern CBT computer terminal facility simulating exact SSC, IBPS, and RRB exam interfaces with instant rank analytics.'
    },
    {
      id: 'g-4',
      title: 'Annual Officer Felicitation Ceremony',
      tag: 'ceremony',
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=800',
      caption: 'Honoring our successful TNPSC and UPSC selected officers with distinguished guest dignitaries and parents.'
    },
    {
      id: 'g-5',
      title: 'Senior Civil Servant Guest Lecture Series',
      tag: 'ceremony',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
      caption: 'Serving District Collectors and Police Superintendents delivering motivational strategy and ethics workshops.'
    },
    {
      id: 'g-6',
      title: 'Group Study & Analytical Discussion Pods',
      tag: 'classrooms',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
      caption: 'Peer learning and interview mock practice zones for Mains answer writing reviews and group discussions.'
    },
    {
      id: 'g-7',
      title: 'Science & Mathematical Simulation Matrix',
      tag: 'labs',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800',
      caption: 'Hands-on demonstration models for physics mechanics, optics, and quantitative geometry visualizers.'
    },
    {
      id: 'g-8',
      title: 'State-Level MOU & Academic Affiliations',
      tag: 'ceremony',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800',
      caption: 'Formal signing ceremonies partnering with top engineering and arts colleges across Tamil Nadu.'
    }
  ];

  const filtered = galleryItems.filter(
    (item) => selectedTag === 'all' || item.tag === selectedTag
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#081747] text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" width="100%" height="100%">
            <defs>
              <pattern id="galleryGridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#galleryGridPattern)" />
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
            <span className="text-white font-semibold">Campus & Gallery</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-400/30 text-amber-300 text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Campus Life & Learning Environment</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
              Campus & Academic Gallery
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Explore our smart classrooms, air-conditioned silent study library, computer test lab, and celebration of student achievements at GanitGridd.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-slate-200 flex flex-wrap items-center gap-2 justify-center">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'classrooms', label: 'Smart Classrooms' },
            { id: 'library', label: 'Silent Library' },
            { id: 'labs', label: 'Computer & Test Labs' },
            { id: 'ceremony', label: 'Felicitations & Events' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTag(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedTag === tab.id
                  ? 'bg-[#081747] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Photo Grid */}
      <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((photo) => (
            <div
              key={photo.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="aspect-4/3 overflow-hidden relative">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 bg-[#081747]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">
                  {photo.tag}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm text-[#081747] mb-1 leading-snug">
                  {photo.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Campus Visit Banner */}
      <div className="bg-[#081747] text-white py-12">
        <div className="max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-black">Want to visit our Gummidipoondi campus in person?</h3>
            <p className="text-xs sm:text-sm text-blue-200">
              Walk-in counseling and campus tours are available Monday to Sunday from 8:00 AM to 7:30 PM.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white transition-colors cursor-pointer"
            >
              Get Directions
            </button>
            <button
              onClick={onOpenEnroll}
              className="px-6 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-[#081747] text-xs font-black transition-transform hover:scale-105 shadow-md flex items-center space-x-1.5 cursor-pointer"
            >
              <span>Apply for Admission</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

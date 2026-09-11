import React, { useState } from 'react';
import { X, User, Lock, ArrowRight, BookOpen } from 'lucide-react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose }) => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentId) {
      setLoggedIn(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-t-3xl sm:rounded-3xl max-w-md w-full max-h-[92dvh] sm:max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200">

        {/* Header */}
        <div className="bg-[#0b1a48] text-white p-4 sm:p-5 flex items-center justify-between gap-3 flex-shrink-0">
          <div className="flex items-center space-x-2 min-w-0">
            <User className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <h3 className="font-extrabold text-sm sm:text-base tracking-wide">
              Student Portal Login
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-slate-300 hover:text-white p-1 rounded-lg flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto overscroll-contain">
          {loggedIn ? (
            <div className="space-y-4 text-center py-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">
                Welcome, Student #{studentId || 'KV-2024'}!
              </h4>
              <p className="text-xs text-slate-600">
                You have active access to the Online Test Series Portal, Daily Current Affairs PDF downloads, and OMR Ranking Dashboard.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setLoggedIn(false);
                    onClose();
                  }}
                  className="px-6 py-2 rounded-full bg-[#0b1a48] text-white text-xs font-bold"
                >
                  Go to Dashboard
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              <p className="text-xs text-slate-500">
                Login with your enrolled Student Roll Number or registered Mobile Number to access tests and class materials.
              </p>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Student ID / Registered Mobile *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    placeholder="e.g. KV-2024-884 or 9442678741"
                    required
                    className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3.5 py-2.5 text-slate-800 focus:outline-hidden focus:border-blue-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Password / OTP *
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your secret PIN"
                    required
                    className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3.5 py-2.5 text-slate-800 focus:outline-hidden focus:border-blue-700"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px]">
                <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("OTP will be sent to your registered mobile."); }} className="text-blue-700 font-semibold hover:underline">
                  Forgot Password?
                </a>
                <span className="text-slate-400">New student? Use Enroll</span>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-full bg-[#0b1a48] hover:bg-blue-900 text-white text-xs font-bold transition-colors flex items-center justify-center space-x-2 shadow-md"
              >
                <span>Login to Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

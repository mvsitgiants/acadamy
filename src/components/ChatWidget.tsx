import React, { useState } from 'react';
import { MessageCircle, Send, X, Phone } from 'lucide-react';

export const ChatWidget: React.FC = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string; time: string }>>([
    {
      sender: 'bot',
      text: 'Vanakkam! Welcome to Kanchi Valluvan IAS Academy. How can we guide your civil service preparation today?',
      time: 'Just now'
    }
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMsg = message.trim();
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg, time: now }]);
    setMessage('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: 'Thank you for your message! Our senior academic counselor will connect with you shortly. You can also call us directly at 94426 78741 for immediate admission assistance.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 800);
  };

  return (
    <>
      {/* Bottom Left Floating WhatsApp / Help Badge matching screenshot */}
      <div className="fixed bottom-5 left-5 z-40">
        <a
          href="https://wa.me/919442678741?text=Hello%20Kanchi%20Valluvan%20IAS%20Academy%2C%20I%20am%20interested%20in%20course%20admissions."
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 border border-emerald-500"
          id="whatsapp-chat-button"
        >
          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
          </div>
          <span>Hi, how can I help?</span>
        </a>
      </div>

      {/* Bottom Right Floating AI / Counselor Chat Widget */}
      <div className="fixed bottom-5 right-5 z-40">
        {!chatOpen ? (
          <button
            id="chat-toggle-btn"
            onClick={() => setChatOpen(true)}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1e40af] hover:bg-[#1d4ed8] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            aria-label="Open chat assistance"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        ) : (
          <div className="w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[420px] animate-in slide-in-from-bottom duration-200">
            {/* Header */}
            <div className="bg-[#0b1a48] text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-full bg-blue-100/20 flex items-center justify-center">
                  <span className="font-bold text-xs">KV</span>
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm leading-tight">
                    Academy Admissions Desk
                  </h4>
                  <span className="text-[10px] text-emerald-400 flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>Online & Counseling Open</span>
                  </span>
                </div>
              </div>

              <button
                onClick={() => setChatOpen(false)}
                className="text-slate-300 hover:text-white p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Message Thread */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 text-xs">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-3 shadow-2xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#0b1a48] text-white rounded-tr-xs'
                        : 'bg-white border border-slate-200 text-slate-800 rounded-tl-xs'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[9px] text-slate-400 mt-1 px-1">{msg.time}</span>
                </div>
              ))}
            </div>

            {/* Input Bar */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-200 flex items-center space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask about batch timings, fees, UPSC..."
                className="flex-1 bg-slate-100 border border-slate-200 rounded-full px-4 py-2 text-xs text-slate-800 focus:outline-hidden focus:border-blue-600"
              />
              <button
                type="submit"
                className="w-8 h-8 rounded-full bg-[#0b1a48] hover:bg-blue-900 text-white flex items-center justify-center flex-shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Quick Call Strip */}
            <div className="bg-slate-100 px-4 py-1.5 text-center text-[10px] text-slate-600 border-t border-slate-200 flex items-center justify-center space-x-2">
              <Phone className="w-3 h-3 text-[#0b1a48]" />
              <span>Direct Admissions Hotline: </span>
              <a href="tel:9442678741" className="font-bold text-[#0b1a48] hover:underline">
                94426 78741
              </a>
            </div>

          </div>
        )}
      </div>
    </>
  );
};

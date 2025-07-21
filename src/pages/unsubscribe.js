import { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

export default function Unsubscribe() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleUnsubscribe = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/unsubscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      setStatus('success');
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-green-900 relative overflow-hidden">
      {/* SVG Pattern Overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="unsubscribePattern"
            x="0"
            y="0"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M60 20 L80 60 L60 100 L40 60 Z"
              fill="none"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1"
            />
            <circle cx="60" cy="60" r="2" fill="rgba(255,165,0,0.4)" />
            <circle cx="30" cy="30" r="1.5" fill="rgba(138,43,226,0.3)" />
            <circle cx="90" cy="90" r="1.5" fill="rgba(138,43,226,0.3)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#unsubscribePattern)" />
      </svg>

      <div className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/30">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Unsubscribe</h1>
        <p className="text-gray-600 mb-8 text-center">
          Enter your email address to stop receiving updates from Katly Designs.
        </p>

        {/* Status Messages */}
        {status === 'success' && (
          <div className="mb-6 flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-xl text-green-800">
            <CheckCircle className="w-5 h-5" />
            Successfully unsubscribed!
          </div>
        )}
        {status === 'error' && (
          <div className="mb-6 flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-800">
            <AlertCircle className="w-5 h-5" />
            Failed to unsubscribe. Please try again.
          </div>
        )}

        <form onSubmit={handleUnsubscribe} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 rounded-xl font-semibold text-lg bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300"
          >
            Unsubscribe
          </button>
        </form>
        <p className="text-xs text-gray-400 mt-8 text-center">
          We're sorry to see you go. If this was a mistake, you can resubscribe anytime.
        </p>
      </div>
    </div>
  );
}

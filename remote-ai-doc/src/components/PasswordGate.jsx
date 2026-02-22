import React, { useState } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';

export function PasswordGate({ children, correctPassword }) {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPassword('');
      setTimeout(() => setError(false), 3000);
    }
  };

  if (isAuthenticated) {
    return children;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-teal-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8 text-teal-400" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Protected Area
            </h1>
            <p className="text-slate-300">
              Enter password to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-colors ${
                  error 
                    ? 'border-red-400 focus:ring-red-500' 
                    : 'border-white/20 focus:border-teal-400 focus:ring-teal-500'
                }`}
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {error && (
              <div className="text-red-400 text-sm text-center">
                Incorrect password. Please try again.
              </div>
            )}

            <button
              type="submit"
              className="w-full px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-semibold"
            >
              Enter
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-xs text-slate-400 text-center">
              This area requires authorization. Contact administrator if you need access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
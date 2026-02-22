import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const PASS = 'bridge2026';

export default function Bridge() {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  if (!unlocked) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', fontFamily: "'DM Sans', sans-serif" }}>
        <Helmet><title>The Bridge | The Remote AI Doc</title></Helmet>
        <div style={{ background: '#1e293b', borderRadius: '16px', padding: '40px', maxWidth: '380px', width: '100%', textAlign: 'center', border: '1px solid #334155' }}>
          <div style={{ fontSize: '32px', marginBottom: '8px' }}>🚢</div>
          <h2 style={{ color: '#e2e8f0', margin: '0 0 8px', fontSize: '20px' }}>The Bridge</h2>
          <p style={{ color: '#94a3b8', fontSize: '13px', marginBottom: '20px' }}>Enter access code to continue</p>
          <form onSubmit={e => { e.preventDefault(); input === PASS ? setUnlocked(true) : setError(true); }}>
            <input
              type="password"
              value={input}
              onChange={e => { setInput(e.target.value); setError(false); }}
              placeholder="Access code"
              style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: `1px solid ${error ? '#ef4444' : '#334155'}`, background: '#0f172a', color: '#e2e8f0', fontSize: '14px', outline: 'none', boxSizing: 'border-box', marginBottom: '12px' }}
              autoFocus
            />
            <button type="submit" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: 'none', background: '#0d9488', color: 'white', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>
              Enter
            </button>
          </form>
          {error && <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '8px' }}>Incorrect code</p>}
        </div>
      </div>
    );
  }

  const src = window.location.protocol + '//' + window.location.hostname + ':3847';
  return (
    <>
      <Helmet><title>The Bridge | The Remote AI Doc</title></Helmet>
      <iframe src={src} style={{ width: '100%', height: '100vh', border: 'none', display: 'block' }} title="The Bridge" />
    </>
  );
}

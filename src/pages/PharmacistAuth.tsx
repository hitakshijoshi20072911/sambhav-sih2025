import React, { useState } from 'react';

const PharmacistAuth = () => {
  const [mode, setMode] = useState<'login' | 'register'>('login');

  return (
    <div className="min-h-screen flex items-center justify-center animated-bg relative">
      <img src="/src/assets/sambhav-logo.png" alt="Sambhav Logo Watermark" className="sambhav-watermark" />
      <div className="glass rounded-2xl shadow-2xl p-8 max-w-md w-full z-10">
        <h2 className="text-3xl font-bold mb-6 text-center enhanced-text">{mode === 'login' ? 'Pharmacist Sign In' : 'Pharmacist Registration'}</h2>
        <form className="space-y-4">
          {mode === 'register' && (
            <input className="w-full p-2 rounded border" type="text" placeholder="Full Name" style={{fontFamily: 'Times New Roman, serif'}} />
          )}
          <input className="w-full p-2 rounded border" type="text" placeholder="Aadhaar Card Number" style={{fontFamily: 'Times New Roman, serif'}} />
          <input className="w-full p-2 rounded border" type="text" placeholder="Ayushman Card Number (optional)" style={{fontFamily: 'Times New Roman, serif'}} />
          <input className="w-full p-2 rounded border" type="email" placeholder="Email" style={{fontFamily: 'Times New Roman, serif'}} />
          <input className="w-full p-2 rounded border" type="password" placeholder="Password" style={{fontFamily: 'Times New Roman, serif'}} />
          <button type="submit" className="w-full py-2 rounded bg-[#5a8f7b] text-white font-bold hover:bg-green-700 transition">{mode === 'login' ? 'Sign In' : 'Register'}</button>
        </form>
        <div className="text-center mt-4">
          {mode === 'login' ? (
            <span>New here? <button className="text-green-700 underline" onClick={()=>setMode('register')}>Register</button></span>
          ) : (
            <span>Already have an account? <button className="text-green-700 underline" onClick={()=>setMode('login')}>Sign In</button></span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PharmacistAuth;


import React, { useState } from 'react';

const UserAuth = () => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [role, setRole] = useState<'user' | 'doctor' | 'pharmacist'>('user');

  return (
    <div className="min-h-screen flex items-center justify-center animated-bg relative">
      <img src="/src/assets/sambhav-logo.png" alt="Sambhav Logo Watermark" className="sambhav-watermark" />
      <div className="glass rounded-2xl shadow-2xl p-8 max-w-md w-full z-10">
        <h2 className="text-3xl font-bold mb-6 text-center enhanced-text">{mode === 'login' ? 'Sign In' : 'Register'} ({role.charAt(0).toUpperCase() + role.slice(1)})</h2>
        <div className="flex justify-center gap-2 mb-4">
          <button className={`px-4 py-2 rounded-full ${role==='user' ? 'bg-green-200 text-green-900' : 'bg-gray-100 text-gray-500'}`} onClick={()=>setRole('user')}>User</button>
          <button className={`px-4 py-2 rounded-full ${role==='doctor' ? 'bg-green-200 text-green-900' : 'bg-gray-100 text-gray-500'}`} onClick={()=>setRole('doctor')}>Doctor</button>
          <button className={`px-4 py-2 rounded-full ${role==='pharmacist' ? 'bg-green-200 text-green-900' : 'bg-gray-100 text-gray-500'}`} onClick={()=>setRole('pharmacist')}>Pharmacist</button>
        </div>
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

export default UserAuth;


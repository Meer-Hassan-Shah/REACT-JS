import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import TeamSection from './TeamSection';

function App() {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 min-h-screen text-white">
      <Navbar />
      <HeroSection />
      <TeamSection />
    </div>
  );
}

export default App;

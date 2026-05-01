import React from 'react';

function TeamSection() {
  return (
    <section className="team bg-slate-800 rounded-lg shadow-lg mx-6 mt-10 p-10">
      <h2 className="text-3xl font-bold text-cyan-400 mb-4">Our Team</h2>
      <p className="text-gray-300 mb-6">Meet the amazing developers behind this project:</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-700 p-6 rounded-lg hover:scale-105 transition-transform">
          👨‍💻 Hassan Shah
        </div>
        <div className="bg-slate-700 p-6 rounded-lg hover:scale-105 transition-transform">
          👩‍💻 Developer 2
        </div>
        <div className="bg-slate-700 p-6 rounded-lg hover:scale-105 transition-transform">
          👨‍💻 Developer 3
        </div>
      </div>
    </section>
  );
}

export default TeamSection;

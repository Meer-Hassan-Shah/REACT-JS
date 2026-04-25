import React from 'react';

function TeamSection() {
  return (
    <section className="p-10 bg-gray-100">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="team-card">
          <h3 className="font-bold text-xl">Hassan</h3>
          <p className="text-gray-600">Web Engineer</p>
        </div>
        <div className="team-card">
          <h3 className="font-bold text-xl">Ali</h3>
          <p className="text-gray-600">Designer</p>
        </div>
        <div className="team-card">
          <h3 className="font-bold text-xl">Ayesha</h3>
          <p className="text-gray-600">Developer</p>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;

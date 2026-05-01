import React from 'react';

function HeroSection() {
  return (
    <section className="hero text-center py-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg shadow-xl mx-6 mt-6">
      <h1 className="text-4xl font-extrabold mb-4">Welcome to Lab 9</h1>
      <p className="text-lg text-gray-100">
        A professional Hero Section with gradient background, modern fonts, and responsive design.
      </p>
      <button className="mt-6 px-6 py-2 bg-indigo-700 hover:bg-indigo-500 rounded-lg text-white font-semibold shadow-md">
        Get Started
      </button>
    </section>
  );
}

export default HeroSection;

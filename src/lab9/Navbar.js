import React from 'react';

function Navbar() {
  return (
    <nav className="bg-slate-800 shadow-lg p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-cyan-400"> Lab 9 Project</h1>
      <ul className="flex gap-6 text-gray-300">
        <li className="hover:text-cyan-400 cursor-pointer">Home</li>
        <li className="hover:text-cyan-400 cursor-pointer">About</li>
        <li className="hover:text-cyan-400 cursor-pointer">Team</li>
      </ul>
    </nav>
  );
}

export default Navbar;

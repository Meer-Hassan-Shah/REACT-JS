import React from 'react';

function Lab9Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px' }}>
      <ul style={{ display: 'flex', listStyle: 'none', color: 'white' }}>
        <li style={{ marginRight: '20px' }}>Home</li>
        <li style={{ marginRight: '20px' }}>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Lab9Navbar;

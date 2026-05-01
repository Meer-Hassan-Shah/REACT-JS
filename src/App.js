import React, { useState } from 'react';
import Lab8App from './lab8/App';
import Lab9App from './lab9/App';
import Lab10App from './lab10/App';

function App() {
  const [currentLab, setCurrentLab] = useState('lab8'); // default Lab 8

  return (
    <div>
      {/* Dropdown for switching */}
      <select
        value={currentLab}
        onChange={(e) => setCurrentLab(e.target.value)}
        style={{ margin: '20px', padding: '5px' }}
      >
        <option value="lab8">Lab 8</option>
        <option value="lab9">Lab 9</option>
        <option value="lab10">Lab 10</option>
      </select>

      {/* Render selected lab */}
      {currentLab === 'lab8' && <Lab8App />}
      {currentLab === 'lab9' && <Lab9App />}
      {currentLab === 'lab10' && <Lab10App />}
    </div>
  );
}

export default App;

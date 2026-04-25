import './lab9/App.css';   // Lab 9 ka CSS import karo
import Navbar from './lab9/Navbar';
import HeroSection from './lab9/HeroSection';
import TeamSection from './lab9/TeamSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <TeamSection />
    </div>
  );
}

export default App;

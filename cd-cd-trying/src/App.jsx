import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [glow, setGlow] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setGlow(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            transform: `scale(${Math.random() * 0.5 + 0.5})`
          }}></div>
        ))}
      </div>
      
      <div className={`main-content ${glow ? 'glow' : ''}`}>
        <h1 className="title">Hello People</h1>
        <p className="subtitle">Welcome to your awesome space!!!</p>
        
        <div className="hexagon-container">
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
        </div>
        
        <button className="cta-button">
          Explore More
          <span className="button-hover-effect"></span>
        </button>
      </div>
      
      <div className="corner-decoration top-left"></div>
      <div className="corner-decoration top-right"></div>
      <div className="corner-decoration bottom-left"></div>
      <div className="corner-decoration bottom-right"></div>
    </div>
  )
}

export default App
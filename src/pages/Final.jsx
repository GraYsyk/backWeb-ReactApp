import { useNavigate } from "react-router";
import '../styles/final.css';
import { useState } from "react";

export function Final() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [steps, setSteps] = useState(0);

  const navigate = useNavigate();

  const btnHandler = () => {
    if (steps < 5) {
      setPos({
        x: Math.random() * (window.innerWidth - 100),
        y: Math.min(Math.random() * window.innerHeight, window.innerHeight * 0.5)
      });
      setSteps(prev => prev + 1);
    } else {
      return navigate('/credits');
    }
  };

  return (
    <div className="end-panel">
      <div className="neon-text">
        Hello world!
      </div>
      <button
        className="final-btn"
        onClick={btnHandler}
        style={steps > 0 ? {
          position: 'fixed',
          left: pos.x,
          top: pos.y,
          transition: 'left 0.2s, top 0.2s'
        } : {}}>I accept</button>
    </div>
  );
}
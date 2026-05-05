import { useState } from 'react';
import '../../../../styles/components/capchaModal.css';
import { createPortal } from 'react-dom';

const FAKE_PASSWORDS = [
  'hunter2', 'qwerty123', 'p@ssw0rd', 'letmein!',
  'iloveyou', 'sunshine', 'monkey99', 'dragon!1',
];

const generateTiles = (realPassword) => {
  const fakes = [...FAKE_PASSWORDS]
    .sort(() => Math.random() - 0.5)
    .slice(0, 8);
  return [...fakes, realPassword]
    .sort(() => Math.random() - 0.5);
};


export function CaptchaModal({ realPassword, onSuccess }) {
  const [selected, setSelected] = useState([]);
  const [error, setError] = useState(false);
  const [tiles] = useState(() => generateTiles(realPassword));


  const handleTile = (tile) => {
    setSelected(prev =>
      prev.includes(tile) ? prev.filter(t => t !== tile) : [...prev, tile]
    );
    setError(false);
  };

  const handleVerify = () => {
    if (selected.includes(realPassword) && selected.length === 1) {
      onSuccess();
    } else {
      setError(true);
      setSelected([]);
    }
  };

  return createPortal(
    <div className="captcha-overlay">
      <div className="captcha-dialog">

        <div className="captcha-header">
          <span className="captcha-header-logo">♻</span>
          <div className="captcha-header-text">
            <span className="captcha-header-title">Security Check</span>
            <span className="captcha-header-sub">Select your password from the grid</span>
          </div>
        </div>

        <div className="captcha-grid">
          {tiles.map((tile, i) => (
            <div
              key={i}
              className={`captcha-tile ${selected.includes(tile) ? 'selected' : ''}`}
              onClick={() => handleTile(tile)}
            >
              {tile}
            </div>
          ))}
        </div>

        {error && (
          <div className="captcha-error">✕ Incorrect. Try again.</div>
        )}

        <div className="captcha-footer">
          <span className="captcha-brand">reCAPTCHA · Privacy · Terms</span>
          <button className="btn submit-btn" onClick={handleVerify}>VERIFY</button>
        </div>

      </div>
    </div>,
    document.body
  );
}
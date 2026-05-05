// PhoneConfirmModal.jsx
import { useState } from 'react';
import { createPortal } from 'react-dom';
import '../../../../styles/components/verifyModal.css';

export function VerifyModal({ phone, onSuccess, onClose }) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleInput = (e) => {
    const val = e.target.value;
    setCode(val);
    setError('');
  };

  const handleConfirm = () => {
    if (code.length < 9) {
      setError('✕ You have to promise!');
      return;
    } if (!code.toLocaleLowerCase === 'i promise') return; 
    onSuccess(code);
  };

  return createPortal(
    <div className="confirm-overlay">
      <div className="confirm-dialog">

        <div className="confirm-titlebar">
          <span className="confirm-titlebar-text">Confirm Number</span>
          <span className="confirm-titlebar-x" onClick={onClose}>✕</span>
        </div>

        <div className="confirm-body">
          <div className="confirm-info">
            <div className="confirm-info-title">ℹ VERIFICATION CODE NEEDED</div>
            <div className="confirm-info-text">
              We would like to sent a 6-digit code to<br />
              <span className="confirm-phone">{phone}</span><br />
              But unfortunately, we're broke, so please confirm this is your real phone number.
            </div>
          </div>

          <div className="confirm-field-title">CONFIRMATION CODE</div>
          <input
            type="text"
            value={code}
            onChange={handleInput}
            placeholder="I promise"
            className="confirm-input"
            maxLength={9}
          />
          {error
            ? <div className="confirm-meta error">{error}</div>
            : <div className="confirm-meta">{code.length > 0 && `-- ${code.length}/9 digits entered`}</div>
          }
        </div>

        <div className="confirm-footer">
          <span className="confirm-resend" style={{cursor: 'not-allowed'}}>-- Resend code</span>
          <button className="btn submit-btn" onClick={handleConfirm}>CONFIRM() →</button>
        </div>

      </div>
    </div>,
    document.body
  );
}
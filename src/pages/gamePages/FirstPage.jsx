import { Link, useNavigate } from "react-router";
import '../../styles/gamePages/firstPage.css'
import { useRef, useState } from "react";
import { ErrorDefault } from '../components/gameComponents/Errors/ErrorDefault';
import { LayoutHeader } from "../components/LayoutHeader";
import { Panel } from "../components/gameComponents/Panel";

export function FirstPage() {
  const [value, setValue] = useState('');
  const [flyingChars, setFlyingChars] = useState([]);
  const [nickChars, setNickChars] = useState(['']);
  const [verifyInputs, setVerifyInputs] = useState(['', '', '', '']);
  const [verifyStep, setVerifyStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const inputRef = useRef(null);
  const trashRef = useRef(null);

  const handleChange = (e) => {
    const text = e.target.value;

    if (text.length <= 7) {
      setValue(text);
    } else {
      const extraChar = text[text.length - 1];

      const inputRect = inputRef.current.getBoundingClientRect();
      const trashRect = trashRef.current.getBoundingClientRect();

      const startX = inputRect.right;
      const startY = inputRect.top + inputRect.height / 2;
      const endX = trashRect.left + trashRect.width / 2;
      const endY = trashRect.top + trashRect.height / 2;

      const newChar = {
        id: Date.now(),
        char: extraChar,
        startX,
        startY,
        dx: endX - startX,
        dy: endY - startY
      };

      setFlyingChars((prev) => [...prev, newChar]);
      setValue(text.slice(0, 7));

      setTimeout(() => {
        setFlyingChars((prev) => prev.filter((c) => c.id !== newChar.id));
      }, 1800);
    }
  };

  const handleAddNickChar = () => {
    const last = nickChars[nickChars.length - 1];
    if (last === '') return;
    setNickChars((prev) => [...prev, '']);
  };

  const handleNickCharChange = (index, e) => {
    const char = e.target.value.slice(-1);
    setNickChars((prev) => {
      const updated = [...prev];
      updated[index] = char;
      return updated;
    });
  };

  const handleVerifyChange = (index, value) => {
    setVerifyInputs(prev => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  const handleClickVerify = (index) => {
    if (verifyInputs[index].toLowerCase() === 'verify') {
      setVerifyStep(prev => prev + 1);
    }
  };

  const handleSubmit = () => {
    if (value === '' || nickChars.length < 2 || verifyStep < 4) return;
    setIsModalOpen(true);
  };

  const VERIFY_LABELS = [
    'ARE YOU ALSO ROBOT?',
    'DO U VERIFY YOUR VERIFICATION?',
    'ARE U VERIFY YOUR VERIFY VERIFICATION?',
    'SO VERIFY?',
  ];

  return (
    <>
      <LayoutHeader title="CREATE A NAME" meta="-- INSERT INTO users (...)" id="AuthController@register" />

      {isModalOpen && (
        <ErrorDefault
          title="Error"
          description="Your nickname is too weak!"
          firstBtn="OK"
          secondBtn="Cancel"
          onNo={() => setIsModalOpen(false)}
          onYes={() => navigate('/page02')}
        />
      )}

      <Panel goto="/" onClick={handleSubmit} title="nickname_body · application/x-www-form-urlencoded" method="POST /register">
        <>
          <div className="input-field-title">NAME</div>
          <div className="input-name-row">
            <input
              ref={inputRef}
              value={value}
              placeholder="Name"
              onChange={handleChange}
              className="name-input"
            />

            {flyingChars.map((item) => (
              <span
                key={item.id}
                className="flying-char"
                style={{
                  position: 'fixed',
                  left: item.startX,
                  top: item.startY,
                  '--dx': `${item.dx}px`,
                  '--dy': `${item.dy}px`,
                }}>
                {item.char}
              </span>
            ))}

            <div className="trash" ref={trashRef}>🗑️</div>
          </div>
          <div className="input-row-meta">-- Max 7 symbols</div>

          <div className="nickname">
            <div className="input-field-title">NICKNAME</div>
            <div className="nick-chars-row">
              {nickChars.map((char, index) => (
                <input
                  key={index}
                  type="text"
                  value={char}
                  onChange={(e) => handleNickCharChange(index, e)}
                  className="name-input nick-char-input"
                  maxLength={1}
                  placeholder="_"
                />
              ))}
              <button className="btn create-input" onClick={handleAddNickChar}>+</button>
            </div>
          </div>

          <div className="verify">
            {VERIFY_LABELS.slice(0, verifyStep + 1).map((label, index) => (
              <div key={index}>
                <div className="input-field-title exp">{label}</div>
                <input
                  type="text"
                  placeholder="Verify"
                  className="name-input"
                  maxLength={6}
                  value={verifyInputs[index]}
                  onChange={(e) => handleVerifyChange(index, e.target.value)}
                  readOnly={index < verifyStep}
                />
                {index === verifyStep && (
                  <button
                    className="btn create-input"
                    onClick={() => handleClickVerify(index)}
                  >
                    Verify
                  </button>
                )}
              </div>
            ))}

            {verifyStep >= 4 && (
              <div className="verify-final">✓ Finee... · user data updated successfully</div>
            )}
          </div>
        </>
      </Panel>
    </>
  );
}
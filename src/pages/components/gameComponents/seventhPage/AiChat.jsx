import { useState } from "react";
import '../../../../styles/components/aiChat.css';

export function AiChat({onClose}) {
  const [msgs, setMsgs] = useState([
    { from: 'ai', text: 'Hello, im aiHelper3000. Do u have any problmes with the last field?'}
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if(!input.trim()) return;

    const message = {from: 'user', text: input};
    const aiMsg = {from: 'ai', text: 'Try to enter   the data correctly  !'};

    setMsgs(prev => [...prev, message, aiMsg]);
    setInput('');
  };

  const handleKey = (e) => {
    if(e.key === 'Enter') sendMessage();
  };

  return (
    <div className="ai-panel">
      <div className="ai-panel-header">
        <span className="ai-panel-title">AI ASSISTANT</span>
        <span className="ai-panel-x" onClick={onClose}>✕</span>
      </div>

      <div className="ai-messages">
        {msgs.map((msg, i) => (
          <div key={i} className={`ai-msg ${msg.from}`}>
            <span className="ai-msg-author">{msg.from === 'ai' ? '> AI' : '> YOU'}</span>
            <span className="ai-msg-text">{msg.text}</span>
          </div>
        ))}
      </div>

      <div className="ai-input-row">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Type a message..."
          className="basic-input"
          style={{ flex: 1 }}
        />
        <button className="btn create-input" onClick={sendMessage}>SEND</button>
      </div>
    </div>
  );
}
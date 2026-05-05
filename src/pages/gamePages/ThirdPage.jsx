import { useState } from "react";
import { Panel } from "../components/gameComponents/Panel";
import { LayoutHeader } from "../components/LayoutHeader";
import { VerifyModal } from "../components/gameComponents/thirdPage/VerifyModal";
import { useNavigate } from "react-router";

export function ThirdPage() {

  const [numValue, setNumValue] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const addDigit = () => {
    setNumValue(prev => prev + 1);
  }

  const remDigit = () => {
    if(numValue <= 0) return;
    setNumValue(prev => prev - 1);
  }

  const formatPhone = (n) => {
    const d = String(n).padStart(10, '0').split('');
    return `+${d[0]}-(${d[1]}${d[2]})-${d[3]}${d[4]}${d[5]}-${d[6]}${d[7]}-${d[8]}${d[9]}`;
  };

  const openVerifyModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen && (<VerifyModal phone={formatPhone(numValue)} onSuccess={() => navigate('/page04')} onClose={console.log('Nope')}/>)}

      <LayoutHeader title="ENTER YOUR NUMBER" meta="-- INSERT INTO user_nums (...)" id="AuthController@register" />

      <Panel goto="/" onClick={openVerifyModal} title="number_body · application/x-www-form-urlencoded" method="POST /register">
        <>
          <div className="num-panel">
            <div className="input-field-title">ENTER YOUR PHONE NUMBER</div>
            <input value={formatPhone(numValue)}
              type="text"
              placeholder="Password"
              className="basic-input"
              readOnly="true" />
            <div className="num-btns">
              <button className="btn create-input num-btn" onClick={addDigit}>+</button>
              <button className="btn create-input num-btn" onClick={remDigit}>-</button>
            </div>
          </div>
        </>
      </Panel>
    </>
  );
}
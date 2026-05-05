import { useNavigate } from "react-router";
import { useState } from "react";
import { LayoutHeader } from "../components/LayoutHeader";
import { ErrorDefault } from '../components/gameComponents/Errors/ErrorDefault';
import { Panel } from "../components/gameComponents/Panel";
import { WarningDefault } from "../components/gameComponents/Errors/WarningDefault";
import { CaptchaModal } from "../components/gameComponents/secondPage/CapchaModal";

export function SecondPage() {
  const [passValue, setPassValue] = useState('');
  const [secPassValue, setSecPassValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSteps, setModalSteps] = useState(0);

  const [mDesc, setMDesc] = useState('');
  const [mFirst, setMFirst] = useState('');
  const [mSec, setMSec] = useState('');

  const [isWarnModalOpen, setIsWarnModalOpen] = useState(false);
  const [isCaptchaOpen, setIsCaptchaOpen] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const inputVal = e.target.value;
    setPassValue(inputVal);
  };

  const handleSecChange = (e) => {
    const inputVal = e.target.value;
    setSecPassValue(inputVal);
  };

  const onVerifyClick = () => {
    if (passValue === secPassValue) {
      setMDesc('Passwords are too similar!');
      setMFirst('My bad');
      setMSec('Okay');
      setIsModalOpen(true);
    }
    if (secPassValue === '' || passValue === '') {
      setMDesc('Please fill all password fields!');
      setMFirst('Remind me later');
      setMSec('Cancel');
      setIsModalOpen(true);
    }
    if (secPassValue != passValue) {
      setIsWarnModalOpen(true);
    }
  }

  const handleSubmitBtn = () => {
    if(modalSteps < 5) return;
    else navigate('/page03');
  };

  const modalHandler = () => {
    switch (modalSteps) {
      case 0:
        setMDesc('Your password is too complicated!');
        setMFirst('Sorry');
        setMSec('Cancel');
        setIsModalOpen(true);
        setModalSteps(1);
        break;

      case 1:
        setMDesc('User *Admin* already has this password!');
        setMFirst('Yes');
        setMSec('No');
        setIsModalOpen(true);
        setModalSteps(2);
        break;

      case 2:
        setModalSteps(3);
        break;

      default:
        return;
    }
  };

  return (
    <>
      <LayoutHeader title="CREATE A PASSWORD" meta="-- INSERT INTO user_pass (...)" id="AuthController@register" />

      {isCaptchaOpen && (
        <CaptchaModal
          realPassword={passValue}
          onSuccess={() => { setIsCaptchaOpen(false); setModalSteps(5) }}
          onFail={() => setIsCaptchaOpen(false)}
        />
      )}

      {isWarnModalOpen && (
        <WarningDefault
          title="Warning"
          description="Are you sure about this password?"
          firstBtn="Not really"
          secondBtn="No"
          onNo={() => {
            setIsWarnModalOpen(false);
            setIsCaptchaOpen(true);
          }}
          onYes={() => {
            setIsWarnModalOpen(false);
            setIsCaptchaOpen(true);
          }}
        />
      )}

      {isModalOpen && (
        <ErrorDefault
          title="Error"
          description={mDesc}
          firstBtn={mFirst}
          secondBtn={mSec}
          onNo={() => setIsModalOpen(false)}
          onYes={() => setIsModalOpen(false)}
        />
      )}

      <Panel goto="/" onClick={handleSubmitBtn} title="nickname_body · application/x-www-form-urlencoded" method="POST /register">
        <>
          {modalSteps < 3 && (
            <>
              <div className="input-field-title">PASSWORD</div>
              <input value={passValue}
                type="password"
                placeholder="Password"
                onChange={handleChange}
                className="basic-input" />
              <button className="btn create-input" onClick={modalHandler}>CHECK</button>
              <div className="input-row-meta">--Min 8 symbols -- Max 80 symbols</div>
            </>
          )}

          {modalSteps >= 3 && (
            <>
              <div className="input-field-title">PASSWORD</div>
              <input value={passValue}
                type="password"
                placeholder="Password"
                onChange={handleChange}
                className="basic-input" 
                readOnly={modalSteps >= 5} />
              <button className="btn create-input">✓</button>
              <div className="input-row-meta done">Password is avaliable!</div>

              <input value={secPassValue}
                type="password"
                placeholder="Verify Password"
                onChange={handleSecChange}
                className="basic-input" 
                readOnly={modalSteps >= 5} />
              {modalSteps < 5 
              ? (<button className="btn create-input" onClick={onVerifyClick}>VERIFY</button>) 
              : (<button className="btn create-input">VERIFIED</button>)}
            </>
          )}
        </>
      </Panel>
    </>
  );
}
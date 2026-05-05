import { useState } from "react";
import { LayoutHeader } from "../components/LayoutHeader";
import { Panel } from "../components/gameComponents/Panel";
import { PaintField } from "../components/gameComponents/seventhPage/PaintField";
import { DefaultLoading } from "../components/DefaultLoading";
import { AiChat } from "../components/gameComponents/seventhPage/AiChat";
import { useNavigate } from "react-router";

export function SeventhPage() {

  const [isFilled, setIsFilled] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [data, setData] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setData(inputValue);

    if (String(inputValue).toLowerCase() === 'the data correctly') setIsCorrect(true);
    else setIsCorrect(false);
  };

  const checkSubmit = () => {
    if (isCorrect && isFilled) setIsLoading(true);
    else return;
  }

  return (
    <>
      {isLoading && (
        <DefaultLoading textVariants={[
          'Creating new user...',
          'What is PostgreSQL?',
          'Inserting data into notepad...',
          'Data is saveing..! I guess..',
          'Done!'
        ]} exitFunc={() => navigate('/success')} />
      )}

      <LayoutHeader title="FINISHING FIELDS" meta="-- INSERT INTO user_meta (...)" id="AuthController@register" />

      {isChatOpen && (<AiChat onClose={() => setIsChatOpen(false)} />)}

      <Panel goto="/" onClick={checkSubmit} title="finish_body · application/x-www-form-urlencoded" method="POST /register">
        <div className="num-panel">

          <div className="input-field-title">Please fill in all fields</div>

          <PaintField width={400} height={33} onFillChange={(filled) => setIsFilled(filled)} />
          {isFilled && (<div className="input-row-meta done">-- Filled!</div>)}

          <div className="input-field-title" style={{ marginTop: '20px' }}>We need a little bit more data..</div>
          <input value={data}
            type="text"
            placeholder="Just type a litt l e  m o r e.."
            onChange={handleChange}
            style={{ width: 380 }}
            className="basic-input" />
          {isCorrect
            ? (<div className="input-row-meta done">-- Umm... okay!</div>)
            : (<div className="input-row-meta">-- We still need a little more..</div>)
          }
        </div>

        <button className="btn create-input" onClick={() => setIsChatOpen(true)}>
          AI ASSISTANT
        </button>
      </Panel>
    </>
  );
}
import { useEffect, useState } from "react";
import { Panel } from "../components/gameComponents/Panel";
import { LayoutHeader } from "../components/LayoutHeader";
import { useNavigate } from "react-router";
import { ErrorDefault } from "../components/gameComponents/Errors/ErrorDefault";

export function ForthPage() {
  const START = new Date(1900, 0, 1);
  const END = new Date(2100, 11, 31);

  const totalDays = Math.floor((END - START) / (1000 * 60 * 60 * 24));

  const [dayOffset, setDayOffset] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
  const id = setInterval(() => {
    setIsModalOpen(true);
  }, 6000);

  return () => clearInterval(id);
  }, []);

  const navigate = useNavigate();

  const getDate = (offSet) => {
    const d = new Date(START);
    d.setDate(d.getDate() + offSet);
    return d;
  };

  const formatDate = (d) => d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });

  return (
    <>

      {isModalOpen && (
        <ErrorDefault title="Error"
          description='Error'
          firstBtn='Yes'
          secondBtn='Im sorry'
          onNo={() => setIsModalOpen(false)}
          onYes={() => setIsModalOpen(false)}
          />
      )}

      <LayoutHeader title="CREATE A PASSWORD" meta="-- INSERT INTO user_pass (...)" id="AuthController@register" />

      <Panel goto="/" onClick={() => navigate('/page05')} title="nickname_body · application/x-www-form-urlencoded" method="POST /register">
        <>
          <div className="num-panel">
            <div className="input-field-title">WHEN IS YOUR BIRTHDAY?</div>
            <input
              type="range"
              min={0}
              max={totalDays}
              step={1}
              value={dayOffset}
              onChange={(e) => setDayOffset(Number(e.target.value))} />
            <div className="input-row-meta">{formatDate(getDate(dayOffset))}</div>
          </div>
        </>
      </Panel>
    </>
  );
}
import { useNavigate } from "react-router";
import { Panel } from "../components/gameComponents/Panel";
import { MapPicker } from "../components/gameComponents/SixthPage/MapPicker";
import { LayoutHeader } from "../components/LayoutHeader";
import { useState } from "react";
import { DefaultLoading } from "../components/DefaultLoading";
import { WarningDefault } from "../components/gameComponents/Errors/WarningDefault";

export function SixthPage() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const startLoading = () => {
    setTimeout(()=>{
      setIsLoading(true);
    }, 1000);
  };

  return (
    <>
      {isLoading && (
        <DefaultLoading textVariants={[
          'Saving location...',
          'Pacific ocean..?',
          'Updating database...',
          'Done!'
        ]} exitFunc={() => navigate('/page07')}/>
      )}

      {isModalOpen && (
        <WarningDefault
          title="Are you sure?"
          description="?"
          firstBtn="Im sorry"
          secondBtn="Yes please"
          onNo={() => {
            setIsModalOpen(false);
            startLoading();
          }}
          onYes={() => {
            setIsModalOpen(false);
            startLoading();
          }}
        />
      )}

      <LayoutHeader title="CHOOSE YOUR LOCATION" meta="-- INSERT INTO user_loc (...)" id="AuthController@register" />

      <Panel goto="/" onClick={()=>setIsModalOpen(true)} title="nickname_body · application/x-www-form-urlencoded" method="POST /register">
        <div className="num-panel">
          <div className="input-field-title">GIVE US YOUR EXACT ADRESS</div>
          <div style={{ display: 'flex', justifyContent: 'center', height: '300px', width: '600px' }}>
            <MapPicker />
          </div>
        </div>
      </Panel>
    </>
  );
}
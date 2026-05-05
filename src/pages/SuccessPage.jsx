import { useNavigate } from "react-router";
import { LayoutHeader } from "./components/LayoutHeader";
import '../styles/successPage/successPage.css'

export function SuccessPage() {
  const navigate = useNavigate();

  return (
    <>
      <LayoutHeader title="REGISTRATION COMPLETE" meta="-- SELECT * FROM users WHERE status = 'ok'" id="AuthController@success" />

      <div className="success-panel">
        <div className="success-panel-header">
          <span className="success-status">200 OK</span>
          <span className="success-method">POST /register</span>
        </div>

        <div className="success-body">
          <div className="success-icon">✓</div>
          <div className="success-title">Registration Successful</div>
          <div className="success-desc">
            Thank you for registering. Your data has been
            <span className="success-highlight"> probably </span>
            saved to the database.
          </div>

          <div className="success-meta-block">
            <div className="success-meta-row">
              <span className="success-meta-key">user_id</span>
              <span className="success-meta-val">#0x{Math.floor(Math.random() * 99999).toString(16).toUpperCase()}</span>
            </div>
            <div className="success-meta-row">
              <span className="success-meta-key">status</span>
              <span className="success-meta-val success-green">active</span>
            </div>
            <div className="success-meta-row">
              <span className="success-meta-key">created_at</span>
              <span className="success-meta-val">{new Date().toISOString()}</span>
            </div>
          </div>

          <div className="success-notice">
            -- To complete registration please log in
          </div>

          <button className="btn submit-btn" onClick={() => navigate('/login')}>
            PROCEED TO LOGIN() →
          </button>
        </div>
      </div>
    </>
  );
}
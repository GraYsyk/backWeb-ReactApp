import { useState } from "react";
import { Panel } from "../components/gameComponents/Panel";
import { LayoutHeader } from "../components/LayoutHeader";
import '../../styles/gamePages/fifthPage.css'
import { useNavigate } from "react-router";

export function FifthPage() {

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [finished, setFinished] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  const emailCheck = (email) => {
    const test = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!test) setError('Your email is still correct!');
    if (test) setFinished(true);
  };

  const checkFinished = () => {
    if(finished) navigate('/page06');
    else return;
  };

  return (
    <>
      <LayoutHeader title="LINK AN EMAIL" meta="-- INSERT INTO user_fakemail (...)" id="AuthController@register" />
      <Panel goto="/" onClick={checkFinished} title="email_body · fake-application/x-www-form-urlencoded" method="POST /register">
        <>
          <div className="internal-container">
            <div className="user-field">
              <div className="input-field-title">EMAIL</div>
              <input value={email}
                type="text"
                placeholder="Email"
                onChange={handleChange}
                className="basic-input" />
              {finished ? (<button className="btn create-input">✓</button>) : (<button className="btn create-input" onClick={() => emailCheck(email)}>SUBMIT</button>)}
              {error != '' && (<div className="input-row-meta">{error}</div>)}
              {finished && (<div className="input-row-meta done">Email added!</div>)}
            </div>
            <div className="info-field">
              <div className="rules-table">
                <div className="rules-table-header">
                  <span>RULE</span>
                  <span>EXAMPLE</span>
                  <span>STATUS</span>
                </div>
                {[
                  { rule: 'Has @', example: 'user@...', test: /@/.test(email) },
                  { rule: 'Has domain', example: '...@gmail.com', test: /\.[a-z]{2,}$/.test(email) },
                  { rule: 'No spaces', example: 'no spaces', test: !/\s/.test(email) && email !== '' },
                  { rule: 'Has local', example: 'user@...', test: /^[^\s@]+@/.test(email) },
                  { rule: 'No double @', example: 'a@b not a@@b', test: (email.match(/@/g) || []).length === 1 },
                ].map((row, i) => (
                  <div key={i} className={`rules-row ${row.test ? 'pass' : 'fail'}`}>
                    <span>{row.rule}</span>
                    <span className="rules-example">{row.example}</span>
                    <span className="rules-status">{row.test ? '✓' : '✕'}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      </Panel>
    </>
  );
}
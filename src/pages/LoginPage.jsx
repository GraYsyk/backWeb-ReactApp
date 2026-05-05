import { useState } from "react";
import { useNavigate } from "react-router";
import { DefaultLoading } from "./components/DefaultLoading";
import '../styles/loginPage/loginPage.css';

export function LoginPage() {
  const [loginValue, setLoginValue] = useState('');
  const [passValue, setPassValue] = useState('');
  const [isWrong, setIsWrong] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    setLoginValue(e.target.value);
    setIsWrong(false);
  };

  const handlePass = (e) => {
    setPassValue(e.target.value);
    setIsWrong(false);
  };

  const handleSumitBtn = () => {
    if (loginValue.toLocaleLowerCase() === 'admin' && passValue.toLocaleLowerCase() === 'admin') {
      setIsLoading(true);
    } else {
      setIsWrong(true);
    }
  };

  return (
    <>

      {isLoading && (
        <DefaultLoading textVariants={[
          'Trying to find your account',
          'What is PostgreSQL again..?',
          'Oh.. Notepad, right..',
          'Account found! Redirecting..',
          'THANK YOU FOR PLAYING!'
        ]} exitFunc={() => navigate('/final')} />
      )}

      <div className="login-container">
        <div className="login-panel">
          <div className="login-header">
            <span className="login-meta-id">login.html</span>
            <span className="login-meta-method">POST /login</span>
          </div>
          <div className="login-body">
            <span className="login-title">LOGIN</span>
            <input value={loginValue}
              type="password"
              placeholder="login(Admin);"
              onChange={handleLogin}
              style={{ width: 180 }}
              className="basic-input" />
            {isWrong && (<div className="input-row-meta">-- Wrong login!</div>)}
            <input value={passValue}
              type="text"
              placeholder="pass(admin);"
              onChange={handlePass}
              style={{ width: 180 }}
              className="basic-input" />
            {isWrong && (<div className="input-row-meta">-- Wrong password!</div>)}
            <button className="login-btn" onClick={handleSumitBtn}>LOGIN</button>
            <span className="login-desc">
              By clicking the “Log In” button, you confirm that you love ice cream and cats.
              None of the information we collect will be stored, since we haven't figured out how to collect it yet...
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
import '../styles/greetingPage.css'
import userPfp from '../assets/noUser.png'
import crossPng from '../assets/cross.svg'
import catBg from '../assets/catFunnyPic.jpg'

export function GreetingPage() {
  return(
    <>
    <img className='bg' src={catBg} alt="here was supposed to be a background..." />
      <div className='modalBg'>
        <div className="mainContainer">
          <p className='subject'>Subject: Hey, have you heard that we have a new website?</p>
          <button className='closeMailBtn'><img src={crossPng} alt="No"/></button>
          <div className='sender'>
            <img className='senderPfp' src={userPfp}></img>
              <div className='contInfo'>
                <p className='senderName'>ItGuys <span className='senderMail'>&lt;yesreply@itguys.com&gt;</span></p>
                <p className='senderMail'>To: Me</p>
              </div>
          </div>
          <p className='mainContent'>There's some new registration system on our website now. 
            After our last frontend developer left, everything fell on the backend guys.
            </p>
            <p className='mainContent'>So please take your time to figure out how everything works there. 
            Me and the team will be waiting for you in the system — please don't keep us waiting!
          </p>

          <button className='regBtn'>Register here!</button>

        </div>
      </div>
    </>
  );
}
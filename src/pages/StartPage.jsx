import UxImg from '../assets/ux_graphic.png'
import pfp from '../assets/pfp.jpg'
import '../styles/startPage.css'

export function StartPage() {
  return (
    <>
      <div className="main-block">
        <p className="title">
          BestUX
        </p>
        <p className="under-title">
          Game that shows how important ux really is...
        </p>
        <div className='btn-div'>
          <button className="start-btn">
            Register
          </button>
        </div>
      </div>

      <div className="desc-block">
        <img className='desc-image' src={UxImg} alt="No ux image" />
        <div className='desc-text'>
          <p className='desc-title'>About the game</p>
          <p className='desc'>This is a little game I created to illustrate the journey of learning front-end development. 
            Throughout the game, you’ll face various challenges before you can finally register on our website! 
            I hope you find the levels I’ve created interesting and fun. Good luck!</p>
        </div>
      </div>

      <div className="credits-footer">
        <p className='credits'>Created with passion by <span className='credits-name'><a className='credits-name-a' href='https://github.com/GraYsyk'>GraYsyk</a></span> 	&middot; 2026</p>
      </div>
    </>
  );
}
import Clue from '../Clue.js';
import harmonplPic from '../img/harmonpl.png';
import Sticky from '../img/sticky.png';
import './Pages.css';

const clue = (<Clue label={<span>To get started, Click Here for your first clue</span>} content={<span>You might argue without <strong>this</strong>, Nora Jones would have no voice.</span>} />)

function Home() {

  return (
    <div className="Home">
      <h2>
          Welcome to <code>1204 Harmon Place apt 15</code>
        </h2>
      <header className="ApHomep-header">
        <img width="480px" src={harmonplPic} className="Home-logo" alt="logo" />
      </header>
      <div>
        <h3><strong>What is this website?</strong></h3>
        <p>
          It's a scavenger hunt! Built from favorite memories and homages to our adventures together so far.
        </p>
        <h3><strong>How to Play</strong></h3>
        <p>
          I've placed sticky-notes on the bottom of certain objects hidden all around the apartment.
        </p>
        <p>
          Once you find a sticky-note, it will have a <code><strong>CODE</strong></code> written on it.
        </p>
        <img src={Sticky} width="128px" alt="sticky" />
        <p>
          Head to the bottom of this page (or any page of this site) and enter the code from the sticky note. (in this example, <code>abc123</code>)</p>
          <p>Click GO. If you entered a valid code, it will send you to the next part of the adventure.
          </p>
          <p>Look for the next clue at the bottom of each page, then go searching! Don't worry, they should be pretty obvious.
        </p>
        {clue}
      </div>
    </div>
  );
}

export default Home;

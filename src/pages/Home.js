import Clue from '../Clue.js';
import harmonplPic from '../img/harmonpl.png';
import './Pages.css';

const clue = (<Clue label={<span>To get started, click here for your first clue</span>} content={<span>You might argue without <strong>this</strong>, Nora Jones would have no voice.</span>} />)

function Home() {

  return (
    <div className="Home">
      <header className="ApHomep-header">
        <img width="480px" src={harmonplPic} className="Home-logo" alt="logo" />
        <p>
          Welcome to <code>1204 Harmon Place</code>.
        </p>
      </header>
      <div>
        <p>
          It's basically a scavenger hunt, mixed with some cute memories and homages to our adventures together so far.
        </p>
        <br />
        <h3><strong>How to Play</strong></h3>
        <p>
          I've hidden sticky-notes on the bottom of certain objects all around the apartment.
        </p>
        <p>
          Once you find a sticky-note, it will have a <code><strong>URL</strong></code> written on it.
        </p>
        <p>
          Go to that page on your computer or your phone, check for the next clue, then find the next thing around the house.
        </p>
        {clue}
      </div>
    </div>
  );
}

export default Home;

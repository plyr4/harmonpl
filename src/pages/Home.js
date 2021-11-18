import Clue from '../Clue.js';
import harmonplPic from '../img/harmonpl.png';
import Sticky from '../img/intro1.png';
import './Pages.css';

const clue = (<Clue label={<span>To get started, <strong>Click Here</strong> for your first clue.</span>} 
  content={<span><strong>This thing</strong> brings old souls back to life. You might also argue without <strong>this</strong>, Nora Jones would have no voice!</span>} />)

function Home() {

  return (
    <div className="Home">
      <h2>
          Welcome to <code>harmonpl15.com</code>
        </h2>
      <header className="ApHomep-header">
        <img width="480px" src={harmonplPic} className="Home-logo" alt="logo" />
      </header>
      <div>
        <h3><strong>What is this website?</strong></h3>
        <p>
          It's a scavenger hunt around the apartment!</p>
          <p>Built from various memories, homages, and references to our adventures together.
        </p>
        <h3><strong>How to Play</strong></h3>
        <div className="intro1"><div className="div1"><p>
          I've hidden sticky-notes under various objects all around the apartment.</p>
          <p>This website will provide you clues to help you find the next sticky-note in the hunt.
        </p>
        <p>
          Once you find a sticky-note, it will have a <code><strong>CODE</strong></code> written on it.
        </p>
        
        <p>
          With code-in-hand, head to the bottom of this page (or any page on this website) and enter the code from the sticky note. (in this example, <code>abc123</code>)</p>
          <p>Click "Check".</p><p> If you entered a valid code, it will send you to the next part of the adventure, which is just another page on this website.
          </p>
          <p>Look for the next clue at the bottom of each page, then go searching again! Don't worry, the hints should be pretty obvious.
        </p>
        </div>
        <div className="div2"><img src={Sticky} width="240px" alt="sticky" /></div>
        </div>

        {clue}
      </div>
    </div>
  );
}

export default Home;

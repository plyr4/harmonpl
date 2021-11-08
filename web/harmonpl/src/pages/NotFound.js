import harmonplPic from '../img/harmonpl.png';
import './Pages.css';

function NotFound() {
  return (
    <div className="NotFound">
      <header className="NotFound-header">
        <img src={harmonplPic} className="NotFound-logo" alt="logo" />
        <p>
          THIS PAGE WAS NOT FOUND. Are you trying to CHEAT?
        </p>
      </header>
    </div>
  );
}

export default NotFound;



import Clue from '../Clue.js';
import Us1 from '../img/colorado/us1.jpg';
import './Pages.css';
const clue = (<Clue
    label={<span>Once you have at least one destination idea in mind, <strong>click here</strong> and proceed to the next clue</span>}
    content={<span>A snapshot in time on top of the world. If I looked down, I would have hurled.</span>} />)
function Colorado() {
    return (
        <div className="Colorado">
            <h2>A Week in Paradise
            </h2>
            <img src="https://www.planetware.com/photos-tiles/colorado-denver-city-view-and-mountains.jpg" alt="denver"/>
            <p>When can we move there?
            </p>
            <img src={Us1} alt="us1" width="240px"/>
            {clue}
        </div>
    );
}
    
export default Colorado;

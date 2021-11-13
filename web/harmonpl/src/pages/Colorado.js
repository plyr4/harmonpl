

import Clue from '../Clue.js';
import './Pages.css';
const clue = (<Clue
    label={<span>When the bubby is fast asleep, <strong>click here</strong> and proceed to the next clue</span>}
    content={<span>A snapshot in time on top of the world. If I looked down, I would have hurled.</span>} />)
function Colorado() {
    return (
        <div className="Colorado">
            <h2>A Week in Paradise
            </h2>
            <p>When can we move there?
            </p>
            {clue}
        </div>
    );
}
    
export default Colorado;

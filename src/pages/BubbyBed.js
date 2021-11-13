

import Clue from '../Clue.js';
import './Pages.css';
const clue = (<Clue
    label={<span>When the bubby is fast asleep, <strong>click here</strong> and proceed to the next clue</span>}
    content={<span>A snapshot in time on top of the world. If I looked down, I would have hurled.</span>} />)
function BubbyBed() {
    return (
        <div className="BubbyBed">
            <h2>A Sofa of Perfect Proportion
            </h2>
            <p>Our Big Momma's favorite cushy bed.
            </p>
            {clue}
        </div>
    );
}
    
export default BubbyBed;

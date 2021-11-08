

import Clue from '../Clue.js';
import './Pages.css';
const clue = (<Clue
    label={<span>After listening to Nora Jones <strong>at least twice</strong>, <strong>click here</strong> for your next clue</span>}
    content={<span>Remember the role-playing barbeque where we defeated the greatest evil in the known universe?</span>} />)
function RecordPlayer() {
    return (
        <div className="RecordPlayer">
            <h2>The Tunes
            </h2>
            <p>Music fills the air and dancing fills the kitchen.
            </p>
            {clue}
        </div>
    );
}
    
export default RecordPlayer;

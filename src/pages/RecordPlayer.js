

import Clue from '../Clue.js';
import './Pages.css';
const clue = (<Clue
    label={<span>After listening to Nora Jones <strong>at least twice</strong>, <strong>Click Here</strong> for your next clue</span>}
    content={<span>Remember the role-playing barbeque where we defeated the greatest evil in the known universe?</span>} />)
function RecordPlayer() {
    return (
        <div className="RecordPlayer">
            <h2>The Tunes
            </h2>
            <p>
            <img alt="kitchendancing" src="https://media3.giphy.com/media/5ehBR5qtLEXBe/giphy.gif" />
                </p>

            <p>When music fills the air and dancing fills the kitchen. <strong style={{'font-size':'36px'}}>♫♩</strong>
            </p>
            <p>
                <img alt="kitchendancing" src="https://media3.giphy.com/media/42ByKt3C3fyZgzlszy/200.gif" />
            </p>

            <p>
                Which Vinyl is your favorite?
                </p>


                <p>
                It is always the prime time to <a href="https://vintagevinyl.com/" alt="vinyls">purchase a new record</a>.
                </p>
                <p>
                <img alt="kitchendancing" src="https://c.tenor.com/fkrEGd4h2A8AAAAM/tom-and-jerry-jerry.gif" />

                
                    </p>
            {clue}
        </div>
    );
}
    
export default RecordPlayer;



import Clue from '../Clue.js';
import './Pages.css';
const clue = (<Clue
    label={<span>After listening to the first song on your favorite record <strong>at least twice</strong>, <strong>Click Here</strong> for your next clue.</span>}
    content={<span>Remember the role-playing barbeque where we defeated the greatest evil in the known universe? I make a great robot.</span>} />)
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
                <iframe
                width="480"
                height="360"
                src={`https://www.youtube.com/embed/lbjZPFBD6JU`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
            <p>
                </p>

                <p>
                It is always the prime time to <a href="https://vintagevinyl.com/" alt="vinyls">purchase a new record</a>.
                </p>
                <p>
                <img alt="kitchendancing" src="https://c.tenor.com/fkrEGd4h2A8AAAAM/tom-and-jerry-jerry.gif" />
                    </p>
                    <p>I found this neat <a href="http://tympanus.net/Development/RecordPlayer/">online record player</a>. Kind of funky!
                    </p>

                    <p>What do you think of this record holder for your favorites?
                        </p>
                        <p>
                            <img alt="holder" width="360px" src="https://cdn.shopify.com/s/files/1/0101/2911/3147/products/clear-walnut_1f199e01-27c2-4c9b-a748-9bdd329e2145_480x480.jpg?v=1626804901"/>
                            </p>
                            <p>Or this one...
                                </p>
                                <p>
                            <img alt="holder" width="360px" src="https://i.etsystatic.com/23577548/r/il/3e1296/3078522971/il_794xN.3078522971_cwz3.jpg"/>
                            </p>
                            <p>Okay maybe I'm trying to say I'm still sorry for breaking the wall holders...
                                </p>
                                <p>AND that I am willing to replace them.
                                    </p>
                                
            {clue}
        </div>
    );
}
    
export default RecordPlayer;

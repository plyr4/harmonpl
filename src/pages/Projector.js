

import Clue from '../Clue.js';
import './Pages.css';


const clue = (<Clue
    label={<span>Once you've watched an <strong>entire season of Gilmore Girls</strong> (or half of a Harry Potter movie) in bed, <strong>Click Here</strong> for your next clue</span>}
    content={<span>Big screen or small, the worlds are infinite. Where can you find galaxies, farmland, never-ending mountains to climb, and an island with a talking racoon?</span>} />)

function Projector() {
    
    return (
        <div className="Projector">
            <h2>Our Home Theater
            </h2>
            <p> One of my favorite places on Earth, especially when we could use a bit of time away.
            </p>
            <p>
                <img alt="theater" src="https://c.tenor.com/kWQMS3NAPPAAAAAM/madonna-maverick-management.gif" />
            </p>


            <p> Easily one of my favorite quotes: "If eating cake is wrong... Then I don't want to be right."
            </p>

            <iframe
                width="480"
                height="360"
                src={`https://www.youtube.com/embed/P72ojf0lV1g`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
            <br />
            <p> OY with the POODLES!
            </p>
            <iframe
                width="480"
                height="360"
                src={`https://www.youtube.com/embed/urkXoKCKNkk`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            /><br />

<p>The kiss to end all kisses. 
            </p>
            <iframe
                width="480"
                height="360"
                src={`https://www.youtube.com/embed/PXhJ95_1I48`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            /><br />

<p>But let's be honest, we know why we're here.
            </p>
            <iframe
                width="480"
                height="360"
                src={`https://www.youtube.com/embed/jtDUGnPDMpM`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            /><br />


            <p>
            And the yearly Harry Potter marathon.
                </p>
                <p>I can't make it through a winter without hearing how the wand chooses the wizard.
                    </p>
                    <iframe
                width="480"
                height="360"
                src={`https://www.youtube.com/embed/5whe9XtdQgw`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            /><br />
                <p>
                This is one of my favorite scenes in the entire series.
                    </p>
                    <iframe
                width="480"
                height="360"
                src={`https://www.youtube.com/embed/vNc43oKqQzg`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            /><br />
            <p>Mischief Managed!
                </p>

            
            <p>I can end a horrible day, curl into bed with you and Pam, turn the room into a movie theater and just forget about the world.
                </p>
                <p>Nothing beats that.
                    </p>

                    <br />
                    <p>Also, we should get a Google Chromecast.
                        </p>
            {clue}
        </div>
    );
}

export default Projector;

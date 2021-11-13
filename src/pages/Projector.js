

import Clue from '../Clue.js';
import './Pages.css';


const clue = (<Clue
    label={<span>Once you've watched an entire season in bed, <strong>click here</strong> for your next clue</span>}
    content={<span>The best place to go if you need a bath, or if you're too hot and just want to chill out. Some might say it's a great place to quench a massive thirst.</span>} />)


function Projector() {
    return (
        <div className="Projector">
            <h2>Our Home Theater
            </h2>
            <p> One of my favorite places, especially when we could use some time away.
            </p>
            <p>
                <img alt="theater" src="https://c.tenor.com/kWQMS3NAPPAAAAAM/madonna-maverick-management.gif" />
            </p>


            <p> There's always a warm place to hide under the covers and watch Gilmore Girls.
            </p>

            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/fr9NyhPJ2Pk`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
            <br />
            <br />
            <br />
            <p> You can be the pot OR the kettle, biotch!
            </p>
            <br />
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/w1NXB6Bhl6I`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            /><br /><br /><br />
            {clue}
        </div>
    );
}

export default Projector;

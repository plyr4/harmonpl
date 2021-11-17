

// Import Swiper styles
// Import Swiper React components
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Clue from '../Clue.js';
import City1 from '../img/colorado/city1.jpg';
import City2 from '../img/colorado/city2.jpg';
import City3 from '../img/colorado/city3.jpg';
import City4 from '../img/colorado/city4.jpg';
import City5 from '../img/colorado/city5.jpg';
import Food1 from '../img/colorado/food1.jpg';
import Food2 from '../img/colorado/food2.jpg';
import Food3 from '../img/colorado/food3.jpg';
import Mtn1 from '../img/colorado/mtn1.jpg';
import Mtn2 from '../img/colorado/mtn2.jpg';
import Mtn3 from '../img/colorado/mtn3.jpg';
import Mtn4 from '../img/colorado/mtn4.jpg';
import Us1 from '../img/colorado/us1.jpg';
import Us2 from '../img/colorado/us2.jpg';
import './Pages.css';


 
const clue = (<Clue
    label={<span>Once you have at least one destination idea in mind, <strong>Click Here</strong> and proceed to the next clue</span>}
    content={<span>A snapshot in time on top of the world. If I looked down, I would have hurled.</span>} />)
function Colorado() {
    return (
        <div className="Colorado">
            <h2>A Week in Paradise
            </h2>
            <img width="" src="https://www.planetware.com/wpimages/2019/12/colorado-in-pictures-beautiful-places-to-photograph-vail-piney-lake.jpg" alt="denver"/>
            <p>Our first real trip together. When can we move there? (no seriously)
            </p>
            <p>Some of my favorite pictures:
                </p>
            <Carousel autoPlay infiniteLoop centerMode>
                    <div className="slide-content">
                    <div><img src={Us1} alt="us1" /></div>
                    <p className="legend">Cuties in the garden</p>
                    </div>
                <div className="slide-content">
                    <div><img src={Us2} alt="us2" /></div>
                    <p className="legend">What a wonderful place to stay</p>
                    </div>
                <div className="slide-content">
                    <div><img src={City1} alt="city1" /></div>
                    <p className="legend">Cheesin' at the rocks</p>
                    </div>
                <div className="slide-content">
                    <div><img src={City2} alt="city2" /></div>
                    <p className="legend">Gettin brews with my boos</p>
                    </div>

                <div className="slide-content">
                    <div><img src={City4} alt="city4" /></div>
                    <p className="legend">I wouldn't mess with them</p>
                    </div>
                <div className="slide-content">
                    <div><img src={City5} alt="city5" /></div>
                    <p className="legend">Gay means cool</p>
                    </div>
                    <div className="slide-content">
                    <div><img src={City3} alt="city3" /></div>
                    <p className="legend">Solidarity!</p>
                    </div>
                <div className="slide-content">
                    <div><img src={Food1} alt="Food1" /></div>
                    <p className="legend">Best. Breakfast. Ever.</p>
                    </div>
                <div className="slide-content">
                    <div><img src={Food2} alt="Food2" /></div>
                    <p className="legend">My view, is the best view.</p>
                    </div>
                <div className="slide-content">
                    <div><img src={Food3} alt="Food3" /></div>
                    <p className="legend">Scrumptious sweets for the sweetie</p>
                    </div>
                <div className="slide-content">
                    <div><img src={Mtn1} alt="Mtn1" /></div>
                    <p className="legend">On top of the world</p>
                    </div>
                <div className="slide-content">
                    <div><img src={Mtn2} alt="Mtn2" /></div>
                    <p className="legend">Born to climb</p>
                    </div>

                    <div className="slide-content">
                    <div><img src={Mtn3} alt="Mtn3" /></div>
                    <p className="legend">My feet are doing <i>the thing</i></p>
                    </div>

                    <div className="slide-content">
                    <div><img src={Mtn4} alt="Mtn4" /></div>
                    <p className="legend">You were extremely good at that</p>
                    </div>

    </Carousel>

<p>
        Here are some awesome places we can check out the next time we are in Colorado:
    </p>
    <p><h4>Great Sand Dunes National Park and Preserve</h4><img alt="CO" width="480px" src="https://www.planetware.com/wpimages/2019/12/colorado-in-pictures-beautiful-places-to-photograph-great-sand-dunes-national-park.jpg" />
    </p>
    <p><h4>Crested Butte (skiing)</h4><img alt="CO" width="480px" src="https://www.planetware.com/wpimages/2019/12/colorado-in-pictures-beautiful-places-to-photograph-crested-butte.jpg" />
    </p>
    <p><h4>Book Cliffs (hiking)</h4><img alt="CO" width="480px" src="https://www.planetware.com/wpimages/2019/12/colorado-in-pictures-beautiful-places-to-photograph-book-cliffs.jpg" />
    </p>
    <p><h4>Telluride</h4><img alt="CO" width="480px" src="https://www.planetware.com/wpimages/2019/12/colorado-in-pictures-beautiful-places-to-photograph-telluride.jpg" />
    </p>
        <p>
            Where should we go for our <strong>next adventure</strong>?
            </p>
            {clue}
        </div>
    );
}
    
export default Colorado;

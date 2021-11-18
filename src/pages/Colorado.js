

// Import Swiper styles
// Import Swiper React components
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
import Done1 from '../img/done1.jpg';
import Done2 from '../img/done2.jpg';
import Done3 from '../img/done3.jpg';
import Done4 from '../img/done4.jpg';
import './Pages.css';


 

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
                    <div className="slide-content">
                    <p className="legend">Cuties in the garden</p>
                    <div><img src={Us1} alt="us1" /></div>
                    </div>
                <div className="slide-content">
                    <p className="legend">What a wonderful place to stay</p>
                    <div><img src={Us2} alt="us2" /></div>
                    </div>
                <div className="slide-content">
                    <p className="legend">Cheesin' at the rocks</p>
                    <div><img src={City1} alt="city1" /></div>
                    </div>
                <div className="slide-content">
                    <p className="legend">Gettin brews with my boos</p>
                    <div><img src={City2} alt="city2" /></div>
                    </div>

                <div className="slide-content">
                    <p className="legend">I wouldn't mess with them</p>
                    <div><img src={City4} alt="city4" /></div>
                    </div>
                <div className="slide-content">
                    <p className="legend">Gay means cool</p>
                    <div><img src={City5} alt="city5" /></div>
                    </div>
                    <div className="slide-content">
                    <p className="legend">Solidarity!</p>
                    <div><img src={City3} alt="city3" /></div>
                    </div>
                <div className="slide-content">
                    <p className="legend">Best. Breakfast. Ever.</p>
                    <div><img src={Food1} alt="Food1" /></div>
                    </div>
                <div className="slide-content">
                    <p className="legend">My view, is the best view.</p>
                    <div><img src={Food2} alt="Food2" /></div>
                    </div>
                <div className="slide-content">
                    <p className="legend">Scrumptious sweets for the sweetie</p>
                    <div><img src={Food3} alt="Food3" /></div>
                    </div>
                <div className="slide-content">
                    <p className="legend">On top of the world</p>
                    <div><img src={Mtn1} alt="Mtn1" /></div>
                    </div>
                <div className="slide-content">
                    <p className="legend">Born to climb</p>
                    <div><img src={Mtn2} alt="Mtn2" /></div>
                    </div>

                    <div className="slide-content">
                    <p className="legend">My feet are doing <i>the thing</i></p>
                    <div><img src={Mtn3} alt="Mtn3" /></div>
                    </div>

                    <div className="slide-content">
                    <p className="legend">You were so good, impressive</p>
                    <div><img src={Mtn4} alt="Mtn4" /></div>
                    </div>


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

            <p>I'm thinking somewhere <i>warm</i>.
                </p>
                <p>
                Well... That's it! That was the last sticky-note. Thanks for playing! I love you, and happy birthday.<br /> 
                    </p>
    <p>Bonus Pictures!</p><br />
    <img alt="done" width="360px" src={Done1}/><br/>
    <img alt="done" width="360px" src={Done2}/><br/>
    <img alt="done" width="360px" src={Done3}/><br/>
    <img alt="done" width="360px" src={Done4}/><br/>

        </div>
    );
}
    
export default Colorado;

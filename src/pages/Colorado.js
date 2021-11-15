

// Import Swiper styles
// Import Swiper React components
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Navigation, Pagination, Scrollbar } from 'swiper';
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
import Us1 from '../img/colorado/us1.jpg';
import Us2 from '../img/colorado/us2.jpg';
import './Pages.css';


 
const clue = (<Clue
    label={<span>Once you have at least one destination idea in mind, <strong>click here</strong> and proceed to the next clue</span>}
    content={<span>A snapshot in time on top of the world. If I looked down, I would have hurled.</span>} />)
function Colorado() {
    return (
        <div className="Colorado">
            <h2>A Week in Paradise
            </h2>
            <img width="" src="https://www.planetware.com/photos-tiles/colorado-denver-city-view-and-mountains.jpg" alt="denver"/>
            <p>When can we move there?
            </p>
            <Carousel
                  modules={[Navigation, Pagination, Scrollbar ]}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  loop
      spaceBetween={150}
      slidesPerView={1}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    >
                    <div className="slide-content">
                    <img src={Us1} alt="us1" height="360px"/>
                    <p className="legend">Red Rocks</p>
                    </div>
                <div className="slide-content">
                    <img src={Us2} alt="us2" height="360px"/>
                    <p className="legend">Nice and Quiet AirBnB</p>
                    </div>
                <div className="slide-content">
                    <img src={City1} alt="city1" height="360px"/>
                    <p className="legend">Fun in the city</p>
                    </div>
                <div className="slide-content">
                    <img src={City2} alt="city2" height="360px"/>
                    <p className="legend">More cutie in the Red Rocks</p>
                    </div>
                <div className="slide-content">
                    <img src={City3} alt="city3" height="360px"/>
                    <p className="legend">Fun in the city</p>
                    </div>
                <div className="slide-content">
                    <img src={City4} alt="city4" height="360px"/>
                    <p className="legend">Fun in the city</p>
                    </div>
                <div className="slide-content">
                    <img src={City5} alt="city5" height="360px"/>
                    <p className="legend">Fun in the city</p>
                    </div>
                <div className="slide-content">
                    <img src={Food1} alt="Food1" height="360px"/>
                    <p className="legend">Fun in the city</p>
                    </div>
                <div className="slide-content">
                    <img src={Food2} alt="Food2" height="360px"/>
                    <p className="legend">Fun in the city</p>
                    </div>
                <div className="slide-content">
                    <img src={Food3} alt="Food3" height="360px"/>
                    <p className="legend">Fun in the city</p>
                    </div>
                <div className="slide-content">
                    <img src={Mtn1} alt="Mtn1" height="360px"/>
                    <p className="legend">Fun in the city</p>
                    </div>
                <div className="slide-content">
                    <img src={Mtn2} alt="Mtn2" height="360px"/>
                    <p className="legend">Fun in the city</p>
                    </div>

                <div className="slide-content">
                    <img src={Mtn3} alt="Mtn3" height="360px"/>
                    <p className="legend">Fun in the city</p>
                    </div>

    </Carousel>
            {clue}
        </div>
    );
}
    
export default Colorado;

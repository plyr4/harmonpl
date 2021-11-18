

import Clue from '../Clue.js';
import Pam1 from '../img/pam/pam1.jpg';
import Pam10 from '../img/pam/pam10.jpg';
import Pam11 from '../img/pam/pam11.jpg';
import Pam12 from '../img/pam/pam12.jpg';
import Pam13 from '../img/pam/pam13.jpg';
import Pam14 from '../img/pam/pam14.jpg';
import Pam15 from '../img/pam/pam15.jpg';
import Pam16 from '../img/pam/pam16.jpg';
import Pam2 from '../img/pam/pam2.jpg';
import Pam3 from '../img/pam/pam3.jpg';
import Pam4 from '../img/pam/pam4.jpg';
import Pam5 from '../img/pam/pam5.jpg';
import Pam6 from '../img/pam/pam6.jpg';
import Pam7 from '../img/pam/pam7.jpg';
import Pam8 from '../img/pam/pam8.jpg';
import Pam9 from '../img/pam/pam9.jpg';
import './Pages.css';
const clue = (<Clue
    label={<span>Once the bubby is nice and cozy, <strong>Click Here</strong> and proceed to the next clue</span>}
    content={<span>A snapshot in time, on top of the world. If I looked down below, I would have hurled. <br /> (check on the back of something, not the bottom)</span>} />)
    function BubbyBed() {
        return (
        <div className="BubbyBed">
            <h2>A Sofa of Perfect Proportion
            </h2>
            <p>Our Big Momma's favorite cushy bed.
            </p>
            <p><img src={Pam1} alt="pam" width="360px"/></p>

            <p>Here's a collection of some of my most comfy pictures of our little chunk.
                </p>
                <p>Sweet dreams in the comfort of her sofa.</p> 
                <p><img src={Pam4} alt="pam" width="360px"/></p>
                <p>When she finds a nice warm sun spot on her way into bed.</p>
                <p><img src={Pam2} alt="pam" width="360px"/></p>
                <p>Who do you think enjoys the view more: Her, or me?</p> 
                <p><img src={Pam3} alt="pam" width="360px"/></p>
                <p>Uh oh, I made eye contact. You know what that means.</p> 
                <p><img src={Pam5} alt="pam" width="360px"/></p>
                <p>So peaceful and warm.</p> 
                <p><img src={Pam7} alt="pam" width="360px"/></p>
                <p><i>Goooooooooood morning!</i></p> 
                <p><img src={Pam6} alt="pam" width="360px"/></p>
                <p><i>Bonus cleaning time.</i></p> 
                <p><img src={Pam8} alt="pam" width="360px"/></p>
                <p><i>Perfect</i> fit.</p> 
                <p><img src={Pam9} alt="pam" width="360px"/></p>
                <p>This is her chair.</p> 
                <p><img src={Pam10} alt="pam" width="360px"/></p>
                <p>She loves you.</p> 
                <p><img src={Pam11} alt="pam" width="360px"/></p>
                <p>Christmas Kitty!</p> 
                <p><img src={Pam12} alt="pam" width="360px"/></p>
                <p>Living the dream.</p> 
                <p><img src={Pam13} alt="pam" width="360px"/></p>
                <p>Wut</p> 
                <p><img src={Pam14} alt="pam" width="360px"/></p>
                <p>She won this battle.</p> 
                <p><img src={Pam15} alt="pam" width="360px"/></p>
                <p>Her favorite spot.</p> 
                <p><img src={Pam16} alt="pam" width="360px"/></p>
            {clue}
        </div>
    );
}
    
export default BubbyBed;

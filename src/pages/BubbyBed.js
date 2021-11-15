

import Clue from '../Clue.js';
import Pam1 from '../img/pam/pam1.jpg';
import Pam2 from '../img/pam/pam2.jpg';
import Pam3 from '../img/pam/pam3.jpg';
import Pam4 from '../img/pam/pam4.jpg';
import Pam5 from '../img/pam/pam5.jpg';
import Pam6 from '../img/pam/pam6.jpg';
import Pam7 from '../img/pam/pam7.jpg';
import Pam8 from '../img/pam/pam8.jpg';
import './Pages.css';
const clue = (<Clue
    label={<span>Once the bubby is nice and cozy, <strong>click here</strong> and proceed to the next clue</span>}
    content={<span>A snapshot in time on top of the world. If I looked down, I would have hurled.</span>} />)
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
            {clue}
        </div>
    );
}
    
export default BubbyBed;

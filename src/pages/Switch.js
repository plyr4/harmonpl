

import Clue from '../Clue.js';
import './Pages.css';
const clue = (<Clue
    label={<span>Did you make it to 100 shrines? How about.... at least 200 Korok seeds? <strong>Click Here</strong> and proceed to the next clue</span>}
    content={<span>Draw the shades, pop some popcorn, and forget the outside world even exists.</span>} />)
function Switch() {
    return (
        <div className="Switch">
            <h2>When Real Life isnt cutting it
            </h2>
            <p>It makes me happy to share things that I grew up with you.
            </p>
            <p>This was my first Legend of Zelda: <i>Ocarina of Time</i>.</p>
                <p><img src="https://www.mobygames.com/images/shots/l/611087-the-legend-of-zelda-ocarina-of-time-nintendo-64-screenshot.jpg" alt="pam"/></p>


                <p>Some things never change.</p>
                <p><img src="https://static.wikia.nocookie.net/zelda_gamepedia_en/images/3/38/Lifting_Small_Rock_OoT3D.jpg" alt="pam"/></p>

                <p>Luckily they made sequels.</p>

                <p>This was Link's next adventure, Legend of Zelda: The <i>Wind Waker</i>.</p>
                <p>You have a talking sailboat and the power to control the wind. I think you would love it.</p>
                <p><img width="720px" src="https://images.nintendolife.com/screenshots/52507/large.jpg" alt="pam"/></p>

                
                <p>The koroks play a big role in Wind Waker. AND they sing!</p>
                <p><img src="https://64.media.tumblr.com/65df505081877b2245e8dc4f77b5e83d/72778f41a962de6e-58/s500x750/11073377ac682c5752fa5ea37303ab45e0e85e77.gifv" alt="pam"/></p>


                <p>But we truly have it great today.</p> 

            <p><img src="https://i.redd.it/9w1zi73do1i11.png" alt="home" width="720px"/></p>

            <p>I absolutely love playing this game with you.</p>

            <p>We climb here, we climb there, we climb <i>evverryyywhere</i>.</p> 
                <p><img  src="https://c.tenor.com/Auwo3ks10RQAAAAd/climbing-zelda.gif" alt="pam"/></p>
                
                <p>We finish climbing and we fly!</p> 
                <p><img width="720px"  src="https://i.kym-cdn.com/photos/images/original/001/135/602/d04.gif" alt="pam"/></p>
                   
                <p>We land and cook delicious food.</p> 
                <p><img width="720px"  src="https://c.tenor.com/D4VFgJVImsMAAAAC/link-cooking.gif" alt="pam"/></p>
                        
                <p>We travel and make new friends!</p> 
                <p><img width="720px" src="https://d1lss44hh2trtw.cloudfront.net/assets/editorial/2020/02/gsc-code-botw.jpg" alt="pam"/></p>

                        
                <p>We get excited and scare the locals.</p> 
                <p><img width="720px"  src="https://i.redd.it/1yubxso3xcwy.png" alt="pam"/></p>

                

                <p>We waste our food on useless creatures.</p> 
                <p><img width="720px"  src="https://www.zeldadungeon.net/wp-content/uploads/2017/12/pupper.png" alt="pam"/></p>
            
                <p>But my favorite part of this virtual world is sharing it with you.</p>

            {clue}
        </div>
    );
}
    
export default Switch;

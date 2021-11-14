

import Clue from '../Clue.js';
import './Pages.css';
const clue = (<Clue
    label={<span>Once the bubby has absorbed about 2/3 of the liquid in the pool, <strong>click here</strong> for your next clue</span>}
    content={<span>When all is said and done, there the queen goes to rest her head.</span>} />)
function DunkPool() {
    return (
        <div className="DunkPool">
            <h2>The Local Pool
            </h2>
            <p>Our Lil Chunk's favorite beachside hangout.
            </p>

            <p>This is what <strong>we own</strong>:<br/>
                <img alt="pool0" width="240" src="https://img.chewy.com/is/image/catalog/71414_Main._AC_SL400_V1499894199_.jpg" />
            </p>

            <p>This is what <strong>we see</strong>:<br/>
                <img alt="pool1" width="480" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-water-bottles-1556763931.png?crop=1.00xw:1.00xh;0,0&resize=980:*" />
            </p>
            <p>This is what <strong>Pamela sees</strong>:<br/>
                <img alt="pool2" width="480" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/240225039.jpg?k=92db0250a87e26880aa4c75ef37e9c6e79a6b2f1c693421ff315e8890c73d6bf&o=&hp=1" />
            </p>
            <p>And this is how <strong>Pamela feels</strong>:<br/>
            <img alt="pool2" width="480" src="https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1589049425000/photosp/a8e9e839-d365-42fe-b57b-3859e5aa7ca8/stock-photo-luxury-swimming-pool-man-rich-manor-property-stately-bearded-man-poolside-view-a8e9e839-d365-42fe-b57b-3859e5aa7ca8.jpg" />
            <br/><img alt="pool2" width="480" src="https://www.pandotrip.com/wp-content/uploads/2018/09/Private-pool-with-stunning-view.-Jade-Mountain-St-Lucia.jpg" />
            </p>
            <p> What I've learned, Pam is living her best life. I can't imagine her water consumption any other way.
                </p>
            {clue}
        </div>
    );
}
    
export default DunkPool;



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
            {clue}
        </div>
    );
}
    
export default DunkPool;

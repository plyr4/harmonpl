

import React from 'react';
import ReactDice from 'react-dice-complete';
import 'react-dice-complete/dist/react-dice-complete.css';
import Clue from '../Clue.js';
import Dante from '../img/dante.png';
import './Pages.css';

class EvilPowerMaster extends React.Component {
    clue = (<Clue
        label={<span><strong>Click Here</strong> for your next clue</span>}
        content={<span>Draw the shades, pop some popcorn, and forget the outside world even exists.</span>} />)

    constructor(props) {
        super(props);
        this.state = {
            choice: -1,
            roll: -1
        };
    }
    render() {
        return (<div>
            <h2>A Date with Destiny
            </h2>
            <p>Music fills the air and dancing fills the kitchen.
            </p>
            <p>"<strong>HA HAH AH AHA HA YOU THOUGHT YOU SAW THE LAST OF ME?</strong>"</p>
            <p>"<strong>DONT MAKE ME LAUGH!</strong>"</p>
            <p>
                <img alt="evilpowermaster" width="480px" src="https://spikeybits.com/wp-content/uploads/2019/04/Screenshot_991.jpg" />
            </p>
            <br />
            <br />
            <br />
            <p>"<strong><i>BEEP BOOP BOOP BEEP</i></strong>"</p>
            <p>"<strong>DANTE THE METALLIC</strong> IS HERE TO SAVE THE GALAXY"
            </p>
            <p>
                <img alt="dante" src={Dante} />
            </p>
            <br />
            <p>The Evil Power Master takes one look at your shiny chassis and lets out a wild cackle.
            </p><p>
                "<strong>HAHAHAHAHAHA! You stand no chance, <i>Daniel</i>.</strong>" screams the powermaster as he balls his hand into a wrinkled fist.
            </p>
            <p>
                He begins winding up a powerful blow.
            </p>
            <br />
            <p><strong>What will you do, hero?</strong></p>
            <br />
            <div>
                <button onClick={() => { this.makeChoice(1) }}>Reason with him</button> <button onClick={() => { this.makeChoice(2) }}>Shoot him with your blaster</button>
            </div>
            <br />

            {
                (this.state.choice === -1 ? null : this.state.choice === 1 ? this.renderReason() : this.renderShoot())
            }




        </div>)
    }

    makeChoice(choice) {
        this.setState({ choice: choice })
    }

    rollDoneCallback(num) {
        this.setState({ roll: num })
    }


    renderReason() {
        return <div><p>
            <i>Dante sees this as an opportunity to try and reason with the Evil Lord.</i>
        </p>
            <p>Click the die and roll to persuade!</p>

            <ReactDice
                numDice={1}
                rollDone={(num) => this.rollDoneCallback(num)}
                ref={dice => this.reactDice = dice}
                outline
                outlineColor={"#000000"}
            />

            {
                this.state.roll === -1 ? <p></p> : <div><p>You rolled a {this.state.roll} </p>{this.renderReasonRoll()}</div>
            }</div>
    }

    renderReasonRoll() {

        if (this.state.roll < 4) {
            return <div><p><i>Dante's cold chrome finger pulls the trigger.</i></p><p><strong><i>CLICK</i></strong>.</p>
                <p><strong>He laughs.</strong> Even the Evil PowerMaster feels bad for people sometimes. Out of pity, he gives you the next clue.</p>
                <div>{this.clue}</div>
            </div>
        } else if (this.state.roll === 4) {
            return <div><p><i>Dante's cold chrome finger pulls the trigger.</i></p><p><strong><i>CLICK</i></strong>.</p>
                <p><strong>He laughs.</strong> Even the Evil PowerMaster feels bad for people sometimes. Out of pity, he gives you the next clue.</p>
                <div>{this.clue}</div>
            </div>
        } else if (this.state.roll === 5) {

            return <div><p><i>Dante's cold chrome finger pulls the trigger.</i></p><p><strong><i>CLICK</i></strong>.</p>
                <p><strong>He laughs.</strong> Even the Evil PowerMaster feels bad for people sometimes. Out of pity, he gives you the next clue.</p>
                <div>{this.clue}</div>
            </div>

        } else if (this.state.roll === 6) {
            return <div>NICE SHOT! Right in Evil PowerEyeball. As he scurries off he drops a note:
                <div>{this.clue}</div>
            </div>
        }
    }



    renderShoot() {
        return <div><p>
            <i>Dante sees his opportunity and aims his blaster right for the ugly mug's eye.</i>
        </p>
            <p>Click the die and roll to hit!</p>

            <ReactDice
                numDice={1}
                rollDone={(num) => this.rollDoneCallback(num)}
                ref={dice => this.reactDice = dice}
                outline
                outlineColor={"#000000"}
            />

            {
                this.state.roll === -1 ? <p></p> : <div><p>You rolled a {this.state.roll} </p>{this.renderShootRoll()}</div>
            }</div>
    }

    renderShootRoll() {

        if (this.state.roll < 4) {
            return <div><p><i>Dante's cold chrome finger pulls the trigger.</i></p><p><strong><i>CLICK</i></strong>.</p>
                <p><strong>He laughs.</strong> Even the Evil PowerMaster feels bad for people sometimes. Out of pity, he gives you the next clue.</p>
                <div>{this.clue}</div>
            </div>
        } else if (this.state.roll === 4) {
            return <div><p><i>Dante's cold chrome finger pulls the trigger.</i></p><p><strong><i>CLICK</i></strong>.</p>
                <p><strong>He laughs.</strong> Even the Evil PowerMaster feels bad for people sometimes. Out of pity, he gives you the next clue.</p>
                <div>{this.clue}</div>
            </div>
        } else if (this.state.roll === 5) {

            return <div><p><i>Dante's cold chrome finger pulls the trigger.</i></p><p><strong><i>CLICK</i></strong>.</p>
                <p><strong>He laughs.</strong> Even the Evil PowerMaster feels bad for people sometimes. Out of pity, he gives you the next clue.</p>
                <div>{this.clue}</div>
            </div>

        } else if (this.state.roll === 6) {
            return <div>NICE SHOT! Right in Evil PowerEyeball. As he scurries off he drops a note:
                <div>{this.clue}</div>
            </div>
        }
    }
}


export default EvilPowerMaster;

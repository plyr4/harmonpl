

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
            <p>"<strong>HA HAH AH AHA HA YOU THOUGHT YOU SAW THE LAST OF ME?</strong>"</p>
            <p>"<strong>DONT MAKE ME LAUGH!</strong>"</p>
            <p>
                <img alt="evilpowermaster" width="480px" src="https://spikeybits.com/wp-content/uploads/2019/04/Screenshot_991.jpg" />
            </p>
            <br />
            <p>"<strong><i>BEEP BOOP BOOP BEEP</i></strong>"</p>
            <p>"HALT EVIL MIND, I AM HERE TO SAVE THE GALAXY" <i>buzzes <strong>DANTE THE METALLIC</strong>.</i>
            </p>
            <p>
                <img alt="dante" src={Dante} />
            </p>
            <p>The Evil Power Master takes one look at Dante's shiny chassis and lets out a wild cackle.
            </p><p>
                "<strong>HAHAHAHAHAHA! You stand no chance, <i>Daniel</i>.</strong>" screams the powermaster as he balls his hand into a wrinkled fist.
            </p>
            <p>
                The Evil Being begins winding up a powerful blow.
            </p>
            <p><strong style={{'font-size': '30px'}}>What will you do, hero?</strong></p>
            <p>Choose wisely. (or not)</p>
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

        if (this.state.roll <= 3) {
            return <div><p>Dante notices a price tag on the Power Master's blue jeans and initiates a hasty compliment.</p>
            <p>"Are those.... Are those the bootcut highrises from Levi's mens' denim fall collection?" Dante pleads.</p>
            <br/>
            <p>Dante sees his dark gaze break for a moment, but the hope disipates: "Are you making a joke? Do you think that's funny?"</p>
            <p>The Master leans down and exclaims "HAHA. You wouldn't know fall collection if it bit you in the exhaust pipe."</p>
            <p>As he approaches, you notice the "Goodfellow" branding clear across the belt loops.</p>
            <p>Feeling embarrassed, he scurries back to his Evil Power Ship. In his haste you see him drop a note. It looks like a clue!</p>
                <div>{this.clue}</div>
            </div>

        } else if (this.state.roll >= 4) {
            return <div><p>Dante notices a price tag on the Power Master's blue jeans and initiates a hasty compliment.</p>
            <p>"Are those.... Are those the bootcut highrises from Levi's mens' denim fall collection?" Dante pleads.</p>
            <p>Dante sees his dark gaze break, and a glimmer of hope shines through: "Why, yes, they are. None of my minions ever notice my stellar sense of Earthbound fashion."</p>
            <p>The Master leans down and exclaims "I didn't want to be here anyways."</p>
            <p>As he scurries back to his Evil Power Ship he drops a note. It looks like a clue!</p>
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

        if (this.state.roll <= 3) {
            return <div><p><i>Dante's cold chrome finger pulls the trigger.</i></p><p><strong><i>CLICK</i></strong> <strong><i>CLICK</i></strong>. "BEEP ZORP! NO! This is the worst time for a blaster malfunction." </p>
                <p><strong>He laughs.</strong> Out of pity, the Power Master gives up on trying to hurt Dante.</p>
                <p>Instead, he sees no threat and starts skulking towards his Evil Power Ship.</p>
                <p>As he scurries he drops a note. It looks like a clue!</p>
                <div>{this.clue}</div>
            </div>
        } else if (this.state.roll >= 4) {
            return <div><p>Dante uses his cold chrome finger to pull the trigger. The blaster revs up for a moment and <i>BBBBZZZZRTTTT!</i> A red hot beam shoots through the air towards the Master.</p>
            <p>NICE SHOT! Right in Evil PowerEyeball.</p>
            <p>As he scurries he drops a note. It looks like a clue!</p>
                <div>{this.clue}</div>
            </div>
        }
    }
}


export default EvilPowerMaster;

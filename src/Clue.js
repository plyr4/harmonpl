

import React from 'react';
import Loader from "react-loader-spinner";
import { useNavigate } from 'react-router-dom';
import './Clue.scss';

class Clue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clue_input: '', error: '', checking: false};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    render() {
        return (<div className="Clue"><details>
            <summary>{this.props.label}</summary>
            <p><strong>Clue: </strong>{this.props.content}</p>
            <p><h4>Found the code? Enter it here:</h4>
            <form onSubmit={this.handleSubmit}><input value={this.state.clue_input} onChange={this.handleChange}></input>
            <button type="submit">Check</button>{ this.state.checking ? <Loader
        type="ThreeDots"
        color="#00BFFF"
        className="loader"
        height={12}
        // timeout={3000} //3 secs
      /> : ''}</form></p>
            
            <p>{this.state.error}</p>
        </details></div>)
    }
    handleChange(event) {
        this.setState({clue_input: event.target.value.toLowerCase()});
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({checking: true, error: ''});

        setTimeout(function() {
            this.setState({checking: false});
            if (!this.state.clue_input || this.state.clue_input === undefined || this.state.clue_input === "") {
                this.setState({error:  'code was empty! double check and try again.'});
                return
            }
            var valid = validCode(this.state.clue_input)
            if (!valid) {
                this.setState({error: this.state.clue_input + ' is not a valid code! double check and try again.'});
                return
            }
            this.props.navigate("/" + this.state.clue_input);
            window.scrollTo(0, 0);
        }.bind(this), 1000)
    }
}

function validCode(code) {
    let validCodes = [
        "sofa",
        "colorado",
        "dunk",
        "epm",
        "projector",
        "tunes",
        "switch"
    ]
    return validCodes.includes(code)
}

function WithNavigate(props) {
    let navigate = useNavigate();
    return <Clue {...props} navigate={navigate} />
}

export default WithNavigate

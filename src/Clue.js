

import React from 'react';
import './Clue.scss';
import { useNavigate } from 'react-router-dom';

class Clue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clue_input: '', error: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    render() {
        return (<div className="Clue"><details>
            <summary>{this.props.label}</summary>
            <p><strong>Clue: </strong>{this.props.content}</p>
            <p><h4>Found the code? Enter it here:</h4>
            <form onSubmit={this.handleSubmit}><input value={this.state.clue_input} onChange={this.handleChange}></input>
            <button type="submit">Check</button></form></p>
            <p>{this.state.error}</p>
        </details></div>)
    }
    handleChange(event) {
        this.setState({clue_input: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        var valid = validCode(this.state.clue_input)
        if (!valid) {
            this.setState({error: this.state.clue_input + ' is not a valid code! double check and try again.'});
            return
        }
        this.setState({error: ''});
        this.props.navigate("/" + this.state.clue_input);
    }
}

function validCode(code) {
    let validCodes = [
        "recordplayer",
        "evilpowermaster"
    ]
    return validCodes.includes(code)
}

function WithNavigate(props) {
    let navigate = useNavigate();
    return <Clue {...props} navigate={navigate} />
}

export default WithNavigate

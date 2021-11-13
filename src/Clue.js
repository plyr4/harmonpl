

import React from 'react';
import './Clue.scss';

class Clue extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (<div className="Clue"><details>
            <summary>{this.props.label}</summary>
            <p>{this.props.content}</p>
        </details></div>)
    }

}


export default Clue;

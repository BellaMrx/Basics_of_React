import React, { Component } from 'react';

class InputT extends Component {
    render() {
        return ( 
          <div>
            <label> { this.props.name } </label> :  
            <input type = "text" placeholder = { this.props.name }/> 
          </div>
        );
    }
}
export default InputT;

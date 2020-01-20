//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//components

class ClearDares extends Component{
  render(){
    return(
      <button title="Clear dares" class="hamburger" onClick={this.props.onClick}>
        <FontAwesomeIcon icon="sync-alt" size="2x"/>
      </button>
    );
  }
}

export default ClearDares;

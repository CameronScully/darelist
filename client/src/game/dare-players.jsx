//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//components

class DarePlayers extends Component{
  render(){
    return(
      <button title="Dare all" class="hamburger" onClick={this.props.onClick}>
        <FontAwesomeIcon icon="dice" size="2x" />
      </button>
    );
  }
}

export default DarePlayers;

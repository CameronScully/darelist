//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//components

class ResetPlayers extends Component{
  render(){
    return(
      <button title="Clear dares" class="hamburger">
        <FontAwesomeIcon icon="sync-alt" size="2x"/>
      </button>
    );
  }
}

export default ResetPlayers;

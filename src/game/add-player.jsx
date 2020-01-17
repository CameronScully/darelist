//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//components

class AddPlayer extends Component{
  render(){
    return(
      <button title="Add player" class="hamburger">
        <FontAwesomeIcon icon="plus-circle" size="2x" />
      </button>
    );
  }
}

export default AddPlayer;

//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import '../../index.scss';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Dare extends Component{
  render(){
    return(
      <div class="container" id="dareContainer">
        <div class="row">
          <div class="col">
            <FontAwesomeIcon icon="dice-one" /> {this.props.text}
          </div>
        </div>
      </div>
    );
  }
}

export default Dare;

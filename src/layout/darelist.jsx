//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import Game from "./game.jsx";

class Darelist extends Component {
  render(){
    return(
      <div class="container-fluid" align="center">
        <div class="row" id="banner">
          <div class="col">
            <h1>darelist</h1>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <Game />
          </div>
        </div>
      </div>
    );
  }
}

export default Darelist;

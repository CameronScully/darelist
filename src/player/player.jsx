//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import PlayerControls from "./../player/player-controls.jsx";
import Dares from "./dares.jsx";
import Username from "./username.jsx";

class Player extends Component{
  constructor(props){
    super(props);

    this.state = {
      multiplier: this.props.multiplier
    };

    this.handleSlide = this.handleSlide.bind(this);
  }

  handleSlide(event){
    this.setState({
      multiplier: event.target.value
    })
  }

  render(){
    return(
      <div class="container shadow" id="player">
        <div class="row">
          <div class="col-10 offset-2" align="right">
            <PlayerControls />
          </div>
        </div>
        <div class="row">
          <div class="col-10 offset-1">
            <Username />
          </div>
          <div class="col" id="multiplier">
            {this.state.multiplier}
          </div>
        </div>
        <div class="row">
          <div class="col">
            <input type="range" min="0" max="5" value={this.state.multiplier}
              onChange={this.handleSlide}/>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <Dares dares={this.props.dares}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;

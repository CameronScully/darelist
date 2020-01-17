//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import PlayerControls from "./../player/player-controls.jsx";
import Dare from "./../dare/dare.jsx";

class Player extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: this.props.name,
      multiplier: this.props.multiplier
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
    this.handleSlide = this.handleSlide.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
  }

  handleKeypress(event){
    if(event.key === "Enter"){
      event.target.blur();
      this.handleSubmit(event);
    }
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
            <PlayerControls
              clearPlayer={() => this.props.clearPlayer(this.props.id)}
              clearPlayerDares={() => this.props.clearPlayerDares(this.props.id)}
              darePlayer={() => this.props.darePlayer(this.props.id)}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-10 offset-1">
            <form onSubmit={this.handleSubmit} onKeyDown={this.handleKeypress}>
              <input
                type="text"
                placeholder="Player"
                id="username"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </form>
          </div>
          <div class="col" id="multiplier">
            {this.state.multiplier}
          </div>
        </div>
        <div class="row">
          <div class="col">
            <input type="range" min="0" max="5" value={this.state.multiplier} onChange={this.handleSlide}/>
          </div>
        </div>
        <div class="row">
          <div class="col">
            {this.props.dares.map((dare, index) => (
              <Dare key={dare.id} text={this.props.dares[index].text} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Player;

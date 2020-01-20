//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//components
import Dares from "./dares.jsx";
import Username from "./username.jsx";

class Player extends Component{
  constructor(props){
    super(props);

    this.state = {
      multiplier: this.props.multiplier
    };

    this.handleSlide = this.handleSlide.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSlide(event){
    this.setState({
      multiplier: event.target.value
    })
  }

  handleSubmit(event){
    this.props.handleSubmit(event.target.value, this.props.id);
  }

  render(){
    return(
      <div class="container shadow" id="player">
        <div class="row">
          <div class="col-10 offset-2" align="right">
            <button onClick={() => this.props.darePlayer(this.props.id)}>
              <FontAwesomeIcon icon="dice"/>
            </button>
            <button onClick={() => this.props.clearPlayerDares(this.props.id)}>
              <FontAwesomeIcon icon="sync-alt"/>
            </button>
            <button onClick={() => this.props.deletePlayer(this.props.id)}>
              <FontAwesomeIcon icon="trash-alt"/>
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-10 offset-1">
            <Username value={this.props.name} handleSubmit={this.handleSubmit}/>
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

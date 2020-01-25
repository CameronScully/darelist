//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';
import PropTypes from 'prop-types';

//redux
import { connect } from 'react-redux'
import { darePlayer } from '../actions/playerActions'

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
            <Username value={this.props.name} playerID={this.props.id}/>
          </div>
          <div class="col" id="multiplier">
            {this.props.multiplier}
          </div>
        </div>
        <div class="row">
          <div class="col">
            <input type="range" min="0" max="5" value={this.props.multiplier}
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

Player.propTypes = {
  darePlayer: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  player: state.player
});

export default connect(mapStateToProps, { darePlayer })(Player);

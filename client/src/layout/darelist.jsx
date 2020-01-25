//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';
import PropTypes from 'prop-types';

//redux
import { connect } from 'react-redux';
import { addPlayer, deletePlayers } from '../actions/playerActions';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Controls from "../game/controls.jsx";
import Banner from "../game/banner.jsx";
import Settings from "../game/settings.jsx";
import Player from "../player/player.jsx"
import SettingsPage from "./settings-page";
import GamePage from "./game-page.jsx";

class Darelist extends Component {

  constructor(props){
    super(props);

    this.darePlayers = this.darePlayers.bind(this);
    this.clearDares = this.clearDares.bind(this);
    this.deletePlayers = this.deletePlayers.bind(this);

    this.go = this.go.bind(this);

    this.deletePlayer = this.deletePlayer.bind(this);
    this.clearPlayerDares = this.clearPlayerDares.bind(this);
    this.darePlayer = this.darePlayer.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  go(page){
    if(page === "settings"){
      this.setState({
        history: this.state.players,
        players: [],
        page: page
      });
    }

    if(page === "game"){
      this.setState({
        players: this.state.history,
        page: page
      });
    }
  }

  darePlayers(){
    for(var i=0; i<this.state.players.length; i++){
      //pick random dares

      //allocate dares
      var players = this.state.players;
      players[i].dares = players[i].dares.concat({
        id: this.dareCounter,
        text: "lorum ispum dare text that will be randomized from a database.",
        multiplier: 5
      });

      this.setState({
        players: players,
        dareCounter: this.dareCounter++
      });
    }
  }

  clearDares() {
    var players = this.state.players;
    for(var i=0; i<this.state.players.length; i++){
      players[i].dares = [];
    }

    this.setState({
      players: players
    });
  }

  deletePlayers() {
    if(this.props.players.warningIsActive){
      this.props.players.toggle();
      this.props.player.deletePlayer();
    } else {
      this.props.controls.toggle();
    }
  }

  clearPlayerDares(id){
    var players = this.state.players;
    for(var i=0; i<players.length; i++){
      if(players[i].id === id){
        players[i].dares = [];
      }
    }
    this.setState({
      players: players,
    });
  }

  darePlayer(id){
    var players = this.state.players;
    for(var i=0; i<players.length; i++){
      if(players[i].id === id){
        players[i].dares = players[i].dares.concat({
          id: this.dareCounter,
          text: "A dare for " + players[i].name,
          multiplier: 5
        });
      }
    }

    this.setState({
      players: players,
    });
  }

  deletePlayer(id){
    var players = this.state.players;
    for(var i=0; i<players.length; i++){
      if(players[i].id === id){
        players.splice(i, 1);
      }
    }
    this.setState({
      players: players,
    });
  }

  handleSubmit(name, id){
    console.log(id);
    var players = this.state.players;
    for(var i=0; i<players.length; i++){
      if(players[i].id === id){
        players[i].name = name;
      }
    }

    this.setState({
      players: players,
    });
  }

  render(){
    return(
      <div class="container-fluid" align="center">
        <div class="row" id="banner">
          <div class="col">
            <Banner />
          </div>
        </div>
        <div class="row">
          <div class="col-2">
            <Controls />
          </div>
          <div class="col-8">
            <GamePage
              deletePlayer={this.deletePlayer}
              clearPlayerDares={this.clearPlayerDares}
              darePlayer={this.darePlayer}
              handleSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

Darelist.propTypes = {
  addPlayer: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  player: state.player
});

export default connect(mapStateToProps, { addPlayer })(Darelist);

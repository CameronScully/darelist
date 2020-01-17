//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Player from "./../player/player.jsx";

class Game extends Component {

  constructor(props){
    super(props);

    //state variables
    this.state = {
      players: [{
        id: 0,
        name: "",
        multiplier: 0,
        dares: []
      }],
      warningIsActive: false,
      playerCounter: 1,
      dareCounter: 0,
    }

    //functions
    this.dareAll = this.dareAll.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
    this.clearDares = this.clearDares.bind(this);
    this.clearPlayer = this.clearPlayer.bind(this);
    this.clearPlayers = this.clearPlayers.bind(this);
    this.clearPlayerDares = this.clearPlayerDares.bind(this);
    this.darePlayer = this.darePlayer.bind(this);
    this.updatePlayers = this.updatePlayers.bind(this);
  }

  updatePlayers(){
    this.props.updatePlayers(this.state.players,
      this.state.playerCounter,
      this.state.dareCounter
    );
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

    this.updatePlayers();
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

    this.updatePlayers();
  }

  clearPlayer(id){
    var players = this.state.players;
    for(var i=0; i<players.length; i++){
      if(players[i].id === id){
        players.splice(i, 1);
      }
    }
    this.setState({
      players: players,
    });

    this.updatePlayers();
  }

  clearPlayers() {
    if(this.state.warningIsActive){
      var players = [];
      this.setState({
        players: players,
        warningIsActive: !this.state.warningIsActive
      });
    } else {
      this.setState({
        warningIsActive: !this.state.warningIsActive
      });
    }

    this.updatePlayers();
  }

  clearDares() {
    var players = this.state.players;
    console.log(players);
    for(var i=0; i<this.state.players.length; i++){
      players[i].dares = [];

      this.setState({
        players: players
      });
    }

    this.updatePlayers();
  }

  addPlayer(){
    var players = this.state.players.concat({
      id: this.state.playerCounter,
      name: "",
      multiplier: 0,
      dares: []
    });

    this.setState({
      players: players,
      playerCounter: this.state.playerCounter + 1
    });

    this.updatePlayers();
  }

  dareAll(){
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

    this.updatePlayers();
  }

  render() {
    return(
      <div class="container-fluid" align="center">
        <div class="row">
          <div class="col-2">
            <div class="row">
              <div class="col">
                <button title="Add player" class="hamburger" onClick={this.addPlayer}>
                  <FontAwesomeIcon icon="plus-circle" size="2x" />
                </button>
              </div>
            </div>
            <div class="row">
              <div class="col">
              <button title="Dare all" class="hamburger" onClick={this.dareAll}>
                <FontAwesomeIcon icon="dice" size="2x" />
              </button>
              </div>
            </div>
            <div class="row">
              <div class="col">
              <button title="Clear dares" class="hamburger" onClick={this.clearDares}>
                <FontAwesomeIcon icon="sync-alt" size="2x"/>
              </button>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <button title="Clear Players" class="hamburger"
                  onClick={this.clearPlayers}
                  onBlur={() => this.setState({warningIsActive: false})}>
                  <FontAwesomeIcon icon="trash-alt" size="2x" />
                </button>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <button title="Settings" class="hamburger" onClick={() => this.props.go("settings")}>
                  <FontAwesomeIcon icon="cog" size="2x" />
                </button>
              </div>
            </div>
            <div class="row">
              <div class="col">
              {this.state.warningIsActive ?
                <div class="hamburger alert alert-warning">
                  You are about to remove all players.
                </div> : ""
              }
              </div>
            </div>
          </div>
          <div class="col-8">
            {this.props.players.map((player) => (
              <div class="row" key={player.id}>
                <div class="col">
                  <Player
                    id={player.id}
                    name={player.name}
                    multiplier={player.multiplier}
                    dares={player.dares}
                    clearPlayer={this.clearPlayer}
                    clearPlayerDares={this.clearPlayerDares}
                    darePlayer={this.darePlayer}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Game;

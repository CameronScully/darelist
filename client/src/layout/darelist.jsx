//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Banner from "./../game/banner.jsx";
import Controls from "./../game/controls.jsx";
import AddPlayer from "./../game/add-player.jsx";
import DarePlayers from "./../game/dare-players.jsx";
import ClearDares from "./../game/clear-dares.jsx";
import DeletePlayers from "./../game/delete-players.jsx";
import Settings from "./../game/settings.jsx";
import Player from "./../player/player.jsx"
import SettingsPage from "./settings-page";
import GamePage from "./game-page.jsx";

class Darelist extends Component {
  constructor(props){
    super(props);

    this.state = {
      players: [{
        id: 0,
        name: "",
        multiplier: 0,
        dares: []
      }],
      playerCounter: 1,
      dareCounter: 0,
      warningIsActive: false,
      history: [],
      page: "game"
    }

    this.addPlayer = this.addPlayer.bind(this);
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

  addPlayer(){
    var players = this.state.players.concat(
      {
        id: this.state.playerCounter,
        name: "",
        multiplier: 0,
        dares: []
      }
    );

    this.setState({
      players: players,
      playerCounter: this.state.playerCounter+1
    });
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
            <button onClick={() => console.log(this.state.players)}>
              DEBUG
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-2">
            <Controls
              warningIsActive={this.state.warningIsActive}
              active={this.state.page === "game"}
              return={() => this.go("game")}>
              <AddPlayer onClick={this.addPlayer}/>
              <DarePlayers onClick={this.darePlayers} />
              <ClearDares onClick={(this.clearDares)} />
              <DeletePlayers onClick={this.deletePlayers}
                onBlur={() => this.setState({
                  warningIsActive: false
                })}
              />
            <Settings onClick={() => this.go("settings")} />
            </Controls>
          </div>
          <div class="col-8">
            <GamePage players={this.state.players}
              active={this.state.page==="game"}
              deletePlayer={this.deletePlayer}
              clearPlayerDares={this.clearPlayerDares}
              darePlayer={this.darePlayer}
              handleSubmit={this.handleSubmit}/>
            <SettingsPage active={this.state.page==="settings"} />
          </div>
        </div>
      </div>
    );
  }
}

export default Darelist;

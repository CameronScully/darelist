//react libraries
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//bootstrap stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';

//awesome font icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons'
import { faDice } from '@fortawesome/free-solid-svg-icons'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faDiceOne } from '@fortawesome/free-solid-svg-icons'

class Dare extends React.Component{
  render(){
    return(
      <div class="container" id="dareContainer">
        <div class="row align-items-center">
          <div class="col-10 offset-1" align="center" id="dareText">
            {this.props.text}
          </div>
        </div>
      </div>
    );
  }
}

class PlayerControls extends React.Component {
  render(){
    return(
      <div>
        <button>
          <FontAwesomeIcon icon={faDice} onClick={this.props.darePlayer} />
        </button>
        <button>
          <FontAwesomeIcon icon={faSyncAlt} onClick={this.props.clearPlayerDares} />
        </button>
        <button>
          <FontAwesomeIcon icon={faTrashAlt} onClick={this.props.clearPlayer} />
        </button>
      </div>
    );
  }
}

class Player extends React.Component{
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

class Game extends React.Component {

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

    console.log(this.state.players);
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
  }

  loadPage(name){

  }

  render() {
    return(
      <div class="container-fluid" align="center">
        <div class="row">
          <div class="col-2">
            <div class="row">
              <div class="col">
                <button title="Add player" class="hamburger" onClick={this.addPlayer}>
                  <FontAwesomeIcon icon={faPlusCircle} size="2x" />
                </button>
              </div>
            </div>
            <div class="row">
              <div class="col">
              <button title="Dare all" class="hamburger" onClick={this.dareAll}>
                <FontAwesomeIcon icon={faDice} size="2x" />
              </button>
              </div>
            </div>
            <div class="row">
              <div class="col">
              <button title="Clear dares" class="hamburger" onClick={this.clearDares}>
                <FontAwesomeIcon icon={faSyncAlt} size="2x"/>
              </button>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <button title="Clear Players" class="hamburger" onClick={this.clearPlayers} onBlur={() => this.setState({warningIsActive: false})}>
                  <FontAwesomeIcon icon={faTrashAlt} size="2x" />
                </button>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <button title="Settings" class="hamburger" onClick={this.settings}>
                  <FontAwesomeIcon icon={faCog} size="2x" />
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
            {this.state.players.map((player) => (
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

class Darelist extends React.Component {
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

ReactDOM.render(
  <Darelist />,
  document.getElementById('root')
);

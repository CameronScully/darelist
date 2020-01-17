//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Player from "./player";

class Players extends Component{
  render(){
    return(
      <div class="container-fluid">
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
    );
  }
}

export default Players;

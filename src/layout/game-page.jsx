//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Player from "./../player/player.jsx"

class GamePage extends Component{
  render(){
    return(
      <div>
        {this.props.active ?
          <div>
            {this.props.players.map((player) => (
              <div class="row" key={player.id}>
                <div class="col">
                  <Player
                    id={player.id}
                    name={player.name}
                    multiplier={player.multiplier}
                    dares={player.dares}
                    deletePlayer={this.props.deletePlayer}
                    clearPlayerDares={this.props.clearPlayerDares}
                    darePlayer={this.props.darePlayer}
                    handleSubmit={this.props.handleSubmit}
                  />
                </div>
              </div>
            ))}
          </div> : ""
        }
      </div>
    );
  }
}

export default GamePage;

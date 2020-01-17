//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import AddPlayer from "./add-player.jsx";
import DarePlayers from "./dare-players.jsx";
import ResetDares from "./reset-players.jsx";
import DeletePlayers from "./delete-players.jsx";
import Settings from "./settings.jsx";

class Controls extends Component{
  render(){
    return(
      <div class="container">
        <div class="row">
          <div class="col">
            <AddPlayer />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <DarePlayers />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <ResetDares />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <DeletePlayers />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <Settings />
          </div>
        </div>
      </div>
    );
  }
}

export default Controls;

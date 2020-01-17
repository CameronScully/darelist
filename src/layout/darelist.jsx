//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Banner from "./../game/banner.jsx";
import Controls from "./../game/controls.jsx";
import Players from "./../player/players.jsx";

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
      dareCounter: 0
    }
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
            <Players players={this.state.players}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Darelist;

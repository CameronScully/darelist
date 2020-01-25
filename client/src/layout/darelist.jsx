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

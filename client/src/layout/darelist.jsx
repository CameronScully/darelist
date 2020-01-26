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
import Controls from "./controls.jsx";
import Banner from "../game/banner.jsx";
import Settings from "../game/settings.jsx";
import Player from "../player/player.jsx"
import SettingsPage from "./settings-page";
import GamePage from "./game-page.jsx";

class Darelist extends Component {
  render(){
    const page = this.props.navigation.page;
    let display;
    switch(page){
      case "game":
        display = <GamePage />;
        break;
      case "settings":
        display = <SettingsPage />;
        break;
      default:
        display = <GamePage />;
    }

    return(
      <div class="container-fluid" align="center">
        <div class="row" id="banner">
          <div class="col">
            <Banner />
          </div>
        </div>
        <div class="row">
          <div class="col">
            {display}
          </div>
        </div>
      </div>
    );
  }
}

Darelist.propTypes = {
  get: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  navigation: state.navigation
});

export default connect(mapStateToProps, { addPlayer })(Darelist);

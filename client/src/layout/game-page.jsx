//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';
import PropTypes from 'prop-types';

//redux
import { connect } from 'react-redux'
import { getPlayers } from '../actions/playerActions'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Player from "../player/player.jsx"
import Controls from "./controls.jsx"
import AddPlayer from "../game/add-player.jsx";
import DarePlayers from "../game/dare-players.jsx";
import ClearDares from "../game/clear-dares.jsx";
import DeletePlayers from "../game/delete-players.jsx";
import Settings from "../game/settings.jsx";

class GamePage extends Component{

  componentDidMount(){
    this.props.getPlayers();
  }

  render(){
    return(
      <div class="container-fluid" align="center">
        <div class="row">
          <div class="col-2">
            <Controls>
              <AddPlayer />
              <DarePlayers />
              <ClearDares />
              <DeletePlayers />
              <Settings />
            </Controls>
          </div>
          <div class="col-8">
            {this.props.player.players.map((player) => (
              <div class="row" key={player.id}>
                <div class="col">
                  <Player
                    id={player.id}
                    name={player.name}
                    multiplier={player.multiplier}
                    dares={player.dares}
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

GamePage.propTypes = {
  getPlayers: PropTypes.func.isRequired,
  player: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  player: state.player
});

export default connect(mapStateToProps, { getPlayers })(GamePage);

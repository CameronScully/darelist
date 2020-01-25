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
import Player from "./../player/player.jsx"

class GamePage extends Component{

  componentDidMount(){
    this.props.getPlayers();
  }

  render(){
    return(
      <div>
          <div>
            {this.props.player.players.map((player) => (
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

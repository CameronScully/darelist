//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import '../../index.css';
import PropTypes from 'prop-types';

//redux
import { connect } from 'react-redux'
import { darePlayer, resetPlayer, deletePlayer } from '../../actions/playerActions'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//components
import Dares from "./dares.jsx";
import Username from "./username.jsx";

class Player extends Component{
  constructor(props){
    super(props);

    this.darePlayer = this.darePlayer.bind(this);
  }

  darePlayer(){
    let dareIndex = Math.floor(Math.random()*this.props.dares.dares.length);

    this.props.darePlayer(this.props.id, this.props.dares.dares[dareIndex]);
  }

  render(){
    return(
      <div class="container-fluid panel shadow player">
        <div class="row">
          <div class="col-10 offset-2" align="right">
            <button onClick={this.darePlayer}>
              <FontAwesomeIcon icon="dice"/>
            </button>
            <button onClick={() => this.props.resetPlayer(this.props.id)}>
              <FontAwesomeIcon icon="sync-alt"/>
            </button>
            <button onClick={() => this.props.deletePlayer(this.props.id)}>
              <FontAwesomeIcon icon="trash-alt"/>
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-10 offset-1">
            <Username value={this.props.name} playerID={this.props.id}/>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <Dares dares={this.props.playerDares}/>
          </div>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  darePlayer: PropTypes.func.isRequired,
  resetPlayer: PropTypes.func.isRequired,
  dares: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  player: state.player,
  dares: state.dares
});

export default connect(mapStateToProps, {
  darePlayer,
  resetPlayer,
  deletePlayer
})(Player);

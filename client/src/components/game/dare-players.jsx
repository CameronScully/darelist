//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import '../../index.scss';
import PropTypes from 'prop-types';

//redux
import { connect } from 'react-redux'
import { darePlayer } from '../../actions/playerActions'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class DarePlayers extends Component{
  constructor(props){
    super(props);
    this.darePlayers = this.darePlayers.bind(this);
  }

  darePlayers(){
    for(var i = 0; i<this.props.player.players.length; i++){
      let dareIndex = Math.floor(Math.random()*this.props.dares.dares.length);
  
      this.props.darePlayer(this.props.player.players[i].id, this.props.dares.dares[dareIndex]);
    }
  }
  
  render(){
    return(
      <button title="Dare all" onClick={this.darePlayers}>
        <FontAwesomeIcon icon="dice" size="lg" />
      </button>
    );
  }
}

DarePlayers.propTypes = {
  darePlayer: PropTypes.func.isRequired,
  player: PropTypes.object.isRequired,
  dares: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  player: state.player,
  dares: state.dares
});

export default connect(mapStateToProps, { darePlayer })(DarePlayers);

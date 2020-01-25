//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';
import PropTypes from 'prop-types';

//redux
import { connect } from 'react-redux'
import { darePlayers } from '../actions/controlsActions'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//components

class DarePlayers extends Component{
  render(){
    return(
      <button title="Dare all" class="hamburger" onClick={this.props.darePlayers}>
        <FontAwesomeIcon icon="dice" size="2x" />
      </button>
    );
  }
}

DarePlayers.propTypes = {
  darePlayers: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  players: state.players
});

export default connect(mapStateToProps, { darePlayers })(DarePlayers);

//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';
import PropTypes from 'prop-types';

//redux
import { connect } from 'react-redux'
import { addPlayer } from '../actions/controlsActions'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//components

class AddPlayer extends Component{
  render(){
    return(
      <button title="Add player" class="hamburger" onClick={this.props.addPlayer}>
        <FontAwesomeIcon icon="plus-circle" size="2x" />
      </button>
    );
  }
}

AddPlayer.propTypes = {
  addPlayer: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  players: state.players
});

export default connect(mapStateToProps, { addPlayer })(AddPlayer);

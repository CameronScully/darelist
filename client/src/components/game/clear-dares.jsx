//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import '../../index.css';
import PropTypes from 'prop-types';

//redux
import { connect } from 'react-redux'
import { resetPlayers } from '../../actions/controlsActions'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//components

class ClearDares extends Component{
  render(){
    return(
      <button title="Clear dares" onClick={this.props.resetPlayers}>
        <FontAwesomeIcon icon="sync-alt" size="lg"/>
      </button>
    );
  }
}

ClearDares.propTypes = {
  resetPlayers: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  players: state.players
});

export default connect(mapStateToProps, { resetPlayers })(ClearDares);

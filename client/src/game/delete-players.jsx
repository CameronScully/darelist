//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';
import PropTypes from 'prop-types';

//redux
import { connect } from 'react-redux'
import { toggle, deletePlayers } from '../actions/controlsActions'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//components

class DeletePlayers extends Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleClick(){
    this.props.toggle();
    if(this.props.controls.warningIsActive){
      this.props.deletePlayers();
    }
  }

  handleBlur(){
    if(this.props.controls.warningIsActive){
      this.props.toggle();
    }
  }

  render(){
    return(
      <button title="Clear Players" class="hamburger"
        onClick={this.handleClick}
        onBlur={this.handleBlur}>
        <FontAwesomeIcon icon="trash-alt" size="2x" />
      </button>
    );
  }
}

DeletePlayers.propTypes = {
  controls: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired,
  deletePlayers: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  controls: state.controls
});

export default connect(mapStateToProps, { toggle, deletePlayers })(DeletePlayers);

//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';
import PropTypes from 'prop-types';

//redux
import { connect } from 'react-redux'
import { toggle } from '../actions/controlsActions'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//components
import AddPlayer from "../game/add-player.jsx";
import DarePlayers from "../game/dare-players.jsx";
import ClearDares from "../game/clear-dares.jsx";
import DeletePlayers from "../game/delete-players.jsx";
import Settings from "../game/settings.jsx";

class Controls extends Component{
  render(){
    return(
      <div class="container">
        <div class="row">
          <div class="col">
            <AddPlayer />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <DarePlayers onClick={this.darePlayers} />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <ClearDares onClick={this.clearDares} />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <DeletePlayers />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <Settings onClick={() => this.go("settings")} />
          </div>
        </div>
        <div class="row">
          <div class="col">
            {this.props.controls.warningIsActive ?
              <div class="hamburger alert alert-warning">
                You are about to remove all players.
              </div> : ""
            }
          </div>
        </div>
      </div>
    );
  }
}

Controls.propTypes = {
  toggle: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  controls: state.controls
});

export default connect(mapStateToProps, { toggle })(Controls);

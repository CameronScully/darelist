//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import '../../index.css';

//redux
import { connect } from 'react-redux'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import AddPlayer from "../game/add-player.jsx";
import DarePlayers from "../game/dare-players.jsx";
import ClearDares from "../game/clear-dares.jsx";
import DeletePlayers from "../game/delete-players.jsx";
import Settings from "../game/settings.jsx";
import Return from "../game/return.jsx"

class Banner extends Component {
  render(){
    return(
      <div class="container-fluid">
        <div class="row" align="left">
          <div class="col">
            <h1>darelist</h1>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <hr />
          </div>
        </div>
        {this.props.navigation.page == "game" ?
          <div class="row nav">
            <div class="col">
              <AddPlayer />
            </div>
            <div class="col">
              <DarePlayers />
            </div>
            <div class="col">
              <ClearDares />
            </div>
            <div class="col">
              <DeletePlayers />
            </div>
            <div class="col">
              <Settings />
            </div>
          </div> :
          <div class="row nav">
            <div class="col">
              <Return />
            </div>
          </div>
        }
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

const mapStateToProps = (state) => ({
  controls: state.controls,
  navigation: state.navigation
});

export default connect(mapStateToProps, {})(Banner);

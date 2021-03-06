//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import '../../index.scss';
import PropTypes from 'prop-types';

//redux
import { connect } from 'react-redux';
import { getDares, getPenalties } from '../../actions/dareActions';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Banner from "../game/banner.jsx";
import SettingsPage from "./settings-page";
import GamePage from "./game-page.jsx";

class Darelist extends Component {
  componentDidMount(){
    this.props.getDares();
    this.props.getPenalties();
  }

  render(){
    const page = this.props.navigation.page;
    let display;
    switch(page){
      case "game":
        display = <GamePage />;
        break;
      case "settings":
        display = <SettingsPage />;
        break;
      default:
        display = <GamePage />;
    }

    return(
      <div class="container-fluid" align="center">
        <div class="row banner">
          <div class="col">
            <Banner />
          </div>
        </div>
        <div class="row">
          <div class="col">
            {this.props.dares.loading ?
              <div>loading</div> :
              display
            }
          </div>
        </div>
      </div>
    );
  }
}

Darelist.propTypes = {
  getDares: PropTypes.func.isRequired,
  getPenalties: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  navigation: state.navigation,
  dares: state.dares
});

export default connect(mapStateToProps, { getDares, getPenalties })(Darelist);

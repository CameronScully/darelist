//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';
import PropTypes from 'prop-types';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class SettingsPage extends Component{

  componentDidMount() {
    this.props.getDares();
  }

  render(){
    const { dares } = this.props.dare;
    return(
      <div>
        settings page
      </div>
    );
  }
}

export default SettingsPage;

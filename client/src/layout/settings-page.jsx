//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//components

class SettingsPage extends Component{
  render(){
    return(
      <div>
        {this.props.active ?
          <div>

          </div> : ""
        }
      </div>
    );
  }
}

export default SettingsPage;

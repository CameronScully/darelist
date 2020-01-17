//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';

//font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Settings extends Component {
  render(){
    return(
      <div>
        settings page
        <button title="Settings" class="hamburger" onClick={() => this.props.go("game")}>
          <FontAwesomeIcon icon="cog" size="2x" />
        </button>
      </div>
    );
  }
}

export default Settings;

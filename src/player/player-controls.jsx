//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class PlayerControls extends Component {
  render(){
    return(
      <div>
        <button>
          <FontAwesomeIcon icon="dice" onClick={this.props.darePlayer} />
        </button>
        <button>
          <FontAwesomeIcon icon="sync-alt" onClick={this.props.clearPlayerDares} />
        </button>
        <button>
          <FontAwesomeIcon icon="trash-alt" onClick={this.props.clearPlayer} />
        </button>
      </div>
    );
  }
}

export default PlayerControls;

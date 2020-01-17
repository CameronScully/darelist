//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Controls extends Component{
  render(){
    return(
      <div>
        {this.props.active ?
          <div class="container">
            {this.props.children.map((control, index) => (
              <div class="row" key={index}>
                <div class="col">
                  {control}
                </div>
              </div>
            ))}
            <div class="row">
              <div class="col">
                {this.props.warningIsActive ?
                  <div class="hamburger alert alert-warning">
                    You are about to remove all players.
                  </div> : ""
                }
              </div>
            </div>
          </div> :
            <button class="hamburger" onClick={this.props.return}>
                  <FontAwesomeIcon icon="arrow-left" size="2x"/>
            </button>
        }
      </div>
    );
  }
}

export default Controls;

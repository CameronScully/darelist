//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class Controls extends Component{
  render(){
    return(
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
      </div>
    );
  }
}

export default Controls;

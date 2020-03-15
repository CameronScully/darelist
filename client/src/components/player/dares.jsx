//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import '../../index.scss';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Dare from "./dare.jsx";

class Dares extends Component{
  render(){
    return(
      <div class="container-fluid">
        {this.props.dares.map((dare) => (
          <div class="row">
            <div class="col">
              <Dare key={dare._id} dareID={dare._id} playerID={this.props.playerID} dare={dare} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Dares;

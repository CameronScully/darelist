//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Dare from "./dare.jsx";

class Dares extends Component{
  render(){
    return(
      <div class="container-fluid">
        {this.props.dares.map((dare, index) => (
          <div class="row">
            <div class="col">
              <Dare key={dare.id} text={this.props.dares[index].text} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Dares;

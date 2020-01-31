//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import '../../index.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class Dare extends Component{
  render(){
    return(
      <div class="container" id="dareContainer">
        <div class="row">
          <div class="col">
            {this.props.text}
          </div>
        </div>
      </div>
    );
  }
}

export default Dare;

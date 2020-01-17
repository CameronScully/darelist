//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
class Username extends Component{
  constructor(props){
    super(props);

    this.state = {
      value: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
  }

  handleKeypress(event){
    if(event.key === "Enter"){
      event.target.blur();
      this.handleSubmit(event);
    }
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} onKeyDown={this.handleKeypress}>
        <input
          type="text"
          placeholder="Player"
          id="username"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Username;

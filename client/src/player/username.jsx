//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';
import PropTypes from 'prop-types';

//redux
import { connect } from 'react-redux'
import { updateUsername } from '../actions/playerActions'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
class Username extends Component{
  constructor(props){
    super(props);

    this.state = {
      value: this.props.value
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
    this.props.updateUsername(this.state.value, this.props.playerID);
  }

  handleKeypress(event){
    if(event.key === "Enter"){
      event.target.blur();
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
          onBlur={this.handleSubmit}
        />
      </form>
    );
  }
}

Username.propTypes = {
  updateUsername: PropTypes.func,
  value: PropTypes.string
}

const mapStateToProps = (state) => ({
  controls: state.controls
});

export default connect(mapStateToProps, { updateUsername })(Username);

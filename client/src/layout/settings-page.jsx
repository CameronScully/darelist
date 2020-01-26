//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';
import PropTypes from 'prop-types';

//redux
import { connect } from 'react-redux';
import { addDare, getDares } from '../actions/dareActions';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Controls from "./controls.jsx"
import Return from "../game/return.jsx"
import EditDares from "../game/editDares.jsx"

class SettingsPage extends Component{
  constructor(props){
    super(props);

    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
  }

  componentDidMount(){
    this.props.getDares();
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();

    const newDare = {
      text: this.state.value
    }

    this.props.addDare(newDare);
    
    this.setState({
      value: ''
    })
  }

  handleKeypress(event){
    if(event.key === "Enter"){
      event.target.blur();
    }
  }

  render(){
    return(
      <div class="container-fluid" align="center">
        <div class="row">
          <div class="col-2">
            <Controls>
              <Return />
              <div></div>
            </Controls>
          </div>
          <div class="col-8">
            <form onSubmit={this.handleSubmit}>
              <div class="input-group input-group-lg" id="dareForm">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Dare text"
                  aria-label="Dare text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="submit">
                    Add dare
                  </button>
                </div>
              </div>
            </form>
            <EditDares />
          </div>
        </div>
      </div>
    );
  }
}

SettingsPage.propTypes = {
  addDare: PropTypes.func.isRequired,
  getDares: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  dares: state.dares
});

export default connect(mapStateToProps, { addDare, getDares })(SettingsPage);

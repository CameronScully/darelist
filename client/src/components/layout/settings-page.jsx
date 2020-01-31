//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import '../../index.css';
import PropTypes from 'prop-types';

//redux
import { connect } from 'react-redux';
import { addDare, getDares } from '../../actions/dareActions';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import EditDares from "../game/editDares.jsx"

//functions
import translate from "../../functions/textTranslator.js";

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

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();

    if(this.state.value === "admin"){
      let promptText = prompt("document translate: ");
      var newDares = translate(promptText);
      for(var i = 0; i<newDares.length; i++){
        this.props.addDare(newDares[i]);
      }
    } else {
      const newDare = {
        text: this.state.value
      }

      this.props.addDare(newDare);
    }
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
      <div class="container settings" align="center">
        <div class="row">
          <div class="col">
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
  addDare: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  dares: state.dares
});

export default connect(mapStateToProps, { addDare })(SettingsPage);

//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import '../../index.scss';
import PropTypes from 'prop-types';

//redux
import { connect } from 'react-redux';
import { addDare, filterDares, deleteDare } from '../../actions/dareActions';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import EditDares from "../game/edit-dares.jsx"

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

  componentDidMount(){
    this.props.filterDares(this.state.value);
  }

  handleChange(event){
    this.setState({value: event.target.value});
    this.props.filterDares(this.state.value);
  }

  handleSubmit(event){
    event.preventDefault();

    if(this.state.value === "admin: translate"){
      let promptText = prompt("document translate: ");
      var newDares = translate(promptText);
      for(var i = 0; i<newDares.length; i++){
        this.props.addDare(newDares[i]);
      }
    } else if(this.state.value === "admin: reset"){
      for(var i = 0; i<this.props.dares.dares.length; i++){
        this.props.deleteDare(this.props.dares.dares[i]._id);
      }
    } else {
      const newDare = {
        text: this.state.value,
        pointValue: 1,
        challengable: false,
        nsfw: false
      }

      this.props.addDare(newDare);

    }
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
  addDare: PropTypes.func.isRequired,
  filterDares: PropTypes.func.isRequired,
  deleteDare: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  dares: state.dares
});

export default connect(mapStateToProps, { addDare, filterDares, deleteDare })(SettingsPage);

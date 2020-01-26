//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';
import PropTypes from 'prop-types';

//redux
import { connect } from 'react-redux'
import { toggle } from '../actions/controlsActions'
import { go } from '../actions/navigationActions';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Controls extends Component{
  render(){
    return(
      <div class="container">
        {this.props.children.map((control) => (
          <div class="row">
            <div class="col">
              {control}
            </div>
          </div>
        ))}
        <div class="row">
          <div class="col">
            {this.props.controls.warningIsActive ?
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

Controls.propTypes = {
  toggle: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  controls: state.controls
});

export default connect(mapStateToProps, { toggle })(Controls);

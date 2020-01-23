//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';
import PropTypes from 'prop-types';

//redux
import { connect } from 'react-redux'
import { getDares } from '../actions/dareActions'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class SettingsPage extends Component{

  componentDidMount() {
    this.props.getDares();
  }

  render(){
    const { dares } = this.props.dare;
    return(
      <div>
        {dares.map((dare) => (
          <div>
            {dare.text}
          </div>
        ))}
      </div>
    );
  }
}

SettingsPage.propTypes = {
  getDares: PropTypes.func.isRequired,
  dare: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  dare: state.dare
});

export default connect(mapStateToProps, { getDares })(SettingsPage);

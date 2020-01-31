//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import '../../index.css';
import PropTypes from 'prop-types';

//redux
import { connect } from 'react-redux';
import { go } from '../../actions/navigationActions';

//font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Settings extends Component {
  render(){
    return(
      <div>
        <button title="Settings"
          onClick={() => this.props.go("settings")}>
          <FontAwesomeIcon icon="cog" size="lg" />
        </button>
      </div>
    );
  }
}

Settings.propTypes = {
  go: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  navigation: state.controls
});

export default connect(mapStateToProps, { go })(Settings);

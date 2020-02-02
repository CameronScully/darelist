//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import '../../index.scss';
import PropTypes from 'prop-types';

//redux
import { connect } from 'react-redux';
import { go } from '../../actions/navigationActions';

//font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Return extends Component {
  render(){
    return(
      <div>
        <button title="Return"
          onClick={() => this.props.go("game")}>
          <FontAwesomeIcon icon="arrow-left" size="lg" />
        </button>
      </div>
    );
  }
}

Return.propTypes = {
  go: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  navigation: state.controls
});

export default connect(mapStateToProps, { go })(Return);

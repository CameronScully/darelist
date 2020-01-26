//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './../index.css';
import PropTypes from 'prop-types';

//redux
import { connect } from 'react-redux'
import { deleteDare } from '../actions/dareActions'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class EditDares extends Component{
  render(){
    return(
      <div>
        {this.props.dares.loading ?
          <div>loading</div> :
          <div>
            {this.props.dares.dares.map(dare => (
              <div class="container shadow panel" key={dare._id}>
                <div class="row">
                  <div class="col-8 offset-2">
                    <p>
                      {dare.text}
                    </p>
                  </div>
                  <div class="col">
                  <button>
                    <FontAwesomeIcon icon="edit"/>
                  </button>
                  <button onClick={() => this.props.deleteDare(dare._id)}>
                    <FontAwesomeIcon icon="trash-alt"/>
                  </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    );
  }
}

EditDares.propTypes = {
  deleteDare: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  dares: state.dares
});

export default connect(mapStateToProps, { deleteDare })(EditDares);

//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import '../../index.scss';
import PropTypes from 'prop-types';

//redux
import { connect } from 'react-redux'
import { deleteDare, editDare, filterDares } from '../../actions/dareActions'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//componenets
import EditDareModal from './edit-dare-modal';

class EditDares extends Component{
  render(){
    return(
      <div>
        {this.props.dares.loading ?
          <div>loading</div> :
          <div>
            {this.props.dares.modal ? 
              <EditDareModal
              toggle={this.props.editDare} 
              isOpen={this.props.dares.modal}
              dare={this.props.dares.editDare}
              /> :
              <div></div>
            }
            
            {this.props.dares.filteredDares.map(dare => (
                <div class="row shadow panel" key={dare._id}>
                  <div class="col-10 offset-1">
                    <p>
                      {dare.text}
                    </p>
                  </div>
                  <div class="col">
                    <button onClick={() => this.props.editDare(dare)}>
                      <FontAwesomeIcon icon="edit"/>
                    </button>
                    <button onClick={() => this.props.deleteDare(dare._id)}>
                      <FontAwesomeIcon icon="trash-alt"/>
                    </button>
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
  deleteDare: PropTypes.func.isRequired,
  editDare: PropTypes.func.isRequired,
  filterDares: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  dares: state.dares
});

export default connect(mapStateToProps, { deleteDare, editDare, filterDares })(EditDares);

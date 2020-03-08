//react libraries
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import '../../index.scss';
import PropTypes from 'prop-types';

//redux
import { connect } from 'react-redux'
import { penalisePlayer } from '../../actions/playerActions'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Dare extends Component{
  constructor(props){
    super(props);
    this.state = {
      failed: false
    };
    this.fail = this.fail.bind(this);
  }

  fail(){
    this.setState({failed: !this.state.failed});

    let penaltyIndex = Math.floor(Math.random()*this.props.dares.penalties.length);

    this.props.penalisePlayer(this.props.playerID, this.props.key, this.props.dares.penalties[penaltyIndex]);
  }

  render(){
    return(
      <button onClick={this.fail}>
        <div class="container" id="dareContainer">
          <div class="row">
            <div class="col">
              {this.state.failed ? 
                <div>
                  <strike><FontAwesomeIcon icon="dice-one" /> {this.props.text}</strike> 
                  {this.props.penalty}
                </div> :
                <div><FontAwesomeIcon icon="dice-one" /> {this.props.text}</div>
              }
            </div>
          </div>
        </div>
      </button>
      
    );
  }
}

Dare.propTypes = {
  penalisePlayer: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  dares: state.dares
});

export default connect(mapStateToProps, { penalisePlayer })(Dare);

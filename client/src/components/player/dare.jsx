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

    this.fail = this.fail.bind(this);
  }

  fail(){
    let penaltyIndex = Math.floor(Math.random()*this.props.dares.penalties.length);

    this.props.penalisePlayer(this.props.playerID, this.props.dareID, this.props.dares.penalties[penaltyIndex]);
  }

  render(){
    let pointIcon;
    switch(this.props.dare.pointValue){
      case 2:
        pointIcon = <FontAwesomeIcon icon="dice-two" />;
        break;
      case 3:
        pointIcon = <FontAwesomeIcon icon="dice-three" />;
        break;
      case 4:
        pointIcon = <FontAwesomeIcon icon="dice-four" />;
        break;
      case 5:
        pointIcon = <FontAwesomeIcon icon="dice-five" />;
        break;
      default:
        pointIcon = <FontAwesomeIcon icon="dice-one" />;
        break;
    };

    return(
      <button onClick={this.fail}>
        <div class="container-fluid" id="dareContainer">
          <div class="row">
            
            <div class="col-1">
              {pointIcon}
            </div>

            <div class="col-10">
              {this.props.dare.failed ? 
                  <div>
                    <strike>{this.props.dare.text}</strike> 
                    <div class="penalty">{this.props.dare.penalty.text}</div>
                  </div> : <div>{this.props.dare.text}</div>
              }
            </div>

            <div class="col-1">
              {this.props.dare.challengable ? <i>Challengable</i> : ""}
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

//react libraries
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//bootstrap stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';

//awesome font icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

class ThumbsUp extends React.Component{
  render(){
    return(
      <FontAwesomeIcon icon={faThumbsUp} />
    );
  }
}

class ThumbsDown extends React.Component{
  render(){
    return(
      <FontAwesomeIcon icon={faThumbsDown} />
    );
  }
}

class Trash extends React.Component {
  render(){
    return(
      <FontAwesomeIcon icon={faTrashAlt} />
    );
  }
}

class Dare extends React.Component{
  render(){
    return(
      <div class="container" id="dareContainer">
        <div class="row align-items-center">
          <div class="col" align="center">
            <Trash />
          </div>
          <div class="col" align="center" id="dareText">
            dare text placeholder/4
          </div>
          <div class="col" align="center">
            <div class="container">
              <div class="row">
                <div class="col">
                  <ThumbsUp />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <ThumbsDown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Slider extends React.Component {
  render(){
    return(
      <input type="range" min="0" max="5"/>
    );
  }
}

class Player extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: "Player name"};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
  }

  handleKeypress(event){
    if(event.key == "Enter"){
      event.target.blur();
      this.handleSubmit(event);
    }
  }

  render(){
    return(
      <div class="container shadow" id="player">
        <div class="row">
          <div class="col" align="center">
            <form onSubmit={this.handleSubmit} onKeyDown={this.handleKeypress}>
              <input type="text" id="username" value={this.state.value} onChange={this.handleChange}/>
            </form>
          </div>
        </div>
        <div class="row">
          <div class="col" align="center">
            <Slider />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <Dare />
          </div>
        </div>
      </div>
    );
  }
}

//class
class AddPlayer extends React.Component {
  render(){
    return(
      <div>
        <button onClick={this.props.onClick}>
          <FontAwesomeIcon icon={faPlusCircle} size="2x" />
        </button>
      </div>
    );
  }
}

class DareList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      players: [],
    }

    this.addPlayer = this.addPlayer.bind(this);
  }

  addPlayer(){
    console.log("ping");

    var players = this.state.players.concat({
      name: "Player Name",
      risk: 0,
      dares: []
    });

    this.setState({
      players: players
    });
  }

  render() {
    return(
      <div class="container-fluid" align="center">
        <div class="row" id="banner">
          <div class="col">
            insert dropdown here
          </div>
          <div class="col">
            <h1>darelist</h1>
          </div>
          <div class="col"></div>
        </div>
        <div class="row">
          <div class="col-1 offset-md-2">
            <AddPlayer onClick={this.addPlayer} />
          </div>
        </div>
        {this.state.players.map((player) => (
          <div class="row">
            <div class="col" key={player.name}>
              <Player
                name={player.name}
                risk={player.risk}
                dares={player.dares}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

ReactDOM.render(
  <DareList />,
  document.getElementById('root')
);

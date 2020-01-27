import {
  ADD_PLAYER,
  GET_PLAYERS,
  DELETE_PLAYERS,
  DARE_PLAYERS,
  RESET_PLAYERS,
  UPDATE_USERNAME,
  DARE_PLAYER,
  RESET_PLAYER,
  DELETE_PLAYER
 } from '../actions/types.js';

const initialState = {
  players: [{
    id: 0,
    name: "",
    multiplier: 0,
    dares: []
  }],
  playerCount: 1
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_PLAYERS:
      return {
        ...state
      };
    case DELETE_PLAYERS:
      return {
        ...state,
        players: []
      };
    case ADD_PLAYER:
      return {
        ...state,
        players: [...state.players, {
          id: state.playerCount,
          name: "",
          multiplier: 0,
          dares: []
        }],
        playerCount: state.playerCount + 1
      };
    case DARE_PLAYERS:
      return {
        ...state,
        players: state.players.map((player) => {
          const newPlayer = {
            id: player.id,
            name: player.name,
            multiplier: player.multiplier,
            dares: player.dares.concat({text: "a dare for everyone"})
          }
          return newPlayer;
        })
      };
    case RESET_PLAYERS:
      return {
        ...state,
        players: state.players.map((player) => {
          const newPlayer = {
            id: player.id,
            name: player.name,
            multiplier: player.multiplier,
            dares: []
          }
          return newPlayer;
        })
      };
    case UPDATE_USERNAME:
      return {
        ...state,
        players: state.players.map((player) => {
          if(player.id == action.payload.id){
            const newPlayer = {
              id: player.id,
              name: action.payload.value,
              multiplier: player.multiplier,
              dares: player.dares
            }
            return newPlayer;
          } else {
            return player;
          }
        })
      };
    case DARE_PLAYER:
      return {
        ...state,
        players: state.players.map((player) => {
          if(player.id == action.payload){
            const newPlayer = {
              id: player.id,
              name: player.name,
              multiplier: player.multiplier,
              dares: [...player.dares, {text: "A dare for " + player.name}]
            }
            return newPlayer;
          } else {
            return player;
          }
        })
      };
    case RESET_PLAYER:
      return {
        ...state,
        players: state.players.map((player) => {
          if(player.id == action.payload){
            const newPlayer = {
              id: player.id,
              name: player.name,
              multiplier: player.multiplier,
              dares: []
            }
            return newPlayer;
          } else {
            return player;
          }
        })
      };
    case DELETE_PLAYER:
      return {
        ...state,
        players: state.players.filter(player => player.id != action.payload)
      };
    default:
      return state;
  }
}
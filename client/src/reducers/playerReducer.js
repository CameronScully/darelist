import {
  ADD_PLAYER,
  GET_PLAYERS,
  DELETE_PLAYERS,
  DARE_PLAYERS,
  RESET_PLAYERS,
  UPDATE_USERNAME,
  DARE_PLAYER,
  RESET_PLAYER,
  DELETE_PLAYER,
  PENALISE_PLAYER
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
          dares: [],
          penalties: []
        }],
        playerCount: state.playerCount + 1
      };
    case RESET_PLAYERS:
      return {
        ...state,
        players: state.players.map((player) => {
          const newPlayer = {
            id: player.id,
            name: player.name,
            multiplier: player.multiplier,
            dares: [],
            penalties: []
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
              dares: player.dares,
              penalties: player.penalties
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
          if(player.id == action.payload.id){
            const newPlayer = {
              id: player.id,
              name: player.name,
              multiplier: player.multiplier,
              dares: [...player.dares, action.payload.dare]
            }
            return newPlayer;
          } else {
            return player;
          }
        })
      };
    case PENALISE_PLAYER:
      return {
        ...state,
        players: state.players.map((player) => {
          if(player.id == action.payload.playerID){
            const newPlayer = {
              id: player.id,
              name: player.name,
              multiplier: player.multiplier,
              dares: player.dares.map((dare) => {
                console.log(dare._id + "==" + action.payload.dareID);
                if(dare._id == action.payload.dareID){
                  const newDare = {
                    _id: dare._id,
                    text: dare.text,
                    pointValue: dare.pointValue,
                    challengable: dare.challengable,
                    nsfw: dare.nsfw,
                    failed: !dare.failed,
                    penalty: action.payload.penalty
                  };
                  return newDare;
                } else {
                  return dare;
                }
              })
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
              dares: [],
              penalties: []
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

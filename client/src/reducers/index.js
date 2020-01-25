import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
import controlsReducer from './controlsReducer';

export default combineReducers({
  player: playerReducer,
  controls: controlsReducer
});

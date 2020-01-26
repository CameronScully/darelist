import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
import controlsReducer from './controlsReducer';
import navigationReducer from './navigationReducer';
import daresReducer from './daresReducer';

export default combineReducers({
  player: playerReducer,
  controls: controlsReducer,
  navigation: navigationReducer,
  dares: daresReducer
});

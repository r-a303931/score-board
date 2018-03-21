import { combineReducers } from 'redux';
import players from './players';
import games from './games';
export default combineReducers({
    players: players,
    games: games
});

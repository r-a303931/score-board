import { PlayerActions } from '../actions/player';
export default (function (state, action) {
    if (state === void 0) { state = []; }
    var newState = Object.assign([], state);
    switch (action.type) {
        case PlayerActions.ADD:
            var newPlayer = Object.assign({}, action);
            delete newPlayer.type;
            newState.push(newPlayer);
            break;
        case PlayerActions.REMOVE:
            for (var i in newState) {
                if (newState.hasOwnProperty(i) && newState[i].id === action.id) {
                    newState.splice(parseInt(i, 10), 1);
                    break;
                }
            }
            break;
        case PlayerActions.EDIT:
            for (var i in newState) {
                if (newState.hasOwnProperty(i) && newState[i].id === action.id) {
                    var newPlayer_1 = Object.assign({}, action);
                    delete newPlayer_1.type;
                    newState[i] = newPlayer_1;
                    break;
                }
            }
            break;
        case PlayerActions.SET:
            newState = action.players;
            break;
    }
    return newState;
});

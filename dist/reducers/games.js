import { GameActions } from '../actions/games';
export default (function (state, action) {
    if (state === void 0) { state = []; }
    var newstate = Object.assign({}, state);
    switch (action.type) {
        case GameActions.ADD:
            newstate.push({
                name: action.name,
                id: action.id,
                gameType: action.gameType,
                Players: [],
                Records: []
            });
            break;
        case GameActions.EDIT:
            for (var i in newstate) {
                if (newstate[i].id === action.id) {
                    newstate[i].name = action.name;
                    newstate[i].gameType = action.gameType;
                    break;
                }
            }
            break;
        case GameActions.REMOVE:
            for (var i in newstate) {
                if (newstate[i].id === action.id) {
                    newstate.splice(parseInt(i, 10), 1);
                    break;
                }
            }
            break;
        case GameActions.SET:
            newstate = action.games;
            break;
    }
    return newstate;
});

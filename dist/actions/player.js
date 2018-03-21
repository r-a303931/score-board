export var PlayerActions;
(function (PlayerActions) {
    PlayerActions[PlayerActions["ADD"] = 0] = "ADD";
    PlayerActions[PlayerActions["REMOVE"] = 1] = "REMOVE";
    PlayerActions[PlayerActions["EDIT"] = 2] = "EDIT";
    PlayerActions[PlayerActions["SET"] = 3] = "SET";
})(PlayerActions || (PlayerActions = {}));
var id = 0;
export var addPlayer = function (name, color) {
    return {
        type: PlayerActions.ADD,
        name: name,
        color: color,
        id: id++
    };
};
export var removePlayer = function (id) {
    return {
        type: PlayerActions.REMOVE,
        id: id,
        color: '',
        name: ''
    };
};
export var editPlayer = function (id, name, color) {
    return {
        type: PlayerActions.REMOVE,
        id: id,
        name: name,
        color: ''
    };
};
export var setPlayers = function (players) {
    return {
        type: PlayerActions.SET,
        players: players
    };
};

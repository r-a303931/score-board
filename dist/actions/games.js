export var GameActions;
(function (GameActions) {
    GameActions[GameActions["ADD"] = 0] = "ADD";
    GameActions[GameActions["SET"] = 1] = "SET";
    GameActions[GameActions["REMOVE"] = 2] = "REMOVE";
    GameActions[GameActions["EDIT"] = 3] = "EDIT";
})(GameActions || (GameActions = {}));
var id = 0;
export var addGame = function (name, type) {
    return {
        type: GameActions.ADD,
        name: name,
        gameType: type,
        id: id++
    };
};
export var removeGame = function (id) {
    return {
        type: GameActions.REMOVE,
        id: id
    };
};
export var editGame = function (id, name, type) {
    return {
        type: GameActions.EDIT,
        name: name,
        id: id,
        gameType: type
    };
};
export var setGames = function (games) {
    return {
        type: GameActions.SET,
        games: games
    };
};

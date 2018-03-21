var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { NativeRouter as Router, Link } from 'react-router-native';
import { Route } from 'react-router';
import reducers from './reducers/index';
import Menu from './views/Menu';
import GameView from './views/GameView';
import { setPlayers } from './actions/player';
import { setGames } from './actions/games';
var store = createStore(reducers, {
    games: []
});
AsyncStorage.multiGet([
    '@ARiouxScoreBoard.Players',
    '@ARiouxScoreBoard.Games'
]).then(function (results) {
    var players = JSON.parse(results[0][1]);
    if (results[0][1]) {
        store.dispatch(setPlayers(players));
    }
    var gamestore = JSON.parse(results[1][1]);
    if (results[1][1]) {
        var games = [];
        for (var _i = 0, gamestore_1 = gamestore; _i < gamestore_1.length; _i++) {
            var i = gamestore_1[_i];
            games.push({
                id: i.id,
                name: i.name,
                Records: i.Records,
                Players: i.players.map(function (id) {
                    var player = null;
                    for (var _i = 0, players_1 = players; _i < players_1.length; _i++) {
                        var j = players_1[_i];
                        if (j.id === id) {
                            player = j;
                            break;
                        }
                    }
                    return player;
                }),
                gameType: i.gameType
            });
        }
        store.dispatch(setGames(games));
    }
}).catch();
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(Router, null,
            React.createElement(View, { style: styles.container },
                React.createElement(View, { style: styles.menu },
                    React.createElement(Link, { to: "/", style: styles.link },
                        React.createElement(Text, null, "Home")),
                    React.createElement(Link, { to: "/addplayer", style: styles.link },
                        React.createElement(Text, null, "Add a player"))),
                React.createElement(Route, { exact: true, path: "/", component: Menu }),
                React.createElement(Route, { path: "/viewgame", component: GameView }))));
    };
    return App;
}(React.Component));
export { App };
export var StatefullApp = connect()(App);
var MainLoader = /** @class */ (function (_super) {
    __extends(MainLoader, _super);
    function MainLoader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainLoader.prototype.render = function () {
        return (React.createElement(Provider, { store: store },
            React.createElement(StatefullApp, null)));
    };
    return MainLoader;
}(React.Component));
export default MainLoader;
var styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    menu: {
        marginTop: 20,
        flexDirection: 'row'
    },
    link: {
        padding: 20
    }
});

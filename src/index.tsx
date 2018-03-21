import * as React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

import { NativeRouter as Router, Link } from 'react-router-native';
import { Route } from 'react-router';

import reducers from './reducers/index';

import Menu from './views/Menu';
import GameView from './views/GameView';

import { Player, GameStore, Game } from './interfaces';

import { setPlayers } from './actions/player';
import { setGames } from './actions/games';

const store = createStore(
	reducers,
	{
		games: []
	}
);

AsyncStorage.multiGet([
	'@ARiouxScoreBoard.Players',
	'@ARiouxScoreBoard.Games'
]).then(results => {
	let players: Player[] = JSON.parse(results[0][1]);

	if (results[0][1]) {
		store.dispatch(setPlayers(players));
	}

	let gamestore: GameStore[] = JSON.parse(results[1][1]);
	if (results[1][1]) {
		let games: Game[] = [];
	
		for (let i of gamestore) {
			games.push({
				id: i.id,
				name: i.name,
				Records: i.Records,
				Players: i.players.map(id => {
					let player: Player | null = null;
					for (let j of players) {
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

export class App extends React.Component<{}, {}> {
	render() {
		return (
			<Router>
				<View style={styles.container}>
					<View style={styles.menu}>
						<Link to="/" style={styles.link}>
							<Text>
								Home
							</Text>
						</Link>
						<Link to="/addplayer" style={styles.link}>
							<Text>
								Add a player
							</Text>
						</Link>
					</View>
					<Route exact path="/" component={Menu} />
					<Route path="/viewgame" component={GameView} />
				</View>
			</Router>
		);
	}
}

export const StatefullApp = connect()(App);

export default class MainLoader extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<StatefullApp />
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
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
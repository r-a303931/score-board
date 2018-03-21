import * as React from 'react';
import { connect } from 'react-redux';

import { View, Text } from 'react-native';

import { Player, Game } from '../interfaces';

export interface GameViewProps {
	match: {
		params: {
			[key: string]: string
		},
		isExact: boolean,
		path: string,
		url: string	
	};
	games: Game[];
}

export class GameView extends React.Component<GameViewProps, {}> {
	render () {
		return (
			<View />
		);
	}
}

export default connect(
	(state: {games: Game[]}) => {
		return {
			games: state.games
		}
	}
)(GameView);
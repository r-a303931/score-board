import * as React from 'react';
import { connect } from 'react-redux';

import { View, TextInput } from 'react-native';

import { addGame } from '../actions/games';

export class GameAdd extends React.Component<{
	addGame: (name: string, type: string) => void;
}, {
	name: string
}> {
	public state = {
		name: ''
	};

	render () {
		return (
			<View>
				<TextInput
					style={{}}
					onChangeText={name => this.setState({name})}
					value={this.state.name}
				/>
			</View>
		);
	}
}

export default connect(
	null,
	dispatch => {
		return {
			addGame: (name: string, type: string) => {
				dispatch(addGame(name, type));
			}
		};
	}
)(GameAdd);
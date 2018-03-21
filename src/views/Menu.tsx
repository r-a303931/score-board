import * as React from 'react';
import { connect } from 'react-redux';

import { View, Text } from 'react-native';

// import { Link } from 'react-router-native';

export class Menu extends React.Component<{}, {
	loading: boolean
}> {
	constructor (props: {}) {
		super(props);
	}

	componentDidMount () {

	}

	render () {
		return (
			<View>
				<View>
					{/* <Link to="/addplayer">Add a player</Link> */}
				</View>
				<Text>
					Stuff
				</Text>
			</View>
		);
	}
}

export default connect()(Menu);
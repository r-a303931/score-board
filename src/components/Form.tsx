import * as React from 'react';
import { View } from 'react-native';

export default class Form<T, P> extends React.Component<T, {}> {
	constructor(props: T) {
		super(props);
	}

	render () {
		return (
			<View />
		);
	}
}
import { PlayerActions } from '../actions/player';
import { Player } from '../interfaces';

export default (
	state: {
		id: number,
		name: string,
		color: string
	}[] = [],
	action: {
		type: PlayerActions,

		name?: string,
		color?: string,
		id?: number,

		players?: Player[]
	}
): Player[] => {
	let newState: Player[] = Object.assign([], state);
	switch (action.type) {
		case PlayerActions.ADD :
			let newPlayer = Object.assign({}, action);
			delete newPlayer.type;
			newState.push(newPlayer as Player);
		break;

		case PlayerActions.REMOVE :
			for (let i in newState) {
				if (newState.hasOwnProperty(i) && newState[i].id === action.id) {
					newState.splice(parseInt(i, 10), 1);
					break;
				}
			}
		break;

		case PlayerActions.EDIT :
			for (let i in newState) {
				if (newState.hasOwnProperty(i) && newState[i].id === action.id) {
					let newPlayer = Object.assign({}, action);
					delete newPlayer.type;
					newState[i] = newPlayer as Player;
					break;
				}
			}
		break;

		case PlayerActions.SET:
			newState = action.players as Player[];
		break;
	}
	return newState;
};
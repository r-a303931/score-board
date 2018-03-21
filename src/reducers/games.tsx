import { GameActions } from '../actions/games';
import { Game } from '../interfaces';

export default (
	state: Game[] = [],
	action: {
		type: GameActions,
		
		name?: string,
		id?: number,
		gameType?: string,

		games?: Game[]
	}
) => {
	let newstate = Object.assign({}, state);

	switch (action.type) {
		case GameActions.ADD :
			newstate.push({
				name: action.name as string,
				id: action.id as number,
				gameType: action.gameType as string,
				Players: [],
				Records: []
			});
		break;

		case GameActions.EDIT :
			for (let i in newstate) {
				if (newstate[i].id === (action.id as number)) {
					newstate[i].name = action.name as string;
					newstate[i].gameType = action.gameType as string;
					break;
				}
			}
		break;

		case GameActions.REMOVE :
			for (let i in newstate) {
				if (newstate[i].id === (action.id as number)) {
					newstate.splice(parseInt(i, 10), 1);
					break;
				}
			}
		break;

		case GameActions.SET :
			newstate = action.games as Game[];
		break;
	}

	return newstate;
}
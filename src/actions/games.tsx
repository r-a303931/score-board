import { Game } from '../interfaces';

export enum GameActions {
	ADD,
	SET,
	REMOVE,
	EDIT
}

let id: number = 0;

export const addGame = (name: string, type: string) => {
	return {
		type: GameActions.ADD,
		name,
		gameType: type,
		id: id++
	};
};

export const removeGame = (id: number) => {
	return {
		type: GameActions.REMOVE,
		id
	}
};

export const editGame = (id: number, name: string, type: string) => {
	return {
		type: GameActions.EDIT,
		name,
		id,
		gameType: type
	}
}

export const setGames = (games: Game[]) => {
	return {
		type: GameActions.SET,
		games: games
	};
};
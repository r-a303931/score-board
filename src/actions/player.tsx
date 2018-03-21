import { Player } from "interfaces";

export enum PlayerActions {
	ADD,
	REMOVE,
	EDIT,
	SET
}

let id: number = 0;

export const addPlayer = (name: string, color: string) => {
	return {
		type: PlayerActions.ADD,
		name: name,
		color: color,
		id: id++
	};
};

export const removePlayer = (id: number) => {
	return {
		type: PlayerActions.REMOVE,
		id: id,
		color: '',
		name: ''
	};
}

export const editPlayer = (id: number, name: string, color: string) => {
	return {
		type: PlayerActions.REMOVE,
		id: id,
		name: name,
		color: ''
	};
}

export const setPlayers = (players: Player[]) => {
	return {
		type: PlayerActions.SET,
		players: players
	}
}
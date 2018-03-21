export interface Player {
	name: string;
	id: number;
	color: string;
}

export interface GameStore {
	name: string;
	id: number;
	gameType: string;
	players: number[];
	Records: Record[];
}

export interface RecordItem {
	playerId: number;
	points: number;
}

export interface Record {
	round: number;
	items: RecordItem[];
}

export interface Game {
	name: string;
	id: number;
	gameType: string;
	Players: (Player | null)[];
	Records: Record[];
}
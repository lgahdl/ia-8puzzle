import { Game } from "./types";

export default class Node {
	name: string;
	children: Node[];
	depth: number;
	cost: number;
	game: Game;
	isFinal: boolean;

	constructor(game: Game, name: string) {
		this.game = game;
		if (this.game[1] === 1 && this.game[2] === 2 && this.game[3] === 3
			&& this.game[4] === 4 && this.game[5] === 5 && this.game[6] === 6 
			&& this.game[7] === 7 && this.game[8] === 8 && this.game[9] === 0) {
			this.isFinal = true;
		}
		this.name = name;
		this.children = [];
		this.depth = 0;
		this.cost = 0;
	}
}
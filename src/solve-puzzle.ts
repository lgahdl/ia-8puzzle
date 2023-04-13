import { Game } from "./types";
import uniformCostSearch from "./uniform-cost-search";

export default (algorithm: number, game: Game) => {
	switch (algorithm) {
		case 1:
			uniformCostSearch(game);
			break;
		case 2:
			console.log("A* with Misplaced Tiles");
			break;
		case 3:
			console.log("A* with Manhattan Distance");
			break;
	}
}

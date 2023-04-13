import { Game } from "./types";
import Path from "./path";
import Node from "./node";

const uniformCostSearch = (game: Game) => {
	const root = new Node(game, "root");
	const frontier: Node[] = [root];
	const explored: Node[] = [];
	const paths: Path[] = [];

}

export default uniformCostSearch
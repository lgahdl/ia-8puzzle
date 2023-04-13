export default class Path {
	constructor(nodes: Node[] = [], cost: number = 0) {
		this.nodes = nodes;
		this.cost = 0;
	}
	nodes: Node[];
	cost: number;
}
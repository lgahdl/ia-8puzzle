import promptInit from 'prompt-sync'
import { Game } from "./types";
import solvePuzzle from "./solve-puzzle";

const prompt = promptInit();

const main = async () => {
	console.log("Hello, welcome to 8 Puzzle Solver, select a value from 0 to 8 for each position 0 is the empty one");
	console.log("The blocks position are: ");
	console.log("[#1] [#2] [#3]");
	console.log("[#4] [#5] [#6]");
	console.log("[#7] [#8] [#9]");
	console.log("Now type what value you choose for each position: ");
	let availableValues: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	const initialGame: Game = {
		'1': undefined,
		'2': undefined,
		'3': undefined,
		'4': undefined,
		'5': undefined,
		'6': undefined,
		'7': undefined,
		'8': undefined,
		'9': undefined,
	}
	for (let i = 1; i <= 9; i++) {
		const iString: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' = `${ i }` as '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
		let invalidValue = true;
		while (invalidValue) {
			const value = prompt(`Position #${ i }: `);
			if (availableValues.includes(parseInt(value))) {
				availableValues = availableValues.filter((availableValue) => availableValue !== parseInt(value));
				initialGame[iString] = parseInt(value);
				invalidValue = false;
			} else {
				console.log("Invalid value, try again");
			}
		}
	}
	console.log("Your game is: ");
	console.log(`[${ initialGame[1] }] [${ initialGame[2] }] [${ initialGame[3] }]`);
	console.log(`[${ initialGame[4] }] [${ initialGame[5] }] [${ initialGame[6] }]`);
	console.log(`[${ initialGame[7] }] [${ initialGame[8] }] [${ initialGame[9] }]`);
	console.log("The target game is: ");
	console.log("[1] [2] [3]");
	console.log("[4] [5] [6]");
	console.log("[7] [8] [0]");
	console.log("Now choose an algorithm to solve the game: ");
	const algorithms: Array<string> = ["Uniform Cost Search", "A* with Misplaced Tiles", "A* with Manhattan Distance"];
	console.log(`1. ${ algorithms[0] }`);
	console.log(`2. ${ algorithms[1] }`);
	console.log(`3. ${ algorithms[2] }`);
	const availableAlgorithms: Array<number> = [1, 2, 3];
	let invalidValue = true;
	let algorithm: number;
	while (invalidValue) {
		const value = prompt(`Algorithm: `);
		if (availableAlgorithms.includes(parseInt(value))) {
			algorithm = parseInt(value);
			invalidValue = false;
		} else {
			console.log("Invalid value, try again");
		}
	}
	console.log("You chose the algorithm: ", algorithms[algorithm - 1]);
	solvePuzzle(algorithm, initialGame);
}

main();
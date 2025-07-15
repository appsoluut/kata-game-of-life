type CoordinateKey = string;

/**
 * Game of Life implementation
 * 
 * This class represents the Game of Life, a cellular automaton devised by the mathematician John
 * Conway. The game consists of a grid of cells that can be either alive or dead, and evolves
 * through generations based on a set of rules.
 */
export class GameOfLife {
  private seed: string;
  private liveCells: Set<CoordinateKey> = new Set();

  constructor(seed: string = "") {
    // Initialize the game with a seed string, which can represent the initial state of the world.
    // For example, "x" could represent a single live cell.
    this.seed = seed;
    [...this.seed].forEach((char, index) => {
      if (char === 'x') {
        this.liveCells.add(this.toKey(index, 0));
      }
    })

    this.logLiveCells();
  }

  evolve() {
    const tickLiveCells = new Set<CoordinateKey>();

    this.liveCells.forEach(cell => {
      const [x, y] = this.fromKey(cell);
      const neighbours = [
        [-1, -1], [-1, 0], [-1, 1],
        [ 0, -1],          [ 0, 1],
        [ 1, -1], [ 1, 0], [ 1, 1]
      ];

      let liveNeighbours = 0;

      neighbours.forEach(([dx, dy]) => {
        const neighbourKey = this.toKey(x + dx, y + dy);
        if (this.liveCells.has(neighbourKey)) {
          liveNeighbours++;
        }
      });

      // Apply the rules of the Game of Life
      if (liveNeighbours === 2 || liveNeighbours === 3) {
        tickLiveCells.add(cell); // Cell survives
      }
    });

    this.liveCells = tickLiveCells
  }

  getPopulationCount(): number {
    return this.liveCells.size;
  }

  private toKey(x: number, y: number): CoordinateKey {
    return `${x},${y}`;
  }

  private fromKey(key: CoordinateKey): [number, number] {
    const [x, y] = key.split(",").map(Number);
    return [x, y];
  }

  private logLiveCells() {
    console.log("Live Cells:", Array.from(this.liveCells).map(key => this.fromKey(key)));
  }
}
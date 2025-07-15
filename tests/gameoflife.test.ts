import { GameOfLife } from '../src/gameoflife';

describe('Game of Life should', () => {
  test('evolve an empty world into an empty world', () => {
    const game = new GameOfLife();
    game.evolve();
    expect(game).toStrictEqual(new GameOfLife());
  });

  test('evolve a world with a single live cell into an empty world', () => {
    const game = new GameOfLife("x");
    game.evolve();
    expect(game.getPopulationCount()).toEqual(0);
  });

  test('evolve a world with a live cell with two live neighbours into a world with a single live cell', () => {
    const game = new GameOfLife("xxx");
    game.evolve();
    expect(game.getPopulationCount()).toEqual(1);
  });
});

import { GameOfLife } from '../src/gameoflife';

describe('Game of Life should', () => {
  test('evolve an empty world into an empty world', () => {
    const game = new GameOfLife();
    game.evolve()
    expect(game).toStrictEqual(new GameOfLife());
  });
});

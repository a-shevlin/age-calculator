import BaseLife from "../src/js/life";

describe ('BaseLife', () => {
  let user;
  beforeEach(() => {
  user = new BaseLife('Alex', 22);
  });
  
  test('should return life expectancy for earth', () => {
    expect(user.earthExpect).toEqual(72.6);
  });
  test('should return life expectancy for mercury', () => {
    expect(user.mercuryExpect).toEqual(302.5);
  });
  test('should return life expectancy for venus', () => {
    expect(user.venusExpect).toEqual(117.09677419354838);
  });
});
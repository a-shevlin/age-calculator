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
  test('should return life expectancy for mars', () => {
    expect(user.marsExpect).toEqual(38.61702127659574);
  });
  test('should return life expectancy for jupiter', () => {
    expect(user.jupiterExpect).toEqual(6.12141652613828);
  });

  test('should return remaining life expectancy for earth', () => {
    expect(user.earthRemain()).toEqual(50.599999999999994)
  })
});
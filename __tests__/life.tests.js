import BaseLife from "../src/js/life";

describe ('BaseLife', () => {
  let user;
  let user2;
  beforeEach(() => {
  user = new BaseLife('Alex', 22);
  user2 = new BaseLife('Old Man', 200);
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
  test('should return N/A if earthAge is higher than earthExpect', () => {
    expect(user2.earthRemain()).toEqual("N/A")
  })
  test('should return remaining life expectancy for earth', () => {
    expect(user.mercuryRemain()).toEqual(50.599999999999994)
  })
  test('should return N/A if earthAge is higher than earthExpect', () => {
    expect(user2.mercuryRemain()).toEqual("N/A")
  })
});
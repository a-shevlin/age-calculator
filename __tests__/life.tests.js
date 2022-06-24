import UserLife from "../src/js/life";

describe ('UserLife', () => {
  let user;
  beforeEach(() => {
  user = new UserLife('Alex', 22);
  });
  
  test('should return life expectancy for earth', () => {
    expect(user.earthExpect).toEqual(72.6);
  });
  test('should return life expectancy for mars', () => {
    expect(user.marsExpect).toEqual(72.6);
  });
});
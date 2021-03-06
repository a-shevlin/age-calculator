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
  test('should return life expectancy for mercury rounded to the tenths place', () => {
    expect(user.mercuryExpect).toEqual(302.5);
  });
  test('should return life expectancy for venus rounded to the tenths place', () => {
    expect(user.venusExpect).toEqual(117.1);
  });
  test('should return life expectancy for mars rounded to the tenths place', () => {
    expect(user.marsExpect).toEqual(38.6);
  });
  test('should return life expectancy for jupiter rounded to the tenths place', () => {
    expect(user.jupiterExpect).toEqual(6.1);
  });

  test('should return remaining life expectancy for earth', () => {
    expect(user.earthRemain()).toEqual(50.6);
  });
  test('should return N/A if earthAge is higher than earthExpect', () => {
    expect(user2.earthRemain()).toEqual("N/A");
  });
  test('should return remaining life expectancy for mercury', () => {
    expect(user.mercuryRemain()).toEqual(210.8);
  });
  test('should return N/A if mercuryAge is higher than mercuryExpect', () => {
    expect(user2.mercuryRemain()).toEqual("N/A");
  });
  test('should return remaining life expectancy for mars', () => {
    expect(user.marsRemain()).toEqual(26.9);
  });
  test('should return N/A if marsAge is higher than marsExpect', () => {
    expect(user2.marsRemain()).toEqual("N/A");
  });
  test('should return remaining life expectancy for venus', () => {
    expect(user.venusRemain()).toEqual(81.6);
  });
  test('should return N/A if venusAge is higher than venusExpect', () => {
    expect(user2.venusRemain()).toEqual("N/A");
  });
  test('should return remaining life expectancy for jupiter', () => {
    expect(user.jupiterRemain()).toEqual(4.2);
  });
  test('should return N/A if jupiterAge is higher than jupiterExpect', () => {
    expect(user2.jupiterRemain()).toEqual("N/A");
  });

  test('should return N/A or years over life expectancy', () => {
    expect(user.earthOver()).toEqual('N/A');
    expect(user2.earthOver()).toEqual(127.4);
  });
  test('should return N/A or years over life expectancy for mercury', () => {
    expect(user.mercuryOver()).toEqual('N/A');
    expect(user2.mercuryOver()).toEqual(530.8);
  });
  test('should return N/A or years over life expectancy for venus', () => {
    expect(user.venusOver()).toEqual('N/A');
    expect(user2.venusOver()).toEqual(205.5);
  });
  test('should return N/A or years over life expectancy for mars', () => {
    expect(user.marsOver()).toEqual('N/A');
    expect(user2.marsOver()).toEqual(67.8);
  });
  test('should return N/A or years over life expectancy for jupiter', () => {
    expect(user.jupiterOver()).toEqual('N/A');
    expect(user2.jupiterOver()).toEqual(10.8);
  });
});
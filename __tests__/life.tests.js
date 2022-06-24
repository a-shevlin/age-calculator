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
    expect(user.earthRemain()).toEqual(50.599999999999994)
  })
  test('should return N/A if earthAge is higher than earthExpect', () => {
    expect(user2.earthRemain()).toEqual("N/A")
  })
  test('should return remaining life expectancy for mercury', () => {
    expect(user.mercuryRemain()).toEqual(210.83333333333331)
  })
  test('should return N/A if mercuryAge is higher than mercuryExpect', () => {
    expect(user2.mercuryRemain()).toEqual("N/A")
  })
  test('should return remaining life expectancy for mars', () => {
    expect(user.marsRemain()).toEqual(26.914893617021274)
  })
  test('should return N/A if marsAge is higher than marsExpect', () => {
    expect(user2.marsRemain()).toEqual("N/A")
  })
  test('should return remaining life expectancy for jupiter', () => {
    expect(user.jupiterRemain()).toEqual(4.266441821247891)
  })
  test('should return N/A if jupiterAge is higher than jupiterExpect', () => {
    expect(user2.jupiterRemain()).toEqual("N/A")
  })
});
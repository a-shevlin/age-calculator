import BaseAge from "../src/js/age";

describe ('BaseAge', () => {

  test('should create new BaseAge from BaseAge constructor', () => {
    let newBaseAge = new BaseAge('Alex', 22);
    expect(newBaseAge).toEqual({name: 'Alex', earthAge: 22});
  })
})
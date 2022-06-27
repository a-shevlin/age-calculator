import BaseAge from "../src/js/age";

describe ('BaseAge', () => {

  test('should return calculated ages for other planets', () => {
    let newBaseAge = new BaseAge('Alex', 22);
    expect(newBaseAge).toEqual(
      {
        earthAge: 22,
        jupiterAge: 1.9,
        marsAge: 11.7,
        mercuryAge: 91.7,
        name: "Alex",
        venusAge: 35.5
      }
      );
  })
})
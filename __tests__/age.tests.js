import BaseAge from "../src/js/age";

describe ('BaseAge', () => {

  test('should return calculated ages for other planets', () => {
    let newBaseAge = new BaseAge('Alex', 22);
    expect(newBaseAge).toEqual(
      {earthAge: 22,
      jupiterAge: 1.854974704890388,
      marsAge: 11.702127659574469,
      mercuryAge: 91.66666666666667,
      name: "Alex",
      venusAge: 35.483870967741936}
      );
  })
})
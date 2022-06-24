//business logic BaseAge

export default class BaseAge {
  constructor(name, earthAge) {
    this.name = name;
    this.earthAge = earthAge;
    this.mercuryAge = parseFloat((this.earthAge / 0.24).toFixed(1));
    this.venusAge = parseFloat((this.earthAge / 0.62).toFixed(1));
    this.marsAge = parseFloat((this.earthAge / 1.88).toFixed(1));
    this.jupiterAge = parseFloat((this.earthAge / 11.86).toFixed(1));
  }
}

//business logic BaseAge

export default class BaseAge {
  constructor(name, earthAge) {
    this.name = name;
    this.earthAge = earthAge;
    this.mercuryAge = (this.earthAge / 0.24);
    this.venusAge = (this.earthAge / 0.62);
    this.marsAge = (this.earthAge / 1.88);
    this.jupiterAge = (this.earthAge / 11.86);
  }
}

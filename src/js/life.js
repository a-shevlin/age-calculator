import BaseAge from "./age";

export default class UserLife extends BaseAge {
  constructor(name, earth) {
    super(name, earth);
    this.earthExpect = 72.6;
    this.mercuryExpect = (this.earthExpect / 0.24);
    this.venusExpect = (this.earthExpect / 0.62);
  }
}
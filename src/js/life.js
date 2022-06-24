import BaseAge from "./age";

export default class BaseLife extends BaseAge {
  constructor(name, earth) {
    super(name, earth);
    this.earthExpect = 72.6;
    this.mercuryExpect = (this.earthExpect / 0.24);
    this.venusExpect = (this.earthExpect / 0.62);
    this.marsExpect = (this.earthExpect / 1.88);
    this.jupiterExpect = (this.earthExpect / 11.86);
  }
  earthRemain() {
  	if ((this.earthExpect - this.earthAge)>0){
    	return this.earthExpect - this.earthAge;
  	} else {
    	return "N/A";
  	}
	}
  mercuryRemain() {
  	if ((this.mercuryExpect - this.mercuryAge)>0){
    	return this.mercuryExpect - this.mercuryAge;
  	} else {
    	return "N/A";
  	}
	}
}
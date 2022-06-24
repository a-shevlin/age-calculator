import BaseAge from "./age";

export default class BaseLife extends BaseAge {
  constructor(name, earth) {
    super(name, earth);
    this.earthExpect = 72.6;
    this.mercuryExpect = parseFloat(Number(this.earthExpect / 0.24).toFixed(1));
    this.venusExpect = parseFloat(Number(this.earthExpect / 0.62).toFixed(1));
    this.marsExpect = parseFloat(Number(this.earthExpect / 1.88).toFixed(1));
    this.jupiterExpect = parseFloat(Number(this.earthExpect / 11.86).toFixed(1));
  }
  earthRemain() {
  	if ((this.earthExpect - this.earthAge)>0){
    	let remain = parseFloat(Number(this.earthExpect - this.earthAge).toFixed(1));
      return remain;
  	} else {
    	return "N/A";
  	}
	}
  mercuryRemain() {
  	if ((this.mercuryExpect - this.mercuryAge)>0){
    	let remain = parseFloat(Number(this.mercuryExpect - this.mercuryAge).toFixed(1));
      return remain;
  	} else {
    	return "N/A";
  	}
	}
  marsRemain() {
  	if ((this.marsExpect - this.marsAge)>0){
    	let remain = parseFloat(Number(this.marsExpect - this.marsAge).toFixed(1));
      return remain;
  	} else {
    	return "N/A";
  	}
	}
  jupiterRemain() {
  	if ((this.jupiterExpect - this.jupiterAge)>0){
    	let remain = parseFloat(Number(this.jupiterExpect - this.jupiterAge).toFixed(1));
      return remain;
  	} else {
    	return "N/A";
  	}
	}
  earthOver() {
    
  }
}
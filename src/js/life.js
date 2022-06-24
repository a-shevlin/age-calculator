import BaseAge from "./age";

export default class BaseLife extends BaseAge {
  constructor(name, earth) {
    super(name, earth);
    this.earthExpect = 72.6;
    this.mercuryExpect = this.roundNumberDivide(this.earthExpect, 0.24);
    this.venusExpect = this.roundNumberDivide(this.earthExpect, 0.62);
    this.marsExpect = this.roundNumberDivide(this.earthExpect, 1.88);
    this.jupiterExpect = this.roundNumberDivide(this.earthExpect, 11.86);
  }
  roundNumberDivide(number1, number2) {
    let round = parseFloat(Number(number1 / number2).toFixed(1));
    return round;
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
    if ((this.earthExpect - this.earthAge)>0){
      return "N/A";
    } else {
      let over = parseFloat(Number(this.earthAge - this.earthExpect).toFixed(1));
      return over;
    }   
  }
  mercuryOver() {
    if ((this.mercuryExpect-this.mercuryAge)>0){
      return "N/A";
    } else {
      let over = parseFloat(Number(this.mercuryAge - this.mercuryExpect).toFixed(1));
      return over;
    }
  }
  venusOver() {
    if ((this.venusExpect-this.venusAge)>0){
      return "N/A";
    } else {
      let over = parseFloat(Number(this.venusAge - this.venusExpect).toFixed(1));
      return over;
    }
  }
  marsOver() {
    if ((this.marsExpect-this.marsAge)>0){
      return "N/A";
    } else {
      let over = parseFloat(Number(this.marsAge - this.marsExpect).toFixed(1));
      return over;
    }
  }
  jupiterOver() {
    if ((this.jupiterExpect-this.jupiterAge)>0){
      return "N/A";
    } else {
      let over = parseFloat(Number(this.jupiterAge - this.jupiterExpect).toFixed(1));
      return over;
    }
  }
}
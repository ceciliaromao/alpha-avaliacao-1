export default class AscII {
  #string;
  code;
  constructor(string) {
    this.#string = string;
  }

  getArray(s) {
    let charCodeArr = [];
    for (let i = 0; i < s.length; i++) {
      let code = s.charCodeAt(i);
      charCodeArr.push(code);
    }
    return charCodeArr;
  }

  getCode() {
    const code = this.getArray(this.#string);
    let sum = 0;
    for (let el of code) sum += el;
    return sum;
  }
}


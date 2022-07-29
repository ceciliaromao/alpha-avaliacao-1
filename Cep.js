//Questão 03 - Crie uma classe Cep em um arquivo 'Cep.js' que possua os métodos 'setCep' (para definir o CEP), 'getNum' (para retornar apenas os números), 'getFormated' (para retornar no CEP no formato XXXXX-XXX). Crie uma página web que utilize esta classe, peça o CEP, verifique se é válido e retorne o resultado 'formatado' e 'somente números'. Utilize flex-box para centralizar o conteúdo de sua página.

class Cep {
  setCep(value) {
    this.cep = value;
  }

  getNum() {
    const value = ''
    for (let el of this.cep) {
      if (isNum(el)) value += el;
    }
    return value;
  }

  getFormated() {
    const value = ''
    for (let i = 0; i < this.cep.length; i++) {
      i == 4 ? value += this.cep[i] + '-' : value += this.cep[i];
    }
    return value;
  }
}
![](https://portal.alphaedtech.org.br/images/edtech/logo-edtech.webp)

# Back-End

## Módulo 7 - JavaScript

### Desafio 🚀

#### Passo 1
* Crie uma página web ‘index.html’ que possua um formulário centralizado utilizando ‘flex-box’ que contenha:
  - Um elemento ‘label’ com valor ‘Nome completo:’;
  - Um elemento de formulário tipo ‘text’ com ‘id’ igual a ‘fullname’;
  - Um elemento de formulário do tipo ‘button’;
  - Um elemento do tipo ‘div’ com ‘id’ igual a ‘result’;
  - Um elemento ‘script’ que carregue o arquivo ‘index.js’ do tipo ‘module’.
 

#### Passo 2
* Crie um  arquivo ‘AscII.js’ que contenha uma classe ‘AscII’ exportada como ‘default’ que contenha:
  - ma variável ‘string’;
  - Uma variável ‘code’;
  - Um ‘constructor’ que receba uma string e armazene seu valor na variável ‘string’;
  - Um método ‘getArray’ que retorna o array dos valores AscII de cada elemento de uma string passada como parâmetro;
    - O link abaixo contém o algoritmo de implementação deste método: https://javascript.plainenglish.io/javascript-algorithm-convert-string-characters-into-ascii-bb53ae928331#:~:text=To%20obtain%20our%20ASCII%20code,value%20into%20the%20charCodeArr%20array
  - Um método ‘getCode’ que:
    - Pega o valor armazenado na variável ‘string’ e passa como parâmetro de ‘getArray’;
    - O resultado deve ser armazenada na variável ‘code’;
    - Realize a soma de todos os elementos de ‘code’;
    - Retorne este valor de soma de elementos.
 

#### Passo 3
* Crie um arquivo ‘index.js’ que possibilite:
  - Importar o módulo ‘AscII.js’ para uso;
  - Receber o evento do click no botão que:
    - Obtenha o valor do elemento ‘fullname’ e armazene em uma variável ‘fullname’;
    - Instancie um objeto ‘ascII’ passando o valor de ‘fullname’ ao construtor da classe ‘AscII’;
    - Armazene em uma constante ‘code’ o resultado de ‘ascII.getCode()’;
  - Crie uma chamada assíncrona do tipo ‘fetch’ passando os parâmetros em ‘query string’ do tipo: `http://ubuntu.alphaedtech.org.br:8080/?string=${fullname}&code=${code}`;
    - A expressão acima já está no formato ‘template string’ no qual são passados os parâmetros de ‘fullname’ e ‘code’;
    - A url para consulta já está no formato correto, isto é, acessando a porta ‘8080’ do servidor ‘ubuntu.alphaedtech.org.br’.
    - A resposta a esta consulta estará no formato JSON;
  - Se tudo der certo, receberá um objeto JSON com um atributo ‘question’;
  - Exiba a ‘question’ recebida no elemento ‘result’ da página. 

#### Passo 4
* De posse da questão (question) recebida preenchendo o seu ‘nome completo’:
* Desenvolva a questão recebida.
 

#### Passo 5
* Compacte os arquivos em formato zip e submeta sua resposta na plataforma.

###### tags: `módulo 7` `back-end` `JavaScript`

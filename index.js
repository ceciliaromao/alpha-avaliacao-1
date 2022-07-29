import AscII from "./AscII.js";

const fullname = document.querySelector('#fullname');
const result = document.querySelector('#result');

document.querySelector('button').addEventListener('click', () => {
  const ascII = new AscII(fullname.value);
  const code = ascII.getCode();

  alpha(fullname.value, code);
});

async function alpha(fullname, code) {
  try {
    const { question } = await (await fetch(`http://ubuntu.alphaedtech.org.br:8080/?string=${fullname}&code=${code}`, { method: "GET" })).json();
    result.innerHTML = question;
  } catch (err) {
    result.innerHTML = err.message;
  }
}

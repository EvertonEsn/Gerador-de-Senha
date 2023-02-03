import gerador from './gerador';

const inputText = document.querySelector('.inputText');
const btnGerar = document.querySelector('#btn-gerar');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const maiusculas = document.querySelector('.maiusculas');
const minusculas = document.querySelector('.minusculas');
const numeros = document.querySelector('.numeros');
const simbolos = document.querySelector('.simbolos');

qtdCaracteres.addEventListener('input', () =>{
  return qtdCaracteres.value > 20 ? qtdCaracteres.value = 20 : qtdCaracteres.value
})

export default () => {
  btnGerar.addEventListener('click', () => {
    inputText.value = gera();
  });
};

function gera() {
  const senha = gerador(
    qtdCaracteres.value,
    maiusculas.checked,
    minusculas.checked,
    numeros.checked,
    simbolos.checked
  );

  return senha || 'Nada selecionado';
}

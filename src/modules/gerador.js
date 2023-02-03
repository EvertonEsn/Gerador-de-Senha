const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@#$%&*()_=+-';

const gerarTipo = tipos => {
  return tipos[Math.floor(Math.random() * tipos.length)];
};

const gerarCaractere = caractere => {
  return caractere[Math.floor(Math.random() * caractere.length)];
};

export default function gerarSenha(qtd, maiusculas, minusculas, nums, simb) {
  let senha = '';
  const gerador = [];

  maiusculas && gerador.push(letrasMaiusculas);
  minusculas && gerador.push(letrasMinusculas);
  nums && gerador.push(numeros);
  simb && gerador.push(simbolos);

  for (let i = 0; i < qtd; i++) {
    senha += gerarCaractere(gerarTipo(gerador));
  }

  return senha;
}

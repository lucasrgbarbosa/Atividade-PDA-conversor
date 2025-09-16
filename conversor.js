// Acessa os argumentos da linha de comando, ignorando os dois primeiros
// (que são o caminho do Node.js e o caminho do script).
const args = process.argv.slice(2);

// Verifica se a quantidade de argumentos é correta
if (args.length !== 3) {
  console.error('Uso: node conversor.js <valor> <unidade_origem> <unidade_destino>');
  process.exit(1);
}

// Atribui os argumentos a variáveis com nomes mais claros
const valor = parseFloat(args[0]);
const unidadeOrigem = args[1].toLowerCase();
const unidadeDestino = args[2].toLowerCase();

// Verifica se o valor é um número válido
if (isNaN(valor)) {
  console.error('Erro: O valor fornecido não é válido.');
  process.exit(1);
}

let resultado;
let unidadesTexto;
let unidadeOrigemNome;
let unidadeDestinoNome;

// Estrutura de conversão, usando switch para lidar com diferentes unidades
switch (`${unidadeOrigem}-${unidadeDestino}`) {
  case 'km-milhas':
    resultado = valor * 0.621371;
    unidadeOrigemNome = 'quilômetros';
    unidadeDestinoNome = 'milhas';
    break;
  case 'milhas-km':
    resultado = valor / 0.621371;
    unidadeOrigemNome = 'milhas';
    unidadeDestinoNome = 'quilômetros';
    break;
  case 'celsius-fahrenheit':
    resultado = (valor * 9/5) + 32;
    unidadeOrigemNome = 'graus Celsius';
    unidadeDestinoNome = 'graus Fahrenheit';
    break;
  case 'fahrenheit-celsius':
    resultado = (valor - 32) * 5/9;
    unidadeOrigemNome = 'graus Fahrenheit';
    unidadeDestinoNome = 'graus Celsius';
    break;
// se nenhuma servir use o default
  default:
    console.error('Erro: Conversão de unidade não suportada.');
    process.exit(1);
}

// Exibe o resultado no terminal
console.log(`${valor} ${unidadeOrigemNome} é igual a ${resultado.toFixed(5)} ${unidadeDestinoNome}.`);
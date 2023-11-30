var readline = require('readline-sync')

// Interface Strategy
class Strategy {
  execute(a, b) {}
}

// Implementações concretas das estratégias (operações matemáticas)
class Soma extends Strategy {
  execute(a, b) {
    return a + b;
  }
}

class Subtracao extends Strategy {
  execute(a, b) {
    return a - b;
  }
}

class Multiplicacao extends Strategy {
  execute(a, b) {
    return a * b;
  }
}

// Função principal para interação com o usuário e execução da estratégia escolhida
function calculadora() {
  const valor1 = parseInt(readline.question("Digite o primeiro numero:"));
  const valor2 = parseInt(readline.question("Digite o segundo numero:"));
  const operacao = readline.question("Digite a operação desejada (+, -, *):");

  let strategy;

  switch (operacao) {
    case '+':
      strategy = new Soma();
      break;
    case '-':
      strategy = new Subtracao();
      break;
    case '*':
      strategy = new Multiplicacao();
      break;
    default:
      console.log("Operação inválida.");
      return;
  }

  const resultado = strategy.execute(valor1, valor2);
  console.log(`Resultado da operação: ${resultado}`);
}

// Executar a calculadora
calculadora();

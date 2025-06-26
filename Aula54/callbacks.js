// Função para gerar um número aleatório inteiro entre min e max (valores em milissegundos)
// Usada para simular um tempo de espera aleatório (delay)
function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min; // Calcula um número aleatório entre min e max
  return Math.floor(num); // Arredonda para baixo para obter um número inteiro
}

// Função f1 - Simula uma tarefa assíncrona
// Recebe uma função de callback que será executada após a conclusão
function f1(callback) {
  setTimeout(function() { // Executa após um tempo aleatório
    console.log('f1'); // Mostra que a função f1 foi executada
    if (callback) callback(); // Se houver callback, executa a próxima função
  }, rand()); // Tempo de atraso aleatório
}

// Função f2 - Segue o mesmo padrão da função f1
function f2(callback) {
  setTimeout(function() {
    console.log('f2');
    if (callback) callback();
  }, rand());
}

// Função f3 - Também segue o mesmo padrão das anteriores
function f3(callback) {
  setTimeout(function() {
    console.log('f3');
    if (callback) callback();
  }, rand());
}

// Inicia a sequência chamando f1 e passando como callback a função f1Callback
f1(f1Callback);

// Função callback que é chamada após f1 terminar
function f1Callback() {
  f2(f2Callback); // Após f1, chama f2
}

// Função callback que é chamada após f2 terminar
function f2Callback() {
  f3(f3Callback); // Após f2, chama f3
}

// Função callback que é chamada após f3 terminar
function f3Callback() {
  console.log('Olá mundo!'); // Exibe mensagem final no console
}

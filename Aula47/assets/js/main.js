// Seleciona os elementos do HTML com as classes especificadas
const relogio = document.querySelector('.relogio');  // O parágrafo que mostra o tempo
const iniciar = document.querySelector('.iniciar');  // Botão "Iniciar"
const pausar = document.querySelector('.pausar');    // Botão "Pausar"
const zerar = document.querySelector('.zerar');      // Botão "Zerar"

let segundos = 0;     // Variável que armazena os segundos contados
let timer;            // Variável que armazenará o ID do setInterval (para poder parar depois)

/**
 * Função que converte segundos em um formato de tempo HH:MM:SS.
 * Recebe um número de segundos e retorna uma string formatada.
 */
function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);  // Cria um objeto Date baseado no número de segundos
    return data.toLocaleTimeString('pt-BR', { // Formata o horário para string no padrão brasileiro
      hour12: false,  // Usa o formato 24h
      timeZone: 'UTC' // Garante que a contagem não use o fuso horário local
    });
}

/**
 * Função que inicia o relógio.
 * Usa setInterval para executar uma função a cada 1000ms (1 segundo).
 * Dentro dela, incrementa os segundos e atualiza o conteúdo do relógio na tela.
 */
function iniciaRelogio() {
    // Aqui estamos usando uma função anônima tradicional (function anônima)
    timer = setInterval(function () {
        segundos++;  // Incrementa 1 segundo
        relogio.innerHTML = criaHoraDosSegundos(segundos);  // Atualiza o HTML com o novo tempo
    }, 1000);  // Executa a função a cada 1000ms (1 segundo)
}

// EVENTO DO BOTÃO "INICIAR"
iniciar.addEventListener('click', function (event) {
    clearInterval(timer); // Limpa qualquer contagem anterior para evitar duplicidade
    iniciaRelogio();      // Inicia a contagem de tempo
    // Esta função é uma função anônima tradicional associada ao evento "click"
});

// EVENTO DO BOTÃO "PAUSAR"
pausar.addEventListener('click', function (event) {
    clearInterval(timer); // Pausa a contagem removendo o setInterval atual
});

// EVENTO DO BOTÃO "ZERAR"
zerar.addEventListener('click', function (event) {
    clearInterval(timer);          // Para a contagem
    relogio.innerHTML = '00:00:00';// Reseta o conteúdo visual do relógio
    segundos = 0;                  // Reseta o contador de segundos
});

/*
Observações:
- "function (event) { ... }" é uma função anônima tradicional: ela não tem nome e é definida diretamente no parâmetro do addEventListener.
- Poderíamos também usar funções arrow (funções de seta) como:
    iniciar.addEventListener('click', (event) => { ... });

  Mas usamos a forma tradicional acima por simplicidade e compatibilidade.
- "setInterval()" cria uma repetição em intervalos definidos.
- "clearInterval()" cancela essa repetição.
*/

// Função principal que cria e retorna o objeto calculadora
function criaCalculadora() {
    console.log('criaCalculadora');

    // Retorna um objeto com propriedades e métodos da calculadora
    return {
        // Referência ao campo de display da calculadora (input com a classe .display)
        display: document.querySelector('.display'),

        // Método que inicializa os eventos da calculadora
        inicia() {
            this.clickBotoes();      // Ativa o clique nos botões
            this.pressionaEnter();   // Ativa a tecla Enter
        },

        // Limpa completamente o display
        clearDisplay() {
            this.display.value = '';
        },

        // Apaga o último caractere digitado no display
        apagaUm() {
            // slice(0, -1) remove o último caractere
            this.display.value = this.display.value.slice(0, -1);
        },

        // Avalia a expressão matemática digitada e mostra o resultado
        realizaConta() {
            let conta = this.display.value;
            try {
                conta = eval(conta); // Avalia a string como uma expressão matemática

                // Se o resultado for falso (0, null, undefined, NaN, etc), mostra erro
                if (!conta) {
                    alert('Conta inválida');
                    this.clearDisplay();
                    return;
                }

                // Se deu certo, exibe o resultado no display
                this.display.value = conta;
            } catch (error) {
                // Em caso de erro (ex: expressão inválida), limpa e avisa o usuário
                alert('Conta inválida');
                this.clearDisplay();
                return;
            }
        },

        // Ativa o Enter como botão de igualdade (=)
        pressionaEnter() {
            // Adiciona evento de tecla pressionada no display
            this.display.addEventListener('keyup', e => {
                // Arrow function usada aqui: (e => {...})
                // Arrow functions mantêm o "this" do escopo pai (neste caso, o objeto calculadora)

                // Se a tecla pressionada for Enter (código 13)
                if (e.keyCode === 13) {
                    this.realizaConta(); // Executa o cálculo
                }
            });
        },

        // Método que escuta todos os cliques da página
        clickBotoes() {
            // Adiciona evento de clique no documento inteiro
            document.addEventListener('click', e => {
                // Arrow function usada novamente aqui

                const el = e.target; // Elemento que foi clicado

                // Se for um botão numérico, envia o número para o display
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                // Se for o botão de limpar (C)
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                // Se for o botão de apagar (←)
                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                // Se for o botão de igual (=)
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },

        // Adiciona o valor (texto do botão) ao display
        btnParaDisplay(valor) {
            this.display.value += valor;
        },
    };
}

// Cria a calculadora chamando a função
const calculadora = criaCalculadora();

// Inicia os eventos da calculadora
calculadora.inicia();

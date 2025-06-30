function criaCalculadora(){
    return {
        display: document.querySelector('.display'),
 
 //Metodos
        inicia(){
            this.clickBotoes();

        },
        clickBotoes(){  
            document.addEventListener('click', function(e) {
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay();
                }
        });
    },
}

const calculadora = criaCalculadora();
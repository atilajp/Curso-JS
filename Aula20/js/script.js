function meuEscopo(){
const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');
const pessoas =[];

let contador = 1;
function recebendoEventoForm (evento) {
    evento.preventDefault();
    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');
    pessoas.push({
        nome: nome.Value,
        sobrenome: sobrenome.Value,
        peso: peso.Value,
        altura: altura.Value
    });
    console.log(pessoas);
}

resultado.innerHTML+=`<p>${nome.Value } ${nome.Value} ` +
`${peso.Value } ${altura.Value} </p>` ;

form.addEventListener('submit',recebendoEventoForm);

}
meuEscopo();

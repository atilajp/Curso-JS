
// Cria um array de objetos, onde cada objeto contém:
// - uma 'tag' HTML que será criada dinamicamente
// - um 'texto' que será inserido dentro da tag
const elementos = [
{tag: 'p',texto:'Qualquer Texto'},
{tag: 'div',texto:'Frase 2'},
{tag: 'section',texto:'Frase 3'},
{tag: 'footer',texto:'Frase 4'}
];

// Seleciona o elemento HTML com a classe 'container' para ser o local onde os elementos serão inseridos
const container = document.querySelector('.container');
// Cria uma nova <div> que servirá como contêiner temporário para os elementos criados
const div = document.createElement('div');


// Percorre o array 'elementos'
for (let i = 0; i < elementos.length; i++) {
    let {tag , texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}
container.appendChild(div);

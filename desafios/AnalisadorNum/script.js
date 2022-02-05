//Adicionando os eventos aos botões
document.getElementById('btn').addEventListener('click', calculo);
document.getElementById('btnFin').addEventListener('click', finalizar);

//Variavel function btn calcular
var tab = document.getElementById('tab');
var texto = document.getElementById('texto');

//Variavel function btn final
let res = document.createElement('p');

//Criando uma variavel array
let arrNum = [];

//função de adição dos números em um select
function calculo() {
    let n = Number(document.getElementById('txtnum').value);
    if (n <= 0 || n >= 101) {
        alert('Seu número não está de acordo.');
    } else if (res.text != ''){
        res.text = '';
        texto.innerHTML = '';
        tab.text = '';
    } else {
        if (arrNum.indexOf(n) == -1) {
            arrNum.push(n);
            let opt = document.createElement('option');
            opt.text = `O número ${n} foi adicionado`;
            tab.appendChild(opt);

        } else if (arrNum.indexOf(n) == 0){
            alert('Esse número já existe, tente outro.');
        }
    }
}

//Função do botão finalizar, colocando os dados pedidos na tela.
function finalizar() {
    if (arrNum.length == 0) {
        alert('Erro! Adicione pelo menos um número.');
        console.log('Array tamanho: ' + arrNum.length);
    } else if (arrNum.length != 0) {
        res.text = `Ao todo, temos ${arrNum.length} números cadastrados. <br>`;
        res.text += `A maior valor informado foi ${arrNum.sort()[0]}`;
        texto.innerHTML = res.text;
        console.log('Array tamanaaaaho: ' + arrNum.length);
    }
}

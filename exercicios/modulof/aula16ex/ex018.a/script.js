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
    //} else if (res.text != ''){
    //    res.text = '';
    //    texto.innerHTML = '';
    //    tab.text = '';
    } else {
        if (arrNum.indexOf(n) == -1) {
            texto.textContent = ''; //possivel problema
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
    } else if (arrNum.length != 0) {
        var soma = 0;
        tab.textContent = '';
        res.text = `Ao todo, temos ${arrNum.length} números cadastrados. <br>`;
        res.text += `A maior valor informado foi ${arrNum.sort()[arrNum.length - 1]}.<br>`;
        res.text += `O menor valor informado foi ${arrNum.sort()[0]}.<br>`;
        //somando os números de um array
        for (let i = 0; i < arrNum.length; i++) {
            soma += arrNum[i];
            console.log(soma);
        }
        res.text += `Somando todos os valores, temos ${soma}.<br>`;
        res.text += `A média dos valores digitados é ${soma / arrNum.length}. <br>`;
        texto.innerHTML = res.text;
        arrNum = []; //possivel problema
        console.log(arrNum);
    };
}

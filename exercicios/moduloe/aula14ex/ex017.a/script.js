document.getElementById('btn').addEventListener('click', tabuada);

function tabuada() {
    let num = document.getElementById('txtvalor');
    let n = num.value
    let txt = document.getElementById('txt');

    txt.innerHTML = '';

    if (num.value == 0) {
        alert('ERRO! considerando Número como 1');
        n = 1;
    } 
    for (i = 0; i <= 10; i++) {
        txt.innerHTML += `${n} x ${i} = ${n*i}<br>`
    }
}

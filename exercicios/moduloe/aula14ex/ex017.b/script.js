document.getElementById('btn').addEventListener('click', tabuada);

function tabuada() {
    var num = Number(document.getElementById('txtvalor').value);
    var txt = document.getElementById('txt');
    for (i = 0; i <= 10; i++) {
        txt.innerHTML += `${num} x ${i} = ${num*i}<br>`
    }
}

document.getElementById('btn').addEventListener('click', contar);
var fin = document.getElementById('final');

function calc(ini, fim, pas) {
    for (ini, fim, pas; ini <= fim; ini += pas) {
        fin.innerHTML += '<strong> > </strong> ' + ini;
    }
}

function contar() {
    if (fin.innerHTML != 0) {
        fin.innerHTML = '';
    }
    ini = Number(document.getElementById('txtinicio').value);
    fim = Number(document.getElementById('txtfim').value);
    pas = Number(document.getElementById('txtpasso').value);
    
    if (fim === 0) {
        alert('Fim não pode ser 0. CONSIDERANDO 1');
        fim = 1;
        calc(ini, fim, pas);
    } else {
        calc(ini, fim, pas);
    }
}

document.getElementById('btn').addEventListener('click', contar);

function contar() {
    let ini = document.getElementById('txtinicio');
    let fim = document.getElementById('txtfim');
    let passo = document.getElementById('txtpasso');
    let res = document.getElementById('res');

    if (ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        alert('ERRO! Está faltando dados.')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>';
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if ( p <= 0) {
            alert('Passo inválido! CONSIDERANDO PASSO 1');
            p = 1;
        }
        if (i < f) {
            // Contagem crecente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `\u{1F449} ${c}`;
            }
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `\u{1F449} ${c}`;
            }
        }
        res.innerHTML += `\u{1F44A}`;
    }
}

// bebe menino https://images.pexels.com/photos/35537/child-children-girl-happy.jpg
// bebe menina https://images.pexels.com/photos/3933250/pexels-photo-3933250.jpeg

// jovem masc https://images.pexels.com/photos/4830130/pexels-photo-4830130.jpeg
// jovem fem https://images.pexels.com/photos/7113758/pexels-photo-7113758.jpeg

// adulto masc https://images.pexels.com/photos/8729019/pexels-photo-8729019.jpeg
// adulto fem https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg

// idoso masc https://images.pexels.com/photos/6667752/pexels-photo-6667752.jpeg
// idosa fem https://images.pexels.com/photos/7544779/pexels-photo-7544779.jpeg

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var img = document.getElementById('img')
    var res = document.getElementById('res')
    nasc = Number(document.getElementById('txtnasc').value)

    //Pegando a idade e ano nascimento
    if (nasc > ano || nasc == 0) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var idade = ano - nasc
        var sexo = document.getElementsByName('radsex')
        var genero = ''
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 11) {
                //crianca
                img.style.backgroundImage = 'url(https://images.pexels.com/photos/35537/child-children-girl-happy.jpg)'
            } else if (idade < 21) {
                //jovem
                img.style.backgroundImage = 'url(https://images.pexels.com/photos/4830130/pexels-photo-4830130.jpeg)'
                img.style.backgroundPosition = 'center top'
            } else if (idade < 50) {
                //adulto
                img.style.backgroundImage = 'url(https://images.pexels.com/photos/8729019/pexels-photo-8729019.jpeg)'
            } else {
                //idoso
                img.style.backgroundImage = 'url(https://images.pexels.com/photos/6667752/pexels-photo-6667752.jpeg)'
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 11) {
                //crianca
                img.style.backgroundImage = 'url(https://images.pexels.com/photos/3933250/pexels-photo-3933250.jpeg)'
            } else if (idade < 21) {
                //jovem
                img.style.backgroundImage = 'url(https://images.pexels.com/photos/7113758/pexels-photo-7113758.jpeg)'
            } else if (idade < 50) {
                //adulto
                img.style.backgroundImage = 'url(https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg)'
            } else {
                //idoso
                img.style.backgroundImage = 'url(https://images.pexels.com/photos/7544779/pexels-photo-7544779.jpeg)'
            }
        }
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
    }
    
}

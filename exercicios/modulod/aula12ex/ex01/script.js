// manhã https://images.pexels.com/photos/3030459/pexels-photo-3030459.jpeg
// tarde https://images.pexels.com/photos/2792070/pexels-photo-2792070.jpeg
// noite https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg

function carregar() {
    //Mudando a hora atual
    var agora = document.getElementById('agora')
    var data = new Date()
    var hora = data.getHours()
    agora.innerText = hora

    //Trocando a imagem
    if (hora >=0 && hora < 12) {
        //Manhã
        document.getElementById('img').style.backgroundImage = 'url(https://images.pexels.com/photos/3030459/pexels-photo-3030459.jpeg)';
        document.body.style.background = 'rgb(228, 204, 161)'
    } else if (hora >= 12 && hora < 18) {
        //Tarde
        document.getElementById('img').style.backgroundImage = 'url(https://images.pexels.com/photos/2792070/pexels-photo-2792070.jpeg)'
        document.body.style.background = '#C7E19E'
    } else {
        //Noite
        document.getElementById('img').style.backgroundImage = 'url(https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg)'
        document.body.style.background = '#000080'
    }
}

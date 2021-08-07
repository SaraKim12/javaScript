function(){
    var msg = window.document.querySelector('msg')
    var img = window.document.querySelector('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12){
        img.src =  'tarde1'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18){
        img.src = 'tarde2'
    } else {
        img.src = "noite1"
    }
}
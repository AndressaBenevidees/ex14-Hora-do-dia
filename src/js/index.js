function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var date = new Date()
  var hora = date.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora < 12) {
    // BOM DIA!
    img.src = './src/imagens/foto-manha.jpg'
    document.body.style.background = '#B5C8D4'
  } else if (hora >= 12 && hora <= 18) {
    // BOA TARDE!
    document.body.style.background = '#87B6CA'
    img.src = './src/imagens/foto-tarde.jpg'
  } else  {
    // BOA NOITE"
    img.src = './src/imagens/foto-noite.jpg'
    document.body.style.background = '#21364B'
  }
}

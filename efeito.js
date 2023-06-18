document.addEventListener('scroll', function() {
  var imagem = document.querySelector('.imagem');
  var texto = document.querySelector('.texto');
  var alturaJanela = window.innerHeight;
  var posicaoImagem = imagem.getBoundingClientRect().top;
  var posicaoTexto = texto.getBoundingClientRect().top;

  if (posicaoImagem < alturaJanela) {
    imagem.classList.add('mostrar');
  }

  if (posicaoTexto < alturaJanela) {
    texto.classList.add('mostrar');
  }
});

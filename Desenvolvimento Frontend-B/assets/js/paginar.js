function paginar(id) {

    // Remove a classe active do elemento atualmente selecionado
    const elementoAtual = document.getElementsByClassName("item active");
    elementoAtual[0].classList.remove('active');
  
    // Adiciona a classe active ao elemento correspondente ao ID passado como argumento
    const elementoSelecionado = document.getElementById(id);
    elementoSelecionado.classList.add('active');
}
  



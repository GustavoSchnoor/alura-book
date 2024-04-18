const botoes = document.querySelectorAll('.btn'); // Seleciona todos BOTOES com a classe .btn
botoes.forEach(function(btn) { // Para cada botão, dentro de toda array botoes selecionada, para cada um ...
    btn.addEventListener('click', filtrarLivros) // Vamos adicionar um evento de CLICK, e quando clicar, chamaremos a função "filtrarLivros"
})

function filtrarLivros() { // Declaramos a função "filtrarLivros"
    const elementoBtn = document.getElementById(this.id) // "this.id" vai pegar o ID atual do botão clicado (dentre os botoes declarados antes)
    const categoria = elementoBtn.value;

    let livrosFiltrados = livros.filter(livro => { // ARROW function: livro => { } | Função Anonima: function(livro) { }
        return livro.categoria === categoria; // Retorna TRUE se a categoria em cada objeto livro dentro dos livros, for "front-end"
    })

    exibirOsLivrosNaTela(livrosFiltrados);
}
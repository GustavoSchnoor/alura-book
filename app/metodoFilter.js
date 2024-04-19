const botoes = document.querySelectorAll('.btn'); // Seleciona todos BOTOES com a classe .btn
botoes.forEach(function(btn) { // Para cada botão, dentro de toda array botoes selecionada, para cada um ...
    btn.addEventListener('click', filtrarLivros) // Vamos adicionar um evento de CLICK, e quando clicar, chamaremos a função "filtrarLivros"
})

function filtrarLivros() { // Declaramos a função "filtrarLivros"
    const elementoBtn = document.getElementById(this.id) // "this.id" vai pegar o ID atual do botão clicado (dentre os botoes declarados antes)
    const categoria = elementoBtn.value;

    // ARROW function: livro => { } | Função Anonima: function(livro) { }
    let livrosFiltrados = categoria === 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
        // Usamos o OPERADOR TERNÁRIO, se categoria obtida for igual a disponivel (.value dos botoes) vamos filtrar somente os livros com a quantidade acima de 0
        // SENÃO, vamos filtrar os livros, onde a categoria, corresponderá ao valor passado pela variavel categoria (.value), podendo ser front-end, back-end, dados...
    exibirOsLivrosNaTela(livrosFiltrados);
    
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria === categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}
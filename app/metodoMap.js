function aplicarDesconto(livros) {
    const desconto = 0.3;
        livrosNovoValor = livros.map(livro => {
            return {...livro, // Operador SPREAD "..." faz com que seja copiado todo o objeto correspondente(livro) e SOMENTE ALTERADO o que vier depois, no caso "preco: "
                preco: livro.preco - (livro.preco * desconto)
            }
        })
        return livrosNovoValor; // Esse return livrosNovoValor ja vai conter todas informações do objeto anterior, e alterado somente o valor ja aplicado desconto.
        // O valor será retornado e atribuido a variavel criada no main.js "livrosComDesconto"
}


let livros = [];
const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaApi()



// FAZENDO UMA REQUISIÇÃO | res = response/resposta
async function getBuscarLivrosDaApi() {
    const res = await fetch(endpointDaApi);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros); // função esta no arquivo metodoMap.js
    exibirOsLivrosNaTela(livrosComDesconto); // função esta no arquivo metodoForEach.js
}

const endpoint = "http://localhost:8080/api"

 const rotas = {
    todosLivros : `${endpoint}/livros`,
    porId : `${endpoint}/livros/`,
    criarLivro : `${endpoint}/livros`,
    atualizarLivro : `${endpoint}/livros`,
    deletarLivro : `${endpoint}/livros/`
};

export default rotas;
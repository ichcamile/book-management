import rotas from "./endpoints.enum"

const buscarTodosLivros = async () => {
    try {
        const result = await fetch(rotas.todosLivros);
        const data = await result.json();
        return data;
    } catch (error) {
        console.error("Error fetching books:", error);
        throw error;
    }
}

const buscarLivroPorId = async (id) => {
    try {
        const result = await fetch(`${rotas.porId}${id}`);
        const data = await result.json();
        return data;
    } catch (error) {
        console.error(`Error fetching book with ID ${id}:`, error);
        throw error;
    }
}

const criarLivro = async (livro) => {
    try {
        const result = await fetch(rotas.criarLivro, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(livro),
        });
        const data = await result.json();
        return data;
    } catch (error) {
        console.error("Error creating book:", error);
        throw error;
    }
} 

const atualizarLivro = async (id, livro) => {
    try {
        const result = await fetch(`${rotas.atualizarLivro}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(livro),
        });
        const data = await result.json();
        return data;
    } catch (error) {
        console.error(`Error updating book with ID ${id}:`, error);
        throw error;
    }
}

const deletarLivro = async (id) => {
    try {
        const result = await fetch(`${rotas.deletarLivro}/${id}`, {
            method: 'DELETE',
        });
        if (!result.ok) {
            throw new Error(`Error deleting book with ID ${id}`);
        }
        return true;
    } catch (error) {
        console.error(`Error deleting book with ID ${id}:`, error);
        throw error;
    }
}   
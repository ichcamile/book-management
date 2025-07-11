-- 1. Criar o banco de dados
CREATE DATABASE IF NOT EXISTS biblioteca;
USE biblioteca;

-- 2. Criar a tabela livro
CREATE TABLE IF NOT EXISTS livro (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    isbn VARCHAR(100) NOT NULL,
    ano_publicacao INT NOT NULL,
    capa VARCHAR(500) NOT NULL
);

-- 3. Inclusão dos livros com URL de capas da WEB
INSERT INTO livro (titulo, autor, isbn, ano_publicacao, capa) VALUES
('Dom Casmurro', 'Machado de Assis', '9788594318602', 1899, 'https://m.media-amazon.com/images/I/61Z2bMhGicL.jpg'),
('O Cortiço', 'Aluísio Azevedo', '9788573261586', 1890, 'https://m.media-amazon.com/images/I/61hI7QLrTkL.jpg'),
('Memórias Póstumas de Brás Cubas', 'Machado de Assis', '9788582850506', 1881, 'https://m.media-amazon.com/images/I/71OL9RU2tJL._UF1000,1000_QL80_.jpg'),
('A Moreninha', 'Joaquim Manuel de Macedo', '9788534903151', 1844, 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1483087223i/334246.jpg'),
('Senhora', 'José de Alencar', '9788578883295', 1875, 'https://m.media-amazon.com/images/I/711tJRe6LML.jpg'),
('Iracema', 'José de Alencar', '9788594318619', 1865, 'https://m.media-amazon.com/images/I/81dQ4061MaL.jpg'),
('Lucíola', 'José de Alencar', '9788578883097', 1862, 'https://m.media-amazon.com/images/I/617wC0u9UjL._UF1000,1000_QL80_.jpg'),
('O Guarani', 'José de Alencar', '9788534903106', 1857, 'https://m.media-amazon.com/images/I/61j+vysPQLL._UF1000,1000_QL80_.jpg'),
('Vidas Secas', 'Graciliano Ramos', '9788503010704', 1938, 'https://m.media-amazon.com/images/I/618-b9Im6dL._UF1000,1000_QL80_.jpg'),
('São Bernardo', 'Graciliano Ramos', '9788503010711', 1934, 'https://m.media-amazon.com/images/I/71utqM0TO1L.jpg');

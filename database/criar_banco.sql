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
('São Bernardo', 'Graciliano Ramos', '9788503010711', 1934, 'https://m.media-amazon.com/images/I/71utqM0TO1L.jpg'),
('Fahrenheit 451', 'Ray Bradbury', '9781451673319', 1953, 'https://m.media-amazon.com/images/I/41PVVpQf-sL._SR480,440_.jpg'),
('Admirável Mundo Novo', 'Aldous Huxley', '9780060850524', 1932, 'https://m.media-amazon.com/images/I/41IKTYiymKL._SY445_SX342_PQ80_.jpg'),
('1984', 'George Orwell', '9780451524935', 1949, 'https://images-na.ssl-images-amazon.com/images/I/819js3EQwbL._AC_UL200_SR200,200_.jpg'),
('A Revolução dos Bichos', 'George Orwell', '9780451526342', 1945, 'https://images-na.ssl-images-amazon.com/images/I/91BsZhxCRjL._AC_UL200_SR200,200_.jpg'),
('Jantar Secreto', 'Raphael Montes', '9788501107714', 2016, 'https://m.media-amazon.com/images/I/41xDq3pat9L._SR480,440_.jpg'),
('A Metamorfose', 'Franz Kafka', '9780525566553', 1915, 'https://m.media-amazon.com/images/I/51H+90dUjzL._SR480,440_.jpg'),
('Crime e Castigo', 'Fiódor Dostoiévski', '9788573264549', 1866, 'https://m.media-amazon.com/images/I/71Gmavgu3ZL._AC_UY218_.jpg'),
('Noites Brancas', 'Fiódor Dostoiévski', '9788537809368', 1848, 'https://m.media-amazon.com/images/I/7143D7foVmL._AC_UY218_.jpg'),
('A Morte de Ivan Ilitch', 'Liev Tolstói', '9788573263399', 1886, 'https://m.media-amazon.com/images/I/61zgVBVoqqL._AC_UY218_.jpg'),
('Capitães da Areia', 'Jorge Amado', '9788520933111', 1937, 'https://m.media-amazon.com/images/I/81t7altQZxL._AC_UY218_.jpg'),
('A Hora da Estrela', 'Clarice Lispector', '9788535925183', 1977, 'https://m.media-amazon.com/images/I/61TaHURu27L._AC_UY218_.jpg'),
('O Sol é para Todos', 'Harper Lee', '9780061120084', 1960, 'https://m.media-amazon.com/images/I/91WKPd60P4L._AC_UY218_.jpg'),
('Quincas Borba', 'Machado de Assis', '9788572326910', 1891, 'https://m.media-amazon.com/images/I/61Kt3d+mhuL._AC_UY218_.jpg');

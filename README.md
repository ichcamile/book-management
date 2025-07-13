## 📚 Biblioteca Digital: Sistema Integrado de Gestão de Livros

### 🧩 Visão Geral

Este projeto tem como objetivo a construção de um sistema de gerenciamento de acervo para uma biblioteca municipal. A proposta é resolver os principais desafios relacionados à catalogação e consulta de livros, por meio da implementação de um sistema CRUD completo com interface gráfica e integração a um banco de dados relacional.

### 🚀 Funcionalidades do Sistema

* Cadastro de livros (Create)
* Consulta/listagem de livros (Read)
* Atualização de dados do livro (Update)
* Remoção de livros do acervo (Delete)
* Interface de usuário funcional para interação com o sistema
* Integração completa com banco de dados relacional (MySQL ou similar)


### 🛠️ Tecnologias Utilizadas

* **Java** + **Spring Boot** (Back-end)
* **HTML/CSS/JavaScript** ou framework reutilizado (Front-end)
* **MySQL** (Banco de dados relacional)
* **Maven** (Gerenciamento de dependências)
* **Git/GitHub** (Versionamento)
* IDE: **IntelliJ IDEA**


### 📐 Diagrama de Classes (UML)

O projeto inclui um **diagrama de classes UML** com explicação e justificativa de modelagem aplicando os conceitos de Programação Orientada a Objetos (POO), como:

* Encapsulamento
* Herança
* Polimorfismo
* Abstração

### 📚 Fontes de Pesquisa (Primárias)

1. [Documentação oficial do Spring Boot](https://spring.io/projects/spring-boot)
2. [Artigo: Por que usar Spring Boot para aplicações Java?](https://www.baeldung.com/spring-boot-intro)
3. Livro: "Use a Cabeça! Java" – Kathy Sierra
4. [Vídeo: Spring Boot + CRUD + MySQL](https://www.youtube.com/watch?v=vtPkZShrvXQ)
5. Aulas da disciplina sobre **POO e Modelagem de Classes**



### 🧪 Instruções para Executar Localmente

1. **Clone o repositório**

```bash
git clone https://github.com/ichcamile/book-management.git
```

2. **Configure o banco de dados**

   * MySQL rodando localmente
   * Crie o banco:

     ```sql
     CREATE DATABASE biblioteca;
     ```
   * Atualize o arquivo `application.properties` com suas credenciais

3. **Execute o projeto no IntelliJ (Spring Boot)**

   * Rode a classe `BibliotecaGestaoApplication`

4. **Acesse a aplicação**

   * Via Postman ou Front-end integrado


### 📦 Licença

Este projeto é de cunho educacional e foi desenvolvido como parte da disciplina de Programação Orientada a Objetos.

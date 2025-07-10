package org.example.bibliotecagestao.controller;

import org.example.bibliotecagestao.model.Livro;
import org.example.bibliotecagestao.repositorio.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/livros")
@CrossOrigin(origins = "*")
public class LivroController {

    @Autowired
    private LivroRepository livroRepository;

    // Listar todos os livros
    @GetMapping
    public List<Livro> listarTodos() {
        return livroRepository.findAll();
    }

    // Buscar livro por ID
    @GetMapping("/{id}")
    public ResponseEntity<Livro> buscarPorId(@PathVariable Long id) {
        Optional<Livro> livro = livroRepository.findById(id);
        return livro.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Criar novo livro
    @PostMapping
    public Livro criarLivro(@RequestBody Livro livro) {
        return livroRepository.save(livro);
    }

    // Atualizar parcialmente (PATCH)
    @PatchMapping("/{id}")
    public ResponseEntity<Livro> atualizarParcial(@PathVariable Long id, @RequestBody Livro livroAtualizado) {
        return livroRepository.findById(id).map(livro -> {
            if (livroAtualizado.getTitulo() != null) livro.setTitulo(livroAtualizado.getTitulo());
            if (livroAtualizado.getAutor() != null) livro.setAutor(livroAtualizado.getAutor());
            if (livroAtualizado.getIsbn() != null) livro.setIsbn(livroAtualizado.getIsbn());
            if (livroAtualizado.getAnoPublicacao() != 0) livro.setAnoPublicacao(livroAtualizado.getAnoPublicacao());
            if (livroAtualizado.getCapa() != null) livro.setCapa(livroAtualizado.getCapa());

            Livro salvo = livroRepository.save(livro);
            return ResponseEntity.ok(salvo);
        }).orElse(ResponseEntity.notFound().build());
    }

    // Deletar livro
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarLivro(@PathVariable Long id) {
        return livroRepository.findById(id).map(livro -> {
            livroRepository.delete(livro);
            return ResponseEntity.noContent().<Void>build();
        }).orElse(ResponseEntity.notFound().build());
    }
}

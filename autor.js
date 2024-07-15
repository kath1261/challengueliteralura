package com.alura.literalura.model;

import jakarta.persistence.*;
import java.util.Objects;
import java.util.List;

@Entity
public class Author {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;

    @OneToMany(mappedBy = "author")
    private List<Book> books;

    // Getters, Setters, equals, hashCode y toString
}

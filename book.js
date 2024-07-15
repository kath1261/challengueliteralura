package com.alura.literalura.model;

import jakarta.persistence.*;
import java.util.Objects;

@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @ManyToOne
    private Author author;

    private String language;
    private int downloads;

    // Getters, Setters, equals, hashCode y toString
}

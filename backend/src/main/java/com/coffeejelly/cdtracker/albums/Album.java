package com.coffeejelly.cdtracker.albums;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.springframework.context.annotation.EnableLoadTimeWeaving;

@Entity
public class Album {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String artist;

    public Album(String title, String artist){
        this.title= title;
        this.artist=artist;
    }

    public Long getId() {
        return id;
    }

    public String getTitle(){
        return title;
    }
    public String getArtist(){
        return artist;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }
    public void setArtist(String artist){
        this.artist = artist;
    }
}

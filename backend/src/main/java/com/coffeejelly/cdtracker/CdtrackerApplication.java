package com.coffeejelly.cdtracker;

import com.coffeejelly.cdtracker.albums.Album;
import com.coffeejelly.cdtracker.albums.AlbumRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CdtrackerApplication {

	public static void main(String[] args) {
		SpringApplication.run(CdtrackerApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(AlbumRepository albumRepository){
		return args -> {
			if (albumRepository.count() == 0) {
				albumRepository.save(new Album("Revengeseekerz", "Jane Remover"));
			}
		};
	}
}

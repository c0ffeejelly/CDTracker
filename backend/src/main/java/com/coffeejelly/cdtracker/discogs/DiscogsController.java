package com.coffeejelly.cdtracker.discogs;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

@RestController
@RequestMapping("/api/discogs")

public class DiscogsController {

    @Value("${discogs.token}")
    private String discogsToken;

    @GetMapping("/search")
    public ResponseEntity<String> searchAlbums(@RequestParam String query){
        String url = "https://api.discogs.com/database/search?q=" + URLEncoder.encode(query, StandardCharsets.UTF_8)
             + "&type=release";

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Discogs token=" + discogsToken);

        HttpEntity<Void> entity = new HttpEntity<>(headers);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
        return response;
    }
}

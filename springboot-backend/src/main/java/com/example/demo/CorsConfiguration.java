package com.example.demo;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class CorsConfiguration implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry
            .addMapping("/**") // Allow CORS for all endpoints
            .allowedOrigins("http://localhost:3000") // Allow requests from this origin
            .allowedMethods("GET", "POST", "PUT", "DELETE") // Allow these HTTP methods
            .allowedHeaders("*"); // Allow all headers
    }
}


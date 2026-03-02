package com.example.ecom;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/products")
public class ProductController {

  @GetMapping
  public List<Product> getProducts() {
    return List.of(
        new Product(1L, "Lunar Running Shoes", "Lightweight sneakers with responsive cushioning.", 129.00),
        new Product(2L, "Aurora Smartwatch", "Track workouts, sleep, and notifications in style.", 249.00),
        new Product(3L, "Nebula Backpack", "Weather-resistant backpack with laptop sleeve.", 89.00)
    );
  }
}

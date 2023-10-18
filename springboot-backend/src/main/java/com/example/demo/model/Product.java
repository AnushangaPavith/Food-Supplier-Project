package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "products")

public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private Double price;

    @Column(name = "quantity")
    private Long quantity;

    @Column(name = "discount_price")
    private Double discountPrice;

    @Column(name = "discount_percentage")
    private Double discountPercentage;

    

    public Product() {
    }

    public Product(String name, String description, Double price, Long quantity, Double discountPrice, Double discountPercentage) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.discountPrice = discountPrice;
        this.discountPercentage = discountPercentage;
        
    }
    
    public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

 // Getter and Setter for 'description'
 public String getDescription() {
     return description;
 }

 public void setDescription(String description) {
     this.description = description;
 }

 // Getter and Setter for 'price'
 public Double getPrice() {
     return price;
 }

 public void setPrice(Double price) {
     this.price = price;
 }

 // Getter and Setter for 'quantity'
 public Long getQuantity() {
     return quantity;
 }

 public void setQuantity(Long quantity) {
     this.quantity = quantity;
 }

 // Getter and Setter for 'discountPrice'
 public Double getDiscountPrice() {
     return discountPrice;
 }

 public void setDiscountPrice(Double discountPrice) {
     this.discountPrice = discountPrice;
 }

 // Getter and Setter for 'discountPercentage'
 public Double getDiscountPercentage() {
     return discountPercentage;
 }

 public void setDiscountPercentage(Double discountPercentage) {
     this.discountPercentage = discountPercentage;
 }



}



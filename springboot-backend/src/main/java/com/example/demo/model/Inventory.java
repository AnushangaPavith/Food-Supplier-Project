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

    @Column(name = "category")
    private String category;
    
    @Column(name = "nutritional_information")
    private String nutritionalInformation;
    
   // @Column(name = "product_availability")
    //private boolean productAvailability;    

    public Product() {
    }

    public Product(String name, String description, Double price, Long quantity, String category, String nutritionalInformation, boolean productAvailability) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.category = category;
        this.nutritionalInformation = nutritionalInformation;
       // this.productAvailability = productAvailability;
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

 // Getter and Setter for 'Category'
//Getter and Setter for 'category'
public String getCategory() {
  return category;
}

public void setCategory(String category) {
  this.category = category;
}
//Getter and Setter for 'nutritionalInformation'
public String getNutritionalInformation() {
 return nutritionalInformation;
}

public void setNutritionalInformation(String nutritionalInformation) {
 this.nutritionalInformation = nutritionalInformation;
}
//Getter and Setter for 'productAvailability'
//public boolean isProductAvailability() {
// return productAvailability;
//}
//
//public void setProductAvailability(boolean productAvailability) {
// this.productAvailability = productAvailability;
//}


 // Getter and Setter for 'discountPercentage'
 



}



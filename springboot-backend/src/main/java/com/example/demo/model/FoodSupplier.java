package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
//import java.util.Date;

@Entity
@Table(name = "foodSupplier")

public class FoodSupplier{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    

    

    public FoodSupplier() {
    }

    public FoodSupplier(String name) {
        this.name = name;
        
        
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

 



}



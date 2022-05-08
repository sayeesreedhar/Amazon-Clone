package com.amazonclone.products.repositories;

import java.math.BigInteger;
import java.util.ArrayList;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.amazonclone.products.entities.Products;



public interface Productrepository extends MongoRepository<Products,BigInteger> {
	public Products save(Products product);
	public ArrayList<Products> findAll();

}


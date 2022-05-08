package com.amazonclone.products.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amazonclone.products.entities.Products;
import com.amazonclone.products.repositories.Productrepository;



@Service
public class Productservice {
	@Autowired
	Productrepository r;
public Products addproduct(Products product) {
	return r.save(product);
}
public ArrayList<Products> showall(){
	return r.findAll();
}
}

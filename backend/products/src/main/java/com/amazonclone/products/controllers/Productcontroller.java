package com.amazonclone.products.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.amazonclone.products.entities.Products;
import com.amazonclone.products.services.Productservice;


@RestController
@RequestMapping("/product")
public class Productcontroller {
	@Autowired
	Productservice s;

@PostMapping("/add")
public Products addproduct(@RequestBody Products product) {
	return s.addproduct(product);
}
@GetMapping("/all")
public ArrayList<Products> showallproducts(){
	return s.showall();
}
}

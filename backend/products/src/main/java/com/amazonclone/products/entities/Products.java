package com.amazonclone.products.entities;

import java.math.BigInteger;



import org.springframework.data.annotation.Id;

public class Products {
@Id

private BigInteger id;
private String pid;
private String name;
private String brand;
private String category;
private int price;
private int discount;
private int rating;
private String seller;
private String productimg;
public BigInteger getId() {
	return id;
}
public void setId(BigInteger id) {
	this.id = id;
}
public String getPid() {
	return pid;
}
public void setPid(String pid) {
	this.pid = pid;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getCategory() {
	return category;
}
public void setCategory(String category) {
	this.category = category;
}
public int getPrice() {
	return price;
}
public void setPrice(int price) {
	this.price = price;
}
public int getDiscount() {
	return discount;
}
public void setDiscount(int discount) {
	this.discount = discount;
}
public int getRating() {
	return rating;
}
public void setRating(int rating) {
	this.rating = rating;
}
public String getSeller() {
	return seller;
}
public void setSeller(String seller) {
	this.seller = seller;
}
public String getImg() {
	return img;
}
public void setImg(String img) {
	this.img = img;
}
public String[] getDescription() {
	return description;
}
public void setDescription(String[] description) {
	this.description = description;
}
public int getRatingcnt() {
	return ratingcnt;
}
public void setRatingcnt(int ratingcnt) {
	this.ratingcnt = ratingcnt;
}
public int getEmi() {
	return emi;
}
public void setEmi(int emi) {
	this.emi = emi;
}
public Products() {
	super();
	// TODO Auto-generated constructor stub
}
private String img;
private String[] description;
private int ratingcnt;
private int emi;
public Products(BigInteger id, String pid, String name, String category, int price, int discount, int rating, String seller,
		String img, String[] description, int ratingcnt, int emi) {
	super();
	this.id = id;
	this.pid = pid;
	this.name = name;
	this.category = category;
	this.price = price;
	this.discount = discount;
	this.rating = rating;
	this.seller = seller;
	this.img = img;
	this.description = description;
	this.ratingcnt = ratingcnt;
	this.emi = emi;
}
public String getBrand() {
	return brand;
}
public void setBrand(String brand) {
	this.brand = brand;
}
public String getProductimg() {
	return productimg;
}
public void setProductimg(String productimg) {
	this.productimg = productimg;
}
}

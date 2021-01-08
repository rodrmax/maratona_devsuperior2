package com.corpmax.entrega_rapida.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.corpmax.entrega_rapida.DTO.ProductDTO;
import com.corpmax.entrega_rapida.services.ProductService;

@RestController
@RequestMapping(value = "/products")
public class ProductController {
	
	@Autowired
	private ProductService service;
	
	@GetMapping
	public ResponseEntity<List<ProductDTO>> findAll(){
		
		List<ProductDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
		
	}
}

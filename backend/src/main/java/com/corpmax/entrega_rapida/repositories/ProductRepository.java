package com.corpmax.entrega_rapida.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.corpmax.entrega_rapida.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
	
	List<Product> findAllByOrderByNameAsc();
	
}



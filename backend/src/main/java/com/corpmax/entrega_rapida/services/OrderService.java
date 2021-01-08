package com.corpmax.entrega_rapida.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.corpmax.entrega_rapida.DTO.OrderDTO;
import com.corpmax.entrega_rapida.entities.Order;
import com.corpmax.entrega_rapida.repositories.OrderRepository;


@Service
public class OrderService {
	
	@Autowired
	private OrderRepository repository;

	@Transactional(readOnly = true)
	public List<OrderDTO> findAll(){
	
		List<Order> list = repository.findOrdersWithProducts();
		
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
		
	}
}

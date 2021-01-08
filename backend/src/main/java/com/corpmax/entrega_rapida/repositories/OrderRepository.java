package com.corpmax.entrega_rapida.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.corpmax.entrega_rapida.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}



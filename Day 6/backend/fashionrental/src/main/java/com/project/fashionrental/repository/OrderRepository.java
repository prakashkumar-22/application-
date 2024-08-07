package com.project.fashionrental.repository;

import com.project.fashionrental.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order,Long> {

    
}
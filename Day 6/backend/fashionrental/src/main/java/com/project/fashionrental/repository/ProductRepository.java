package com.project.fashionrental.repository;

import com.project.fashionrental.model.*;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Long> {

    
}
// pages/shop.js

import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import ProductCard from '@/components/ProductCard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import lomangthang from "../images/lomangthang.jpg"
import manag from "../images/manag.jpg"
import biker from "../images/biker.jpeg"
import { Box } from '@mui/system';
import { Router, useRouter } from 'next/router';
import Header from '@/components/Header';




const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const [cartCount, setCartCount] = useState(0);
const [cartItems, setCartItems] = useState([])
const [services, setServices] = useState([])
const router = useRouter()
const productsPerPage = 6;
const totalPages = Math.ceil(services.length / productsPerPage);

  const handlePrevPage = () => setCurrentPage(currentPage - 1);
  const handleNextPage = () => setCurrentPage(currentPage + 1);
  const goToPage = (pageNumber) => setCurrentPage(pageNumber);

  const getPageProducts = () => {
      const startIndex = (currentPage - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
      return services.slice(startIndex, endIndex);
  };



const calculateTotalAmount = () => {
  return cartItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0).toFixed(2);

}

const handleCheckout = () => {
  const queryParams = new URLSearchParams()
  // ADD selected products as query params
  cartItems.forEach((item, index) => {
    queryParams.append(`product${index +1}`, JSON.stringify(item))
  })

  queryParams.append('totalAmount', calculateTotalAmount())

  router.push({
    pathname: '/checkout',
    search: `?${queryParams.toString()}`
  })
}

useEffect(() => {
  fetch('http://localhost:5000/api/services')
  .then((response) => response.json())
  .then(data => setServices(data))
  .catch(error => console.error('Error fetching services', error))
}, [])
  return (
    <Box>
        <Header />
      <div className="shop">
          <Box sx={{ position: 'fixed', top: 0, right: 0, zIndex: 9999, m: 2 }}>
          
   
    

          </Box>

          <Typography variant="h3" sx={{ mt: 4 }}>What we offer</Typography>

          <Grid container spacing={3}>
              {services.map((product) => (
                
                  <Grid item xs={12} sm={6} md={4} key={product.id}>
                      <ProductCard product={product}  />
                      
                  </Grid>
              ))}
          </Grid>

          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <Button variant='outlined' disabled={currentPage === 1} onClick={handlePrevPage}>Prev</Button>
              {Array.from({ length: totalPages }).map((_, index) => (
                  <Button key={index + 1} variant={currentPage === index + 1 ? "contained" : "outlined"} onClick={() => goToPage(index + 1)}>{index + 1}</Button>
              ))}
              <Button variant='outlined' disabled={currentPage === totalPages} onClick={handleNextPage}>Next</Button>
          </div>
      </div>
      </Box>
  );
};

export default Shop;
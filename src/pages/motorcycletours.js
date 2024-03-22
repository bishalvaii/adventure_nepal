// pages/shop.js

import React, { useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import ProductCard from '@/components/ProductCard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import lomangthang from "../images/lomangthang.jpg"
import manag from "../images/manag.jpg"
import biker from "../images/biker.jpeg"
import { Box } from '@mui/system';
import { Router, useRouter } from 'next/router';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description for Product 1',
    price: '28',
    image: manag,
    elevation: '2000-5000m',
    duration: '8 days tour',
    thumbnail_text: 'Ride to manang'
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description for Product 2',
    price: '28',
    image: lomangthang,
    elevation: '2000-5000m',
    duration: '8 days tour',
    thumbnail_text: 'Ride to manang'
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description for Product 3',
    price: '28',
    image: biker,
    elevation: '2000-5000m',
    duration: '8 days tour',
    thumbnail_text: 'Ride to manang'
  },
  {
    id: 4,
    name: 'Product 1',
    description: 'Description for Product 1',
    price: '28',
    image: manag,
    elevation: '2000-5000m',
    duration: '8 days tour',
    thumbnail_text: 'Ride to manang'
  },
  {
    id: 5,
    name: 'Product 2',
    description: 'Description for Product 2',
    price: '28',
    image: lomangthang,
    elevation: '2000-5000m',
    duration: '8 days tour',
    thumbnail_text: 'Ride to manang'
  },
  {
    id: 6,
    name: 'Product 3',
    description: 'Description for Product 3',
    price: '28',
    image: biker,
    elevation: '2000-5000m',
    duration: '8 days tour',
    thumbnail_text: 'Ride to manang'
  },
  {
    id: 7,
    name: 'Product 3',
    description: 'Description for Product 3',
    price: '28',
    image: biker,
    elevation: '2000-5000m',
    duration: '8 days tour',
    thumbnail_text: 'Ride to manang'
  },
  
]
const productsPerPage = 6

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / productsPerPage);
  const [cartCount, setCartCount] = useState(0);
const [cartItems, setCartItems] = useState([])
const router = useRouter()

  const handlePrevPage = () => setCurrentPage(currentPage - 1);
  const handleNextPage = () => setCurrentPage(currentPage + 1);
  const goToPage = (pageNumber) => setCurrentPage(pageNumber);

  const getPageProducts = () => {
      const startIndex = (currentPage - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
      return products.slice(startIndex, endIndex);
  };

const addToCart = (product) => {
  setCartItems([...cartItems, product])
  setCartCount(cartCount + 1)
}

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
  return (
      <div className="shop">
          <Box sx={{ position: 'fixed', top: 0, right: 0, zIndex: 9999, m: 2 }}>
          
   
    

          </Box>

          <Typography variant="h3" sx={{ mt: 4 }}>Motorcycle tours</Typography>

          <Grid container spacing={3}>
              {getPageProducts().map((product) => (
                  <Grid item xs={12} sm={6} md={4} key={product.id}>
                      <ProductCard product={product} addToCart={addToCart} />
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
  );
};

export default Shop;
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Button, Typography, Box } from '@mui/material';
import Header from '@/components/Header';

const ProductPage = () => {
  const backendBaseUrl = 'http://localhost:5000'; // Base URL for the backend

  const router = useRouter();
  const { id } = router.query; // Get the id parameter from the URL

  const [product, setProduct] = useState(null);

  // Fetch product data based on the id
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/api/services/${id}`) // Adjust the API endpoint URL accordingly
        .then(response => response.json())
        .then(data => setProduct(data))
        .catch(error => console.error('Error fetching product:', error));
    }
  }, [id]);

  const navigateToBooking = () => {
     // Navigate to the Booking page and pass product details as query parameters
     router.push({
      pathname: '/booking',
      query: {
        service_name: product.name,
        duration: product.duration,
        description: product.description,
        price: product.price,
        imageUrl: product.image_url,
     
      }
    });
  }
console.log(product)
  return (
    <Box>
      <Header />
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        {product && (
          <Box display="flex" alignItems="center">
            <Box flex="1">
              <div style={{ margin: '1rem' }}>
                <Image
                      src={`${backendBaseUrl}${product.image_url}`} // Use the full URL for the image
                      alt={product.name} width={ 500} height={ 450 } />
              </div>
            </Box>
            <Box flex="1" textAlign="left" ml={4}>
              <Typography sx={{fontWeight: 'bold'}} variant="h4" gutterBottom>
                 {product.duration} days
              </Typography>
              <Typography variant="body1" gutterBottom>
                {product.name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {product.description}
              </Typography>
              <Typography variant="h4" gutterBottom>
                Price: Rs.{product.price}
              </Typography>
              <Button variant="contained" sx={{bgcolor: "#596398"}} onClick={navigateToBooking}>
                Book Now
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ProductPage;

// pages/[id].js

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Button, Typography, Box } from '@mui/material';

const ProductPage = () => {
  
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
        name: product.thumbnail_text,
        duration: product.duration,
        description: product.description,
        price: product.price,
        imageUrl: product.image.url,
        imageWidth: product.image.width,
        imageHeight: product.image.height
      }
    });
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <div>
        {product ? (
          <div style={{ textAlign: 'center' }}>
            <Typography variant="h3" gutterBottom>
              {product.thumbnail_text} {product.duration}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {product.description}
            </Typography>
            <Typography variant="h4" gutterBottom>
              Price: ${product.price}
            </Typography>
            <div style={{ margin: '1rem' }}>
              <Image src={product.image.url} alt={product.name} width={product.image.width + 300} height={product.image.height + 120} />
            </div>
            <Button variant="contained" sx={{bgcolor: "#596398"}} onClick={navigateToBooking}>
              Book Now
            </Button>
            {/* Add more details as needed */}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Box>
  );
};

export default ProductPage;

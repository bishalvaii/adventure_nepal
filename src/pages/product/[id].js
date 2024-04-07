import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Button, Typography, Box } from '@mui/material';
import Header from '@/components/Header';

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
        service_name: product.thumbnail_text,
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
    <Box>
      <Header />
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        {product && (
          <Box display="flex" alignItems="center">
            <Box flex="1">
              <div style={{ margin: '1rem' }}>
                <Image src={product.image.url} alt={product.name} width={product.image.width + 300} height={product.image.height + 150 } />
              </div>
            </Box>
            <Box flex="1" textAlign="left" ml={4}>
              <Typography sx={{fontWeight: 'bold'}} variant="h4" gutterBottom>
                {product.thumbnail_text} {product.duration}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {product.description}
              </Typography>
              <Typography variant="h4" gutterBottom>
                Price: ${product.price}
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

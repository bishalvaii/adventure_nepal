import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import { Box } from '@mui/system';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  const backendBaseUrl = 'http://localhost:5000'; // Base URL for the backend

  console.log(`${backendBaseUrl}${product.image_url}`)
  return (
    <Link href={`/product/${product.id}`} passHref>
      <Card sx={{ maxWidth: 300, margin: '1rem', borderRadius: '12px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
        <Box sx={{ margin: 'auto', marginTop: '1rem', borderRadius: '12px', position: 'relative', width: 300, height: 300 }}>
          <Image
            src={ `${backendBaseUrl}${product.image_url}`  } // Use the full URL for the image

            alt={product.name}
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: '12px' }}
          />
          <CardContent sx={{ position: 'absolute', textAlign: 'center', bottom: '0', left: '0', width: '100%', backgroundColor: '#596398', color: 'white', padding: '8px' }}>
            <Typography variant="h6" color="white" gutterBottom>
              Elevation: {product.elevation}
            </Typography>
            <Typography variant="h6" color="white">
              Rs {product.price} per person
            </Typography>
          </CardContent>
        </Box>
        <Box
          bgcolor="#596398"
          p={2}
          textAlign="center"
          sx={{
            position: 'absolute',
            top: '0',
            right: '0',
            borderRadius: '8px',
            color: 'white',
          }}
        >
          <Typography sx={{ fontWeight: 'bold', fontFamily: 'Poppins' }} variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography sx={{ mt: 1, fontWeight: 'bold', fontFamily: 'Poppins' }} variant="h6" gutterBottom>
            {product.duration} days
          </Typography>
        </Box>
      </Card>
    </Link>
  );
};

export default ProductCard;

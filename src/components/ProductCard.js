import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import Image from 'next/image';
import { Box } from '@mui/system';

const ProductCard = ({ product }) => (
  <Card sx={{ maxWidth: 300, margin: '1rem', borderRadius: '12px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
    <div style={{ margin: 'auto', marginTop: '1rem', borderRadius: '12px', position: 'relative' }}>
      <Image src={product.image} alt={product.name} width={400} height={300} style={{ borderRadius: '12px' }} />
      <CardContent style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', backgroundColor: 'purple', color: 'white', padding: '8px' }}>
      <Typography variant="body2" color='white' gutterBottom>
        Elevation: {product.elevation}
      </Typography>
        <Typography variant="body2" color='white' gutterBottom>
          Duration: {product.duration}
        </Typography>
      </CardContent>
    </div>
    
    <Box bgcolor="purple" p={2} textAlign="center" style={{ position: 'absolute', top: '0', right: '0' }}>
      <Typography variant="body2" color='text.secondary' gutterBottom>
          {product.thumbnail_text}
        </Typography>
    
      <Typography variant="h6" color='white'>
        ${product.price}
      </Typography>
    </Box>
  </Card>
);


export default ProductCard;

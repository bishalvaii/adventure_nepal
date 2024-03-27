import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import Image from 'next/image';
import { Box } from '@mui/system';
import Link from 'next/link';

const ProductCard = ({ product }) => (
  
  <Link href={`/product/${product.id}`} passHref> {/* Wrap the Card component with Link */}
    <a>
      <Card sx={{ maxWidth: 300, margin: '1rem', borderRadius: '12px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', position: 'relative', bgcolor: '' }}>
        <div style={{ margin: 'auto', marginTop: '1rem', borderRadius: '12px', position: 'relative' }}>
          <Image src={product.image.url} alt={product.name} width={product.image.width} height={product.image.height} />
          <CardContent style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', backgroundColor: '#596398', color: 'white', padding: '8px' }}>
            <Typography variant="body2" color='white' gutterBottom>
              Elevation: {product.elevation}
            </Typography>
            <Typography variant="body2" color='white' gutterBottom>
              Duration: {product.duration}
            </Typography>
          </CardContent>
        </div>
        <Box bgcolor="" p={2} textAlign="center" style={{ position: 'absolute', top: '0', right: '0' }}>
          <Typography sx={{ml: 12}}variant="h5" color='white' gutterBottom>
            {product.thumbnail_text}
          </Typography>
          <Typography sx={{ml: 20}}variant="h5" color='white'>
            ${product.price}
          </Typography>
        </Box>
      </Card>
    </a>
  </Link>
);


export default ProductCard;

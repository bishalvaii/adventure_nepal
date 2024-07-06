import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [services, setServices] = useState([]);
  const [sortOrder, setSortOrder] = useState('');

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const sortedServices = [...services].sort((a, b) => {
    if (sortOrder === 'highToLow') {
      return b.price - a.price;
    }
    if (sortOrder === 'lowToHigh') {
      return a.price - b.price;
    }
    return 0;
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/services')
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error('Error fetching services', error));
  }, []);

  return (
    <Box sx={{ ml: 4, mb: 2 }}>
      <Typography variant="h4" gutterBottom>
        What we offer
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
        <Typography>Filter tours by price</Typography>
        <FormControl fullWidth>
          <InputLabel id="sort-select-label">Sort by</InputLabel>
          <Select
            labelId="sort-select-label"
            id="sort-select"
            value={sortOrder}
            label="Sort by"
            onChange={handleSortChange}
          >
            <MenuItem value="highToLow">High to Low</MenuItem>
            <MenuItem value="lowToHigh">Low to High</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', mt: 4 }}>
        {sortedServices.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  );
};

export default ProductList;

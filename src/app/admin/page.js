import React from 'react';
import { Button, Link, Box, Typography } from '@mui/material';

const AdminPage = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: 2, 
        mt: 4 
      }}
    >
      <Typography>Welcome Admin!</Typography>
      <Link href="/admin/bookings" sx={{ textDecoration: 'none', width: '50%' }}>
        <Button 
          variant="contained" 
          color="secondary" 
          fullWidth 
          sx={{ bgcolor: '#596398' }}
        >
          View bookings
        </Button>
      </Link>
      <Link href="/admin/payments" sx={{ textDecoration: 'none', width: '50%' }}>
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth
          sx={{ bgcolor: '#283593' }}
        >
          View payments
        </Button>
      </Link>
      <Link href="/admin/add-tours" sx={{ textDecoration: 'none', width: '50%' }}>

      <Button 
        variant="outlined" 
        color="success" 
        sx={{ borderColor: '#388e3c', color: '#388e3c', width: '50%' }}
      >
         Tour Actions
      </Button>
      </Link>
    </Box>
  );
};

export default AdminPage;

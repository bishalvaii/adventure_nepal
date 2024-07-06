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
        gap: 3, 
        mt: 8, 
        p: 4,
        bgcolor: '#f5f5f5',
        borderRadius: 2,
        boxShadow: 1,
        width: '80%',
        mx: 'auto'
      }}
    >
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold', color: '#333' }}>
        Welcome Admin!
      </Typography>
      <Link href="/admin/bookings" sx={{ textDecoration: 'none', width: '80%' }}>
        <Button 
          variant="contained" 
          color="secondary" 
          sx={{ bgcolor: '#596398', width: '100%', py: 1.5, fontSize: '1rem' }}
        >
          View bookings
        </Button>
      </Link>
      <Link href="/admin/payments" sx={{ textDecoration: 'none', width: '80%' }}>
        <Button 
          variant="contained" 
          color="primary" 
          sx={{ bgcolor: '#283593', width: '100%', py: 1.5, fontSize: '1rem' }}
        >
          View payments
        </Button>
      </Link>
      <Link href="/admin/add-tours" sx={{ textDecoration: 'none', width: '80%' }}>
        <Button 
          variant="outlined" 
          color="success" 
          sx={{ borderColor: '#388e3c', color: '#388e3c', width: '100%', py: 1.5, fontSize: '1rem' }}
        >
          Tour Actions
        </Button>
      </Link>
    </Box>
  );
};

export default AdminPage;

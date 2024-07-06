import React from 'react'
import { AppBar, Avatar, Box, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Header from '@/components/Header';



const contact = () => {
  const router = useRouter();
  const navigateToShop = () => {
    router.push('/shop');
  };

  const navigateToAboutUs = () => {
    router.push('/aboutus')
  }

  const navigateToContact = () => {
    router.push('/contact')
  }
  const navigateToHome = () => {
    router.push('/dashboard')
  }
  return (
    <>
      <Header />

      <Box mt={10} >


        {/* Right side: Heading and Description */}
        <Box ml={5} mb={10} maxWidth={700}>
          <Typography variant="h4" sx={{ fontWeight: 400, fontSize: '50px' }} gutterBottom>
            Contact us
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 300, fontSize: '20px' }} >
            Need help? Our Advenute Nepal Support Team is here for you!
            <br />
            <br />
            Chat with us live or call +977 9840006781, Monday–Friday, 7am–4pm PT.
            <br />
            <br />
            You can also reach us at hello@advenutenepal.com.


          </Typography>

        </Box>
      </Box>
    </>

  )
}

export default contact
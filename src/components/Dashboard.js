import { AppBar, Avatar, Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Image from 'next/image';
import heroimgage from '../images/heroimage.jpg';
import adventure from "../images/adventure.webp";
import tourguide from "../images/tourguide.jpg";
import { Facebook, Instagram, Pinterest } from '@mui/icons-material';
import { useRouter } from 'next/router';
import vip from "../images/vip.png"
import Header from './Header';
import {  useState } from 'react';
import ProductList from './ProductList';



const Dashboard = () => {
  const router = useRouter();
  const navigateToTours = () => {
    router.push('/motorcycletours');
  };

  const navigateToAboutUs = () => {
    router.push('/aboutus')
  }
  const navigateToContact = () => {
    router.push('/contact')
  }
  const handleNavigate = (url) => {
    window.open(url, '_blank');
  };


  const navigateToTourInfo = () => {
    router.push('/tourinfo')
  }
  const navigateToHome = () => {
    router.push('/dashboard')
  }

 
  return (
    <>
      {/* Navbar */}
      <Header />

      {/* Hero section */}
      <Box position="relative" height={400}>
        <Image
          src={heroimgage}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
        />
        <Box position="absolute" top="50%" transform="translate(-50%, -50%)" textAlign="center" width="100%">
          <Typography variant="h3" component="h2" gutterBottom sx={{fontWeight: 'bold'}}>
            Adventure is worthwhile
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            Adventure nepal is the one through which you can travel to dreamy destinations
          </Typography>
          <Button variant="contained" style={{ backgroundColor: '#D9D9D9', color: 'black' }} onClick={navigateToContact}>
            Contact us
          </Button>
        </Box>
      </Box>

      {/* Description text */}
      <>
        <Box display="flex" justifyContent="space-between" my={4} mx={30}>
          {/* Text with images */}
          <Box display="flex" flexDirection="column" alignItems="center" boxShadow="0px 4px 8px rgba(0, 0, 0, 0.25)" borderRadius="8px" bgcolor="white" p={2}>
            <Image src={adventure} alt="Vegan Image" width={50} height={50} />
            <Typography variant="body1" component="p">
              Real Adventure
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center" boxShadow="0px 4px 8px rgba(0, 0, 0, 0.25)" borderRadius="8px" bgcolor="white" p={2}>
            <Image src={tourguide} alt="Cruelty-Free Image" width={50} height={50} />
            <Typography variant="body1" component="p">
              Professional guide
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center" boxShadow="0px 4px 8px rgba(0, 0, 0, 0.25)" borderRadius="8px" bgcolor="white" p={2}>
            <Image src={vip} alt="Clean Beauty Image" width={80} height={80} />
            <Typography variant="body1" component="p">
              VIP packages
            </Typography>
          </Box>
          {/* Add the remaining Box components for other text with images */}
        </Box>
      </>

<ProductList />


      <Box display="flex" bgcolor="#DEC5B7" py={4} justifyContent="space-around">
        <Box textAlign="center">
          <Typography variant="h5" gutterBottom>
            Get in touch
          </Typography>
          <Typography variant="body1">
            Address: Lakeside-6, Pokhara, Nepal
            <br />
            <br />
            Phone: +977 9861045634
            <br />
            <br />
            Email: info@adventurenepal.com
          </Typography>
        </Box>
        <Box textAlign="center" mb={2}>
          <Typography variant="h5" gutterBottom>
            Quick links
          </Typography>
          <Typography onClick={navigateToTourInfo}variant="body1" >
            Tour info
            </Typography>
            <br />
            <Typography onClick={navigateToTours}>
            Motorcycle tours
            </Typography>
            <br />
            <Typography onClick={navigateToHome}>
            Home
            </Typography>
            <br />
            <Typography onClick={navigateToAboutUs}>
            About us
          </Typography>
        </Box>




        <Box position="absolute" >
          <IconButton color="inherit" aria-label="facebook" onClick={() => handleNavigate('https://www.facebook.com')}>
            <Facebook />
          </IconButton>
          <IconButton color="inherit" aria-label="instagram" onClick={() => handleNavigate('https://www.instagram.com')}>
            <Instagram />
          </IconButton>
          <IconButton color="inherit" aria-label="pinterest" onClick={() => handleNavigate('https://www.pinterest.com')}>
            <Pinterest />
          </IconButton>
        </Box>
      </Box>
      <Box textAlign="center" alignItems="center" justifyContent='center'>
        <Typography>© Copyright 2024 Adventure Nepal. All rights reserved </Typography>
      </Box>

    </>
  );
};

export default Dashboard;

import { AppBar, Avatar, Box, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Image from 'next/image';
import heroimgage from '../images/heroimage.jpg';
import adventure from "../images/adventure.webp";
import tourguide from "../images/tourguide.jpg";
import lomangthang from "../images/lomangthang.jpg"
import manag from "../images/manag.jpg"
import biker from "../images/biker.jpeg"
import { Facebook, Instagram, Pinterest } from '@mui/icons-material';
import { useRouter } from 'next/router';
import vip from "../images/vip.png"
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description for Product 1',
    price: '28',
    image: manag,
    elevation: '2000-5000m',
    duration: '8 days tour',
    thumbnail_text: 'Ride to manang'
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description for Product 2',
    price: '28',
    image: lomangthang,
    elevation: '2000-5000m',
    duration: '8 days tour',
    thumbnail_text: 'Ride to manang'
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description for Product 3',
    price: '28',
    image: biker,
    elevation: '2000-5000m',
    duration: '8 days tour',
    thumbnail_text: 'Ride to manang'
  },
  
]

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
  const navigateToHome = () => {
    router.push('/dashboard')
  }
      return (
        <>
            {/* Navbar */}
            <AppBar position="static" sx={{ bgcolor: "#DEC5B7" }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* Left section */}

                    <Typography variant="h6" component="div" sx={{ mr: 25 }}>
                        Adventure Nepal
                    </Typography>

                    <Box style={{ display: 'flex', gap: '20px', justifyContent: 'space-between', alignItems: 'center' }}>
                       <Button onClick={navigateToHome}>
                        <Typography variant="h6" component="div">
                            Home
                        </Typography>
                        </Button>
                        <Button onClick={navigateToAboutUs}>
                        <Typography variant="h6" component="div">
                        About us
                        </Typography>
                        </Button>
                        <Button onClick={navigateToTours}>
                        <Typography variant="h6" component="div">
                            Motocycle tours
                                                    </Typography>
                        </Button>
                        <Typography variant="h6" component="div" onClick={navigateToContact}>
                            Tour info
                        </Typography>
                    </Box>
                    {/* Center section */}
                
                    {/* Right section */}
                    <Box display="flex" alignItems="center">
                        <IconButton color="inherit">
                            <SearchIcon />
                        </IconButton>
                        <Avatar />
                       
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Hero section */}
            <Box position="relative" height={400}>
                <Image
                    src={heroimgage}
                    alt="Hero Image"
                    layout="fill"
                    objectFit="cover"
                />
                <Box position="absolute" top="50%"  transform="translate(-50%, -50%)" textAlign="center" width="100%">
                    <Typography variant="h3" component="h2" gutterBottom>
                        Adventure is worthwhile
                    </Typography>
                    <Typography variant="body1" component="p" gutterBottom>
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

            
            <Box display="flex" alignItems="center" mt={8} ml={4}>
                {/* Left side: Circular image */}
               

                {/* Right side: Heading and Description */}
                <Box ml={4} mb={2} maxWidth={400}>
                    <Typography variant="h4" gutterBottom>
                        What we offer
                    </Typography>
                   
  
                </Box>
            </Box>
            <Box sx={{}}>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
  </Box>
           
  
    

    <Box display="flex" bgcolor="#DEC5B7" py={4} justifyContent="space-around">
    <Box textAlign="center">
        <Typography variant="h5" gutterBottom>
          Get in touch
        </Typography>
        <Typography variant="body1">
          Address: 1234 Street, City, Country
          <br />
          Phone: +123 456 789
          <br />
          Email: info@example.com
        </Typography>
      </Box>
      <Box textAlign="center" mb={2}>
        <Typography variant="h5" gutterBottom>
         Quick links
        </Typography>
        <Typography variant="body1">
         Tour info
         <br />
         Motorcycle tours
         <br />
         Home 
         <br />
        </Typography>
      </Box>

      

      
      <Box position="absolute" >
        <IconButton color="inherit" aria-label="facebook">
          <Facebook />
        </IconButton>
        <IconButton color="inherit" aria-label="instagram">
          <Instagram />
        </IconButton>
        <IconButton color="inherit" aria-label="pinterest">
          <Pinterest />
        </IconButton>
      </Box>
    </Box>
    <Box textAlign="center" alignItems="center" justifyContent='center'>
      <Typography>© Copyright Adventure Nepal. All rights reserved </Typography>
    </Box>

        </>
    );
};

export default Dashboard;

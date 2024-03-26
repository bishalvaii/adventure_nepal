import { AppBar, Avatar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search';

import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();
    const navigateToTours = () => {
        router.push('/motorcycletours');
      };

    const navigateToShop = () => {
      router.push('/shop');
    };
  
    const navigateToAboutUs = () => {
      router.push('/aboutus')
    }
  
    const navigateToTourInfo = () => {
      router.push('/tourinfo')
    } 
    const navigateToHome = () => {
      router.push('/dashboard')
    }
  return (
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
                        <Button onClick={navigateToTourInfo}>
                        <Typography variant="h6" component="div" >
                            Tour info
                        </Typography>
                        </Button>
                    </Box>
                    {/* Center section */}
                
                    {/* Right section */}
                    <Box display="flex" alignItems="center">
                        
                        <Avatar />
                       
                    </Box>
                </Toolbar>
            </AppBar>
  )
}

export default Header
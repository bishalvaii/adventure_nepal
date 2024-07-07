"use client"
import { AppBar, Avatar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Header = () => {
  const  [username, setUsername] = useState("")
    const router = useRouter();
    const navigateToTours = () => {
        router.push('/motorcycletours');
      };

    
  
    const navigateToAboutUs = () => {
      router.push('/aboutus')
    }
  
    const navigateToTourInfo = () => {
      router.push('/tourinfo')
    } 
    const navigateToContactUs = () => {
      router.push('/contact')
    } 

    const navigateToHome = () => {
      router.push('/dashboard')
    }

    useEffect(() => {
      if (typeof window !== 'undefined') {
        const storedUsername = localStorage.getItem("username")
        setUsername(storedUsername)
      }
    }, [])
  return (
    <AppBar position="static" sx={{ bgcolor: "#F5F5F5" }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* Left section */}

                    <Typography variant="h5" component="div" sx={{ mr: 25, color:  "#596398" }}>
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
                    <Box display="flex" alignItems="center" sx={{gap: 2}}>
                        
                    <Avatar sx={{ color: 'black' }} /> {/* Set the color attribute for the Avatar */}
  <Typography variant="body1" sx={{ color: 'black' }}>{username}</Typography> {/* Set the text color for the username */}
                        <Button type="submit" onClick={navigateToContactUs} variant="contained" sx={{bgcolor: "#596398"}}>
            Contact us
          </Button>
                       
                    </Box>
                </Toolbar>
            </AppBar>
  )
}

export default Header
import Image from 'next/image';
import React from 'react';
import image from "../images/heroimage.jpg";
import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const LandingPage = () => {
  const router = useRouter();

  function navigateToLoginPage() {
    router.push('/login');
  }

  function navigateToSignUpPage() {
    router.push('/signup');
  }

  return (
    <Box 
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden'
      }}
    >
      <Image
        src={image}
        alt="landing-page-img"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <Box 
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '20px',
          borderRadius: '10px'
        }}
      >
        <Typography variant="h2" gutterBottom>Adventure Nepal</Typography>
        <Typography variant="h5" gutterBottom>Travel around Nepal with us!</Typography>
        <Typography variant="body1" gutterBottom   sx={{ color: "black", fontStyle: "italic" }}>Already a user?</Typography>
        <Button 
          variant="contained"
          color="primary"
          sx={{ mb: 2 }}
          onClick={navigateToLoginPage}
        >
          Sign in
        </Button>
        <Typography variant="body1" sx={{ color: "black", fontStyle: "italic" }}>New here?</Typography>
        <Button 
          variant="contained"
          color="primary"
          onClick={navigateToSignUpPage}
        >
          Sign up
        </Button>
      </Box>
    </Box>
  );
}

export default LandingPage;

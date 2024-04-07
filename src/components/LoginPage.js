import React, { useState } from 'react';
import { Grid, TextField, Button, Typography, Box } from '@mui/material';
import Image from 'next/image';
import loginimage from "../images/loginimage.jpg";
import { useRouter } from 'next/router';

const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password
        })
      });
      const data = await response.json();
      console.log(data.user.isAdmin)
      if(response.ok) {
        setFormData({
          username: '',
          password: ''
        });
        localStorage.setItem('username', formData.username); // Save email in localStorage


        if (data.user.isAdmin) {
          router.push('/admin');
        } else {
          router.push('/dashboard');
        }
      } else {
        console.error(data.error || 'Login failed');
        alert(data.error || 'Login failed');
      }
    } catch(error) {
      console.error('An error occurred:', error);
      alert('Invalid credentials!');
    }
  };
  const navigateToSignup = () => {
    router.push('/singup')
  }

  return (
    <Box borderRadius={16} overflow="hidden" bgcolor="#596398" height="95vh">
      <Grid container style={{ height: '100vh' }}>
        {/* Left side with image */}
        <Grid item xs={6}>
          <Box display="flex" justifyContent="flex-start" alignItems="center" height="100%">
            <Image
              src={loginimage}
              alt="Signup Image"
              width={680}
              height={600}
            />
          </Box>
        </Grid>
        {/* Right side with signup form */}
        <Grid item xs={6}>
          <Box display="flex"  sx={{ml:10}}alignItems="center" height="100%" color="">
            <form onSubmit={handleSubmit}>
              <Typography variant="h5" align="center" gutterBottom color={'white'} sx={{mb: 5, fontFamily: 'Poppins', fontWeight: 'bold'}}  >
                Login
              </Typography>
              <Typography color={'white'}>Your username</Typography>
              <TextField
                name="username"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.username}
                onChange={handleChange}
                InputProps={{
                  style: { backgroundColor: 'white' },
                }}
              />
              <Typography color={'white'}>Password</Typography>
              <TextField
                name="password"
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
                value={formData.password}
                onChange={handleChange}
                InputProps={{
                  style: { backgroundColor: 'white' },
                }}
              />
              <Button variant="contained" fullWidth  type="submit" style={{ marginTop: 20, backgroundColor: 'white', color: '#596398' }}>
                Login
              </Button>
              <Typography >Don't have account? <Button sx={{ color: 'white', ml: 20}}onClick={navigateToSignup}>Sign Up!</Button></Typography>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;

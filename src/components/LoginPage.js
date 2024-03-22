import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Grid, Paper, TextField, Button, Typography, Box } from '@mui/material';
import heroimage from "../images/heroimage.jpg";
import Image from 'next/image';


const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation here if needed
    // For now, just log the form data
    console.log('Form Data:', formData);
    // Reset form data
    setFormData({
      username: '',
      password: '',
    });
    // Navigate to the dashboard page upon successful login
    router.push('/dashboard');
  };

  return (
    <Grid container style={{ height: '100vh' }}>
      {/* Left side with image */}
      <Grid item xs={6}>
        <Box display="flex" justifyContent="flex-start" alignItems="center" height="100%">
          <Image
            src={heroimage}
            alt="Signup Image"
            width={680}
            height={600}
          />
        </Box>
      </Grid>
      {/* Right side with signup form */}
      <Grid item xs={6}>
        <Box display="flex" justifyContent="end" alignItems="center" height="100%">
          <Paper elevation={3} style={{ padding: 20, maxWidth: 700 }}>
            <Typography variant="h5" align="center" gutterBottom>
              Login 
            </Typography>
            <form onSubmit={handleSubmit}>
              
              <TextField
                name="username"
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.username}
                onChange={handleChange}
              />
              <TextField
                name="password"
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
                value={formData.password}
                onChange={handleChange}
              />
             
              
              <Button variant="contained" color="primary" fullWidth type="submit" style={{ marginTop: 20 }}>
                Login 
              </Button>
            </form>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;

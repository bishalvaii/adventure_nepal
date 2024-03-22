import { useState } from 'react';
import { Grid, Paper, TextField, Button, Typography, Box } from '@mui/material';
import Image from 'next/image';
import loginimage from "../images/loginimage.jpg";
import { useRouter } from 'next/navigation'; // Import the useRouter hook

const SignupPage = () => {
  const router = useRouter(); // Initialize the useRouter hook

  const [formData, setFormData] = useState({
    fullName: '',
    contactNo: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // You can perform further validation here if needed
    // For now, just log the form data
    console.log("Form Data:", formData);
    // Reset form data
    setFormData({
      fullName: '',
      contactNo: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    });
    // Navigate to the login page
    router.push('/login');
  };

  return (
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
        <Box display="flex" justifyContent="end" alignItems="center" height="100%" color="blue">
          <Paper elevation={3} style={{ padding: 20, maxWidth: 700, backgroundColor: 'blue' }}>
            <Typography variant="h5" align="center" gutterBottom>
              Sign Up
            </Typography>
            <form onSubmit={handleSubmit}>
          
             
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.email}
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
              <TextField
                name="confirmPassword"
                label="Confirm Password"
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <Button variant="contained" color="primary" fullWidth type="submit" style={{ marginTop: 20 }}>
                Sign Up
              </Button>
            </form>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignupPage;

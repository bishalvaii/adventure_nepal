import { useState } from 'react';
import { Grid, Paper, TextField, Button, Typography, Box } from '@mui/material';
import Image from 'next/image';
import loginimage from "../images/loginimage.jpg";
import { useRouter } from 'next/navigation'; // Import the useRouter hook
import "../app/styles/root.css"
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

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        setFormData({
          fullName: '',
          contactNo: '',
          email: '',
          username: '',
          password: '',
          confirmPassword: ''
        });
        router.push('/login')
      }  else {
        console.error(data.error || 'Signup failed');
      }
    }  catch (error) {
      console.error('An error occurred:', error);
    }
   
    
    
   
  };

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
                Sign Up
              </Typography>
             <Typography color={'white'}>Your email address</Typography>
              <TextField
                name="email"
                InputProps={{
                  style: { color: 'black' }, // Text color
                  classes: {
                    root: 'outlined-input', // Custom class for background color
                  },
                }}
                InputLabelProps={{
                  className: 'outlined-label', // Custom class for label color
                }}
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.email}
                onChange={handleChange}
                className="outlined-textfield" 
              />
             <Typography color={'white'}>Password</Typography>
              <TextField
                name="password"
                InputProps={{
                  style: { color: 'black' }, // Text color
                  classes: {
                    root: 'outlined-input', // Custom class for background color
                  },
                }}
                InputLabelProps={{
                  className: 'outlined-label', // Custom class for label color
                }}
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
                value={formData.password}
                onChange={handleChange}
              />
              <Typography color={'white'}>Confirm Password</Typography>
              <TextField
                name="confirmPassword"
                InputProps={{
                  style: { color: 'black' }, // Text color
                  classes: {
                    root: 'outlined-input', // Custom class for background color
                  },
                }}
                InputLabelProps={{
                  className: 'outlined-label', // Custom class for label color
                }}
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
                value={formData.confirmPassword}
                onChange={handleChange}
                InputProps={{
                  style: { color: 'black' }, // Text color
                  classes: {
                    root: 'outlined-input', // Custom class for background color
                  },
                }}
                InputLabelProps={{
                  className: 'outlined-label', // Custom class for label color
                }}
              />
              <Button variant="contained" fullWidth  type="submit" style={{ marginTop: 20, backgroundColor: 'white', color: '#596398' }}>
                Create Account
              </Button>
            </form>
        </Box>
      </Grid>
    </Grid>
    </Box>
  );
};

export default SignupPage;

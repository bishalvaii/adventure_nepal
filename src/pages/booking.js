import React, { useState } from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Button,
  TextareaAutosize,
} from '@mui/material'; 
import { Box } from '@mui/system';

function BookingForm() {
  const router = useRouter();
  const {id} = router.query;
  const [numAdults, setNumAdults] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    state: '',
    requirements: '',
    payemnt: '',
  });

  const handleChangeAdults = (event) => {
    setNumAdults(parseInt(event.target.value));
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // Form submission logic (replace with your backend integration)
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { ...formData, numAdults });
  };

  return (
    <Box
      className="booking-form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '600px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        padding: '20px',
        margin: '20px auto',
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Booking Information
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        {/* Traveler Information Section */}
        <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
          Traveler Information
        </Typography>
        <Box display="flex" alignItems="center" mb={2}>
          <Typography variant="body2">Adults (18+):</Typography>
          <TextField
            label="How Many?"
            type="number"
            name="adults"
            value={numAdults}
            onChange={handleChangeAdults}
            InputLabelProps={{ shrink: true }}
            min={1}
            sx={{ ml: 1 }}
          />
        </Box>
        <hr />

        {/* Payment Information Section */}
        <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
          Payment Information
        </Typography>
        <Box display="flex" alignItems="center" mb={2}>
          <Typography variant="body2">I will pay:</Typography>
          <FormControl sx={{ minWidth: 250, ml: 1.5 }}>
            <InputLabel id="deposit-label">Deposit</InputLabel>
            <Select
              labelId="deposit-label"
              id="deposit"
              name="deposit"
              value={formData.payment}
              onChange={handleChange}
              label="Deposit"
            >
              <MenuItem value="">Deposit</MenuItem>
              <MenuItem value="">Cash on Arrival</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <hr />

        {/* Contact Information Section */}
        <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
          Contact Information
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Box display="flex" gap="1rem">
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              sx={{ flex: 1 }}
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              sx={{ flex: 1 }}
            />
          </Box>
          <Box display="flex" gap="1rem">
            <TextField
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              sx={{ flex: 1 }}
            />
            <TextField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              sx={{ flex: 1 }}
            />
          </Box>
          <Box sx={{ display: 'flex', gap: '1rem', mt: 2 }}>
            <TextField
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <FormControl sx={{ minWidth: 210 }}>
              <InputLabel id="country-label">Country</InputLabel>
              <Select
                labelId="country-label"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                label="Country"
              >
                <MenuItem value="">Select Country</MenuItem>
                {/* Add options for different countries here */}
              </Select>
            </FormControl>
          </Box>
        </Box>
        <hr />

        {/* Requirements Section */}
        <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
          Your Requirements
        </Typography>
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <Typography variant="body2">Special Requirements:</Typography>
          <Box sx={{ width: '100%' }}> {/* Set initial width to 100% */}
            <TextareaAutosize
              minRows={5}
              placeholder="Enter any special requirements you may have..."
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              sx={{ flex: 1, width: '100%' }} // Set width to 100% inside the Box
            />
</Box>
        </Box>
        <Box sx={{ mt: 3, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <Button type="submit" variant="contained" sx={{bgcolor: "#596398"}}>
            Submit Booking
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default BookingForm;

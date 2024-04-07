import { Box, Typography } from '@mui/material';

const OrderConfirmation = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography sx={{fontFamily: 'Poppins', fontSize: '50px', fontWeight: 500}} variant="h4" gutterBottom>
        Booking done successfully! 
      </Typography>
      <Typography sx={{fontFamily: 'Poppins', fontSize: '30px', fontWeight: 300}}variant="body1">
        Thanks for booking your trip! We will contact you shortly.
      </Typography>
      {/* You can add more details or customize this component further based on your requirements */}
    </Box>
  );
};

export default OrderConfirmation;

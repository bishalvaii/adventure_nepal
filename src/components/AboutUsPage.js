import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import manag from "../images/manag.jpg"; // Import the sample image
import biker from "../images/biker.jpeg"

const AboutUsPage = () => {
  return (
    <Box bgcolor="#f7f7f7" p={4} borderRadius={4}>
      <Grid container spacing={4}>
        {/* Left side with title and description */}
        <Grid item xs={12} md={6}>
          <Box p={4} bgcolor="#f0f4ff" borderRadius={4} boxShadow={3}>
            <Typography variant="h5" gutterBottom>
              About us
            </Typography>
            <Typography variant="body1" gutterBottom>
              Adventure Nepal provides motorbike tours package, rentals, and riding gears in Nepal. We have dirt bikes in our fleet, such as the Honda CRF 250 Enduro. Adventure Nepal is a tiny family known for being adventure seekers and motorcycle aficionados. We enjoy riding motorcycles and exploring the Himalayan Kingdom to learn about the diverse cultures and customs of the Nepalese people, as well as the stunning country of Nepal.
            </Typography>
            <Typography variant="body1" gutterBottom>
              We invite all bikers from all over the world, regardless of any gender or ethnicity to come and enjoy their limited time in this little paradise that is Nepal. It's well recognized for being the home of the world's tallest peak, Mount Everest, and the place where "Lord Buddha" was born.
            </Typography>
            <Typography variant="body1" gutterBottom>
              For motorcyclists of all skill levels and preferences, Nepal is a perfect destination for off-road riding and a must-see vacation. For riders, it provides a unique and superior level of freedom. There are many reasons why Off Road Nepal is here to make sure you have an amazing time and that you'll want to come back to Nepal.
            </Typography>
          </Box>
        </Grid>
        {/* Right side with images */}
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box mb={2}>
              <Image src={biker} alt="Mountain view" width={350} height={350} style={{ borderRadius: '8px' }} />
            </Box>
            <Box mb={2}>
              <Image src={manag} alt="Motorbike rider" width={350} height={350} style={{ borderRadius: '8px' }} />
            </Box>
           
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutUsPage;

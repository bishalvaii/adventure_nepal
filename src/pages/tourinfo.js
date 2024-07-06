import React from 'react';
import village from "../../public/village.jpg"
import { Box } from '@mui/system';
import Image from 'next/image';
import { Typography } from '@mui/material';
import faqData from '@/travelData';
import FAQItem from '@/components/FAQItem';

const TourInfo = () => {
  return (
    <Box>
      <Box position="relative" height={500} width="100%">
        <Image src={village} alt="Dream Bike" layout="fill" objectFit="cover" />
      </Box>
      <Box mt={5} ml={5}>
        <Typography variant="h4" fontFamily="Poppins" fontWeight={500}>Travel Information</Typography>
      </Box>
      <Box  mt={3} mx={5}>
        {faqData.map((faq, index) => (
          <Box mb={2} key={index} >
            <FAQItem question={faq.question} answer={faq.answer} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TourInfo;

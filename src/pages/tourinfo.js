import React from 'react';
import dreambike from "../images/dreambike.jpg";
import { Box } from '@mui/system';
import Image from 'next/image';
import { Typography } from '@mui/material';
import faqData from '@/travelData';
import FAQItem from '@/components/FAQItem';

const tourinfo = () => {
    console.log(faqData);
    return (
        <Box>
            <Box position="relative" height={400}>
                <Image src={dreambike} alt="" layout="fill" objectFit="cover" />
            </Box>
            <Box mt={5} ml={5}>
                <Typography variant="h4" fontFamily="Poppins" fontWeight={500}>Travel Information</Typography>
            </Box>
            <Box mt={3} mx={5} border="1px solid #ccc" borderRadius={8} bgcolor="#ffffff" padding={3}>
                {faqData.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </Box>
        </Box>
    );
};

export default tourinfo;

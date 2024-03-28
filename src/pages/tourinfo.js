import React from 'react'
import dreambike from "../images/dreambike.jpg"
import { Box } from '@mui/system'
import Image from 'next/image'
import { Typography } from '@mui/material'
import faqData from '@/travelData'
import FAQItem from '@/components/FAQItem'

const tourinfo = () => {
    console.log(faqData)
  return (
    <Box>
    <Box position="relative" height={400}>
        <Image src={dreambike} alt=""    layout="fill"
                    objectFit="cover" />
       
    </Box>
     <Box>
     <Typography sx={{ml: 5,mt: 5,fontFamily: 'Poppins', fontWeight: '500', fontSize: '20px'}}>Travel Information</Typography>
     
 </Box>
 {faqData.map((faq, index) => (
   
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
     ))}
     
 </Box>
  )
}

export default tourinfo
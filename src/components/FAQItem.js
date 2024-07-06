import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQItem = ({ question, answer }) => {
  return (
    <Accordion sx={{backgroundColor: '#596398'}}>
      <AccordionSummary sx={{color: 'white'}}expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">{question}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{color: 'white'}}>
        <Typography variant="body1">{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FAQItem;

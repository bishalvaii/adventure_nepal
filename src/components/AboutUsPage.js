import { Box, Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import manag from "../images/manag.jpg"

import sammu from "../images/sammu.png"

const AboutUsPage = () => {
    return (
        <>
            <Box bgcolor="#ffff" p={4}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6} mt={6}>
                        <Box display="flex" flexDirection="column" justifyContent="center"  alignItems="centre">
                       
                            <Typography variant="h5" gutterBottom marginTop={15}>
                                About us
                            </Typography>
                            <Typography variant="h5" gutterBottom marginTop={5}>
                                Beauty Diva is dismantling unrealistic ideals
                                of perfection.

                                Our makeup is designed to enhance your
                                natural beauty and embrace what makes you
                                unique. Beauty Diva is all about
                                celebrating your authentic self,
                                not conforming to someone else's standards.
                            </Typography>

                        </Box>
                    </Grid>
                    {/* Left side with image */}
                    <Grid item xs={12} md={6}>
                        <Box display="flex" justifyContent="center">
                            <Image src={manag} alt="Sample Image" width={400} height={400} />
                        </Box>
                        <Box display="flex" justifyContent="center" sx={{mt: 3}}>
                            <Image src={manag} alt="Sample Image" width={400} height={400} />
                        </Box>
                    </Grid>

                    {/* Right side with title, description, and button */}

                </Grid>
            </Box>
            
            
        </>
    )
}

export default AboutUsPage
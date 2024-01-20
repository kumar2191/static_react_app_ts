import React from 'react'
// import Script from 'next/script';
import { Box, Grid, Text, Title } from '@mantine/core';
import { ImLocation } from 'react-icons/im';

const Index = () => {
    return (
        <Box mt={110} className='body' >

            <footer className="footer">
                <Grid>
                    <Grid.Col xs={12}>

                        <div className="waves">
                            <div className="wave" id="wave1"></div>
                            <div className="wave" id="wave2"></div>
                            {/* <div className="wave" id="wave3"></div>
                            <div className="wave" id="wave4"></div> */}
                        </div>
                    </Grid.Col>
                    <Grid.Col xs={12}>
                        <Box>
                            <Title order={2}>

                                <ImLocation color='red' />  Reach Us
                            </Title>
                            <Title order={6}>

                                Rajesh K. (General Manager)
                            </Title>
                            <Text>
                                Rani Engineering Works (Rani Group Of Companies)<br />
                                No. 1413-C, Rani Complex, Sathy Road, Ganapathy<br />
                                Coimbatore - 641006, Tamil Nadu, India
                            </Text>
                        </Box>
                    </Grid.Col>
                    <Grid.Col xs={12}>

                    </Grid.Col>
                </Grid>

            </footer>

        </Box>
    )
}

export default Index
import { Box, Typography, Container, Grid, useMediaQuery } from '@mui/material';
import React from 'react';
import ads from './images/adsFrame.png';
import undraw from './images/undraw.png';
import Footer from "../HomePage/footer"
import Locations from '../HomePage/location';

export default function HomeAdvertisingfun() {
    const isMobile = useMediaQuery('(max-width:700px)');
    const data = [
        {
            image: ads,
            Text: 'Site-wide ads',
            shortText: 'Ads for your community will appear on pages',
        },
        {
            image: ads,
            Text: 'Priority placement',
            shortText: 'Be at the top of search results and on the pages of free listings nearby.',
        },
        {
            image: ads,
            Text: 'Direct Links',
            shortText: 'Get direct links and click-throughs to your official website.',
        },
    ];

    return (
        <div>
            <Box sx={{
                backgroundColor: '#CEE7EA',
            }}>
                <Container sx={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row', // Change to column on mobile
                    alignItems: 'center',
                    padding: '20px',
                }}>
                    <Typography sx={{
                        width: '100%',
                        color: '#000',
                        fontFamily: 'Catamaran',
                        fontSize: isMobile ? '30px' : '40px', // Adjust font size on mobile
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: isMobile ? '40px' : '55px', // Adjust line height on mobile
                        textAlign: 'center',
                    }}>
                        Let’s Advertise Your Community on Our Platform
                    </Typography>
                    {!isMobile && (
                        <img src={undraw} alt="Illustration" />
                    )}
                </Container>
            </Box>

            <Container sx={{ paddingTop: '100px', textAlign: 'center' }}>
                <Typography sx={{
                    color: '#000',
                    fontFamily: 'Catamaran',
                    fontSize: '40px',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: '55px',
                }}>
                    Why advertise your community on Let’s Buy?
                </Typography>

                <Typography sx={{
                    width: '80%',
                    margin: 'auto',
                    color: '#756A62',
                    fontFamily: 'Catamaran',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: '30px',
                    textAlign: 'center',
                }}>
                    Hundreds of thousands of new construction homebuyers visit our site every month to find their new home and connect with homebuilders and sales teams. Be sure they're seeing your community.
                </Typography>
            </Container>

            <Container sx={{ textAlign: 'center', marginTop: "60px", marginBottom: "180px" }}>
                <Grid container spacing={2} justifyContent="center">
                    {data.map((item, index) => (
                        <Grid item key={index}>
                            <img src={item.image} alt={item.Text} style={{ width: '50px', height: '50px' }} />
                            <Typography variant="h6" sx={{ marginTop: '10px' }}>
                                {item.Text}
                            </Typography>
                            <Typography variant="body2" sx={{ marginLeft: "auto", marginRight: "auto", color: '#666', marginTop: '10px', width: "80%" }}>
                                {item.shortText}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Typography sx={{
                marginLeft: "auto",
                marginRight: "auto",
                color: " #0D0303",
                fontFamily: "Catamaran",
                fontSize: "23px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "33px",
                width: "33%"
            }}>
                Pricing plans for businesses at every stage of growth.
                Try our risk-free for 14 days. No credit card required.
            </Typography>
            <Locations />
            <Footer />
        </div>
    );
}

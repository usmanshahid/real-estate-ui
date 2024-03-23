import React from 'react';
import { Box, Typography, Container, Grid, useMediaQuery } from '@mui/material';

import { Link } from "react-router-dom"
import ads from './images/adsFrame.png';
import undraw from './images/undraw.png';
import Footer from '../HomePage/footer';
import Locations from '../HomePage/location';

export default function AgentAdvertisingfun() {
    const isMobile = useMediaQuery('(max-width:700px)');
    const data = [
        {
            image: ads,
            Text: 'New Clients',
            shortText: 'Ads for your community will appear on pages',
        },
        {
            image: ads,
            Text: 'Featured contact space',
            shortText: 'Be at the top of search results and on the pages of free listings nearby.',
        },
        {
            image: ads,
            Text: 'Qualified leads ',
            shortText: 'Get direct links and click-throughs to your official website.',
        },
    ];

    return (
        <>
            <Box sx={{
                backgroundColor: '#F1F49A',
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
                    Our Benefits
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
                    Let’s Buy is our agent referral program that connects high-quality new home shoppers to expert agents.
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
                color: " black",
                fontFamily: "Catamaran",
                fontSize: "40px",
                fontStyle: "normal",
                fontWeight: "600",
                textAlign: "center",
                lineHeight: "33px",
            }}>
                Get started
            </Typography>
            <Box sx={{
                marginTop: "130px",
                marginBottom: "200px",
                display: "flex",
                justifyContent: "space-evenly"
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="130" viewBox="0 0 150 150" fill="none">
                    <circle cx="75" cy="75" r="75" fill="#CEE7EA" />
                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#000" font-size="36">
                        1
                    </text>
                    <text y="160" dominant-baseline="middle" text-anchor="middle" fill="red" font-size="36" color='black' marginTop='20px'>
                        Submit your application
                    </text>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="130" viewBox="0 0 150 150" fill="none">
                    <circle cx="75" cy="75" r="75" fill="#CEE7EA" />
                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#000" font-size="36">
                        2
                    </text>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="130" viewBox="0 0 150 150" fill="none">
                    <circle cx="75" cy="75" r="75" fill="#CEE7EA" />
                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#000" font-size="36">
                        3
                    </text>
                </svg>
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
                    We are Looking for  Benefits
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
            <Locations />
            <Footer />
        </>
    );
}

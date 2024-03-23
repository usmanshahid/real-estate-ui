import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';


const data = [
    {
        id: 1,
        text: 'Atlanta new homes',
    },
    {
        id: 2,
        text: 'Atlanta new homes',
    },
    {
        id: 3,
        text: 'Atlanta new homes',
    },
    {
        id: 4,
        text: 'Atlanta new homes ',
    },
    {
        id: 5,
        text: 'Atlanta new homes',
    },

];

function Footer() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return (
        <Box sx={{ backgroundColor: "#252525", paddingBottom: "100px", paddingTop: "60px" }}>
            <Container>
                <Typography sx={{
                    color: "#FFF",
                    fontfeatureSettings: "'clig' off, 'liga' off",
                    fontFamily: "Catamaran",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "24px",
                    letterSpacing: "-0.2px",
                }}>
                    Explore Let’s Buy
                </Typography>
                <Grid container spacing={3}>
                    {data.map((property) => (
                        <Grid item xs={12} sm={6} md={4} key={property.id}>
                            <Box sx={{ marginTop: "30px", borderRadius: "1699px" }}>
                                <Typography sx={{
                                    color: " white",
                                    fontFamily: "Catamaran",
                                    fontSize: "20px",
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    lineHeight: "normal",
                                }}>
                                    {property.text}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box >
    );
}
export default Footer;
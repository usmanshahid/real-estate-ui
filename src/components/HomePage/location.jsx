import React from "react";
import { Container, Box, Typography, Button, Card, CardContent, CardMedia, Grid } from "@mui/material";
import frame from "../HomePage/image/Frame.png";
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
    {
        id: 6,
        text: 'Atlanta new homes',
    },
    {
        id: 7,
        text: 'Atlanta new homes',
    },
    {
        id: 8,
        text: 'Atlanta new homes ',
    }, {
        id: 9,
        text: 'Atlanta new homes',
    },
    {
        id: 10,
        text: 'Atlanta new homes',
    },
    {
        id: 11,
        text: 'Atlanta new homes',
    },
    {
        id: 12,
        text: 'Atlanta new homes ',
    },
];
const data1 = [
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
]

function Locations() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return (
        <Box sx={{ backgroundColor: "#F8FCFC", paddingBottom: "100px" }}>
            <Container>
                <Typography sx={{
                    color: "#000",
                    fontFamily: "Catamaran",
                    fontSize: "30px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                    paddingTop: "60px",
                }}>
                    Top new home locations in the U.S.
                </Typography>
                <Grid container spacing={3}>
                    {data.map((property) => (
                        <Grid item xs={12} sm={6} md={3} key={property.id}>
                            <Box sx={{ marginTop: "30px", borderRadius: "1699px" }}>
                                <Typography sx={{
                                    color: " #252525",
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

                <Typography sx={{
                    color: "#000",
                    fontFamily: "Catamaran",
                    fontSize: "30px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                    paddingTop: "60px",
                }}>
                    Top new home locations in the Canada.
                </Typography>
                <Grid container spacing={3}>
                    {data.map((property) => (
                        <Grid item xs={12} sm={6} md={3} key={property.id}>
                            <Box sx={{ marginTop: "30px", borderRadius: "1699px" }}>
                                <Typography sx={{
                                    color: " #252525",
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
                <Typography sx={{
                    color: "#000",
                    fontFamily: "Catamaran",
                    fontSize: "30px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                    paddingTop: "60px",
                }}>
                    Browse new homes by province
                </Typography>
                <Grid container spacing={3}>

                    {data1.map((property) => (
                        <Grid item xs={12} sm={6} md={3} key={property.id}>
                            <Box sx={{ marginTop: "30px", borderRadius: "1699px" }}>
                                <Typography sx={{
                                    color: " #252525",
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
export default Locations;
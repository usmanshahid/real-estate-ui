import React from "react";
import { Container, Box, Typography, Button, Card, CardContent, CardMedia, Grid } from "@mui/material";
import frame from "../HomePage/image/Frame.png";
import useMediaQuery from '@mui/material/useMediaQuery';
import house1 from './image/house1.png'
import house2 from './image/house2.png'
import house3 from './image/house3.png'
import house4 from './image/house4.png'
import leftarrow from './image/left.png'
import RightArrow from './image/right.png'

const data = [
    {
        id: 1,
        name: 'Central Park Tower',
        price: 'From $6,500,000',
        city: 'Theater District, Newyork',
        imageUrl: house1,
    },
    {
        id: 2,
        name: 'Waldorf Astoria',
        price: 'From $6700,000',
        city: 'Theater District, Newyork',
        imageUrl: house2,
    },
    {
        id: 3,
        name: 'Amsterdam',
        price: 'From $900,000',
        city: 'Theater District, Newyork',
        imageUrl: house3,
    },
    {
        id: 4,
        name: 'New Park',
        price: 'From $600,000',
        city: 'Theater District, Newyork',
        imageUrl: house4,
    },
];


function MoreCommunities() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return (
        <Box sx={{ backgroundColor: "white", paddingBottom: "100px" }}>
            <Container>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "30px 0",
                }}>
                    <img src={frame} width="44px" height="40px" />
                    <Typography sx={{
                        color: "#000",
                        fontFamily: "Catamaran",
                        fontSize: isSmallScreen ? "23px" : "35px",
                        fontStyle: "normal",
                        fontWeight: isSmallScreen ? "300" : "500",
                        lineHeight: "normal",
                        flex: 1,
                    }}>
                        More Communities
                    </Typography>
                    <Button sx={{
                        borderRadius: "5px",
                        background: "var(--hnn, #FFC933)",
                        width: isSmallScreen ? "130px" : "200px",
                        height: isSmallScreen ? "55px" : "65px",
                        flexShrink: "0",
                        color: "white",
                        fontWeight: isSmallScreen ? "400" : "800",
                    }}>
                        View All Property
                    </Button>
                </Box>
                <Typography sx={{
                    color: "#000",
                    fontFamily: "Catamaran",
                    fontSize: isSmallScreen ? "13px" : "24px",
                    fontStyle: "normal",
                    fontWeight: "200",
                    lineHeight: "20px",
                }}>
                    Move-in-ready homes

                </Typography>

                <Grid container spacing={3}>
                    {data.map((property) => (
                        <Grid item xs={12} sm={6} md={3} key={property.id}>
                            <Box sx={{ marginTop: "30px", borderRadius: "1699px" }}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        alt={property.name}
                                        height="200"
                                        image={property.imageUrl}
                                    />
                                    <CardContent>
                                        <Typography sx={{
                                            color: " #000",
                                            fontFamily: "Catamaran",
                                            fontSize: "20px",
                                            fontStyle: "normal",
                                            fontWeight: "600",
                                            lineHeight: "normal",
                                        }}>
                                            {property.name}
                                        </Typography>
                                        <Typography sx={{
                                            color: " #000",
                                            fontFamily: "Inter",
                                            fontSize: "17px",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            lineHeight: "normal",
                                        }}>
                                            {property.price}
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography sx={{
                                                color: " #756A62",
                                                fontFamily: "Inter",
                                                fontSize: "11px",
                                                fontStyle: "normal",
                                                fontWeight: "400",
                                                lineHeight: "normal",
                                            }}>
                                                {property.city}
                                            </Typography>
                                        </Box>
                                    </CardContent>

                                </Card>
                            </Box>

                        </Grid>
                    ))}
                    <Box sx={{ marginTop: "80px", marginLeft: "auto", marginRight: "auto" }}>

                        <img src={leftarrow} />
                        <img src={RightArrow} />
                    </Box>
                </Grid>
            </Container>
        </Box>
    );
}
export default MoreCommunities;
import React from "react";
import { Container, Box, Typography, Button, Card, CardContent, CardMedia, Grid } from "@mui/material";
import frame from "../HomePage/image/Frame.png";
import useMediaQuery from '@mui/material/useMediaQuery';
import imggroup from './image/Group74.png'
import house1 from './image/house1.png'
import house2 from './image/house2.png'
import house3 from './image/house3.png'
import house4 from './image/house4.png'
import newhome from './image/homeFrame.png'
import leftarrow from './image/left.png'
import RightArrow from './image/right.png'
const data = [
    {
        id: 1,
        name: 'The Rock Well',
        price: 'Selling',
        city: 'Theater District, Newyork',
        imageUrl: house1,
    },
    {
        id: 2,
        name: '88 White Street',
        price: 'Selling',
        city: 'Theater District, Newyork',
        imageUrl: house2,
    },
    {
        id: 3,
        name: 'Third Avenue',
        price: 'Selling',
        city: 'Theater District, Newyork',
        imageUrl: house3,
    },
    {
        id: 4,
        name: 'Latest Community',
        price: 'Selling',
        city: 'Theater District, Newyork',
        imageUrl: house4,
    },
];


function NewhOME() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    return (
        <Box sx={{ backgroundColor: "white", paddingBottom: "100px" }}>

            <Container>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "30px 0",
                    marginTop: "30px",
                }}>
                    <img src={newhome} width="44px" height="40px" />
                    <Typography sx={{
                        color: "#000",
                        fontFamily: "Catamaran",
                        fontSize: isSmallScreen ? "23px" : "35px",
                        fontStyle: "normal",
                        fontWeight: isSmallScreen ? "300" : "500",
                        lineHeight: "normal",
                        flex: 1,
                    }}>
                        Featured new home communities
                    </Typography>
                    <img src={leftarrow} />
                    <img src={RightArrow} />
                </Box>


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
                </Grid>
            </Container>
        </Box>
    );
}
export default NewhOME;
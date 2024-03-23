import React from "react";
import { Container, Box, Typography, Button, Card, CardContent, CardMedia, Grid } from "@mui/material";
import frame from "../HomePage/image/Frame.png";
import useMediaQuery from '@mui/material/useMediaQuery';
import realestate1 from './image/realestate.png';
import realestate from './image/realestate1.png';
import perfecthomestay from './image/perfecthomestay.png';
import latestcommunity from './image/latestcommunity.png';
import FrameHome from './image/Framehome.png';
import leftarrow from './image/left.png';
import RightArrow from './image/right.png';
import ReactStars from "react-rating-stars-component";


const StarExample = {
    size: 30,
    value: 3.5,
    edit: false
};


const data = [
    {
        id: 1,
        name: 'Kerley Family Homes',
        imageUrl: realestate1,
    },
    {
        id: 2,
        name: 'Pinnacle Homes',
        imageUrl: realestate,
    },
    {
        id: 3,
        name: 'Grosavenue ',
        imageUrl: latestcommunity,
    },
    {
        id: 4,
        name: 'Latest Community',
        imageUrl: perfecthomestay,
    },
];

function Builders() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return (
        <Box sx={{ backgroundColor: "white", paddingBottom: "100px" }}>

            <Container>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "30px 0",
                }}>
                    <img src={FrameHome} width="44px" height="40px" />
                    <Typography sx={{
                        color: "#000",
                        fontFamily: "Catamaran",
                        fontSize: isSmallScreen ? "23px" : "35px",
                        fontStyle: "normal",
                        fontWeight: isSmallScreen ? "300" : "500",
                        lineHeight: "normal",
                        flex: 1,
                    }}>
                        New homes recently added
                    </Typography>
                    <img src={leftarrow} alt="Left Arrow" />
                    <img src={RightArrow} alt="Right Arrow" />
                </Box>

                <Grid container spacing={3}>
                    {data.map((property) => (
                        <Grid item xs={12} sm={6} md={3} key={property.id}>
                            <Box sx={{ marginTop: "30px", borderRadius: "16px" }}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        alt={property.name}
                                        height="200"
                                        image={property.imageUrl}
                                    />
                                    <CardContent>
                                        <Typography sx={{
                                            color: "#000",
                                            fontFamily: "Catamaran",
                                            fontSize: "20px",
                                            fontStyle: "normal",
                                            fontWeight: "600",
                                            lineHeight: "normal",
                                        }}>
                                            {property.name}
                                        </Typography>
                                        <ReactStars {...StarExample} />
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

export default Builders;

import React from "react";
import { Container, Box, Typography, Button, Card, CardContent, CardMedia, Grid } from "@mui/material";
import articellogo from "../HomePage/image/articellogo.png";
import useMediaQuery from '@mui/material/useMediaQuery';
import articeimag from './image/articleimag1.png'
import article2 from './image/articleimage2.png'
import rectangle1 from "./image/Rectangle 111.png"
import rectangle2 from "./image/Rectangle 107.png"
import rectangle3 from "./image/Rectangle 108.png"
import rectangle4 from "./image/Rectangle 109.png"
import rectangle5 from "./image/Rectangle 110.png"
import recatngle6 from "./image/Rectangle 111.png"

const cardData = [
    {
        imageSrc: articeimag,
        title: "Why buy new? Seven reasons to buy a new construction home",
        guide: "Guides"
    },
    {
        imageSrc: article2,
        title: "How to read a floor plan?",
        guide: "Guides"
    }
];
const ArticlecardData = [
    {
        imageSrc: rectangle1,
        title: "New home design 101: How to make the most of your new space",
        guide: "Guides"
    },
    {
        imageSrc: rectangle2,
        title: "How to choose the right neighborhood",
        guide: "Guides"
    },
    {
        imageSrc: rectangle3,
        title: "Tiny house interior design ideas",
        guide: "Design",
    },
    {
        imageSrc: rectangle5,
        title: "New home design 101: How to make the most of your new space",
        guide: "Guides"
    },
    {
        imageSrc: recatngle6,
        title: "How to choose the right neighborhood",
        guide: "Guides"
    },
    {
        imageSrc: rectangle4,
        title: "Tiny house interior design ideas",
        guide: "Design",
    }
]
function Articles() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return (
        <Box sx={{ backgroundColor: "white", paddingBottom: "100px" }}>
            <Container>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "30px 0",
                }}>
                    <img src={articellogo} width="44px" height="40px" />
                    <Typography sx={{
                        color: "#000",
                        fontFamily: "Catamaran",
                        fontSize: isSmallScreen ? "23px" : "35px",
                        fontStyle: "normal",
                        fontWeight: isSmallScreen ? "300" : "500",
                        lineHeight: "normal",
                        flex: 1,
                    }}>
                        Articles
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
                        View All Articles
                    </Button>
                </Box>

                <Grid container spacing={2}>
                    {cardData.map((card, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <Card sx={{ backgroundColor: "#CEE7EA" }}>
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            height: "300px",
                                        }}
                                    >
                                        <img src={card.imageSrc} alt={`Image ${index + 1}`} />
                                    </Box>
                                </CardContent>
                            </Card>

                            <Typography sx={{ marginTop: "20px" }}>{card.title}</Typography>
                            <Button sx={{
                                color: "#000",
                                fontFamily: "Catamaran",
                                fontSize: "17px",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight: "34px",
                                borderRadius: "60px",
                                border: " 1px solid rgba(117, 106, 98, 0.30)",
                                textAlign: "center",
                                width: "100px"
                            }}>
                                {card.guide}
                            </Button>
                        </Grid>
                    ))}
                </Grid>


                <Grid container spacing={3}>
                    {ArticlecardData.map((property) => (
                        <Grid item xs={12} sm={6} md={4} key={property.id}>
                            <Box sx={{ marginTop: "30px", borderRadius: "1699px" }}>
                                <CardMedia
                                    component="img"
                                    alt={property.name}
                                    height="200"
                                    image={property.imageSrc}
                                />
                                <Typography sx={{
                                    color: " #000",
                                    fontFamily: "Catamaran",
                                    fontSize: "20px",
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    lineHeight: "30px",
                                }}>
                                    {property.title}
                                </Typography>

                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography sx={{
                                        color: " #756A62",
                                        fontFamily: "Inter",
                                        fontSize: "11px",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        lineHeight: "normal",
                                        mT: "20px",
                                    }}>
                                        {property.guide}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container >
        </Box >
    );
}
export default Articles;
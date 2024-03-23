import { Box, Typography } from "@mui/material";
import React from "react";
import imageBackground from "../HomePage/image/background-img.png";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';

function Homepage() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    return (
        <Box
            sx={{
                backgroundImage: `url(${imageBackground})`,
                backgroundSize: isSmallScreen ? "cover" : "100% auto",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: isSmallScreen ? 'auto' : '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: isSmallScreen ? 'center' : 'center',
            }}
        >

            <Typography
                sx={{
                    marginTop: isSmallScreen ? "60px" : "none",
                    color: "#FFF",
                    fontFamily: "Catamaran",
                    fontSize: isSmallScreen ? "26px" : "50px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "73px",
                    textAlign: "center",
                }}
            >
                Building new home dreams
            </Typography>

            <Typography
                sx={{
                    width: isSmallScreen ? "66%" : "36%",
                    color: "#FFF",
                    fontSize: isSmallScreen ? "10px" : "16px",
                    fontWeight: isSmallScreen ? "200" : "400",
                    letterSpacing: "0.16px",
                    textAlign: "center",
                }}
            >
                Much did had call new drew that kept. Limits expect wonder law she. Now has you views woman noisy match money rooms.
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: isSmallScreen ? "20px" : "26px",
                    flexDirection: isSmallScreen ? "column" : "row",
                    paddingBottom: isSmallScreen ? "30px" : "none",

                }}
            >
                <TextField
                    type="text"
                    placeholder="Enter Zipcode to search properties"
                    sx={{
                        width: isSmallScreen ? "20rem" : "30rem",
                        fontSize: isSmallScreen ? "12" : "16px",
                        height: isSmallScreen ? "55px" : "55px",
                        background: "var(--white, #FFF)",
                    }}
                />
                <Box>
                    <Button
                        sx={{
                            background: "var(--hnn, #FFC933)",
                            marginTop: isSmallScreen ? "10px" : "none",
                            width: isSmallScreen ? "180px" : "180px",
                            height: isSmallScreen ? "40px" : "55px",
                        }}
                    >
                        <Typography
                            sx={{
                                color: "white",
                                fontSize: isSmallScreen ? "13px" : "20px",
                                fontWeight: "600",
                                letterSpacing: "0.2px",
                                textAlign: "center",
                            }}
                        >
                            Search Now!
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Homepage;
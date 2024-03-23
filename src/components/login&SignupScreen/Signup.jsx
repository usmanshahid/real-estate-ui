import React from 'react';
import { Container, Box, Typography, Button, CardContent, Card, TextField } from "@mui/material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
function Signup() {
    const checkBoxStyle = {
        background: 'yellow',
        borderRadius: '50%',
    };

    return (
        <Container maxWidth="sm">
            <Card>
                <CardContent>
                    <Box sx={{ textAlign: "center", marginTop: "20px" }}>
                        <Typography sx={{
                            color: "var(--greyscale-900, #0F172A)",
                            fontFamily: "Catamaran",
                            fontSize: "28px",
                            fontStyle: "normal",
                            fontWeight: "700",
                            lineHeight: "125%",
                            letterSpacing: "0.2px",
                        }}>
                            Sign Up to Your Account
                        </Typography>
                        <Typography sx={{
                            color: "var(--greyscale-500, #64748B)",
                            fontFamily: "Catamaran",
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "160%",
                        }}>
                            Welcome back, please enter your details
                        </Typography>
                    </Box>
                    <form>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginTop: "20px",
                        }}>
                            <TextField
                                label="Username"
                                variant="outlined"
                                sx={{ width: '70%', marginBottom: "20px" }}
                                required
                            />
                            <TextField
                                label="Email"
                                variant="outlined"
                                sx={{ width: '70%', marginBottom: "20px" }}
                                required
                            />
                            <TextField
                                label="Password"
                                type="password"
                                variant="outlined"
                                sx={{ width: '70%', marginBottom: "20px" }}
                                required
                            />

                            <Box sx={{ marginLeft: "80px", marginRight: "auto" }}>
                                <Typography sx={{ fontSize: "14px", color: "black", marginTop: "10px" }}>
                                    <CheckBoxOutlineBlankIcon /> By creating an account means you agree to the Terms
                                    & Conditions and our Privacy Policy </Typography>
                            </Box>

                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ width: '70%', marginTop: "20px", backgroundColor: "#FFC933" }}
                                type="submit"
                            >
                                Sign Up
                            </Button>

                            <Typography sx={{
                                marginTop: "10px",
                                color: "#000",
                                fontSize: "15px",
                                fontWeight: "500",
                                letterSpacing: "0.2px",
                            }}>Already have an account?<span style={{ color: "#FFC933" }}>Login</span></Typography>
                        </Box>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
}
export default Signup;
import React from 'react';
import { Container, Box, Typography, Button, CardContent, Card, TextField } from "@mui/material";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
function LoginCard() {
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
                            Sign in Your Account
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

                            <Box sx={{ display: "flex", gap: "130px" }}>
                                <Typography sx={{ fontSize: "14px", color: "black", marginTop: "10px" }}><CheckBoxIcon sx={checkBoxStyle} /> Remember me </Typography>
                                <Typography sx={{ fontSize: "14px", color: "black", marginTop: "10px" }}> Forget Password </Typography>
                            </Box>
                            <Typography sx={{
                                marginTop: "30px",
                                color: "#000",
                                fontSize: "15px",
                                fontWeight: "500",
                                letterSpacing: "0.2px",
                            }}> After Sign in, You will be able to access this website</Typography>

                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ width: '70%', marginTop: "20px", backgroundColor: "#FFC933" }}
                                type="submit"
                            >
                                Sign In
                            </Button>

                            <Typography sx={{
                                marginTop: "10px",
                                color: "#000",
                                fontSize: "15px",
                                fontWeight: "500",
                                letterSpacing: "0.2px",
                            }}>Don’t have an account?<span style={{ color: "#FFC933" }}>Sign Up</span></Typography>

                        </Box>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
}

export default LoginCard;

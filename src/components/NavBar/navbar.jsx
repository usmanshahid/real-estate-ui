import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { Box, MenuItem, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Hidden from '@mui/material/Hidden';
import { Link } from "react-router-dom";
import ImportedModules from '../HomePage/AllmodulesImported';

const StyledButton = styled(Button)`
  text-decoration: none;
  color: black;
`;

const NavBar = () => {
    const [isTopCitiesSubMenuOpen, setIsTopCitiesSubMenuOpen] = useState(false);
    const [isArticlesSubMenuOpen, setIsArticlesSubMenuOpen] = useState(false);
    const [isProfessionalSubMenuOpen, setIsProfessionalSubMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleTopCitiesMouseEnter = () => {
        setIsTopCitiesSubMenuOpen(true);
    };

    const handleTopCitiesMouseLeave = () => {
        setIsTopCitiesSubMenuOpen(false);
    };

    const handleArticlesMouseEnter = () => {
        setIsArticlesSubMenuOpen(true);
    };

    const handleArticlesMouseLeave = () => {
        setIsArticlesSubMenuOpen(false);
    };

    const handleProfessionalMouseEnter = () => {
        setIsProfessionalSubMenuOpen(true);
    };

    const handleProfessionalMouseLeave = () => {
        setIsProfessionalSubMenuOpen(false);
    };

    const buttonSpacing = { margin: '20px 20px' };

    return (
        <div>
            <AppBar sx={{ backgroundColor: 'white', boxShadow: "none" }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ marginLeft: "60px", flexGrow: 0.9, color: 'black' }}>
                        <Link to="/homepage"> Let's{' '}
                            <span style={{ color: 'yellow' }}>Buy</span></Link>
                    </Typography>
                    <Hidden mdUp>
                        <Button
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <MenuIcon />
                        </Button>
                    </Hidden>
                    <Hidden smDown>
                        <Box sx={{ gap: "30px", display: "flex" }}>
                            <div
                                onMouseEnter={handleTopCitiesMouseEnter}
                                onMouseLeave={handleTopCitiesMouseLeave}
                                style={{ display: 'flex', alignItems: 'center', position: 'relative' }}
                            >
                                <Button style={{ color: 'black' }}>
                                    Top Cities
                                    <KeyboardArrowDownIcon fontSize="small" />
                                </Button>
                                {isTopCitiesSubMenuOpen && (
                                    <div
                                        className="submenu"
                                        style={{
                                            display: 'block',
                                            position: 'absolute',
                                            top: '100%',
                                            left: 0,
                                            color: 'black',
                                            backgroundColor: 'white',
                                        }}
                                    >
                                        <MenuItem>City 1</MenuItem>
                                        <MenuItem>City 2</MenuItem>
                                        <MenuItem>City 3</MenuItem>
                                    </div>
                                )}
                            </div>
                            <div
                                onMouseEnter={handleArticlesMouseEnter}
                                onMouseLeave={handleArticlesMouseLeave}
                                style={{ display: 'flex', alignItems: 'center', position: 'relative' }}
                            >
                                <Button style={{ color: "black" }}>
                                    Articles
                                    <KeyboardArrowDownIcon fontSize="small" />
                                </Button>
                                {isArticlesSubMenuOpen && (
                                    <div
                                        className="submenu"
                                        style={{
                                            display: 'block',
                                            position: 'absolute',
                                            top: '100%',
                                            left: 0,
                                            color: 'black',
                                            backgroundColor: 'white',
                                        }}
                                    >
                                        <MenuItem>Article 1</MenuItem>
                                        <MenuItem>Article 2</MenuItem>
                                        <MenuItem>Article 3</MenuItem>
                                    </div>
                                )}
                            </div>
                            <div
                                onMouseEnter={handleProfessionalMouseEnter}
                                onMouseLeave={handleProfessionalMouseLeave}
                                style={{ display: 'flex', alignItems: 'center', position: 'relative' }}
                            >
                                <Button style={{ color: "black" }}>
                                    Professional
                                    <KeyboardArrowDownIcon fontSize="small" />
                                </Button>
                                {isProfessionalSubMenuOpen && (
                                    <div
                                        className="submenu"
                                        style={{
                                            display: 'block',
                                            position: 'absolute',
                                            top: '100%',
                                            left: 0,
                                            color: 'black',
                                            backgroundColor: 'white',
                                        }}
                                    >
                                        <MenuItem>Professional 1</MenuItem>
                                        <MenuItem>Professional 2</MenuItem>
                                        <MenuItem>Professional 3</MenuItem>
                                    </div>
                                )}
                            </div>
                            <StyledButton href="#login" sx={{ ...buttonSpacing, color: 'black', border: '2px solid #000' }}>
                                <Link to="/login">   Login</Link>
                            </StyledButton>
                            <StyledButton href="#signup" sx={{ ...buttonSpacing, background: '#FFC933', color: 'white' }}>
                                <Link to="/signup">   Sign Up </Link>
                            </StyledButton>
                        </Box>
                    </Hidden>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            >
                <List sx={{ backgroundColor: '#755E4F', height: "100vh", color: "white", width: "10rem" }}>
                    <ListItem button>
                        <ListItemText primary="Top Cities" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Articles" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Professional" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Login" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Sign Up" />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
};

export default NavBar;

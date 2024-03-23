import React from 'react';
import { Box, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

function NavBarAdvertising() {
  return (
    <Container maxWidth="xl" >
      <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", m: 3 }}>
        <Link to="/"><Button style={{ color: "black" }}>New Home Advertising</Button></Link>
        <Link to="/agent">  <Button style={{ color: "black" }}>Agent Advertising</Button></Link>
        <Link to="/community"> <Button style={{ color: "black" }}>Add a Community</Button></Link>
        <Link to="/feedback"><Button style={{ color: "black" }}>Submit Feedback</Button> </Link>
      </Box>
    </Container >
  );
}
export default NavBarAdvertising;
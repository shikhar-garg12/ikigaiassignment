// Home.js
import React from 'react';
import {Typography, Button} from '@mui/material';

const Home = () => {
    return (
        <div style={{textAlign: 'center', padding: '20px'}}>
            <Typography variant="h2" gutterBottom>
                Welcome to My React Project
            </Typography>
            <Typography variant="body1" paragraph>
                Welcome to the homepage.
            </Typography>
            <Button variant="contained" color="primary">
                Get Started
            </Button>
        </div>
    );
};

export default Home;

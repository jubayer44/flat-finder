import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import Link from 'next/link';

const GetStarted = () => {

    return (
        <Container sx={{
            my: 2, backgroundColor: '#4d5639',
            color: 'white',
            padding: { xs: 4, md: 8 },
            borderRadius: 2,
            textAlign: 'center',
            marginTop: 5,
            boxShadow: 4,
        }}>
            <Box>
                <Typography variant="h4" fontWeight={600} component="h2" gutterBottom>
                    Ready to Find Your Perfect Flatmate?
                </Typography>
                <Typography variant="h6" paragraph>
                    Join our community today and start your search for the ideal flatmate. With our advanced matching algorithm, finding the perfect home has never been easier.
                </Typography>
                <Button
                    variant="outlined"
                    component={Link}
                    href="/register"
                >
                    Get Started
                </Button>
            </Box>
        </Container>
    );
};

export default GetStarted;

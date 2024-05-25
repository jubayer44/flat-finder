import { Box, Typography, Container } from '@mui/material';
import FlatShareRequest from './components/FlatShareRequest';

const FlatShareRequestPage = () => {
   
    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 3 }}>
                <Typography variant="h6" component="h2" sx={{ textAlign: "center", margin: "10px", fontWeight: 600, my: 3 }}>
                    Flat Share Request
                </Typography>
            <FlatShareRequest/>
            </Box>
        </Container>
    );
};

export default FlatShareRequestPage;

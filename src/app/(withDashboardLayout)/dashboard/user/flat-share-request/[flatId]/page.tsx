import { Box, Typography, Container } from '@mui/material';
import FlatShareRequest from '../components/FlatShareRequest';

const FlatShareRequestPage = async ({params}: {params: {flatId: string}}) => {
     
const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/flats/${params?.flatId}`);
const flats = await res.json();
const flatDetails = flats?.data;
   
    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 3 }}>
                <Typography variant="h6" component="h2" sx={{ textAlign: "center", margin: "10px", fontWeight: 600, my: 3 }}>
                    Flat Share Request
                </Typography>
            <FlatShareRequest flatDetails={flatDetails}/>
            </Box>
        </Container>
    );
};

export default FlatShareRequestPage;

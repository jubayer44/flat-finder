import { Box, Typography, Container } from '@mui/material';
import RequestDetails from './components/RequestDetails';

const RequestDetailsPage = async ({params}: {params: {flatId: string}}) => {
   
    return (
        <Container sx={{margin: "20px 0"}}>
            <Box sx={{ mt: 3 }}>
                <Typography variant="h6" component="h2" sx={{ textAlign: "center", margin: "10px", fontWeight: 600, my: 3 }}>
                     Requests Details
                </Typography>
            <RequestDetails flatId={params?.flatId}/>
            </Box>
        </Container>
    );
};

export default RequestDetailsPage;

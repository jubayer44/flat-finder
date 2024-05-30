import { Box, Container, Typography, Button } from "@mui/material";
import HeroForm from "./HeroForm";

const HeroSection = async () => {


    return (
        <Container sx={{ textAlign: "center", my: 5 }}>
            <Box component="div" sx={{
                maxWidth: "300px",
                backgroundColor: "#ffe0f2",
                padding: "5px",
                borderRadius: "20px",
                margin: "0 auto"
            }}>
                <Typography sx={{
                    fontWeight: 600,
                    fontSize: 14
                }}>Trusted and loved by million users</Typography>
            </Box>
            <Typography variant="h3" component="h1" sx={{
                mt: 8,
                mb: 4,
                fontWeight: 600
            }}>Find Your Perfect Flat-mate Today!</Typography>
            <Typography sx={{
                color: "gray"
            }}>Share your room</Typography>
            <HeroForm />
            
        </Container>
    );
};

export default HeroSection;
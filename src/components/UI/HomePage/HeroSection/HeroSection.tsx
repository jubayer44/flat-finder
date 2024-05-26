import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import bannerImage from '@/assets/banner-image.png';
import Image from "next/image";

const HeroSection = () => {
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
            <Grid container my={2} spacing={2} justifyContent="center">
                <Grid item xs={12} sm={12} md={4}>
                    <TextField fullWidth label="Location" name="Search" placeholder="Search Location" size="small" type="text" />
                </Grid>

                <Grid item xs={12} sm={4} md={2}>
                    <TextField fullWidth label="Bedrooms" name="bedrooms" placeholder="0" size="small" type="number" />
                </Grid>
                <Grid item xs={6} sm={4} md={2}>
                    <TextField label="Min Price" name="minPrice" placeholder="0" size="small" type="number" />
                </Grid>
                <Grid item xs={6} sm={4} md={2}>
                    <TextField label="Max Price" name="maxPrice" placeholder="0" size="small" type="number" />
                </Grid>
                <Grid item xs={12} sm={12} md={2} sx={{ textAlign: "left" }}>
                    <Button fullWidth size="small">Search</Button>
                </Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{width: 800}}>
                    
                <Image src={bannerImage} alt="logo" height={500} width={800} layout="responsive"/>
                </Box>
            </Box>
            <Box sx={{ maxWidth: 400, margin: "0 auto" }}>
                <Button fullWidth size="small">Share Your Flat</Button>
            </Box>
        </Container>
    );
};

export default HeroSection;
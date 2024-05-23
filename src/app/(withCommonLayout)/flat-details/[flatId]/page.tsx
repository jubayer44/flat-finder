import { Container, Grid, Typography, Button, List, ListItem, ListItemIcon, ListItemText, Box, Stack } from '@mui/material';
import WifiIcon from '@mui/icons-material/Wifi';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedIcon from '@mui/icons-material/Bed';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageSwiper from '../component/ImageSwiper';

const FlatDetailsPage = () => {
    // Dummy data for demonstration
    const flatDetails = {
        photos: ['https://www.mynicehome.gov.sg/wp-content/uploads/2-Room-Flex-Flat-Design-Ideas-Cover.png', 'https://www.renotalk.com/forum/uploads/monthly_2017_02/58a0402909750_LivingRoom4.jpg.1a77827abb8acc62b7e3bb50479eba4c.jpg', 'https://www.mynicehome.gov.sg/wp-content/uploads/2-Room-Flex-Flat-Design-Ideas-Cover.png'],
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A numquam corporis hic maiores sunt magni consequatur ea voluptatibus, vero pariatur animi nisi non illum quas ipsa nobis quo voluptatem! Fuga. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A numquam corporis hic maiores sunt magni consequatur ea voluptatibus, vero pariatur animi nisi non illum quas ipsa nobis quo voluptatem! Fuga.",
        rentAmount: "$1000/month",
        bedrooms: 2,
        amenities: ["WiFi", "Laundry", "Parking"],
        location: "123 Main St, City, Country"
    };

    const amenityIcons: any = {
        WiFi: <WifiIcon />,
        Laundry: <LocalLaundryServiceIcon />,
        Parking: <LocalParkingIcon />
    };

    return (
        <Container maxWidth="lg">
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" fontWeight={600} gutterBottom>
                        Flat Details
                    </Typography>
                    <Box>
                        <ImageSwiper flatDetails={flatDetails} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack direction="row" spacing={2} justifyContent="space-between">
                        <Box>
                            <Typography component="p" fontWeight={600} gutterBottom>
                                <AttachMoneyIcon style={{ verticalAlign: 'middle', marginRight: 8 }} />
                                Rent Amount
                            </Typography>
                            <Typography variant="body1" gutterBottom style={{ color: '#555', paddingLeft: "20px" }}>
                                {flatDetails.rentAmount}
                            </Typography>
                        </Box>

                        <Box>
                            <Typography component="p" fontWeight={600} gutterBottom>
                                <BedIcon style={{ verticalAlign: 'middle', marginRight: 8 }} />
                                Bedrooms
                            </Typography>
                            <Typography variant="body1" gutterBottom style={{ color: '#555', paddingLeft: "20px" }}>
                                {flatDetails.bedrooms}
                            </Typography>
                        </Box>
                    </Stack>
                    <Stack direction="row" spacing={2} justifyContent="space-between">
                    <Box>
                        <Typography component="p" fontWeight={600} gutterBottom>
                            <LocationOnIcon style={{ verticalAlign: 'middle', marginRight: 8 }} />
                            Location
                        </Typography>
                        <Typography variant="body1" gutterBottom style={{ color: '#555', paddingLeft: "20px" }}>
                            {flatDetails.location}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography component="p" fontWeight={600} gutterBottom>
                            <BedIcon style={{ verticalAlign: 'middle', marginRight: 8 }} />
                            Amenities
                        </Typography>
                        <List>
                            {flatDetails.amenities.map((amenity, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        {amenityIcons[amenity] || <BedIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={amenity} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    </Stack>
                    <Typography component="p" fontWeight={600} gutterBottom>
                        <DescriptionIcon style={{ verticalAlign: 'middle', marginRight: 8 }} />
                        Description
                    </Typography>
                    <Typography variant="body1" gutterBottom style={{ color: '#555', paddingLeft: "20px" }}>
                        {flatDetails.description}
                    </Typography>
                    <Button fullWidth variant="contained" color="primary" href="/flat-share-request" style={{ marginTop: '20px' }}>
                        Flat Share Request
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default FlatDetailsPage;

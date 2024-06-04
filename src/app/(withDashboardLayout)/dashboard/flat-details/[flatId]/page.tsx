import FlatShareButton from '@/app/(withCommonLayout)/flat-details/component/FlatShareButton';
import ImageSwiper from '@/app/(withCommonLayout)/flat-details/component/ImageSwiper';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BedIcon from '@mui/icons-material/Bed';
import DescriptionIcon from '@mui/icons-material/Description';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Container, Grid, List, ListItem, Stack, Typography } from '@mui/material';
import { getNewAccessToken } from "@/services/authServices";

const FlatDetailsPrivatePage = async ({params}: {params: {flatId: string}}) => {
    
const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/flats/${params?.flatId}`);
const flats = await res.json();

const flatDetails = flats?.data;

const tok = await getNewAccessToken()
console.log(tok)

    return (
        <Container maxWidth="lg">
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" fontWeight={600} gutterBottom>
                        Flat Details
                    </Typography>
                    <Box>
                        <ImageSwiper photos={flatDetails?.photos} />
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
                                {flatDetails?.amenities?.map((amenity: string, index: number) => (
                                    <ListItem key={index}>
                                        <Typography variant="body1" component="p">{amenity}</Typography>
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
                    <FlatShareButton id={flatDetails.id}/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default FlatDetailsPrivatePage;

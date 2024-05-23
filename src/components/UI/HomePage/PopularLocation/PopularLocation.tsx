import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';

const PopularLocation = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 4,
        bgcolor: 'background.paper',
        boxShadow: 3,
        borderRadius: 2,
        margin: 'auto',
        mt: 5
      }}
    >
      <Box sx={{ flex: 1, pr: { md: 3 }, mb: { xs: 3, md: 0 } }}>
        <Typography variant='h4' component="h2" sx={{ fontWeight: 600}} gutterBottom>
          Explore Flat Shares in London
        </Typography>
        <Typography variant="body1" paragraph>
          Discover amazing flat shares in the heart of London. Whether you&apos;re looking for a cozy room in a shared apartment or a spacious flat with great amenities, we have something for everyone. Start your search today and find your perfect home in one of the world&apos;s most vibrant cities.
        </Typography>
        <Button variant="contained" color="primary" href="/search?location=london">
          View Listings
        </Button>
      </Box>
      <Box sx={{ flex: 1, width: '100%', height: 'auto' }}>
        <Image
          src="https://t4.ftcdn.net/jpg/02/57/75/51/360_F_257755130_JgTlcqTFxabsIKgIYLAhOFEFYmNgwyJ6.jpg"
          alt="London"
          width={500}
          height={300}
          layout="responsive"
          style={{ borderRadius: 8 }}
        />
      </Box>
    </Box>
  );
};

export default PopularLocation;
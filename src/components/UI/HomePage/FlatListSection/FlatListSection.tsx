// pages/index.js
import { Container, Grid, Typography, Button, Box } from '@mui/material';
import FlatCard from './FlatCard';
import { TFlat } from '@/types/flat';
import Link from 'next/link';

const FlatListSection = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/flats?limit=6`, {
    next: {
      revalidate: 10,
    },
  });

  const flats = await res.json();

  return (
    <Container>
        <Typography variant='h4' component="h2" sx={{my: 2, textAlign: "center", fontWeight: 600}}>Flat For Sharing</Typography>
      <Grid container spacing={4}>
        {flats?.data?.map((flat: TFlat) => (
          <Grid item key={flat?.id} xs={12} sm={6} md={4}>
            <FlatCard flat={flat} />
          </Grid>
        ))}
      </Grid>
      <Box component="div" sx={{display: "flex", justifyContent: "center"}}>
      <Button component={Link} href="/all-flats" variant="outlined" size="small" sx={{color: "black"}}>See More</Button>
      </Box>
    </Container>
  );
};

export default FlatListSection;

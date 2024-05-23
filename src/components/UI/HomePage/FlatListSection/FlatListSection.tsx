// pages/index.js
import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import FlatCard from './FlatCard';

const flats = [
  {
    location: 'New York, NY',
    photo: 'https://is1-2.housingcdn.com/01c16c28/a29e141f9745899f0349e6a8e63ee2e3/v0/medium/2_bhk_apartment-for-sale-sangamvadi-Pune-hall.jpg',
    description: 'A cozy apartment in the heart of the city.',
    price: 1200,
    bedrooms: 2,
    detailsLink: '/flats/1',
  },
  {
    location: 'San Francisco, CA',
    photo: 'https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=0&k=20&c=iW4NBiMPKEuvaA7h8wIsPHikhS64eR-5EVPfjQ9GPOA=',
    description: 'A beautiful flat with a view of the bay.',
    price: 1500,
    bedrooms: 3,
    detailsLink: '/flats/2',
  },
  {
    location: 'New York, NY',
    photo: 'https://is1-2.housingcdn.com/01c16c28/a29e141f9745899f0349e6a8e63ee2e3/v0/medium/2_bhk_apartment-for-sale-sangamvadi-Pune-hall.jpg',
    description: 'A cozy apartment in the heart of the city.',
    price: 1200,
    bedrooms: 2,
    detailsLink: '/flats/3',
  },
  {
    location: 'New York, NY',
    photo: 'https://is1-2.housingcdn.com/01c16c28/a29e141f9745899f0349e6a8e63ee2e3/v0/medium/2_bhk_apartment-for-sale-sangamvadi-Pune-hall.jpg',
    description: 'A cozy apartment in the heart of the city.',
    price: 1200,
    bedrooms: 2,
    detailsLink: '/flats/1',
  },
  {
    location: 'San Francisco, CA',
    photo: 'https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=0&k=20&c=iW4NBiMPKEuvaA7h8wIsPHikhS64eR-5EVPfjQ9GPOA=',
    description: 'A beautiful flat with a view of the bay.',
    price: 1500,
    bedrooms: 3,
    detailsLink: '/flats/2',
  },
  {
    location: 'New York, NY',
    photo: 'https://is1-2.housingcdn.com/01c16c28/a29e141f9745899f0349e6a8e63ee2e3/v0/medium/2_bhk_apartment-for-sale-sangamvadi-Pune-hall.jpg',
    description: 'A cozy apartment in the heart of the city.',
    price: 1200,
    bedrooms: 2,
    detailsLink: '/flats/3',
  },
  // Add more flats as needed
];

const FlatListSection = () => {
  return (
    <Container>
        <Typography variant='h5' component="h1" sx={{my: 2, textAlign: "center", fontWeight: 600}}>Flat For Sharing</Typography>
      <Grid container spacing={4}>
        {flats.map((flat, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <FlatCard flat={flat} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FlatListSection;

"use client"
import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Box } from '@mui/material';

const FlatCard = ({ flat }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Card sx={{ maxWidth: 340, margin: '1rem', borderRadius: 4 }}>
      <CardActionArea
        component="a"
        href={flat?.detailsLink}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardMedia
          component="img"
          image={flat?.photo}
          alt={flat?.location}
          sx={{
            height: 200,
            transition: 'transform 0.3s ease-in-out',
            ...(isHovered && { transform: 'scale(1.1)' }),
          }}
        />
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="h6" gutterBottom>
              {flat?.location}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {flat?.description}
            </Typography>
          </Box>
          <Typography variant="body1" color="primary.main">
            ${flat?.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          {flat?.bedrooms} Bedrooms
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FlatCard;
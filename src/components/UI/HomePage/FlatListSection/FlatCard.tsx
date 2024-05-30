"use client"
import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Box } from '@mui/material';
import Link from 'next/link';
import { TFlat } from '@/types/flat';

const FlatCard = ({ flat }: {flat: TFlat}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Card sx={{ maxWidth: 340, margin: '1rem', borderRadius: 4 }}>
      <CardActionArea
        component={Link}
        href={`/flat-details/${flat?.id}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardMedia
          component="img"
          image={flat?.photos[0]}
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
              {flat?.description.length > 100 ? flat?.description?.slice(0, 100) + "..." : flat?.description}
            </Typography>
          </Box>
          
        </CardContent>
      </CardActionArea>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          {flat?.bedrooms} Bedrooms
        </Typography>
        <Typography variant="body1" color="primary.main">
            ${flat?.rentAmount}
          </Typography>
      </CardContent>
    </Card>
  );
};

export default FlatCard;

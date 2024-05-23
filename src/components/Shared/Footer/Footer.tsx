// components/Footer.tsx
import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { Email, Phone, Facebook, Twitter, Instagram } from '@mui/icons-material';
import Image from 'next/image';
import logo from '@/assetes/logo.png';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'common.white',
        padding: 4,
        mt: 8,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 4,
          }}
        >
          <Image
            src={logo}
            alt="Logo"
            width={100}
            height={50}
          />
          <Box>
            <Typography sx={{color: "white"}}>
                info@flatfinder.com
            </Typography>
            <Typography sx={{color: "white"}}>
                +8801849349043
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton href="https://facebook.com" target="_blank" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" color="inherit">
                <Twitter />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" color="inherit">
                <Instagram />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box sx={{ borderTop: 1, borderColor: 'grey.800', pt: 3 }}>
          <Typography variant="body2" component="div">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1, gap: 2 }}>
            <Link href="/terms" color="inherit">
              Terms of Use
            </Link>
            <Link href="/terms" >
              Privacy Policy
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

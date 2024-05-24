import { Container, Grid, Typography, Card, Box, CardMedia, List, ListItem, ListItemIcon, ListItemText, Link } from '@mui/material';
import { Email, Phone, Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import Image from 'next/image';

const AboutUsPage = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={4}>
                <Grid item xs={12} justifyContent="center">
                    <Typography variant="h4" component="h1" textAlign="center" fontWeight={600} gutterBottom>
                        About Us
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardMedia>
                            <Image src="https://www.blogtyrant.com/wp-content/uploads/2019/12/best-contact-us-pages-2.png" alt="About Us Image" width={600} height={400} layout="responsive" />
                        </CardMedia>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} alignContent="center">
                    <Box>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                        Mission Statement
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Our mission is to provide a comprehensive platform for individuals seeking shared living spaces, making it easier to find, connect, and manage flat shares.
                    </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                        Team Information
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        We are a passionate team dedicated to making the process of finding and sharing flats as smooth and enjoyable as possible. Our team consists of experienced professionals from the real estate, technology, and customer service industries.
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                        Contact Information
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <Email />
                            </ListItemIcon>
                            <ListItemText primary="Email: contact@flatshare.com" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Phone />
                            </ListItemIcon>
                            <ListItemText primary="Phone: (123) 456-7890" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Facebook />
                            </ListItemIcon>
                            <ListItemText>
                                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    Facebook
                                </Link>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Twitter />
                            </ListItemIcon>
                            <ListItemText>
                                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    Twitter
                                </Link>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <LinkedIn />
                            </ListItemIcon>
                            <ListItemText>
                                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </Link>
                            </ListItemText>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutUsPage;
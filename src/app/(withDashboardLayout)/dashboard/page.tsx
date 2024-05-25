import React from 'react';
import { Container, Grid, Paper, Stack, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PostAddIcon from '@mui/icons-material/PostAdd';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

const DashboardPage = () => {
    // Dummy data for demonstration
    const stats = [
        { label: 'My Posts', value: 10, icon: <PostAddIcon sx={{color: "blue"}} />},
        { label: 'My Flat Requests', value: 5, icon: <RequestQuoteIcon sx={{color: "blue"}}/>},
        { label: 'Requests on My Flat', value: 3, icon: <AssignmentTurnedInIcon sx={{color: "blue"}}/> },
        { label: 'Other Statistic', value: 7, icon: <DashboardIcon sx={{color: "blue"}}/>}
    ];

    const recentPosts = [
        'Flat Share Post 1',
        'Flat Share Post 2',
        'Flat Share Post 3',
        'Flat Share Post 4',
        'Flat Share Post 5'
    ];

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Grid container spacing={3}>
                {stats.map((stat, index) => (
                    <Grid item xs={12} md={3} key={index}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: 'background.paper', hight: "150px" }}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            {stat.icon}
                            <Typography variant="h5" sx={{ fontWeight: 'bold', color: "primary" }}>{stat.value}</Typography>
                        </Stack>
                            
                            
                            <Typography color={"primary"} sx={{ fontWeight: 'bold' }}>{stat.label}</Typography>
                            
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            <Grid container spacing={3} sx={{ mt: 4 }}>
                {recentPosts.map((post, index) => (
                    <Grid item xs={12} key={index}>
                        <Paper sx={{ p: 2 }}>
                            <Typography variant="body1">{post}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default DashboardPage;

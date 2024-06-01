"use client";
import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import PostAddIcon from '@mui/icons-material/PostAdd';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { getUserInfo } from '@/services/authServices';
import { useGetMetaDataQuery } from '@/redux/api/userApi';
import Image from 'next/image';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const DashboardPage = () => {
    const [role, setRole] = useState("");
    const {data, isLoading} = useGetMetaDataQuery({});

    useEffect(()=> {
        const user = getUserInfo();
        setRole(user?.role)

    }, [])

    

    const posts = (role === "admin" ? "All posts" : "My posts") || 0;
    const flatRequests = (role === "admin" ? "All flat requests" : "My flat requests") || 0;
    const others = (role === "admin" ? "All Users" : "Requests on my flat") || 0;
    
    const postValue = data?.data[0]?.flatTotal;
    const flatRequestsValue = data?.data[1]?.flatRequestTotal;
    const othersValue = (role === "admin" ? data?.data[2]?.allUsers  : data?.data[2]?.requestOnMyFlatTotal)

    const stats = [
        { label: posts, value: postValue, icon: <PostAddIcon sx={{color: "skyblue"}} />},
        { label: flatRequests, value: flatRequestsValue, icon: <RequestQuoteIcon sx={{color: "skyblue"}}/>},
        { label: others, value: othersValue, icon: <AssignmentTurnedInIcon sx={{color: "skyblue"}}/> },
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
            <Grid container spacing={3} justifyContent="center">
                {stats.map((stat, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: 'background.paper', hight: "150px" }}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            {stat?.icon}
                            <Typography variant="h5" sx={{ fontWeight: 'bold', color: "primary" }}>{stat?.value}</Typography>
                        </Stack>
                        <Typography sx={{ fontWeight: 'bold', color: "primary" }}>{stat?.label}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h6" component="h3" my={1} >Recent flat share requests</Typography>
            <Grid container spacing={3} sx={{ mt: 4 }} justifyContent="center">
                {recentPosts.map((post, index) => (
                    <Grid item xs={12} md={6}  key={index} component={Link} href="/flat-details">
                       <Stack direction={{xs: "column", sm: "column", md: "row"}} alignItems="center" spacing={2} sx={{boxShadow: "5px 6px 20px darkgray", borderRadius: "10px", p: 1}}>
                            <Box sx={{borderRadius: "10px", overflow: "hidden"}}>
                                <Image src="https://img.freepik.com/premium-photo/mastre-bedroom-with-terrace-overlooking-sea_244125-1038.jpg?size=626&ext=jpg&ga=GA1.1.1579008441.1696422438&semt=sph" alt="flat-image" width={150} height={100} style={{borderRadius: "0px 55px 0px 0px"}}/>
                            </Box>
                            <Box>
                                <Box sx={{display: "flex", alignItems: "center", gap: "5px"}}>
                                    <LocationOnOutlinedIcon sx={{color: "skyblue", fontSize: "16px", margin: "0 5px"}}/>
                                    <Typography color="gray" fontSize="14px">Badda Dhaka</Typography>
                                </Box>
                                <Box sx={{display: "flex", alignItems: "center", gap: "5px"}}>
                                    <BedOutlinedIcon sx={{color: "skyblue", fontSize: "16px", margin: "0 5px"}}/>
                                    <Typography color="gray" fontSize="14px">4</Typography>
                                </Box>
                                <Box sx={{display: "flex", alignItems: "center", gap: "5px"}}>
                                    <MonetizationOnOutlinedIcon sx={{color: "skyblue", fontSize: "15px", margin: "0 5px"}}/>
                                    <Typography color="gray" fontSize="14px">Rent Amount: $8000</Typography>
                                </Box>
                            </Box>
                       </Stack>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default DashboardPage;

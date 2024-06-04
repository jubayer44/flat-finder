"use client";
import { Container, Typography } from "@mui/material";
import { useGetMyFlatsQuery } from "@/redux/api/flatApi";
import ViewAllFlats from "@/components/Dashboard/CommonPages/ViewAllFlats/ViewAllFlats";


const MyFlatPostPage = () => {
   const {data, isLoading} = useGetMyFlatsQuery({});

    const flats = data?.data;
    return (
        <Container>
             <Typography variant="h6" component="h2" sx={{ textAlign: "center", margin: "10px", fontWeight: 600, my: 3 }}>My All Flats</Typography>
            <ViewAllFlats flats={flats} isLoading={isLoading}/>
        </Container>
    )
};

export default MyFlatPostPage;
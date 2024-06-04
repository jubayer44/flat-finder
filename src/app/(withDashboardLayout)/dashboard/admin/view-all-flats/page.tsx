"use client";
import { Container, Typography } from "@mui/material";
import { useGetAllFlatsQuery } from "@/redux/api/flatApi";
import ViewAllFlats from "@/components/Dashboard/CommonPages/ViewAllFlats/ViewAllFlats";

const ViewAllFlatsPage = () => {
    const {data, isLoading} = useGetAllFlatsQuery({});

    const flats = data?.data;
    return (
        <Container>
             <Typography variant="h6" component="h2" sx={{ textAlign: "center", margin: "10px", fontWeight: 600, my: 3 }}>View All Flats</Typography>
            <ViewAllFlats flats={flats} isLoading={isLoading}/>
        </Container>
    )
};

export default ViewAllFlatsPage;
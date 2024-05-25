"use client";
import { Box, Container, IconButton, Typography } from '@mui/material';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from 'react';

const MyRequestsFlat = () => {
    // const [schedules, setSchedules] = useState([]);

    const schedules = [
        { id: 1, location: 'New York', bedroom: 2, rentAmount: 2500 , status: "Pending"},
        { id: 2, location: 'Los Angeles', bedroom: 3, rentAmount: 3000 , status: "Approved"},
        { id: 3, location: 'Chicago', bedroom: 1, rentAmount: 1500 , status: "Pending"},
        { id: 4, location: 'Houston', bedroom: 2, rentAmount: 2000 , status: "Reject"},
        { id: 5, location: 'Phoenix', bedroom: 4, rentAmount: 3500, status: "Pending" }
    ];

const isLoading = null;

    const columns: GridColDef[] = [
        { field: 'location', headerName: 'Location', flex: 1 },
        { field: 'bedroom', headerName: 'Bedroom', flex: 1 },
        { field: 'rentAmount', headerName: 'Rent Amount', flex: 1 },
        { field: 'status', headerName: 'Status', flex: 1 },
        ];
    return (
        <Container>
            <Typography variant="h6" component="h2" sx={{ textAlign: "center", margin: "0 10px", fontWeight: 600, my: 3 }}>My Requests Flats</Typography>
            <Box sx={{mt: 5, width: {xs: "280px", sm: "400px", md: "100%"}, overflowX: {xs: "scroll", md: "none"}}}>
            {
                !isLoading ? (
                <Box my={2} sx={{minWidth: "600px"}}>
                    <DataGrid
                        rows={schedules ?? []}
                        columns={columns}
                        hideFooter={true}
                    />
                </Box>) : (
                <Box>Loading...</Box>
            )
            }
            </Box>
        </Container>
    );
};

export default MyRequestsFlat;
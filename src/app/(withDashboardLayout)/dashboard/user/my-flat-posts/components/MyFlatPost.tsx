"use client";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Container, IconButton, Typography } from '@mui/material';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from 'react';

const MyFlatPost = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    // const [schedules, setSchedules] = useState([]);

    const schedules = [
        { id: 1, location: 'New York', bedroom: 2, rentAmount: 2500 },
        { id: 2, location: 'Los Angeles', bedroom: 3, rentAmount: 3000 },
        { id: 3, location: 'Chicago', bedroom: 1, rentAmount: 1500 },
        { id: 4, location: 'Houston', bedroom: 2, rentAmount: 2000 },
        { id: 5, location: 'Phoenix', bedroom: 4, rentAmount: 3500 }
    ];

const isLoading = null;

    const columns: GridColDef[] = [
        { field: 'location', headerName: 'Location', flex: 1 },
        { field: 'bedroom', headerName: 'Bedroom', flex: 1 },
        { field: 'rentAmount', headerName: 'Rent Amount', flex: 1 },
        {
            field: "action",
            headerName: "Action",
            flex: 1,
            headerAlign: "center",
            align: "center",
            renderCell: ({ row }) => {
              return (
                <IconButton aria-label="delete">
                  <DeleteIcon sx={{ color: "red" }} />
                </IconButton>
              );
            },
          },
        ];
    return (
        <Container>
            <Typography variant="h6" component="h2" sx={{ textAlign: "center", margin: "0 10px", fontWeight: 600, my: 3 }}>My Flat Posts</Typography>
            <Box sx={{mt: 5, width: {xs: "280px", sm: "400px", md: "100%"}, overflowX: {xs: "scroll", md: "none"}}}>
            {
                !isLoading ? (
                <Box my={2}  sx={{minWidth: "600px"}}>
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

export default MyFlatPost;
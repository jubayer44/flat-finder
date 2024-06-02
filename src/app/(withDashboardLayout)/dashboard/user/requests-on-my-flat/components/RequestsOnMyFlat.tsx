"use client";
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Container, IconButton, Typography } from '@mui/material';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {useGetRequestsOnMyFlatQuery} from "@/redux/api/flatShareRequestApi";
import {getUserInfo} from '@/services/authServices';
import Link from 'next/link';

const RequestsOnMyFlat = () => {
    const {data, isLoading} = useGetRequestsOnMyFlatQuery({});

    const user = getUserInfo();
    const flats = data?.data;


    const columns: GridColDef[] = [
        { field: 'location', headerName: 'Location', flex: 1 },
        { field: 'bedrooms', headerName: 'Bedrooms', flex: 1 },
        { field: 'rentAmount', headerName: 'Rent Amount', flex: 1 },
        {
            field: "action",
            headerName: "Action",
            flex: 1,
            headerAlign: "center",
            align: "center",
            renderCell: ({ row }) => {
              return (
                <Typography component={Link} href={`/dashboard/${user?.role}/requests-on-my-flat/${row?.id}`} sx={{fontSize: "16px", color: "blue", textAlign: "center"}}>Details</Typography>
              );
            },
          },
        ];
    return (
        <Container>
            <Typography variant="h6" component="h2" sx={{ textAlign: "center", margin: "0 10px", fontWeight: 600, my: 3 }}>Requests On My Flats</Typography>
            {!isLoading && flats?.length < 1 ? <Typography variant='body1' sx={{textAlign: "center", fontWeight: "bold"}}>No result found</Typography> : <Box>
                {
                    !isLoading || !user?.role ? (
                        <Box sx={{ mt: 5, width: { xs: "280px", sm: "400px", md: "100%" }, overflowX: { xs: "scroll", md: "none" } }}>
                            <Box my={2} sx={{ minWidth: "600px" }}>
                                <DataGrid
                                    rows={flats ?? []}
                                    columns={columns}
                                    hideFooter={true}
                                />
                            </Box>
                        </Box>) : (
                        <Typography variant="body1" textAlign="center">Loading...</Typography>
                    )
                }
            </Box>}
        </Container>
    );
};

export default RequestsOnMyFlat;
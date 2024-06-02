"use client";
import { Box, Container, IconButton, Typography, Button } from '@mui/material';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { toast } from 'sonner';
import { useGetMyRequestedFlatQuery, useDeleteAFlatShareRequestMutation } from '@/redux/api/flatShareRequestApi';
import Link from 'next/link';


const MyRequestsFlat = () => {
    const { data, isLoading } = useGetMyRequestedFlatQuery({});
    const [deleteAFlatShareRequest, { isLoading: deleting }] = useDeleteAFlatShareRequestMutation();

    const requestedFlats = data?.data;
    
    const handleDelete = async (id: string) => {
        try {
            const res = await deleteAFlatShareRequest(id);
            if (res?.data?.success) {
                toast.success(res?.data?.message);
            } else {
                toast.error("Something went wrong!")
            }
        }
        catch (err: any) {
            console.log(err);
            toast.error(err?.message);
        }
    }


    const columns: GridColDef[] = [
        {
            field: 'location',
            headerName: 'Location',
            flex: 1,
            renderCell: ({ row }) => {
                return (
                    <Box component={Link} href={`/dashboard/flat-details/${row.flatId}`} sx={{ color: "blue" }}>
                        {row?.flat?.location}
                    </Box>
                );
            },
        },
        {
            field: 'bedrooms',
            headerName: 'Bedrooms',
            flex: 1,
            renderCell: ({ row }) => {
                return (
                    <Box>
                        {row?.flat?.bedrooms}
                    </Box>
                );
            },
        },
        {
            field: 'rentAmount',
            headerName: 'Rent Amount',
            flex: 1,
            renderCell: ({ row }) => {
                return (
                    <Box>
                        {row?.flat?.rentAmount}
                    </Box>
                );
            },
        },
        { field: 'status', headerName: 'Status', flex: 1 },
        {
            field: "action",
            headerName: "Action",
            headerAlign: "center",
            align: "center",
            renderCell: ({ row }) => {
                return (
                    <>
                        <IconButton aria-label="delete" onClick={() => handleDelete(row.id)}>
                            <HighlightOffIcon sx={{ color: "red" }} />
                        </IconButton>
                    </>
                );
            },
        },
    ];
    return (
        <Container>
            <Typography variant="h6" component="h2" sx={{ textAlign: "center", margin: "0 10px", fontWeight: 600, my: 3 }}>My Requests Flats</Typography>
            {!isLoading && requestedFlats?.length < 1 ? <Typography variant='body1' sx={{textAlign: "center", fontWeight: "bold"}}>No result found</Typography> : <Box>
                {
                    !isLoading ? (
                        <Box sx={{ mt: 5, width: { xs: "280px", sm: "400px", md: "100%" }, overflowX: { xs: "scroll", md: "none" } }}>
                            <Box my={2} sx={{ minWidth: "600px" }}>
                                <DataGrid
                                    rows={requestedFlats ?? []}
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

export default MyRequestsFlat;
"use client";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Container, IconButton, Typography } from '@mui/material';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from 'react';
import {useGetMyFlatsQuery} from "@/redux/api/flatApi";
import ConfirmDeleteModal from './ConfirmDeleteModal';
import Link from 'next/link';


const MyFlatPost = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [flatId, setFlatId] = useState<string>("");
    const { data, isLoading } = useGetMyFlatsQuery({});
    const flats = data?.data;

    const handleDelete = async (id: string) => {
        setFlatId(id);
        setOpen(true);
    };

    const columns: GridColDef[] = [
        { 
            field: 'location', 
            headerName: 'Location', 
            flex: 1,
            renderCell: ({ row }) => {
                return (
                  <Typography component={Link} href={`/dashboard/flat-details/${row?.id}`} sx={{color: "blue"}}>
                      {row?.location}
                  </Typography>
                );
              },
        },
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
                <>
                    <IconButton aria-label="delete" onClick={()=> handleDelete(row.id)}>
                        <DeleteIcon sx={{ color: "red" }} />
                    </IconButton>
                </>
              );
            },
          },
        ];
    return (
        <Container>
            <ConfirmDeleteModal open={open} setOpen={setOpen} id={flatId}/>
            <Typography variant="h6" component="h2" sx={{ textAlign: "center", margin: "0 10px", fontWeight: 600, my: 3 }}>My Flat Posts</Typography>
            {!isLoading && flats?.length < 1 ? <Typography variant='body1' sx={{textAlign: "center", fontWeight: "bold"}}>No result found</Typography> : <Box>
                {
                    !isLoading ? (
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

export default MyFlatPost;